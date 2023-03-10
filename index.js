const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user  with each validation statement logs
const questions = () => {
  return inquirer.prompt([
    // Question #1 - Project Title
    {
      type: "input",
      name: "title",
      message: "What is the title of your project? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a title for your project");
          return false;
        }
      },
    },
    // Question #2 - Project Description
    {
      type: "input",
      name: "description",
      message: "Please provide a brief description of your project",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a description for your project");
          return false;
        }
      },
    },
    // Question #3 - Installation
    {
      type: "input",
      name: "installation",
      message: "Please provide installation insturctions for your project",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            "Please enter installation instructions for your project"
          );
          return false;
        }
      },
    },
    // Question #4 - Usage
    {
      type: "input",
      name: "usage",
      message: "Please provide usage information for your project",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter usage information for your project");
          return false;
        }
      },
    },
    // Question #5 -  License
    {
      type: "list",
      name: "license",
      message: "Choose a software license for this project (Required)",
      choices: ["MIT", "AGPL-3.0", "GPL-3.0", "N/A"],
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please choose a license for your project");
          return false;
        }
      },
    },
    // Question #6 - Contribution
    {
      type: "input",
      name: "contribution",
      message: "Enter your contribution guidelines for this project (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter contribution guidelines for your project");
          return false;
        }
      },
    },
    // Question #7 - Test
    {
      type: "input",
      name: "test",
      message: "Enter your testing guidelines for this project (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter testing guidelines for your project");
          return false;
        }
      },
    },
    // Question #8 - Github Username
    {
      type: "input",
      name: "github",
      message: "Enter your github username (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your github username");
          return false;
        }
      },
    },
    // Question #9 - Email
    {
      type: "input",
      name: "email",
      message: "Enter your email address (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your email address");
          return false;
        }
      },
    },
  ]);
};

// function to write README file

function writeFile(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      "./generated-readme/README.md",
      generateMarkdown(data),
      (error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve({
          ok: true,
          message: console.log(
            "Successfully created README.md file in generated-readme folder!"
          ),
        });
      }
    );
  });
}

// function to initialize program
function init() {
  questions().then((data) => {
    writeFile(data);
  });
}

// function call to initialize program
init();
