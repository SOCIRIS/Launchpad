#!/bin/bash

# SOCIRIS - Lucide Icons Fix Script
# This script fixes the "lucide is not defined" error in all HTML files

echo "🔧 SOCIRIS Lucide Icons Fix Script"
echo "=================================="
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found!"
    echo "Please run this script from ~/SOCIRIS/Launchpad"
    exit 1
fi

# Create backup directory
BACKUP_DIR="BACKUP_lucide_fix_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"
echo "📦 Creating backups in $BACKUP_DIR/"

# Backup all HTML files
for file in *.html; do
    if [ -f "$file" ]; then
        cp "$file" "$BACKUP_DIR/"
        echo "   ✓ Backed up: $file"
    fi
done

echo ""
echo "🔨 Applying fixes..."
echo ""

# Function to fix HTML files
fix_html_file() {
    local file=$1
    
    if [ ! -f "$file" ]; then
        echo "   ⚠ Skipping $file (not found)"
        return
    fi
    
    echo "   Processing: $file"
    
    # Remove lucide script from head (if exists)
    sed -i.tmp 's|<script src="https://unpkg.com/lucide@latest"></script>||g' "$file"
    sed -i.tmp 's|<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>||g' "$file"
    
    # Note: The actual script replacement should be done manually
    # as it involves multiline replacements which are complex in bash
    
    rm -f "$file.tmp"
    echo "   ✓ Fixed: $file"
}

# Fix all HTML files
for file in *.html; do
    fix_html_file "$file"
done

echo ""
echo "✅ Automatic fixes applied!"
echo ""
echo "⚠️  MANUAL STEP REQUIRED:"
echo "You still need to manually update the scripts section at the bottom of each HTML file."
echo ""
echo "Replace the scripts section with:"
echo '
    <script src="https://unpkg.com/lucide@0.263.1/dist/umd/lucide.min.js"></script>
    <script src="js/theme-toggle.js"></script>
    <script src="js/script.js"></script>
    <script>
        window.addEventListener("DOMContentLoaded", function() {
            if (window.lucide) {
                lucide.createIcons();
                console.log("✓ Icons loaded successfully");
            }
        });
    </script>
</body>
</html>
'
echo ""
echo "📖 See FIX-LUCIDE-ERROR.md for detailed instructions"
echo ""
echo "💾 Backups saved in: $BACKUP_DIR/"
echo ""
echo "🧪 Test after fixing:"
echo "   python3 -m http.server 8000"
echo "   Open http://localhost:8000 and check console (F12)"
echo ""
