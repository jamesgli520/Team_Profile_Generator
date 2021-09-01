const render = require('./src/page-template.js');
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/intern');

const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const outputpath = path.join(OUTPUT_DIR, 'index.html');

const team = [];
const id = [];

function init(){
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the name of manager: ',
                validate: (answer) => {
                    if (answer !== '') {
                    return true;
                    }
                    return 'Can not be empty and should be at least one character: ';
                },
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'What is the Id of manager:',
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if(pass){
                        return true;
                    }
                    return 'A positive number greater than zero: ';
                },
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the email of manager:',
                validate: (answer) => {
                    const pass = answer.match(/\S+@\S+\.\S+/);
                    if(pass){
                        return true;
                    }
                    return 'Email should be in this format email@email.com: ';
                },
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'What is the office number of manager: ',
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if(pass){
                        return true;
                    }
                    return 'A positive number greater than zero: ';
                },
            },
        ]
    ).then(
        answers => {     
            const theManager = new Manager(answers.managerName, answers.managerId,answers.managerEmail,answers.managerOfficeNumber);
            team.push(theManager);
            id.push(answers.managerId);
            createTeam();
        }
    )

    function createTeam(){
        inquirer.prompt(
            [
               {
                type: 'list',
                name: 'teamMemberChoice',
                message: 'Add a team member:',
                choices: [
                    'Engineer', 'Intern', 'No Thanks',
                ],
               },
            ]
        ).then(
            userInput => {
                switch(userInput.teamMemberChoice){
                    case 'Engineer':
                        addEngineerTeamMember();
                        break;
                    case 'Intern':
                        addInternTeamMember();
                        break;
                    default:
                        console.log('Successful!');
                        fs.writeFileSync(outputpath, render(team), 'utf-8');
                }
            }
        )
    }

    function addEngineerTeamMember(){
        inquirer.prompt(
            [
                {
                    type: 'input',
                    name: 'engineerName',
                    message: 'What is the name of engineer: ',
                    validate: (answer) => {
                        if (answer !== '') {
                        return true;
                        }
                        return 'Can not be empty and should be at least one character: ';
                    },
                },
                {
                    type: 'input',
                    name: 'enginneerId',
                    message: 'What is the Id of engineer:',
                    validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/);
                        if(pass){
                            return true;
                        }
                        return 'A positive number greater than zero: ';
                    },
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: 'What is the email of engineer:',
                    validate: (answer) => {
                        const pass = answer.match(/\S+@\S+\.\S+/);
                        if(pass){
                            return true;
                        }
                        return 'Email should be in this format email@email.com: ';
                    },
                },
                {
                    type: 'input',
                    name: 'engineerGitHub',
                    message: 'What is the GitHub of engineer: ',
                    validate: (answer) => {
                        if (answer !== '') {
                        return true;
                        }
                        return 'Can not be empty and should be valid github link https://github.com/githubUserName: ';
                    },
                },
            ]
        ).then(
            answers => {     
                const theEngineer = new Engineer(answers.engineerName, answers.engineerId,answers.engineerEmail,answers.engineerGitHub);
                team.push(theEngineer);
                id.push(answers.engineerId);
                createTeam();
            }
        )
    }
    function addInternTeamMember(){
        inquirer.prompt(
            [
                {
                    type: 'input',
                    name: 'internName',
                    message: 'What is the name of intern: ',
                    validate: (answer) => {
                        if (answer !== '') {
                        return true;
                        }
                        return 'Can not be empty and should be at least one character: ';
                    },
                },
                {
                    type: 'input',
                    name: 'internId',
                    message: 'What is the Id of intern:',
                    validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/);
                        if(pass){
                            return true;
                        }
                        return 'A positive number greater than zero: ';
                    },
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: 'What is the email of intern:',
                    validate: (answer) => {
                        const pass = answer.match(/\S+@\S+\.\S+/);
                        if(pass){
                            return true;
                        }
                        return 'Email should be in this format email@email.com: ';
                    },
                },
                {
                    type: 'input',
                    name: 'internSchoolName',
                    message: 'What is the school name of intern: ',
                    validate: (answer) => {
                        if (answer !== '') {
                        return true;
                        }
                        return 'Can not be empty: ';
                    },
                },
            ]
        ).then(answers => {     
            const theIntern = new Intern(answers.internName, answers.internId,answers.internEmail,answers.internSchoolName);
            team.push(theIntern);
            id.push(answers.internId);
            createTeam();
            }
        )
    }

    // function buildTeam(){
    //     if(!fs.existsSync(OUTPUT_DIR)){
    //         fs.mkdirSync(OUTPUT_DIR);
    //     }
    //     fs.writeFileSync(outputpath, render(team), 'utf-8');
    // }

    
        
}

init();
