import PDFMerger = require('pdf-merger-js')
import { program } from 'commander'
import packageJson from './package.json'

program
  .name(packageJson.name)
  .description(packageJson.description)
  .version(packageJson.version)
  .argument('<output>', 'output PDF path')
  .argument('<input...>', 'input PDF paths')
  .action((output: string, input: string[]) => {
    const merger = new PDFMerger()
    input.forEach(path => merger.add(path))
    merger.save(output)
  })

program.parse()
