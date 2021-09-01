const Empolyee = require('./Empolyee');

class Intern extends Empolyee{
    constructor(name, id, email, schoolName){
        super(name, id, email);
        this.schoolName = schoolName;
    }

    getSchoolName(){
        return this.schoolName;
    }

    getRole(){
        return 'intern';
    }
}

module.exports = Intern;