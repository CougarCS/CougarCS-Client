# CougarCS Client

CougarCS is the largest student-run Computer Science organization at the University of Houston. At CougarCS, our mission is to smoothly transition our inexperienced members into young professionals by the end of their degree and to provide support and assistance to members who struggle academically or who need career guidance.

This is the official CougarCS Frontend. This project is built with React using create-react-app. Want to get involved? Get in contact with the CougarCS Webmaster(webmaster@cougarcs.com) to get involved.

<br/>
<hr/>
<br/>

![Build](https://img.shields.io/github/workflow/status/CougarCS/CougarCS-Client/Install,%20Build,%20Deploy?label=actions) ![Known Vulnerabilities](https://snyk.io/test/github/badges/shields/badge.svg?targetFile=badge-maker/package.json)

# Libraries

- Styling : [Bootstrap](https://github.com/react-bootstrap/react-bootstrap)
- Forms : [React-hook-form](https://github.com/react-hook-form/react-hook-form)
- Payment : [Stripe](https://stripe.com/docs)
- Request : [Axios](https://github.com/axios/axios)
- Linting: [ESLint](https://eslint.org/)
- Testing: [Cypress](https://www.cypress.io/)

# Getting Started

- ## Requirements
  - [NodeJS](https://nodejs.org/en/) version 12+
  - We use [Yarn](https://yarnpkg.com/getting-started/install) as our package manager
- ## Installation
  - Install dependencies: `yarn`
  - Start local server: `yarn start`
  - The local server will start on [http://localhost:3000](http://localhost:3000)
- ## Optional Setup:
  - If you want to test out the payment or the reCAPTCHA, create a `.env` file in the root project folder. You must clone the [CougarCS-Backend](https://github.com/CougarCS/CougarCS-Backend) for full functionality. Reach out to the CougarCS Webmaster(webmaster@cougarcs.com) to setup the backend.
  - You must have a [Stripe](https://stripe.com/) account and [Google's reCAPTCHA](https://www.google.com/recaptcha/about/).
  - In the `.env` file include these:
  ```
  REACT_APP_STRIPE_KEY=<STRIPE_TEST_PUBLISHABLE_KEY>
  REACT_APP_RECAPTCHA_SITE_KEY=<KEY_ID>
  ```
- ## Linting
  - We use ESLint to fix styling and to enforce rules.
  - Run `yarn run eslint-check` to check linting issues in the code.
  - Run `yarn run eslint-fix` to auto-lint the code.
  - ESLint runs on Github Action. ESLint must pass before pushing or during a pull request.

- ## Testing
  - We use [Cypress](https://www.cypress.io/) to do E2E testing
  - To run the tests locally:
      - Start the application locally using ```yarn start```
      - There are two ways you can run the test:
          - Running the test in the command line ```yarn test```
          - Running test using Cypress GUI ```yarn test:ui```
  - The tests are part of the CI/CD pipeline, if the test fails the CI/CD fails
  - Learn more about testing using [Cypress](https://docs.cypress.io/guides/overview/why-cypress)

- ## Project Structure
  - Static data is in `src/data/`
  - Images and other assets are in `src/assets/`
  - The routing is found in `src/App.js`
  - The `src/pages/` directory will have the pages based on the routing.
  - The `src/components/` will hold the components that make up the page.

# Current Deployment

The site is being deployed to a temporary server via an auto-deploy tool that deploys the build/ folder of this build. Static files are being served at this time only.
