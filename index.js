const prompt = require('inquirer').createPromptModule()

let questionArr = []

// Questions
prompt([
    {
        type: 'password',
        name: 'qOneContestant',
        message: 'Are you single, in a relationship, or married?'
    },
    {
        type: 'password',
        name: 'qOnePanelistOne',
        message: 'Are you single, in a relationship, or married?'
    },
    {
        type: 'password',
        name: 'qTwoContestant',
        message: 'What is your favorite type of food?'
    },
    {
        type: 'password',
        name: 'qTwoPanelistOne',
        message: 'What is your favorite type of food?'
    },
    {
        type: 'password',
        name: 'qThreeContestant',
        message: 'Do you like chocolate?'
    },
    {
        type: 'password',
        name: 'qThreePanelistOne',
        message: 'Do you like chocolate?'
    }
])

console.log(prompt)
    .then(response => {
        // console.log(response)
        for (let i = 0; i < 3; i++) {
            questionArr.push(prompt)
            console.log(questionArr)
        }


    })
