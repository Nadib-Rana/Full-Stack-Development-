---

### 🎨 **Colors & Backgrounds**

#### **1. Color Values** 🌈
   - **Hexadecimal (`#rrggbb`)**: A six-digit format combining red, green, and blue values.
     - 📝 *Example*: `color: #ff5733;` – a vibrant orange-red color.
   - **RGB (`rgb(r, g, b)`)**: Defines colors by specifying values for red, green, and blue on a 0–255 scale.
     - 📝 *Example*: `color: rgb(255, 87, 51);` – same orange-red.
   - **RGBA (`rgba(r, g, b, a)`)**: Adds an alpha value for transparency, from 0 (fully transparent) to 1 (fully opaque).
     - 📝 *Example*: `color: rgba(255, 87, 51, 0.5);` – semi-transparent orange-red.
   - **HSL (`hsl(hue, saturation, lightness)`)**: Specifies colors with hue (0–360 degrees), saturation (0–100%), and lightness (0–100%).
     - 📝 *Example*: `color: hsl(10, 100%, 60%);` – also orange-red.
   - **HSLA (`hsla(hue, saturation, lightness, alpha)`)**: HSL with transparency.
     - 📝 *Example*: `color: hsla(10, 100%, 60%, 0.5);` – semi-transparent orange-red.

#### **2. Backgrounds** 🌅

   - **Background Color**: Sets a solid color as the background.
     - 🌈 *Example*: `background-color: #333;` – dark gray background.

   - **Background Images**: Adds an image as the background.
     - 🌆 *Example*: `background-image: url('image.jpg');` – sets an image background.
     - **Background Repeat**: Controls if/how the image repeats.
       - *Example*: `background-repeat: no-repeat;` – prevents tiling.
     - **Background Size**: Specifies the size of the background image.
       - *Example*: `background-size: cover;` – scales to cover the element fully.
     - **Background Position**: Sets the position of the image within the element.
       - *Example*: `background-position: center;`

   - **Gradients**: Adds color transitions to create smooth blends.
     - **Linear Gradient**: Transition of colors along a straight line.
       - 🌈 *Example*: `background-image: linear-gradient(to right, #ff5733, #3333ff);` – gradient from orange to blue.
     - **Radial Gradient**: Transition radiating out from a central point.
       - 🌈 *Example*: `background-image: radial-gradient(circle, #ff5733, #3333ff);` – circular gradient.

#### **3. Background Layers** 📚
   - **Multiple Backgrounds**: Stack multiple backgrounds with commas.
     - *Example*: `background: url('texture.png'), linear-gradient(to bottom, #333, #000);` – overlays an image on a gradient.
   
