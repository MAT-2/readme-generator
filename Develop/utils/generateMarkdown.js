// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "") {
    return console.log("");
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "") {
    return console.log("");
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "") {
    return console.log("");
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  1. Description
  2. Installation
  3. Usage
  4. License
  5. Contributors
  6. Testing

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage};

  ## License
  Please refer to ${data.license}

  ## Contributing
  ${data.contributors}

  ## Tests
  ${data.test}

  ## Questions
  GitHub Profile: ${data.username}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
