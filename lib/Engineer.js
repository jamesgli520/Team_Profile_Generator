const Empolyee = require('./Empolyee');

class Engineer extends Empolyee{
    constructor(name, id, email, GitHub){
        super(name, id, email);
        this.GitHub = GitHub;
    }

    getGitHub(){
        return this.GitHub;
    }

    getRole(){
        return 'engineer';
    }
}

module.exports = Engineer;