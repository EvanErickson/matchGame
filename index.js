const prompt = require('inquirer').createPromptModule()

prompt([
    {
        type: 'string',
        name: 'contestant',
        message: 'Who is the lucky one?',
    },
    {
        type: 'number',
        name: 'panelistCount',
        message: 'How many panelists really know you?'
    }
])

    .then(({ contestant, panelistCount }) => {
        let intros = []

        for (let i = 0; i < panelistCount; i++) {
            intros.push({
                type: 'input',
                name: 'panelist' + i,
                message: 'Panelist, what is your name?'
            })
        }
        prompt(intros)
            .then(res => {
                console.log(res);

                let questions = []

                questions.push({
                    type: 'password',
                    name: `q1Contestant`,
                    message: `${contestant} Are you single, in a relationship, or married?`
                })

                for (i = 0; i < panelistCount; i++) {
                    questions.push(
                        {
                            type: 'password',
                            name: `q1Panelist${i}`,
                            message: `${res['panelist' + i]}, Are you single, in a relationship, or married?`
                        }
                    )
                }

                questions.push({
                    type: 'password',
                    name: `q2Contestant`,
                    message: `${contestant} What is your favorite type of food?`
                })

                for (i = 0; i < panelistCount; i++) {
                    questions.push({
                        type: 'password',
                        name: `q2Panelist${i}`,
                        message: `${res['panelist' + i]} What is your favorite type of food?`


                    },
                    )
                }

                questions.push({
                    type: 'password',
                    name: `q3Contestant`,
                    message: `${contestant} Do you like chocolate?`
                })

                for (i = 0; i < panelistCount; i++) {
                    questions.push({
                        type: 'password',
                        name: `q3Panelist${i}`,
                        message: `${res['panelist' + i]} Do you like chocolate?`


                    },
                    )
                }

                prompt(questions).then(response => {
                    console.log(response)
                    // if (response.qOnePanelistOne === response.qOneContestant) {
                    //     console.log('Correct')
                    // } else {
                    //     console.log('Wrong!');
                    // } if (response.qTwoPanelistOne === response.qTwoContestant) {
                    //     console.log('Correct');
                    // } else {
                    //     console.log('Wrong');
                    // } if (response.qThreePanelistOne === response.qThreeContestant) {
                    //     console.log('Correct');
                    // } else {
                    //     console.log('Wrong');
                    // }
                })
            })
    })

