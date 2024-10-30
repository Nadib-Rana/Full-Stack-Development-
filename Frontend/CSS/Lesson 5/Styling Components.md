### Styling Components

| 🖼️ **Component**               | **Details**                                  | **Examples**                                 |
|--------------------------------|----------------------------------------------|----------------------------------------------|
| **Borders, Shadows, & Corners**| Adds style and depth with border-radius, shadows, and outlines | `border-radius: 5px;`, `box-shadow: 0px 4px 8px rgba(0,0,0,0.2);`, `outline: solid 2px blue;` |
| **Backgrounds & Overlays**     | Sets backgrounds and overlays for layers     | `background-color`, `background-image`, `overlay-color` |
| **Buttons, Icons & Images**    | Styles interactive elements                  | `button { padding: 10px; border-radius: 5px; }`, `img { border-radius: 50%; }` |

#### **Examples**

1. **Borders and Shadows**
   ```css
   .card {
     border-radius: 8px;
     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
     outline: solid 1px #ccc;
   }
   ```

2. **Backgrounds & Overlays**
   ```css
   .hero {
     background-image: url('image.jpg');
     background-size: cover;
     position: relative;
   }
   .overlay {
     background-color: rgba(0, 0, 0, 0.5); /* semi-transparent overlay */
   }
   ```

3. **Buttons, Icons & Images**
   ```css
   .button {
     padding: 10px 20px;
     border-radius: 4px;
     background-color: #008cba;
     color: #fff;
   }
   .icon {
     width: 24px;
     height: 24px;
   }
   .profile-image {
     border-radius: 50%;
   }
   ```
