# Algorithm - DNA Pairing

The aim of this algorithm challenge was to create a function that takes in a string parameter. This string comprises of consecutive letters of the alphabet. The aim is to find the missing letter and return that letter. If there is no missing letter in the sequence, return undefined.

Examples:

- A string of 'abce' would return 'd'.
- A string of 'abcd' would return undefined.

There are also test cases created, as following TDD helps process the logic and ensure that the implementation continues to work when refactored/changed. This also helps by breaking down the challenge into the required acceptence criteria.

## Documentation

Below is a list of methods I used with links to the relevant MDN page.

- [If statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [For loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [String.prototype.charCodeAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
- [String.fromCharChode()](https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/string/fromcharcode)
- [typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) (negative pathway handling)
- [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) (negative pathway handling)

## Acknowledgments

This algorithm challenge was provided by [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures). Although they do provide some happy path test cases, I wanted to keep practising using Jest.

## Dev Dependencies

- Jest was used for creating test cases

## Installation

To see the code and tests in action follow the below terminal commands:

Ensure that you have [Git](https://git-scm.com/) installed. If not you can just download the files to your computer.

```
git clone (name of repo url/ssh here)
```

```
cd (project-name here)
```

```
npm install
```

```
npm test
```
