// console.log( process.env );

const { SHELL, EDITOR } = process.env;

console.log(SHELL);
console.log(EDITOR);

export const character = [ 'Flash', 'Superman','Green Lanter','Batman']

const [ , , batman] = character;
console.log(batman);
