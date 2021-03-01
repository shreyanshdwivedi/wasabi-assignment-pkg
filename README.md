# wasabi-assignment-pkg
NPM module to submit-generate-fetch user bucket assignment data in Wasabi

[![npm (scoped)](https://img.shields.io/npm/v/wasabi-assignment.svg)](https://www.npmjs.com/package/wasabi-assignment)

## Install

```
$ npm install wasabi-assignment
```

## Usage

The function in the package takes 7 params as argument out of which 4 are compulsory and 3 are optional.
We'll be explaining the significance of the seven params here :

- __wasabiURL__ : The URL where your wasabi is hosted. If it is on local, it'll be http://localhost:8080
- __userID__ : The unique ID of the user for which asssignment is being done.
- __appName__ : The Application Name (mentioned while creating the experiment on WASABI).
- __experimentLabel__ : The Experiment Label (mentioned while creating the experiment on WASABI).
- __context (optional)__ : Optional param. This param specifies context for the experiment, e.g. PROD, QA. By default it is 'PROD'.
- __createAssignment (optional)__ : Optional param. This specifies whether an assignment should be generated if one doesn't exist. By default it is 'true'.
- __ignoreSamplingPercent (optional)__ : Optional param. This specifies whether the sampling percent for the experiment should be ignored, forcing the user into the experiment (if eligible). By default it is 'false'.


```js
const wasabiAssignment = require('wasabi-assignment');

const data = await wasabiAssignment(wasabiURL, userID, appName, experimentLabel, context(optional), createAssignment(optional), ignoreSamplingPercent(optional));
console.log(data);

// => {
//      "cache": true,
//      "payload": "orange",
//      "assignment": "BucketB",
//      "context": "PROD",
//      "status": "EXISTING_ASSIGNMENT"
//    }
```
