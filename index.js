const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


class Prompt {
    constructor() {
        this.teamArray = [];
    }

    getTeamArray() {
        return this.teamArray;
    }
    questions() {
        inquirer.prompt(
            {
                type: 'input',
                name: 'name',
                message: 'Enter the team managers name',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter something");
                        return false;
                    }
                }
               },
               {
                   type: 'number',
                   name: 'id',
                   message: "Enter the manager's employee id",
                   validate: idInput => {
                       if (idInput) {
                           return true;
                       } else {
                           console.log("Enter something");
                           return false;
                       }
                   } 
               },
               {
                   type: 'input',
                   name: 'email',
                   message: "Please enter the manager's email",
                   validate: emailInput => {
                       if (emailInput) {
                           return true;
                       } else {
                           console.log("Enter something");
                           return false;
                       }
                   }
               },
               {
                   type: 'number',
                   name: 'managerNumber',
                   message: "Enter the manager's office number",
                   validate: numberInput => {
                       if (numberInput) {
                           return true;
                       } else {
                           console.log("Enter something ");
                           return false;
                       }
                   }
               },
               {
                type: 'list',
                name: 'menuOption',
                message: "What would you like to do next?",
                choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
               }
               .then ((templateData) => {
                const newManager = new Manager(templateData.name, templateData.id, templateData.email, templateData.number)
                this.teamArray.push(newManager);
                         this.questions();
            })
               .then(({menuOption}) => {
                if(menuOption === 'Finish building the team'){
               const pagehtml = generateHTML(this.getTeamArray());
                    fs.writeFile('./dist/index.html', pagehtml, err => {
                        if (err) throw new Error(err);
                        console.log('Index.html has been created');
                    });
                    break;
                }
                else if (menuOption === 'Add an engineer') {
                inquirer.prompt([
                        {
                         type: 'input',
                         name: 'name',
                         message: "Enter this person's name",
                         validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log("Enter something");
                                return false;
                            }
                        }
                        },
                        {
                         type: 'number',
                         name: 'id',
                         message: "Enter this person's id",
                         validate: idInput => {
                            if (idInput) {
                                return true;
                            } else {
                                console.log("Enter something");
                                return false;
                            }
                        } 
                        },
                        {
                         type: 'input',
                         name: 'email',
                         message: "Enter this person's email",
                         validate: emailInput => {
                            if (emailInput) {
                                return true;
                            } else {
                                console.log("Enter something");
                                return false;
                            }
                        }
                        },
                        {
                         type: 'input',
                         name: 'github',
                         message: "Enter this person's github username",
                         validate: githubInput => {
                            if (githubInput) {
                                return true;
                            } else {
                                console.log("Enter something");
                                return false;
                            }
                        }  
                        }
                    ])
                    .then( templateData => {
                        const newEngineer = new Engineer(templateData.name, templateData.id, templateData.email, templateData.github);
                        this.teamArray.push(newEngineer);
                    this.questions();
                    })
            } else if (menuOption === 'Add an intern') {
                inquirer.prompt([
                        {
                         type: 'input',
                         name: 'name',
                         message: "Enter this person's name",
                         validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log("Enter something");
                                return false;
                            }
                        }
                        },
                        {
                         type: 'number',
                         name: 'id',
                         message: "Enter this person's id",
                         validate: idInput => {
                            if (idInput) {
                                return true;
                            } else {
                                console.log("Enter something");
                                return false;
                            }
                        } 
                        },
                        {
                         type: 'input',
                         name: 'email',
                         message: "Enter this person's email",
                         validate: emailInput => {
                            if (emailInput) {
                                return true;
                            } else {
                                console.log("Enter something");
                                return false;
                            }
                        }
                        },
                        {
                         type: 'input',
                         name: 'school',
                         message: "Enter this person's school",
                         validate: schoolInput => {
                            if (schoolInput) {
                                return true;
                            } else {
                                console.log("Enter something");
                                return false;
                            }
                        }  
                        }
                    ])
                    
                    .then( templateData => {
                        const newEngineer = new Engineer(templateData.name, templateData.id, templateData.email, templateData.github);
                        this.teamArray.push(newEngineer);
                    this.questions();
                    })
            }
                    
    
