const Empolyee = require('../lib/Empolyee');

describe('Employee', () => {
    //test employee class
    test('Can instantiate Employee instance', () => {
        const e = new Empolyee();
        expect(typeof e).toBe('object');
    });

    //test argument name in constructor
    test('Can set name at constructor argument', () => {
        const name = 'James'
        const e = new Empolyee(name);
        expect(e.name).toBe(name);
    });

    //test argument id in constructor
    test('Can set id at constructor argument', () => {
        const testValue = 100;
        const e = new Empolyee('name', testValue);
        expect(e.id).toBe(testValue);
    });

    //test argument email in constructor
    test('Can set email at constructor argument', () => {
        const testValue = 'email@email.com';
        const e = new Empolyee('name', 1, testValue);
        expect(e.email).toBe(testValue);
    });

    //test getName() method
    test('Can get name by using getName()', () => {
        const testValue = 'James';
        const e = new Empolyee(testValue);
        expect(e.getName()).toBe(testValue);
    });

    //test getId() method
    test('Can get id by using getId()', () => {
        const testValue = 100;
        const e = new Empolyee('name',testValue);
        expect(e.getId()).toBe(testValue);
    });

     //test getEmail() method
    test('Can get email by using getEmail()', () => {
        const testValue = 'email@email.com';
        const e = new Empolyee('name', 1, testValue);
        expect(e.getEmail()).toBe(testValue);
    });

     

     //test getRole method
    test('Can get role by using getRole()', () => {
        const testValue = 'employee';
        const e = new Empolyee();
        expect(e.getRole()).toBe(testValue);
    });
});
