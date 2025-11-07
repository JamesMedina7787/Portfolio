set -euo pipefail
ROOT="$(pwd)"
APP="$ROOT/src/App.js"
if grep -q 'import Education from "./components/Education";' "$APP"; then
  sed -i '/import Education from "\.\/components\/Education";/d' "$APP"
fi
sed -i '/const siteDescription = {/,/};/d' "$APP"
FILES=(
  "src/components/February2.js"
  "src/components/February3.js"
  "src/components/February7.js"
  "src/components/february22025.js"
  "src/components/june22025.js"
  "src/components/june32025.js"
  "src/components/june42025.js"
  "src/components/june52025.js"
  "src/components/march25025.js"
  "src/components/march272025.js"
  "src/components/march72025.js"
)
for f in "${FILES[@]}"; do
  [ -f "$f" ] && sed -i '/^\s*const\s\+imgStyle\s*=/d' "$f"
done
echo "✓ Cleaned unused vars/imports. Run: npm start"
