// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Links](#links)
* [Questions](#questions)

## Installation
Install necessary dependencies with ${data.install} command.

## Usage
${data.repoInfo}

## License
Licensed under ${data.licenses} license.

## Contributing
${data.repoContribute}

# Tests
Use ${data.test} command to test repo.

## Links
https://${data.username}.github.io/
https://github.com/${data.username}/

## Questions? Comments? Concerns?
Email ${data.email} with any questions.
`;
}

module.exports = generateMarkdown;
