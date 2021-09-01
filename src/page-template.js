const generateTeam = (team) => {
    const generateManager =  (manager) => {
        return `
        <h2>${manager.getName()}</h2>
        <ul>
            <li>ID: ${manager.getId()}</li>
            <li><a href='mailto:${manager.getEmail()}'>Email: ${manager.getEmail()}<a></li>
            <li>Role: ${manager.getRole()}</li>
        </ul>
        `;
    };

    const generateEngineer =  (engineer) => {
        return `
        <h2>${engineer.getName()}</h2>
        <ul>
            <li>ID: ${engineer.getId()}</li>
            <li><a href='mailto:${engineer.getEmail()}'>Email: ${engineer.getEmail()}<a></li>
            <li>Role: ${engineer.getRole()}</li>
        </ul>
        `;
    };

    const generateIntern =  (intern) => {
        return `
        <h2>${intern.getName()}</h2>
        <ul>
            <li>ID: ${intern.getId()}</li>
            <li><a href='mailto:${intern.getEmail()}'>Email: ${intern.getEmail()}<a></li>
            <li>Role: ${intern.getRole()}</li>
        </ul>
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
  <title>Team Profile Generator</title>

  <header>
    <h1 class="jumbotron jumbotron-fluid">My Team</h1>
  
  </header>
</head>
<body>
  <div class="container">
    <div>
        ${generateTeam(team)}
    </div>
    
  </div>
</div>
</body>
</html>
    `;
};