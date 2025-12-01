# Fleety Static Website

A static marketing website for Fleety - Premium food delivery in Bangalore.

## 🚀 Quick Deploy

### GitHub Pages

1. Create a new repository on GitHub
2. Upload all files from this folder
3. Go to Settings → Pages
4. Select `main` branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Vercel

1. Visit [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository or upload these files
4. Deploy (no configuration needed)
5. Your site will be live with a custom `.vercel.app` domain

### Netlify

1. Visit [netlify.com](https://netlify.com)
2. Drag and drop this folder into the deployment area
3. Your site will be live instantly

## 📁 File Structure

```
fleety-static/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Features

- ✅ Fully responsive design
- ✅ Mobile-friendly navigation
- ✅ Smooth scrolling
- ✅ Contact form
- ✅ Waitlist signup
- ✅ Download app dropdown
- ✅ SEO optimized
- ✅ Fast loading (uses Tailwind CDN)

## 🛠️ Customization

### Update Images

All images are currently hosted on external URLs. To use your own images:

1. Replace the image URLs in `index.html`
2. Or create an `assets/images/` folder and update the paths

### Update Colors

The primary brand color is `#1FA4FF` (Fleety Blue). To change:

1. Search for `#1FA4FF` in `index.html` and `styles.css`
2. Replace with your preferred color code

### Update Content

All text content is in `index.html`. Simply edit the text between HTML tags.

### Add Analytics

To add Google Analytics or other tracking:

1. Open `index.html`
2. Add your tracking script before the closing `</head>` tag

## 📱 Sections

1. **Navigation** - Fixed navbar with smooth scroll
2. **Hero** - Main landing section with tagline
3. **How It Works** - 3-step process explanation
4. **The Fleety Promise** - Core value propositions
5. **For Restaurants** - Partner information
6. **For Riders** - Rider recruitment
7. **Expansion** - Waitlist signup form
8. **Contact Us** - Email and phone contact
9. **Footer** - Links and company info

## 🔗 Links

Update these placeholder links in `index.html`:

- Download on Android (line ~70)
- Download on iOS (line ~71)
- Privacy Policy (footer)
- Terms of Service (footer)

## 📧 Form Submission

The waitlist form currently shows a browser alert. To connect to a real backend:

1. Open `script.js`
2. Find the `handleWaitlistSubmit` function
3. Replace the `console.log` with an API call to your backend

Example:
```javascript
fetch('/api/waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email })
});
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This website is created for Fleety. All rights reserved.

## 💡 Support

For questions or issues, contact: support@fleety.in

---

**Built with ❤️ for Fleety**