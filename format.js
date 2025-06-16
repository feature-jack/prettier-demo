import * as prettier from "prettier"

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import {  readFileSync, writeFileSync } from 'fs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const index = readFileSync(join(__dirname, 'src/index.js')).toString('utf8');
const index2 = readFileSync(join(__dirname, 'src/index2.js')).toString('utf8');

const res1 = await prettier.format(index, { semi: false, parser: "babel" })
writeFileSync(join(__dirname, 'src/index.js'), res1)

const res2 = await prettier.format(index2, { semi: false, parser: "babel" })
writeFileSync(join(__dirname, 'src/index2.js'), res2)
// console.log(res) // "foo();"
