// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === "none"){
  return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [How to Use This Application](#howtoUseThisApplication)
* [Contributors](#contributors)
* [Test Instructions](#testinstructions)
* [Questions](#questions)
## installation
${data.installation}
## How to Use This Application:
${data.usage}
## Contributors
${data.contributors}
## Test Instructions
${data.test}
## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}
module.exports = generateMarkdown;
