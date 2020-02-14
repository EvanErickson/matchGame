const prompt = require('inquirer').createPromptModule()

prompt([
  {
    type: 'string',
    name: 'contestant',
    message: 'Who is the lucky one?',
  },
  {
    type: 'number',
    name: 'p',
    message: 'How many panelists really know you?'
  }
])

  .then(({contestant, p}) => {
    let arr = []
    
    for (let i = 0; i < p; i++) {
      arr.push({
        type: 'input',
        name: '' + i,
        message: 'Panelist, what is your name?'
      })
    }
    prompt(arr)
    .then(response => {
    //   console.log(response)
      prompt ([
        {
            type: 'password',
            name: 'qOneContestant',
            message: 'Are you single, in a relationship, or married?'
        },
        {
            type: 'password',
            name: 'qOnePanelistOne',
            message: `${response[0]}, Are they single, in a relationship, or married?`
        },
        {
            type: 'password',
            name: 'qOnePanelistTwo',
            message: `${response[1]}, Are they single, in a relationship, or married?`
        },
        {
            type: 'password',
            name: 'qOnePanelistThree',
            message: `${response[2]}, Are they single, in a relationship, or married?`
        },
        {
            type: 'password',
            name: 'qTwoContestant',
            message: 'What is your favorite type of food?'
        },
        {
            type: 'password',
            name: 'qTwoPanelistOne',
            message: `${response[0]}, What is their favorite type of food?`
        },
        {
            type: 'password',
            name: 'qTwoPanelistOne',
            message: `${response[1]}, What is their favorite type of food?`
        },
        {
            type: 'password',
            name: 'qTwoPanelistOne',
            message: `${response[2]}, What is their favorite type of food?`
        },
        {
            type: 'password',
            name: 'qThreeContestant',
            message: 'Do you like chocolate?'
        },
        {
            type: 'password',
            name: 'qThreePanelistOne',
            message: `${response[0]}, Do they like chocolate?`
        },
        {
            type: 'password',
            name: 'qThreePanelistOne',
            message: `${response[1]}, Do they like chocolate?`
        },
        {
            type: 'password',
            name: 'qThreePanelistOne',
            message: `${response[2]}, Do they like chocolate?`
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
  })
})
  

// Questions
