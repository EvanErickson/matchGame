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
