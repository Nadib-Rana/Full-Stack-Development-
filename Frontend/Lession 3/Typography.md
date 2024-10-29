 **Fonts & Text Styling**, **Text Alignment & Decoration**, and **Text Shadows**:

---

### 🅰️ **Fonts & Text Styling**

| Property          | Definition                                      | Example                                      |
|-------------------|-------------------------------------------------|----------------------------------------------|
| **Font Families**  | Specifies the typeface.                        | `font-family: 'Arial', sans-serif;`         |
| **Font Size**     | Sets the size of the text.                     | `font-size: 16px;`                          |
| **Font Weight**   | Controls the thickness of the font.            | `font-weight: bold;`                        |
| **Font Style**    | Specifies the style (normal, italic, oblique).| `font-style: italic;`                       |
| **Line Height**   | Space above and below inline elements.         | `line-height: 1.5;`                         |
| **Letter Spacing**| Adjusts space between characters.              | `letter-spacing: 2px;`                      |

---

### ✍️ **Text Alignment & Decoration**

| Property               | Definition                                                    | Example                                           |
|------------------------|--------------------------------------------------------------|---------------------------------------------------|
| **Text Align**         | Aligns text within an element (left, center, right, justify).| `text-align: center;`                             |
| **Vertical Align**     | Aligns inline or table-cell elements vertically (top, middle, bottom). | `vertical-align: middle;`                         |
| **Text Decoration**    | Adds decorations to text (none, underline, overline, line-through). | `text-decoration: underline;`                     |
| **Text Transform**     | Controls text casing (uppercase, lowercase, capitalize).    | `text-transform: uppercase;`                      |
| **Letter Spacing**     | Adjusts space between characters.                           | `letter-spacing: 1px;`                            |
| **Word Spacing**       | Adjusts space between words.                                | `word-spacing: 2px;`                              |

---

### ✍️ **Text Shadows**

| Property            | Definition                                                   | Example                                          |
|---------------------|-------------------------------------------------------------|--------------------------------------------------|
| **Text Shadow**     | Adds shadow effects to text.                                | `text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);` |
| **Horizontal Offset** | Horizontal distance of the shadow from the text.          | `text-shadow: 2px 0px;`                         |
| **Vertical Offset** | Vertical distance of the shadow from the text.              | `text-shadow: 0px 2px;`                         |
| **Blur Radius**     | Defines the blurriness of the shadow.                       | `text-shadow: 0px 0px 5px;`                     |
| **Color**           | Specifies the color of the shadow.                           | `text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);` |

---

### Example Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Styling Example</title>
    <style>
        .styled-text {
            /* Fonts & Text Styling */
            font-family: 'Arial', sans-serif;        /* Font Family */
            font-size: 24px;                         /* Font Size */
            font-weight: bold;                       /* Font Weight */
            font-style: italic;                      /* Font Style */
            line-height: 1.5;                        /* Line Height */
            letter-spacing: 1px;                     /* Letter Spacing */
            color: #333;                             /* Text Color */
            
            /* Text Alignment & Decoration */
            text-align: center;                       /* Text Align */
            text-decoration: underline;               /* Text Decoration */
            text-transform: uppercase;                /* Text Transform */
            
            /* Text Shadows */
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Text Shadow */
        }
    </style>
</head>
<body>
    <div class="styled-text">
        This is a styled text example with CSS properties!
    </div>
</body>
</html>
```

### Explanation of the CSS Properties Used:

1. **Fonts & Text Styling**:
   - **Font Family**: Sets the typeface to Arial.
   - **Font Size**: Increases the text size to 24 pixels.
   - **Font Weight**: Makes the text bold.
   - **Font Style**: Italicizes the text.
   - **Line Height**: Sets the spacing between lines to 1.5 times the font size.
   - **Letter Spacing**: Adds a 1-pixel space between characters.

2. **Text Alignment & Decoration**:
   - **Text Align**: Centers the text within the div.
   - **Text Decoration**: Underlines the text.
   - **Text Transform**: Converts all text to uppercase.

3. **Text Shadows**:
   - **Text Shadow**: Creates a shadow effect with a 2-pixel horizontal offset, 2-pixel vertical offset, a 4-pixel blur radius, and a semi-transparent black color.

### Preview

When you run this HTML code, you'll see a centered text that is bold, italicized, underlined, and with a shadow effect, showcasing various CSS text properties in action!
