#!/bin/bash
echo "=== Visitor Map Diagnostic ==="
echo ""
echo "1. Checking files exist:"
echo -n "   visitor-map.js: "
[ -f "assets/js/visitor-map.js" ] && echo "✓ EXISTS" || echo "✗ MISSING"
echo -n "   visitor-map.css: "
[ -f "assets/css/visitor-map.css" ] && echo "✓ EXISTS" || echo "✗ MISSING"
echo -n "   enhancements-loader.html: "
[ -f "_includes/enhancements-loader.html" ] && echo "✓ EXISTS" || echo "✗ MISSING"
echo ""

echo "2. Checking file sizes:"
echo "   visitor-map.js: $(wc -c < assets/js/visitor-map.js) bytes"
echo "   visitor-map.css: $(wc -c < assets/css/visitor-map.css) bytes"
echo ""

echo "3. Checking if visitor-map is loaded in enhancements-loader:"
grep -q "visitor-map" "_includes/enhancements-loader.html" && echo "   ✓ Found in loader" || echo "   ✗ Not found in loader"
echo ""

echo "4. First 10 lines of visitor-map.js:"
head -10 assets/js/visitor-map.js
echo ""

echo "5. Test page created at: visitor-map-test.html"
echo "   Open this file in a browser to test the widget"
echo ""
echo "=== Diagnostic Complete ==="
