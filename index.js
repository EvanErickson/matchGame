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
      console.log(response)
  })
})
  

// Questions
// prompt ([
//     {
//         type: 'password',
//         name: 'qOneContestant',
//         message: 'Are you single, in a relationship, or married?'
//     },
//     {
//         type: 'password',
//         name: 'qOnePanelistOne',
//         message: 'Are you single, in a relationship, or married?'
//     },
//     {
//         type: 'password',
//         name: 'qTwoContestant',
//         message: 'What is your favorite type of food?'
//     },
//     {
//         type: 'password',
//         name: 'qTwoPanelistOne',
//         message: 'What is your favorite type of food?'
//     },
//     {
//         type: 'password',
//         name: 'qThreeContestant',
//         message: 'Do you like chocolate?'
//     },
//     {
//         type: 'password',
//         name: 'qThreePanelistOne',
//         message: 'Do you like chocolate?'
//     },
// ]).then(response => {
//     // console.log(response)
//     if (response.qOnePanelistOne === response.qOneContestant){
//         console.log('Correct')
//     } else {
//         console.log('Wrong!');
//     } if (response.qTwoPanelistOne === response.qTwoContestant){
//         console.log('Correct');
//     } else {
//         console.log('Wrong');
//     } if (response.qThreePanelistOne === response.qThreeContestant){
//         console.log('Correct');
//     } else {
//         console.log('Wrong');
//     }
// })