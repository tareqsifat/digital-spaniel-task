# Digital Spaniel Homepage

A modern, responsive React homepage for Digital Spaniel creative agency, built with Redux Toolkit for state management, Tailwind CSS for styling, and featuring mock API data generated with Faker.js.

## 🚀 Features

### Core Requirements Met
- ✅ **Redux Toolkit State Management**: Complete implementation with async actions and proper state structure
- ✅ **Mock API with Faker**: Dynamic content generation for testimonials, case studies, projects, and more
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✅ **Digital Spaniel Branding**: Integrated company logo and brand colors

### Interactive Components
- **Sticky Navigation**: Hides on scroll down, reappears on scroll up
- **Mobile Menu**: Hamburger menu with smooth slide animations
- **Tabbed Project Slider**: Filter projects by category with smooth transitions
- **Case Studies Carousel**: 3D-style slider with navigation arrows
- **Testimonials Slider**: Auto-rotating testimonials with manual controls
- **Masonry Gallery**: Dynamic image layout in the About section
- **Contact Form**: Fully functional form with validation
- **Hover Animations**: Smooth transitions and micro-interactions throughout

## 🛠 Tech Stack

- **Frontend**: React 18 with JSX
- **State Management**: Redux Toolkit with async thunks
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui components
- **Icons**: Lucide React
- **Mock Data**: Faker.js for realistic content generation
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx       # Sticky navigation with mobile menu
│   ├── Hero.jsx         # Landing section with animations
│   ├── Services.jsx     # Services grid with hover states
│   ├── Projects.jsx     # Tabbed project slider
│   ├── CaseStudies.jsx  # Case studies carousel
│   ├── About.jsx        # About section with masonry gallery
│   ├── Testimonials.jsx # Auto-rotating testimonials
│   ├── Contact.jsx      # Contact form and information
│   └── Footer.jsx       # Footer with newsletter signup
├── store/               # Redux store configuration
│   ├── store.js         # Store setup
│   └── slices/          # Redux slices
│       ├── dataSlice.js # Data management with async actions
│       └── uiSlice.js   # UI state management
├── data/
│   └── mockData.js      # Faker.js mock data generation
├── hooks/
│   └── useRedux.js      # Custom Redux hooks
├── assets/              # Static assets
└── App.jsx              # Main application component
```

## 🎨 Design Features

### Responsive Breakpoints
- **Mobile**: < 768px - Stacked layout, hamburger menu
- **Tablet**: 768px - 1024px - Adjusted grid layouts
- **Desktop**: > 1024px - Full layout with all features

### Animations & Interactions
- **Blob animations** in hero section
- **Smooth scrolling** navigation
- **Hover effects** on all interactive elements
- **Loading states** for async data
- **Micro-interactions** throughout the interface

### Accessibility
- **Semantic HTML** structure
- **ARIA labels** for interactive elements
- **Keyboard navigation** support
- **Focus indicators** for all interactive elements

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/tareqsifat/digital-spaniel-task
   cd digital-spaniel-task
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📱 Mobile Responsiveness

The application is fully responsive with:
- **Mobile-first design** approach
- **Touch-friendly** interactions
- **Optimized images** for different screen sizes
- **Collapsible navigation** for mobile devices
- **Readable typography** across all devices

## 🎯 Redux Implementation

### State Structure
```javascript
{
  data: {
    testimonials: { data: [], loading: false, error: null },
    caseStudies: { data: [], loading: false, error: null },
    projects: { data: [], loading: false, error: null },
    services: { data: [], loading: false, error: null },
    teamMembers: { data: [], loading: false, error: null },
    galleryImages: { data: [], loading: false, error: null }
  },
  ui: {
    mobileMenuOpen: false,
    activeTestimonial: 0,
    activeCaseStudy: 0,
    activeProject: 0,
    headerVisible: true,
    // ... other UI state
  }
}
```

### Async Actions
- **fetchTestimonials**: Loads testimonial data with simulated API delay
- **fetchCaseStudies**: Loads case study data
- **fetchProjects**: Loads project portfolio data
- **fetchServices**: Loads service offerings
- **fetchTeamMembers**: Loads team information
- **fetchGalleryImages**: Loads gallery images for masonry layout

## 🎨 Styling Approach

### Tailwind CSS Configuration
- **Custom color palette** matching Digital Spaniel branding
- **Custom animations** for enhanced user experience
- **Responsive utilities** for all breakpoints
- **Component-based styling** for maintainability

### Custom CSS
- **Blob animations** for hero section
- **Smooth scrolling** behavior
- **Line clamp utilities** for text truncation

## 🚀 Performance Optimizations

- **Lazy loading** for images in gallery
- **Efficient re-renders** with proper React keys
- **Optimized bundle size** with tree shaking
- **Cached API responses** in Redux store

## 📋 Task Requirements Checklist

- ✅ **Sticky Navigation**: Implemented with scroll detection
- ✅ **Services Hover State**: "Brand Strategy" shows active state
- ✅ **Mobile Menu**: Hamburger menu with slide animations
- ✅ **Link Hover Animations**: Custom hover effects on all links
- ✅ **Project Tabs & Slider**: Fully functional with smooth transitions
- ✅ **Case Studies Slider**: 3D carousel with arrow navigation
- ✅ **Masonry Gallery**: Dynamic layout in About section
- ✅ **Testimonials Slider**: Auto-rotating with manual controls
- ✅ **Redux Integration**: Complete state management implementation
- ✅ **Mock API**: Faker.js integration for dynamic content
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Modern React**: ES6+ features and hooks

## 🎯 Future Enhancements

- **TypeScript**: Convert to TypeScript for better type safety
- **Testing**: Add unit and integration tests
- **Performance**: Implement virtual scrolling for large lists
- **Accessibility**: Enhanced screen reader support
- **SEO**: Add meta tags and structured data
- **PWA**: Progressive Web App capabilities

## 📞 Contact

For questions about this implementation, please contact the development team.

---

**Note**: This project was built as a technical demonstration focusing on React best practices, Redux state management, and responsive design principles.

