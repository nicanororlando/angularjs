# Form State and Input State

AngularJS is constantly updating the state of both the form and the input fields.

Input fields have the following states:

$untouched: The field has not been touched yet
$touched: The field has been touched
$pristine: The field has not been modified yet
$dirty: The field has been modified
$invalid: The field content is not valid
$valid: The field content is valid
They are all properties of the input field, and are either true or false.

Forms have the following states:

$pristine: No fields have been modified yet
$dirty: One or more have been modified
$invalid: The form content is not valid
$valid: The form content is valid
$submitted: The form is submitted

# CSS Classes

AngularJS adds CSS classes to forms and input fields depending on their states.

The following classes are added to, or removed from, input fields:

ng-untouched: The field has not been touched yet
ng-touched: The field has been touched
ng-pristine: The field has not been modified yet
ng-dirty: The field has been modified
ng-valid: The field content is valid
ng-invalid: The field content is not valid
ng-valid-key: One key for each validation. Example: ng-valid-required, useful when there are more than one thing that must be validated
ng-invalid-key: Example: ng-invalid-required
The following classes are added to, or removed from, forms:

ng-pristine: No fields has not been modified yet
ng-dirty: One or more fields has been modified
ng-valid: The form content is valid
ng-invalid: The form content is not valid
ng-valid-key: One key for each validation. Example: ng-valid-required, useful when there are more than one thing that must be validated
ng-invalid-key: Example: ng-invalid-required

The classes are removed if the value they represent is false.
