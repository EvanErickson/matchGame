var inqurier= require("inquirer")


inqurier.prompt ([
    {
        type:"input",
        name:"text",
        message:"yo whats good fam"
    },
    {
        type:"input",
        name:"lol",
        message:"evan has a cool name"
    }
])
.then(response =>{
console.log(response)})