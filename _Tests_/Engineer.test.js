const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    //test Engineer class
    test('Can instantiate Engineer instance', () => {
        const e = new Engineer();
        expect(typeof e).toBe('object');
    });
    
    test('can set office number at constructor arugment', () => {
        const testValue = 1;
        const e = new Engineer('name', 1, 'email@email.com', testValue);
        expect(e.officeNumber).toBe(testValue)
    });

    //test getOfficeNumber() method
    test('Can get office number by using getOfficeNumber()', () => {
        const testValue = 1;
        const e = new Engineer('name', 1, 'email@email.com', testValue);
        expect(e.getOfficeNumber()).toBe(testValue);
    });

     //test getRole method
    test('Can get role by using getRole()', () => {
        const testValue = 'engineer';
        const e = new Engineer();
        expect(e.getRole()).toBe(testValue);
    });
});