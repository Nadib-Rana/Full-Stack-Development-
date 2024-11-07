

### **React Hooks**

#### **Goal**:
Understand how to use `useState` and `useEffect`, two fundamental hooks in React that allow functional components to handle state and lifecycle events.

---

#### **1. useState Hook**

- **Definition**: `useState` is a hook that lets you add state to function components. Before hooks, only class components could manage state. Now, function components can use `useState` to track and update data.
  
- **Syntax**:
  ```javascript
  const [state, setState] = useState(initialValue);
  ```

- **Example**:
  ```javascript
  import React, { useState } from 'react';

  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }
  ```

- **Explanation**:
  - `count` is the current state value.
  - `setCount` is a function to update `count`.
  - The button’s `onClick` event calls `setCount` to increment the count by 1 each time it’s clicked.

---

#### **2. useEffect Hook**

- **Definition**: `useEffect` is a hook for handling side effects in function components. This includes tasks like data fetching, updating the DOM, and managing timers. It serves a similar purpose as lifecycle methods (`componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`) in class components.

- **Syntax**:
  ```javascript
  useEffect(() => {
    // Your code here
    return () => {
      // Cleanup if necessary
    };
  }, [dependencies]);
  ```

- **Example**:
  ```javascript
  import React, { useState, useEffect } from 'react';

  function Timer() {
    const [time, setTime] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      // Cleanup function to clear interval when component unmounts
      return () => clearInterval(interval);
    }, []);

    return <p>Timer: {time}s</p>;
  }
  ```

- **Explanation**:
  - `setInterval` starts a timer that increments `time` by 1 every second.
  - The cleanup function (`clearInterval`) ensures that the timer stops when the component unmounts.
  - An empty dependency array (`[]`) makes this effect run only once after the initial render, similar to `componentDidMount`.

---

### **Connecting to Event Handling**

With the foundational understanding of `useState` and `useEffect`, you can now integrate **Event Handling** in your components.

   - **Example of Combining Hooks with Event Handling**:
     ```javascript
     import React, { useState, useEffect } from 'react';

     function ButtonWithEffect() {
       const [clicks, setClicks] = useState(0);

       useEffect(() => {
         console.log(`Button clicked ${clicks} times`);

         return () => console.log("Cleanup on re-render or unmount");
       }, [clicks]); // Runs whenever `clicks` changes

       const handleClick = () => {
         setClicks(clicks + 1);
       };

       return <button onClick={handleClick}>Clicked {clicks} times</button>;
     }
     ```

   - **Explanation**:
     - Each time `clicks` changes, the effect logs the updated number of clicks to the console.
     - `handleClick` updates the `clicks` state when the button is clicked, demonstrating how `useState` works alongside event handling.

---

### **Path Summary**
1. **useState and useEffect Hooks** → 2. **Event Handling**

By mastering these hooks and integrating them with event handling, you can manage state changes and side effects effectively in React function components. 
