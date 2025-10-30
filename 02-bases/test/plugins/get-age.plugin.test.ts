import { get } from "http";
import { getAge } from "../../src/plugins";


describe('Plugins/get-age.plugin.ts', () => {

    test('getAge() should return the age of a person', ()=> {
        const birthdate = '1985-10-2';
        const age = getAge(birthdate);

        expect(typeof age ).toBe('number');
    });

    test('getAge() should return current age', ()=> {
        const birthdate = '2001-07-15';
        const age = getAge(birthdate);

        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect( age ).toBe( calculatedAge )
    }); 

    test('getAge() should return 0 year', ()=>{
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2001);

        const birthdate = '2001-07-15';
        const age = getAge(birthdate);

        expect( age ).toBe(0);

    }); 

});