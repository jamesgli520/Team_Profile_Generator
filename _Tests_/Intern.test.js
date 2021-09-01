const Intern = require('../lib/Intern');

describe('Intern', () => {
    //test Intern class
    test('Can instantiate Intern instance', () => {
        const e = new Intern();
        expect(typeof e).toBe('object');
    });
    
    test('can set school name at constructor arugment', () => {
        const testValue = 'GA Tech';
        const e = new Intern('name', 1, 'email@email.com', testValue);
        expect(e.schoolName).toBe(testValue)
    });

     //test getRole method
     test('Can get school name by using getSchoolName()', () => {
        const testValue = 'GA Tech';
        const e = new Intern('name', 1, 'email@email.com', testValue);
        expect(e.getSchoolName()).toBe(testValue);
    });

     //test getRole method
    test('Can get role by using getRole()', () => {
        const testValue = 'intern';
        const e = new Intern();
        expect(e.getRole()).toBe(testValue);
    });
});