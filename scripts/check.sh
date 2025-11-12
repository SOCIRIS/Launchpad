#!/bin/bash

# SOCIRIS Website Diagnostic Tool
# Checks CSS, JS, and file structure issues

echo "🔍 SOCIRIS Website Diagnostic Tool"
echo "===================================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

ERRORS=0
WARNINGS=0

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo -e "${RED}❌ ERROR: index.html not found${NC}"
    echo "Please run this script from: ~/SOCIRIS/Launchpad"
    exit 1
fi

echo -e "${GREEN}✅ Found index.html - in correct directory${NC}"
echo ""

# 1. Check CSS file exists and size
echo -e "${BLUE}[1/10] Checking CSS file...${NC}"
if [ -f "css/style.css" ]; then
    SIZE=$(du -h css/style.css | cut -f1)
    echo -e "${GREEN}✅ css/style.css exists (Size: $SIZE)${NC}"
    
    if [ ! -s "css/style.css" ]; then
        echo -e "${RED}❌ CRITICAL: css/style.css is EMPTY (0 bytes)${NC}"
        ERRORS=$((ERRORS + 1))
    elif [ $(stat -f%z css/style.css 2>/dev/null || stat -c%s css/style.css) -lt 1000 ]; then
        echo -e "${YELLOW}⚠️  WARNING: CSS file is very small (< 1KB)${NC}"
        WARNINGS=$((WARNINGS + 1))
    fi
else
    echo -e "${RED}❌ css/style.css NOT FOUND${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 2. Check CSS file content
echo -e "${BLUE}[2/10] Checking CSS file content...${NC}"
if [ -f "css/style.css" ]; then
    # Check for CSS variables
    if grep -q ":root" css/style.css; then
        echo -e "${GREEN}✅ CSS contains :root variables${NC}"
    else
        echo -e "${RED}❌ CSS missing :root variables${NC}"
        ERRORS=$((ERRORS + 1))
    fi
    
    # Check for key classes
    if grep -q "\.navbar" css/style.css; then
        echo -e "${GREEN}✅ CSS contains navbar styles${NC}"
    else
        echo -e "${RED}❌ CSS missing navbar styles${NC}"
        ERRORS=$((ERRORS + 1))
    fi
    
    # Check for animations
    if grep -q "@keyframes\|animation:" css/style.css; then
        echo -e "${GREEN}✅ CSS contains animations${NC}"
    else
        echo -e "${YELLOW}⚠️  WARNING: CSS missing animations${NC}"
        WARNINGS=$((WARNINGS + 1))
    fi
    
    # Show first 5 lines
    echo ""
    echo "First 5 lines of CSS:"
    head -5 css/style.css
fi
echo ""

# 3. Check JavaScript file
echo -e "${BLUE}[3/10] Checking JavaScript file...${NC}"
if [ -f "js/main.js" ]; then
    SIZE=$(du -h js/main.js | cut -f1)
    echo -e "${GREEN}✅ js/main.js exists (Size: $SIZE)${NC}"
    
    if [ ! -s "js/main.js" ]; then
        echo -e "${RED}❌ js/main.js is EMPTY${NC}"
        ERRORS=$((ERRORS + 1))
    fi
else
    echo -e "${RED}❌ js/main.js NOT FOUND${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 4. Check HTML CSS links
echo -e "${BLUE}[4/10] Checking HTML CSS links...${NC}"
for file in *.html; do
    if [ -f "$file" ]; then
        CSS_LINK=$(grep -o 'href="[^"]*style\.css[^"]*"' "$file" | head -1)
        if [ -n "$CSS_LINK" ]; then
            echo -e "${GREEN}✅${NC} $file: $CSS_LINK"
        else
            echo -e "${RED}❌${NC} $file: No CSS link found"
            ERRORS=$((ERRORS + 1))
        fi
    fi
done
echo ""

# 5. Check HTML JS links
echo -e "${BLUE}[5/10] Checking HTML JavaScript links...${NC}"
for file in *.html; do
    if [ -f "$file" ]; then
        JS_LINK=$(grep -o 'src="[^"]*main\.js[^"]*"' "$file" | head -1)
        if [ -n "$JS_LINK" ]; then
            echo -e "${GREEN}✅${NC} $file: $JS_LINK"
        else
            echo -e "${YELLOW}⚠️${NC}  $file: No JS link found"
            WARNINGS=$((WARNINGS + 1))
        fi
    fi
done
echo ""

# 6. Check file permissions
echo -e "${BLUE}[6/10] Checking file permissions...${NC}"
if [ -f "css/style.css" ]; then
    PERMS=$(ls -l css/style.css | awk '{print $1}')
    echo "css/style.css permissions: $PERMS"
    if [[ $PERMS == *"r"* ]]; then
        echo -e "${GREEN}✅ CSS file is readable${NC}"
    else
        echo -e "${RED}❌ CSS file is NOT readable${NC}"
        ERRORS=$((ERRORS + 1))
    fi
fi
echo ""

# 7. Check for common CSS syntax errors
echo -e "${BLUE}[7/10] Checking for CSS syntax errors...${NC}"
if [ -f "css/style.css" ]; then
    # Check for unclosed braces
    OPEN=$(grep -o "{" css/style.css | wc -l)
    CLOSE=$(grep -o "}" css/style.css | wc -l)
    
    if [ $OPEN -eq $CLOSE ]; then
        echo -e "${GREEN}✅ Balanced braces: $OPEN opening, $CLOSE closing${NC}"
    else
        echo -e "${RED}❌ UNBALANCED BRACES: $OPEN opening, $CLOSE closing${NC}"
        ERRORS=$((ERRORS + 1))
    fi
fi
echo ""

# 8. Check directory structure
echo -e "${BLUE}[8/10] Checking directory structure...${NC}"
for dir in css js images team; do
    if [ -d "$dir" ]; then
        echo -e "${GREEN}✅${NC} $dir/ directory exists"
    else
        echo -e "${YELLOW}⚠️${NC}  $dir/ directory missing"
        WARNINGS=$((WARNINGS + 1))
    fi
done
echo ""

# 9. Check for BOM or encoding issues
echo -e "${BLUE}[9/10] Checking file encoding...${NC}"
if [ -f "css/style.css" ]; then
    FILE_TYPE=$(file css/style.css)
    echo "CSS file type: $FILE_TYPE"
    
    if [[ $FILE_TYPE == *"UTF-8"* ]]; then
        echo -e "${GREEN}✅ CSS file is UTF-8 encoded${NC}"
    else
        echo -e "${YELLOW}⚠️  WARNING: CSS file may have encoding issues${NC}"
        WARNINGS=$((WARNINGS + 1))
    fi
    
    # Check for BOM
    if head -c 3 css/style.css | xxd | grep -q "efbbbf"; then
        echo -e "${YELLOW}⚠️  WARNING: CSS file has UTF-8 BOM${NC}"
        WARNINGS=$((WARNINGS + 1))
    fi
fi
echo ""

# 10. Test local server
echo -e "${BLUE}[10/10] Testing if Python is available for local server...${NC}"
if command -v python3 &> /dev/null; then
    echo -e "${GREEN}✅ python3 is available${NC}"
    echo "You can test locally with: python3 -m http.server 8000"
elif command -v python &> /dev/null; then
    echo -e "${GREEN}✅ python is available${NC}"
    echo "You can test locally with: python -m SimpleHTTPServer 8000"
else
    echo -e "${YELLOW}⚠️  Python not found - install it to test locally${NC}"
fi
echo ""

# Summary
echo "===================================="
echo -e "${BLUE}DIAGNOSTIC SUMMARY${NC}"
echo "===================================="
echo ""

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✅ All checks passed!${NC}"
    echo ""
    echo "If you're still seeing issues:"
    echo "1. Clear browser cache (Ctrl+Shift+Delete)"
    echo "2. Hard refresh (Ctrl+Shift+R)"
    echo "3. Check browser console (F12) for errors"
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}⚠️  $WARNINGS warning(s) found${NC}"
    echo "Your site should work, but there may be minor issues"
else
    echo -e "${RED}❌ $ERRORS critical error(s) found${NC}"
    echo -e "${YELLOW}⚠️  $WARNINGS warning(s) found${NC}"
    echo ""
    echo "COMMON FIXES:"
    echo ""
    
    if [ ! -f "css/style.css" ] || [ ! -s "css/style.css" ]; then
        echo "1. CSS file is missing or empty:"
        echo "   - You may have accidentally deleted it"
        echo "   - Restore from backup or Git"
        echo "   - Check if it's in the wrong location"
        echo ""
    fi
    
    echo "2. Try these commands:"
    echo "   git status              # Check what changed"
    echo "   git diff css/style.css  # See CSS changes"
    echo "   git checkout css/style.css  # Restore from Git"
    echo ""
fi

echo ""
echo "Full file listing:"
echo "===================="
ls -lah css/ js/ images/ 2>/dev/null | tail -20

echo ""
echo "To see detailed CSS content:"
echo "  cat css/style.css | head -50"
echo ""
echo "To check browser console:"
echo "  1. Open your site"
echo "  2. Press F12"
echo "  3. Look for red errors"
