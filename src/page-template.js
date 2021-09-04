const generateTeam = (team) => {
    const generateManager =  (manager) => {
        return `
        <div class="col-sm">
            <h2 class="bg-primary text-white">${manager.getName()}</h2>
            <ul>
                <li>ID: ${manager.getId()}</li>
                <li><a href='mailto:${manager.getEmail()}'>Email: ${manager.getEmail()}<a></li>
                <li>Office Number: ${manager.getOfficeNumber()}</li>
                <li>Role: ${manager.getRole()}</li>
            </ul>
        </div>
        `;
    };

    const generateEngineer =  (engineer) => {
        return `
        <div class="col-sm">
            <h2 class="bg-primary text-white">${engineer.getName()}</h2>
            <ul>
                <li>ID: ${engineer.getId()}</li>
                <li><a href='mailto:${engineer.getEmail()}'>Email: ${engineer.getEmail()}<a></li>
                <li>GitHub: ${engineer.getGitHub()}</li>
                <li>Role: ${engineer.getRole()}</li>
            </ul>
        </div>
        `;
    };

    const generateIntern =  (intern) => {
        return `
        <div class="col-sm">
            <h2 class="bg-primary text-white">${intern.getName()}</h2>
            <ul>
                <li>ID: ${intern.getId()}</li>
                <li><a href='mailto:${intern.getEmail()}'>Email: ${intern.getEmail()}<a></li>
                <li>School: ${intern.getSchoolName()}</li>
                <li>Role: ${intern.getRole()}</li>
            </ul>3
        </div>
        `;
    };

    const htmlArr = [];
    
    htmlArr.push(
        team.filter((empolyee) => empolyee.getRole() === 'manager')
        .map((manager) => generateManager(manager))
        .join('')
    );

    htmlArr.push(
        team.filter((empolyee) => empolyee.getRole() === 'engineer')
        .map((engineer) => generateEngineer(engineer))
        .join('')
    );

    htmlArr.push(
        team.filter((empolyee) => empolyee.getRole() === 'intern')
        .map((intern) => generateIntern(intern))
        .join('')
    );
    

    return htmlArr.join('');

};

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="./assets/style.css" />
 
  <title>Team Profile Generator</title>

  <header>
    <h1 class="jumbotron text-center p-15 mb-5 bg-primary text-white">My Team</h1>
  
  </header>
</head>
<body>
  <div class="container row">
    
        ${generateTeam(team)}
    
    
  </div>
</div>
</body>
</html>
    `;
};