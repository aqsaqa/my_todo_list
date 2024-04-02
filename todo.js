// //#! /usr/bin/env node
// import inquirer from "inquirer";
// let tasks:string[]= [];
// let pos:number;
// let n=1
// while(n>0){
//     console.log("\n TO DO LIST APP")
//     let opt= await inquirer.prompt([{
//         name: "a",
//         type: "list",
//         message: "Select an Option",
//         choices: ['Add Task','Delete Task','Show List','Exit']
//     }])
//     if (opt.a === "Show list"){
//         console.log("\n TO DO LIST:")
//         console.log(tasks.join("\n"))
//     }
//     if (opt.a ==='Add Task'){
//         let task= await inquirer.prompt([{
//             name: "a",
//             type: "string",
//             message: "\n Enter New Task"
//         }])
//         tasks.push(task.a)
//         console.log("Sucessfully added to the list")
//     }
//     if (opt.a === 'Delete Task'){
//         let del= await inquirer.prompt([{
//             name: "a",
//             type: "list",
//             message: '\n Select my Task to Delete',
//             choices: [...tasks]
//         }])
//         pos=tasks.indexOf(del.a)
//         delete tasks[pos]
//         console.log("Sucessfully Deleted from the list")
//     }
//     if (opt.a === 'Exit'){
//         break
//     }
// }
import inquirer from "inquirer";
let todos = [];
let conditions = true;
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: "What you want to add in your Todos?,"
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: "Do you want to add more?",
            default: "false"
        }
    ]);
    todos.push(addTask.todo);
    conditions = addTask.addMore;
    console.log(todos);
}
