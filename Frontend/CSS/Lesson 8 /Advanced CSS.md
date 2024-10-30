### Advanced CSS

| 🖇️ **Topic**                     | **Details**                                                           | **Examples**                                  |
|----------------------------------|-----------------------------------------------------------------------|-----------------------------------------------|
| **CSS Variables**                | Custom properties that store values, reusable with `var(--name)`      | `--main-color: #3498db;`                      |
| **CSS Preprocessors (Sass)**     | Extend CSS with variables, nesting, functions, and mixins             | `$color-primary: #3498db;`                    |
| **Responsive Techniques**        | Use Flexbox and Grid for flexible, responsive layouts                 | `display: flex; display: grid;`               |

#### 🖇️ **CSS Variables**

CSS variables allow you to store and reuse values, improving consistency and simplifying updates.

```css
:root {
  --main-bg-color: #f4f4f4;
  --primary-color: #3498db;
  --font-size: 16px;
}
.container {
  background-color: var(--main-bg-color);
  color: var(--primary-color);
  font-size: var(--font-size);
}
```

#### 🖇️ **CSS Preprocessors (Sass)**

Sass provides advanced features like variables, nesting, and functions for cleaner and more efficient CSS.

```scss
// Variables
$primary-color: #3498db;
$padding: 16px;

.button {
  background-color: $primary-color;
  padding: $padding;
  &:hover {
    background-color: darken($primary-color, 10%);
  }
}
```

#### 🖇️ **Responsive Techniques: Flexbox & Grid**

1. **Flexbox for Responsive Layouts**

   Flexbox adjusts elements within a container and supports responsive adjustments with `justify-content` and `align-items`.

   ```css
   .flex-container {
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     gap: 10px;
   }
   .flex-item {
     flex: 1 1 200px; /* Flex-grow, flex-shrink, and base size */
   }
   ```

2. **Grid Layout for Complex Responsive Designs**

   CSS Grid provides a powerful layout for rows, columns, and complex responsive designs with properties like `grid-template-columns` and `grid-gap`.

   ```css
   .grid-container {
     display: grid;
     grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
     grid-gap: 20px;
   }
   .grid-item {
     background-color: #ddd;
     padding: 20px;
   }
   ```

### Example Table for Comparison

| 🖇️ **Technique**       | **Purpose**                           | **Examples**                                                      |
|------------------------|---------------------------------------|-------------------------------------------------------------------|
| **CSS Variables**      | Reusable values across stylesheets    | `--main-color: #333; color: var(--main-color);`                   |
| **Sass (CSS Preprocessor)** | Advanced styling features         | `$color-primary: #3498db; .btn { color: $color-primary; }`        |
| **Flexbox**            | Responsive, one-dimensional layout    | `display: flex; justify-content: space-between;`                  |
| **CSS Grid**           | Responsive, two-dimensional layout    | `display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 15px;`
