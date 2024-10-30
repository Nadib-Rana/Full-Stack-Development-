### Responsive Design Guide

| 📱 **Concept**               | **Details**                                                        | **Examples**                                    |
|------------------------------|--------------------------------------------------------------------|-------------------------------------------------|
| **Media Queries**            | Adapts styles based on screen width or other conditions            | `@media (max-width: 600px) { ... }`             |
| **Breakpoints**              | Key screen sizes for responsive adjustments                       | Small: 576px, Medium: 768px, Large: 992px       |
| **Responsive Units**         | Flexible units based on viewport or parent size                   | `font-size: 2vw; padding: 5%;`                  |
| **Mobile-First Design**      | Starts with mobile styles as default; adds rules for larger sizes | Use `@media` for tablets, desktops              |

#### **Advanced Media Query Example**

```css
/* Mobile-first */
.container { font-size: 1rem; }
/* Tablet */
@media (min-width: 768px) {
  .container { font-size: 1.25rem; }
}
/* Desktop */
@media (min-width: 992px) {
  .container { font-size: 1.5rem; }
}
```

| 📱 **Fluid Layouts**         | **Details**                                                        | **Examples**                                    |
|------------------------------|--------------------------------------------------------------------|-------------------------------------------------|
| **Percentages**              | Scales with container size                                        | `width: 80%; height: 60%;`                      |
| **Viewport Units (vh/vw)**   | Scale based on viewport height and width                          | `height: 100vh; width: 100vw;`                  |
| **Flexible Sizing**          | Dynamically resizes based on screen size                          | `min-width: 50%; max-width: 100%;`              |

#### **Fluid Layout Example with Viewport Units**

```css
.section {
  width: 90vw; /* 90% of viewport width */
  height: 70vh; /* 70% of viewport height */
  padding: 1rem;
}
```

#### **Additional Responsive Techniques**

- **Flexbox & Grid Adaptations**: Using Flexbox or Grid for automatic adjustments
  ```css
  .flex-container {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    .flex-container { flex-direction: row; }
  }
  ```
- **Container Queries**: Adjust styles based on the container's size, useful for modular design approaches. 
