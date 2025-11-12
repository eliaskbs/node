import fs from 'node:fs'
import { yarg } from "./config/plugins/args.plugin";


const { base, limit, show} = yarg;

const headerMessage = `
========== table ${ base } ============\n
`


let outputMessage = '';

outputMessage += headerMessage;

for(let i = 1; i <= limit; i++){
    outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
}

if(show){
    console.log(outputMessage);
}


const outputPath = 'outputs';

fs.mkdirSync(outputPath, {recursive: true});
fs.writeFileSync(`${ outputPath }/table-${ base }.txt`, outputMessage);
console.log('File Created!');



