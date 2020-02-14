const prompt = require('inquirer').createPromptModule()



// Questions
prompt ([
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
  },
  // {
  //   type: 'string',
  //   name: 'panel',
  //   message: 'What is your name?'
  // }
])

.then (({contestant, p}) => {
  (p > 0)
  console.log(contestant, p)
  let arr = []

  for (i = 0; i < p; i++) {
    arr.push(prompt('Panelist, what is your name?' + (i++)));
  
    // prompt([
    //   {
    //     type: 'string',
    //     name: 'panel',
    //     message: 'Panelist, what is your name?'
    //   }
    // ])
      // .then(({ panel }) => {
        console.log(arr[i])
      // })
  }
})
