const prompt = require('inquirer').createPromptModule()



// Questions
prompt ([
    {
        type: 'input',
        name: 'qOneContestant',
        message: 'Are you single, in a relationship, or married?'
    },
    {
        type: 'input',
        name: 'qOnePanelistOne',
        message: 'Are you single, in a relationship, or married?'
    },
    {
        type: 'input',
        name: 'qTwoContestant',
        message: 'What is your favorite type of food?'
    },
    {
        type: 'input',
        name: 'qTwoPanelistOne',
        message: 'What is your favorite type of food?'
    },
    {
        type: 'input',
        name: 'qThreeContestant',
        message: 'Do you like chocolate?'
    },
    {
        type: 'input',
        name: 'qThreePanelistOne',
        message: 'Do you like chocolate?'
    },
]).then(response => {
    // console.log(response)
    if (response.qOnePanelistOne === response.qOneContestant){
        console.log('Correct')
    } else {
        console.log('Wrong!');
    } if (response.qTwoPanelistOne === response.qTwoContestant){
        console.log('Correct');
    } else {
        console.log('Wrong');
    } if (response.qThreePanelistOne === response.qThreeContestant){
        console.log('Correct');
    } else {
        console.log('Wrong');
    }
})
