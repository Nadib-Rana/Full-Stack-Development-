### Animations & Transitions: Comprehensive Guide

| 🎞️ **Concept**                     | **Details**                                                                 | **Examples**                                    |
|------------------------------------|-----------------------------------------------------------------------------|-------------------------------------------------|
| **Transitions**                    | Provides smooth changes between property states                             | `transition: opacity 0.4s ease;`                |
| **Duration**                       | Controls how long the transition effect lasts                               | `transition-duration: 0.6s;`                    |
| **Easing Functions**               | Creates more natural motion through easing types like `ease-in`, `ease-out` | `ease-in-out`, `cubic-bezier(0.25, 0.8, 0.25, 1)`|
| **Hover Effects**                  | Applies a transition effect on hover, enhancing interactivity               | `:hover { color: #008080; }`                    |

#### **Detailed Transition Properties**

1. **Transition Shorthand**
   ```css
   .box {
     transition: transform 0.5s ease-in-out, opacity 0.3s ease;
   }
   ```

2. **Hover with Transition Example**
   ```css
   .card {
     transition: box-shadow 0.3s ease;
   }
   .card:hover {
     box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
   }
   ```

---

| 🎞️ **Keyframe Animations**         | **Details**                                                          | **Examples**                                    |
|------------------------------------|----------------------------------------------------------------------|-------------------------------------------------|
| **Defining Keyframes**             | Establishes stages of animation, with specific percentages of progress | `@keyframes fade { from { ... } to { ... } }`   |
| **Applying Animations**            | Uses `animation` property to apply keyframes to an element           | `animation: bounce 1s infinite;`                |
| **Timing & Delay**                 | Sets start timing and intervals for the animation cycle              | `animation-delay: 0.5s;`                        |
| **Iteration Count**                | Defines how many times an animation should repeat                    | `animation-iteration-count: infinite;`          |
| **Alternate Direction**            | Makes animations play forwards, then backwards for a smoother loop   | `animation-direction: alternate;`               |

#### **Keyframe Animation: Comprehensive Example**

1. **Bounce Animation Example**
   ```css
   @keyframes bounce {
     0%, 100% { transform: translateY(0); }
     50% { transform: translateY(-20px); }
   }
   .ball {
     animation: bounce 0.8s ease-in-out infinite alternate;
   }
   ```

2. **Rotating Animation with Delay**
   ```css
   @keyframes rotate {
     0% { transform: rotate(0deg); }
     100% { transform: rotate(360deg); }
   }
   .spinner {
     animation: rotate 2s linear infinite;
     animation-delay: 0.5s;
   }
   ```

3. **Shorthand for Complex Animations**
   ```css
   .fade-slide {
     animation: fadeInSlide 1s ease-in-out 0.5s 3 normal forwards;
   }
   ```

   - **Explanation**:
     - **`fadeInSlide`**: Animation name
     - **`1s`**: Duration
     - **`ease-in-out`**: Easing
     - **`0.5s`**: Delay
     - **`3`**: Iteration count
     - **`normal`**: Direction (normal, reverse, alternate)
     - **`forwards`**: Animation fill mode
