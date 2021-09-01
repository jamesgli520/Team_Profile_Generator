const Manager = require('../lib/Manager');

describe('Manager', () => {
    //test Manager class
    test('Can instantiate Manager instance', () => {
        const e = new Manager();
        expect(typeof e).toBe('object');
    });
    
    test('can set office number at constructor arugment', () => {
        const testValue = 1;
        const e = new Manager('name', 1, 'email@email.com', testValue);
        expect(e.officeNumber).toBe(testValue)
    });

    //test getOfficeNumber() method
    test('Can get office number by using getOfficeNumber()', () => {
        const testValue = 1;
        const e = new Manager('name', 1, 'email@email.com', testValue);
        expect(e.getOfficeNumber()).toBe(testValue);
    });

     //test getRole method
    test('Can get role by using getRole()', () => {
        const testValue = 'manager';
        const e = new Manager();
        expect(e.getRole()).toBe(testValue);
    });
});