### 🔑 Event Handling

Event handling in JavaScript allows you to respond to user interactions and other events that occur on web pages. Understanding how to add event listeners and manage event propagation is essential for creating interactive web applications.

#### **1. Adding Event Listeners**

An event listener is a function that is called when a specified event occurs on a target element. You can add event listeners using the `addEventListener` method.

- **Syntax**:
  ```javascript
  element.addEventListener(event, function, useCapture);
  ```

- **Example**:
  ```javascript
  const button = document.querySelector("button");
  
  // Add a click event listener
  button.addEventListener("click", function() {
      alert("Button clicked!");
  });
  ```

- **Removing Event Listeners**: You can also remove an event listener using `removeEventListener`.
  ```javascript
  const handleClick = function() {
      alert("Button clicked!");
  };

  button.addEventListener("click", handleClick);
  // To remove the event listener
  button.removeEventListener("click", handleClick);
  ```

#### **2. Understanding Event Propagation**

Event propagation refers to the way events travel through the DOM tree when an event occurs. There are two main phases of event propagation: **bubbling** and **capturing**.

##### **Bubbling**
- In the bubbling phase, the event starts from the target element and bubbles up to the root of the DOM tree. This means that the innermost element where the event occurred is the first to receive the event, followed by its parent elements.
  
- **Example**:
  ```html
  <div id="parent">
      <button id="child">Click Me!</button>
  </div>
  ```

  ```javascript
  const parent = document.getElementById("parent");
  const child = document.getElementById("child");

  parent.addEventListener("click", function() {
      alert("Parent div clicked!");
  });

  child.addEventListener("click", function() {
      alert("Button clicked!");
  });
  ```

  - If you click the button, it will alert "Button clicked!" first, then "Parent div clicked!" due to bubbling.

##### **Capturing**
- In the capturing phase, the event starts from the root of the DOM tree and travels down to the target element. This is less commonly used but can be specified in the `addEventListener` method by setting the `useCapture` parameter to `true`.

- **Example**:
  ```javascript
  parent.addEventListener("click", function() {
      alert("Parent div clicked in capturing phase!");
  }, true); // Setting useCapture to true for capturing phase
  ```

In this case, if you click the button, you will first see "Parent div clicked in capturing phase!" before "Button clicked!" due to capturing.

#### **3. Event Object**
When an event occurs, an event object is created that contains information about the event. You can access this object in the event handler function.

- **Example**:
  ```javascript
  button.addEventListener("click", function(event) {
      console.log(event.type); // Output: "click"
      console.log(event.target); // Output: the button element
  });
  ```
