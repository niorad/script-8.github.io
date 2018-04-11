const fs = require('fs')
// read in all the files that end in .txt
// (make sure they're in the right order)
// parse each of them
// put all of this in a big json file

const parse = s => {
  const lines = s.split('\n')
  return {
    text: lines.slice(0, 3),
    code: lines.slice(4)
  }
}

const root = './src/utils/tutorial/slides'

const _ = require('lodash')
const files = _(fs.readdirSync(root))
  .sortBy(d => +d.split('.')[0])
  .map(d => parse(fs.readFileSync(`${root}/${d}`, 'utf8')))
  .value()

console.log(JSON.stringify(files, null, 2))
