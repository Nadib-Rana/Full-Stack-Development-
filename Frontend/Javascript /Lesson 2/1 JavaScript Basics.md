### 📜 JavaScript Basics

#### **1. Comments**
- **Single-line comments**: Use `//` for comments that occupy a single line.
  ```javascript
  // This is a single-line comment
  ```
- **Multi-line comments**: Use `/* ... */` for comments that span multiple lines.
  ```javascript
  /* 
     This is a 
     multi-line comment 
  */
  ```

#### **2. Variables**
- **Declaring Variables**:
  - **`var`**: Function-scoped variable declaration.
  - **`let`**: Block-scoped variable declaration (preferred for mutable variables).
  - **`const`**: Block-scoped variable declaration for constants (immutable).
  
  ```javascript
  var name = "Alice"; // Function scope
  let age = 25;       // Block scope
  const pi = 3.14;   // Block scope, constant
  ```

#### **3. Data Types**
- **Primitive Types**:
  - **String**: Represents text.
    ```javascript
    let greeting = "Hello, World!";
    ```
  - **Number**: Represents numeric values (integers or floats).
    ```javascript
    let score = 95.5;
    ```
  - **Boolean**: Represents true or false values.
    ```javascript
    let isPassed = true;
    ```
  - **Undefined**: A variable that has been declared but not assigned a value.
    ```javascript
    let notAssigned;
    ```
  - **Null**: Represents the intentional absence of any value.
    ```javascript
    let emptyValue = null;
    ```

- **Reference Types**:
  - **Object**: A collection of key-value pairs.
    ```javascript
    let person = { name: "Alice", age: 25 };
    ```
  - **Array**: An ordered list of values.
    ```javascript
    let colors = ["red", "green", "blue"];
    ```

#### **4. Operators**
- **Arithmetic Operators**: Used for mathematical calculations.
  - `+` (Addition), `-` (Subtraction), `*` (Multiplication), `/` (Division), `%` (Modulus)
  ```javascript
  let sum = 5 + 3;         // 8
  let difference = 10 - 2; // 8
  ```

- **Comparison Operators**: Used to compare values and return a boolean.
  - `==` (Equal), `===` (Strict Equal), `!=` (Not Equal), `!==` (Strict Not Equal), `<` (Less Than), `>` (Greater Than)
  ```javascript
  let isEqual = (5 == '5');   // true
  let isStrictEqual = (5 === '5'); // false
  ```

- **Logical Operators**: Used to combine or negate boolean values.
  - `&&` (Logical AND), `||` (Logical OR), `!` (Logical NOT)
  ```javascript
  let result = (true && false); // false
  let isTrue = !false;          // true
  ```
