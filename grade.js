import inquirer from "inquirer";
// Create a grading system that takes subject marks as input from the user through prompts and returns the corresponding grades using functions and if-else conditions.
function myGrade() {
    return new Promise((resolve) => {
        inquirer
            .prompt([
            {
                type: "number",
                name: "grade",
                message: "Your Obtainted Marks? : \n",
                validate: (ans) => {
                    if (!ans || ans > 100) {
                        return "Enter Valid Number";
                    }
                    return true;
                },
            },
        ])
            .then((answers) => {
            if (answers.grade >= 90 && answers.grade <= 100) {
                console.log("A");
            }
            else if (answers.grade > 100) {
                console.log("Invalid: Marks exceeds the limit");
            }
            else if (answers.grade >= 80 && answers.grade < 90) {
                console.log("B+");
            }
            else if (answers.grade >= 70 && answers.grade < 80) {
                console.log("B");
            }
            else if (answers.grade >= 60 && answers.grade < 70) {
                console.log("C");
            }
            else {
                console.log("Fail");
            }
            resolve(`This is your Grade.`);
        });
    });
}
async function gradeTeller() {
    do {
        await myGrade();
        var myIq = await inquirer.prompt({
            type: "input",
            name: "redo",
            message: "Do you want to Check another Grade? if YES press (y) if NO press (n).",
        });
    } while (myIq.redo === "Y" || myIq.redo === "y");
}
gradeTeller();
// export {};
