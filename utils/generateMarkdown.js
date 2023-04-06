// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'No license') {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'No license') {
    return `     -[License](#license)`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No license') {
    return `## License
    The license for this project is the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}

 ## Description
  ${data.projectDescription}

## Table of Content
      - [Installation](#installation)
      - [Usage](#usage)
${renderLicenseLink(data.license)}
    -[Contributing](#contributing)
      - [Test](#Test)
      - [Questions](#questions)

## Installation
  ${data.installationRequirements}

## Usage
  ${data.projectUsage}

${renderLicenseSection(data.license)}

## Contributing
  ${data.contributionGuidelines}

  ## Test
  ${data.testingInstructions}

  ## Questions
  If you have any questions please reachout to me at ${data.email} 
  
  Github Profile: [${data.githubUsername}](https://github.com/${data.githubUsername})   
        `;
  }

module.exports = generateMarkdown;
