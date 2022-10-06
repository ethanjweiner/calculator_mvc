# Calculator

## REQUIREMENTS

UI:
- Operation window (top):
  - Displays the operation so far
- `entry` window:
  - Displays the current `entry` OR
  - The result so far
- Event handling (calculator buttons):
  - `CE`: Resets `entry` window to 0
  - `C`: Resets `entry` window to 0 AND operation window to blank
  - `NEG`: Reassigns `entry` window to additive inverse
  - Digits:
    - If waiting for new `entry` -> Replace `entry` window w/ digit
      - Waiting for new `entry` when:
        - Operation button just pressed
        - `entry` window is 0
  - Decimal (.): Append decimal to `entry` window
  - Operators:
    - Add the last entry to the `operation` window
    - Evaluate entire `operation` & add `result` to `entry` window
    - Append the operator to the `operation` window
  - `=`: 
    - Add the last `entry` to the `operation` widnow
    - Evaluate entire expression & add `result` to `entry` window
    - Clear the `operation` window

## APP ARCHITECTURE

MVC

Constants:

`OPERATIONS`: Maps string key operators -> functions

- `Model`:
  - Attributes:
    - `entry` (number)
    - `operation` (array of digits + operators)
    - `result` (number)
  - Methods:
    - `computeResult`: Evaluates the current `operation` -> stores in `result`
      - Utilizes `OPERATIONS`
      - Recursively applys functions in `OPERATIONS` to incrementally build `result`
    - `clearEntry`: Resets the `entry` to 0
    - `clear`: Calls `clearEntry` and resets the `operation` to empty
    - `negate`: Inverses the current `entry`

- `View`:
  - Displays the:
    - `entryWindow`
    - `operationWindow`
    - `buttonsWindow`
  - Events for each button "type":
    - `CE`
    - `C`
    - `NEG`
    - Digits
    - Operators
    - `=`
    - *alternative*: Single event for all buttons -> controller redirects flow?

- `Controller`:
  - Handlers:
    - Option 1: Handle all button clicks in one method
      - Conditionally execute the model depending on the button
      - Start with this
    - Option 2: Store conditional logic in view -> execute different controller handlers
      - Pro: More specific view events to react to
      - Con: Many callbacks passed as argument
      - Refactor to this if needed

## EDGE CASES

- Handle edge arithmetic cases same way JS does
- Clicking `0` only makes a difference if digits have alreadyy been entered
  - Ends up being same functionality as other digits (if 0 -> replace w/ 0,
  othewise append)
- Clicking an operator consecutive times