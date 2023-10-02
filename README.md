# ShadowDOM
ShadowDOM with Cypress and LambdaTest
This repository demonstrates how to use ShadowDOM in combination with Cypress for testing web applications. 
Additionally, it leverages LambdaTest, a cloud-based cross-browser testing platform,  to ensure the compatibility of ShadowDOM components across different browsers and devices.=

**Prerequisites**

Before you begin, ensure you have the following installed or set up:

**Node.js **and npm (Node Package Manager) installed.
Cypress installed globally (npm install -g cypress).
**LambdaTest** account for cross-browser testing.

**Getting Started**

1.**Clone the repository:**
git clone <repository-url>
cd shadowdom-cypress-lambdatest

**2. Install dependencies:**

npm install

**3. Set up your LambdaTest credentials:**
Create a .env file in the project root and add your LambdaTest username and access key:
makefile
Copy code
LT_USERNAME=your-lambdatest-username
LT_ACCESS_KEY=your-lambdatest-access-key

**4.Write your Cypress tests** using ShadowDOM components. Example test in cypress/integration/shadowdom.spec.js:

**5.Run the Cypress tests**

