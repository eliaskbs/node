// console.log( process.env );

const { SHELL, EDITOR } = process.env;

console.log(SHELL);
console.log(EDITOR);

const character = ['flash', 'superman', 'Green Lanter','Batman']

const [ , , batman] = character;
console.log(batman);
