import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
    .options('base', {
        alias: 'b',
        type: 'number',
        demandOption: true,
        description:'Table multiplicate'
    })
    .option('limit', {
        alias: 'l',
        demandOption: false,
        type: 'number',
        default: 10
    })
    .option('showTable', {
        alias: 's',
        demandOption: false,
        type: 'boolean',
        default: false
    })
    .parseSync();