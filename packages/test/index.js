import { resolvePathSync } from 'mlly'
import process from 'node:process'

console.log('current dir', process.cwd())
const url = resolvePathSync('vue/package.json', {
  url: process.cwd()
})

console.log('resolved url', url)