const Empolyee = require('./Empolyee');

class Engineer extends Empolyee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return 'engineer';
    }
}

module.exports = Engineer;