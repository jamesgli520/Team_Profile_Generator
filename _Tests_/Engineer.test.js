const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    //test Engineer class
    test('Can instantiate Engineer instance', () => {
        const e = new Engineer();
        expect(typeof e).toBe('object');
    });
    
    test('can set github at constructor arugment', () => {
        const testValue = 'https://github.com/GitHubUserName';
        const e = new Engineer('name', 1, 'email@email.com', testValue);
        expect(e.GitHub).toBe(testValue)
    });

    //test getGitHub() method
    test('Can get office number by using getOfficeNumber()', () => {
        const testValue = 'https://github.com/GitHubUserName';
        const e = new Engineer('name', 1, 'email@email.com', testValue);
        expect(e.getGitHub()).toBe(testValue);
    });

     //test getRole method
    test('Can get role by using getRole()', () => {
        const testValue = 'engineer';
        const e = new Engineer();
        expect(e.getRole()).toBe(testValue);
    });
});