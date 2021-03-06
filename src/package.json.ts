export default 
{
  "name": "pdf-merger-cli",
  "version": "0.0.0",
  "description": "This is a CLI PDF merger based on pdf-merger-js which is based on pdfjs without any external dependencies.",
  "repository": {
    "type": "git",
    "url": "https://github.com/zorji/pdf-merger-cli"
  },
  "main": "dist/index.js",
  "bin": {
    "pdf-merger-cli": "bin/pdf-merger-cli"
  },
  "scripts": {
    "prebuild": "bash ./scripts/prebuild.sh",
    "build": "tsc",
    "dev": "ts-node src/index.ts",
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