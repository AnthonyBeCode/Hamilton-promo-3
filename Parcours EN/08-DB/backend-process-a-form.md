# Backend - Process a form

Processing an external input (for example, via an html form) must **ALWAYS** go through these steps, and in this order.

1. Sanitiser
1. Confirm
1. Execute
1. Display (or redirect)

## Sanitiser
Sanitization is used to prevent toxic contents from entering your system. This is to avoid corruption of your system, typically through malicious hacker attacks, or clumsiness of your users.

![Security check](https://github.com/becodeorg/BeCode/wiki/assets/airport-security-check.jpg)

## Validate
The validation serves to verify that the provided input(s) are adapted to the constraints of your application (e.g. if the email is required to register, you must verify that the form contains a valid email address: accept john@doe.com, but refuse john@doe). Here is a metaphor illustrating a validation that went wrong...

![Something wrong](https://github.com/becodeorg/BeCode/wiki/assets/validation-gone-wrong.jpg)

The input has a configuration not planned by the system conceived by the aircraft designers.

## Execute

During execution, system changes are made (typically CRUD: create, read, update and/or delete data in a databse)

![Start](https://github.com/becodeorg/BeCode/wiki/assets/code-execution.gif)

Typically, pressing this button will trigger a series of operations hidden for users, but allowing you to change the system (motor off > motor on).

## Display new status in interface

As the system has changed, the interface presented to the user must reflect this change.
For example: return html displaying confirmation message or error message or via a redirection in PHP (via `header ("Location: file. extension");`).
