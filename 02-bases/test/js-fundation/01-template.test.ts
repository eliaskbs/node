
import { emailTempalte } from "../../src/js-fundation/01-template";

describe('js-fundation/01-template.ts', () => {
    test('emailTemplate should contain a greeting', () => {
        expect( emailTempalte ).toContain('Hi, ');
    });

    test('emailTamplate should contain {{name}} and {{orderId}}', () => {
        expect( emailTempalte ).toMatch(/{{name}}/);
        expect( emailTempalte ).toMatch(/{{orderId}}/);
    })
});