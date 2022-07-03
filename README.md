# pdf-merger-cli

This is a CLI PDF merger based on [pdf-merger-js](https://github.com/nbesli/pdf-merger-js) which is based on `pdfjs` **without any external dependencies**.

## Usage

```shell
# Usage: pdf-merger-cli [options] <output> <input...>

npx pdf-merger-cli out.pdf input1.pdf input2.pdf

# use glob
npx pdf-merger-cli out.pdf input*.pdf
```