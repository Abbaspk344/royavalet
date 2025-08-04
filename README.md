# Royavalet Parking UAE - Premium Valet Services Website

A modern, responsive website for Royavalet Parking UAE, built with React.js, Tailwind CSS, and Framer Motion. This website showcases premium valet parking services across the UAE with stunning animations and full mobile responsiveness.

## 🚀 Features

### Design & User Experience
- **Fully Responsive Design** - Optimized for all screen sizes (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, professional design with intuitive navigation
- **Smooth Animations** - Powered by Framer Motion for engaging user interactions
- **Auto-scrolling Image Carousel** - Dynamic hero section with rotating images
- **Interactive Components** - Expandable service cards, testimonial carousel, image gallery

### Technical Features
- **React.js 18** - Modern React with hooks and functional components
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Framer Motion** - Advanced animations and transitions
- **React Router** - Client-side routing for smooth navigation
- **Error Boundaries** - Graceful error handling and recovery
- **Performance Optimized** - Lazy loading, image optimization, and code splitting
- **Accessibility First** - ARIA labels, keyboard navigation, screen reader support

### Content Sections
- **Hero Section** - Eye-catching carousel with call-to-action buttons
- **Services** - Comprehensive valet parking services with expandable details
- **Technology** - Modern tech features and capabilities
- **How We Help** - Interactive expandable content explaining benefits
- **Gallery** - Behind-the-scenes photos with modal viewing
- **Testimonials** - Customer reviews with star ratings and navigation
- **Partners** - Trusted business partnerships and collaborations
- **Contact** - Multiple contact methods and newsletter subscription

## 🛠️ Technology Stack

- **Frontend Framework**: React.js 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Error Handling**: React Error Boundary
- **Build Tool**: Vite
- **Package Manager**: npm
- **Development**: ESLint, Hot Module Replacement

## 📱 Responsive Design

The website is fully responsive across all devices:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

All components adapt seamlessly to different screen sizes with optimized layouts and touch-friendly interactions.

## 🎨 Design Highlights

### Color Scheme
- **Primary**: Teal (600-800) - Professional and trustworthy
- **Secondary**: Green (200-500) - Fresh and modern
- **Accent**: Gray (50-800) - Clean and sophisticated
- **Text**: High contrast for accessibility

### Typography
- **Headings**: Bold, large fonts for impact
- **Body Text**: Readable, well-spaced content
- **Buttons**: Clear, action-oriented labels

### Animations
- **Page Transitions**: Smooth fade-in effects
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive feedback on all clickable elements
- **Loading States**: Elegant loading indicators

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/royavalet-website.git
   cd royavalet-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero carousel section
│   ├── Services.jsx     # Services showcase
│   ├── Technology.jsx   # Technology features
│   ├── HowWeHelp.jsx    # Help section with expandables
│   ├── BehindGlassEye.jsx # Gallery section
│   ├── Testimonials.jsx # Customer testimonials
│   ├── Partners.jsx     # Business partners
│   ├── Footer.jsx       # Footer with contact info
│   └── OptimizedImage.jsx # Performance-optimized images
├── utils/               # Utility functions
│   ├── accessibility.js # Accessibility helpers
│   └── performance.js   # Performance optimization
├── __tests__/           # Test files
│   └── App.test.jsx     # Main app tests
├── App.jsx              # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## 🎯 Key Components

### Header
- Responsive navigation with mobile menu
- Smooth scroll to sections
- Contact information display
- Professional branding

### Hero Section
- Auto-scrolling image carousel
- Compelling headlines and CTAs
- Responsive image optimization
- Smooth transition effects

### Services
- Interactive expandable service cards
- Detailed service descriptions
- Professional icons and imagery
- Mobile-optimized layout

### Testimonials
- Customer review carousel
- Star rating system
- Navigation controls
- Real customer feedback

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Your custom colors
        }
      }
    }
  }
}
```

### Content
- Update text content in component files
- Replace images in the `public` directory
- Modify contact information in `Footer.jsx`
- Update service details in `Services.jsx`

### Animations
Customize animations in component files using Framer Motion:

```javascript
const customVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

## 📞 Contact Information

**Royavalet Parking UAE**
- **Phone**: +971 52 658 1431, +971 50 829 9151
- **Email**: sales@royaletparking.co, info@royaletparking.co
- **Services**: Dubai, Abu Dhabi, Sharjah, and across UAE

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Unsplash** - High-quality stock images
- **Framer Motion** - Smooth animations
- **Tailwind CSS** - Utility-first styling
- **React Community** - Excellent documentation and support

---

**Built with ❤️ for Royavalet Parking UAE**

*Providing premium valet parking services across the United Arab Emirates*
