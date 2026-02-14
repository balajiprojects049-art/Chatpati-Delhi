# 🎨 Customization Guide - Chatpati Delhi Website

## Quick Customization Reference

This guide shows you exactly where to change common elements in your website.

---

## 🎨 Change Colors

**File:** `src/index.css`

Find the `:root` section at the top (around line 10):

```css
:root {
  /* Brand Colors - Change these! */
  --primary-gold: #D4AF37;      /* Main brand color */
  --secondary-gold: #F0D97D;    /* Lighter accent */
  --dark-gold: #B8921F;         /* Darker variant */
  --white: #FFFFFF;
  --cream: #FFF8E7;             /* Light background */
  --black: #1A1A1A;             /* Text color */
  --gray: #6B6B6B;              /* Secondary text */
  --light-gray: #F5F5F5;        /* Section backgrounds */
  --orange-accent: #FF6B35;     /* Extra accent */
}
```

**Example:** To change to a blue theme:
```css
--primary-gold: #2563EB;      /* Blue instead of gold */
--secondary-gold: #60A5FA;    /* Light blue */
--dark-gold: #1E40AF;         /* Dark blue */
```

---

## 📝 Change Restaurant Name & Tagline

**File:** `src/App.jsx`

### In Navigation (Line ~60):
```jsx
<h1>Chatpati Delhi</h1>
<p>Food Served With Love</p>
```

### In Hero Section (Line ~92):
```jsx
<h1>Authentic Delhi Street Food</h1>
<p>Experience the vibrant flavors of Delhi's finest chaats and traditional dishes</p>
```

---

## 🍽️ Edit Menu Items

**File:** `src/App.jsx`

Find the `menuData` object (starting around line 12):

```jsx
const menuData = {
  traditional: [
    { name: 'Pani Puri (Gol Gappe)', price: '$4.65' },
    { name: 'Dahi Puri', price: '$4.65' },
    // Add more items here
  ],
  // More categories...
}
```

### To Add a New Item:
```jsx
{ name: 'Your New Dish Name', price: '$9.99' },
```

### To Remove an Item:
Just delete the line or comment it out with `//`

### To Add a New Category:
```jsx
newCategory: [
  { name: 'Dish 1', price: '$5.00' },
  { name: 'Dish 2', price: '$7.00' },
],
```

Then add it to the menu section around line 200:
```jsx
<div className="menu-card">
  <div className="menu-card-header">
    <div className="menu-icon">🍕</div>
    <h3>New Category Name</h3>
  </div>
  <ul className="menu-items">
    {menuData.newCategory.map((item, index) => (
      <li key={index} className="menu-item">
        <span className="menu-item-name">{item.name}</span>
        <span className="menu-item-price">{item.price}</span>
      </li>
    ))}
  </ul>
</div>
```

---

## 📞 Change Contact Information

**File:** `src/App.jsx`

Find the Contact Section (around line 470):

```jsx
<p>
  <strong>📍 Location:</strong><br />
  Fratelli PSA, 109,823, 5th Ave, USA
</p>
<p>
  <strong>📞 Phone:</strong><br />
  <a href="tel:+17324999387">
    +1 (732) 499-9387
  </a>
</p>
<p>
  <strong>📧 Email:</strong><br />
  <a href="mailto:info@chatpatidelhi.com">
    info@chatpatidelhi.com
  </a>
</p>
```

**Also update in Footer** (around line 520):
```jsx
<p>📍 Fratelli PSA, 109,823, 5th Ave, USA</p>
<p>📞 +1 (732) 499-9387</p>
<p>📧 info@chatpatidelhi.com</p>
```

---

## 🕒 Change Business Hours

**File:** `src/App.jsx`

Find the Footer section (around line 525):

```jsx
<div className="footer-section">
  <h3>Hours</h3>
  <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
  <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
</div>
```

---

## 🖼️ Replace Logo with Real Image

### Step 1: Save your logo
Save your logo file as `logo.png` in the `public/images/` folder

### Step 2: Update the logo in code

**File:** `src/App.jsx`

Find all instances of the SVG logo data and replace with:

```jsx
<img 
  src="/images/logo.png" 
  alt="Chatpati Delhi Logo" 
  className="logo"
/>
```

Do this in:
1. Navigation section (around line 63)
2. Hero section (around line 86)

---

## ✏️ Change Fonts

**File:** `src/index.css`

### Step 1: Import new Google Fonts (around line 32):
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@300;400;500;600&display=swap');
```

Visit [Google Fonts](https://fonts.google.com) to find fonts you like.

### Step 2: Update font variables (around line 13):
```css
--font-heading: 'Montserrat', sans-serif;
--font-body: 'Roboto', sans-serif;
```

---

## 🎯 Change Category Icons

**File:** `src/App.jsx`

Find menu cards and change the emoji icons:

```jsx
<div className="menu-icon">🥗</div>  {/* Change this emoji */}
```

Available emoji options:
- 🍛 🍜 🍝 🍕 🍔 🍟 🌮 🌯 🥙 🥗 🍱 🍲
- 🍰 🎂 🍪 🍩 🧁 🥧 🍦 🍨 🍧 🍡 🍢
- 🥘 🍳 🥚 🧀 🥓 🥞 🧇 🥖 🥐 🥨

---

## 📏 Adjust Spacing

**File:** `src/index.css`

Find spacing variables (around line 16):

```css
--spacing-xs: 0.5rem;   /* Extra small */
--spacing-sm: 1rem;     /* Small */
--spacing-md: 2rem;     /* Medium */
--spacing-lg: 4rem;     /* Large */
--spacing-xl: 6rem;     /* Extra large */
```

Increase or decrease these values to change spacing throughout the site.

---

## 🔘 Change Button Styles

**File:** `src/index.css`

Find button radius (around line 21):

```css
--radius-sm: 8px;    /* Small corners */
--radius-md: 12px;   /* Medium corners */
--radius-lg: 20px;   /* Large corners */
```

For fully rounded buttons, set to `50px` or `100px`.

---

## 🌈 Change Background Patterns

### Option 1: Hide Patterns Completely

**File:** `src/index.css`

Add this to hide patterns:

```css
.honeycomb-pattern,
.abstract-pattern {
  display: none;
}
```

### Option 2: Change Pattern Colors

**File:** `src/index.css`

Find the pattern styles (around line 250):

```css
.honeycomb-pattern {
  background: 
    linear-gradient(rgba(26, 26, 26, 0.9), rgba(26, 26, 26, 0.8)),
    /* Change the rgba(212, 175, 55, 0.1) to your color */
}
```

### Option 3: Use Solid Color Background

Replace hero section background:

```css
.hero {
  background: linear-gradient(135deg, #D4AF37 0%, #B8921F 100%);
}
.honeycomb-pattern,
.abstract-pattern {
  display: none;
}
```

---

## 📱 Change Mobile Breakpoint

**File:** `src/index.css`

Find the media query (around line 700):

```css
@media (max-width: 768px) {
  /* Mobile styles */
}
```

Change `768px` to adjust when the mobile layout activates.

---

## 🎬 Disable Animations

**File:** `src/index.css`

To turn off the floating logo animation:

```css
@keyframes float {
  0%, 100% {
    transform: translateY(0);  /* Remove the floating */
  }
  50% {
    transform: translateY(0);  /* Keep it still */
  }
}
```

Or remove the animation entirely:

```css
.hero-logo {
  animation: none;  /* No animation */
}
```

---

## 📄 Change Page Title & SEO

**File:** `index.html`

```html
<title>Chatpati Delhi | Authentic Delhi Street Food & Indian Restaurant</title>
<meta name="description" content="Your new description here" />
<meta name="keywords" content="your, keywords, here" />
```

---

## 🔗 Add Social Media Links

**File:** `src/App.jsx`

Find the footer social links (around line 540):

```jsx
<div className="social-links">
  <a href="https://facebook.com/yourpage" className="social-link">📘</a>
  <a href="https://instagram.com/yourpage" className="social-link">📷</a>
  <a href="https://twitter.com/yourpage" className="social-link">🐦</a>
</div>
```

Replace `#` with your actual social media URLs.

---

## 💡 Pro Tips

### After Making Changes:
1. **Save the file** (Ctrl + S)
2. **The browser will auto-refresh** - Vite does this automatically!
3. **Check the terminal** for any errors

### Common Mistakes:
- ❌ Forgetting commas in menu arrays
- ❌ Mismatched quotes (' vs ")
- ❌ Missing closing tags
- ❌ Typos in variable names

### Testing Changes:
1. Make small changes one at a time
2. Save and check the result
3. If something breaks, undo (Ctrl + Z) and try again

---

## 🆘 Need Help?

If you break something:
1. Check the terminal for error messages
2. Undo recent changes (Ctrl + Z)
3. Restart the dev server:
   ```bash
   # Press Ctrl + C to stop
   npm run dev  # Start again
   ```

---

## 📚 Quick Reference

| What to Change | File | Line |
|---|---|---|
| Colors | `src/index.css` | ~10 |
| Restaurant Name | `src/App.jsx` | ~60, ~92 |
| Menu Items | `src/App.jsx` | ~12 |
| Contact Info | `src/App.jsx` | ~470, ~520 |
| Logo | `src/App.jsx` | ~63, ~86 |
| Fonts | `src/index.css` | ~13, ~32 |
| Page Title | `index.html` | ~7 |

---

**Happy customizing! 🎨✨**
