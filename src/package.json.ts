export default 
{
  "name": "pdf-merger-cli",
  "version": "0.0.0",
  "description": "",
  "main": "src/index.ts",
  "scripts": {
    "prebuild": "bash ./scripts/prebuild.sh",
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1",
    "format": "prettier --write 'src/**/*.ts'"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "commander": "^9.3.0",
    "pdf-merger-js": "^3.4.0"
  },
  "devDependencies": {
    "@types/node": "^14.18.21",
    "prettier": "^2.7.1",
    "typescript": "^4.7.4"
  }
}