#!/bin/bash

# exit when any command fails
set -e

rm -rf dist

echo 'export default ' > 'src/package.json.ts'
cat 'package.json' >> 'src/package.json.ts'