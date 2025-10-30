import { getUUID } from "../../src/plugins";

describe('plugins/get-id.plugin.ts', () => {

    test('getUUD should return a UUDI', () => {
        const uuid = getUUID();

        expect( typeof uuid ).toBe('string')
        expect( uuid.length ).toBe( 36 )
    });

});