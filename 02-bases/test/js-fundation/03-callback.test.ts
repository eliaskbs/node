import { get } from "http";
import { getUsersById } from "../../src/js-fundation/04-callback";
import { error } from "console";

describe('js-fundation/03-callbacks.ts', () => {
    test('getUserById should return an error if user not exists', (done)=> {
        const id = 10;
        getUsersById( id, (err, user)=> {
            expect( err ).toBe(`User not found with id ${id}`);
            expect( user ).toBeUndefined();

            done();
        });
    });

    test('getUserById should return user and id exists', (done)=> {
        const id = 2;
        getUsersById( id , (err, user) => {
            expect( err ).toBeUndefined();
            expect( user ).toBe( user );

            done();
        });
    })
})