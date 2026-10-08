#!/bin/bash
set -e

echo "🚀 Deploying openagentui-sync-server-api to PyPI"

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/ build/ *.egg-info src/*.egg-info

# Build the package
echo "📦 Building package..."
python -m pip install --upgrade build twine
python -m build

# Check the package
echo "🔍 Checking package..."
twine check dist/*

# Upload to PyPI
echo "📤 Uploading to PyPI..."
echo "Note: You'll need to authenticate with your PyPI credentials"
twine upload dist/*

echo "✅ Deployment complete!"