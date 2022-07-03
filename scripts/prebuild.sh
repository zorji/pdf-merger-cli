#!/bin/bash

# exit when any command fails
set -e

echo 'export default ' > 'src/package.json.ts'
cat 'package.json' >> 'src/package.json.ts'