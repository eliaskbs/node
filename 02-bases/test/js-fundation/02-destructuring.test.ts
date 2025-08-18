import { character } from "../../src/js-fundation/02-destructuring";

describe("js-fundation/02-destructuring", () =>{
    test('character should contain Flash, Superman', () =>{
        expect( character ).toContain('Flash');
        expect( character ).toContain('Superman');
    });

    test('first character should be Flash and second Superman', () => {

        const [ Flash, Superman ] = character;

        expect( Flash ).toBe('Flash');
        expect( Superman ).toBe('Superman');  
    });
});