# Personal Timeline Website

## Overview

Build a single-page interactive timeline website using vanilla HTML/CSS/JavaScript that tells your life story through six chapters with smooth animations and modern design.

## Structure

### Files Created

- `index.html` - Main HTML structure with timeline sections ✅
- `styles.css` - Styling for timeline, animations, and responsive design ✅
- `script.js` - Interactive features, scroll animations, and timeline navigation ✅
- `assets/` - Directory for images (placeholder images initially) ✅

## Key Features

### Timeline Design

- Vertical timeline with left-aligned content cards
- Animated timeline line that fills as user scrolls
- Timeline dots/nodes for each life chapter positioned on the left
- Smooth scroll-triggered animations (fade-in, slide-in effects)

### Six Life Chapters

1. **Birth** - Early years and family background
2. **Growing Up** - Childhood and teenage years
3. **College** - University experience and education
4. **Consulting @ PwC** - Professional career start
5. **Privacy @ Google** - Tech industry experience
6. **Leo's Pickles** - Current venture/passion project

### Interactive Elements

- Simple navigation with centered title only
- Smooth scrolling and timeline progress visualization
- Responsive design (mobile, tablet, desktop)
- Intersection Observer API for scroll animations
- Scroll-to-top button

## Design Approach

- Modern, clean aesthetic with good typography
- **Darker blue-dominant Warm Autumn Glow color scheme**: 
  - Deep blue (#003049) as dominant background and primary color
  - Vibrant red (#D62828) for accents
  - Bright orange (#F77F00) for highlights
  - Golden yellow (#FCBF49) for active elements and secondary text
  - Creamy beige (#EAE2B7) for card backgrounds
- Each chapter gets a card with title, date range, description, and pencil-drawing-style illustration placeholder
- Timeline connector running down the left side
- Subtle animations that enhance storytelling without being distracting
- **Compact responsive layout**: Content dynamically adjusts to screen size with tighter spacing
- **No color gradients**: Solid colors throughout for clean, cohesive appearance

## Current Implementation Status

### ✅ Completed Features
- HTML structure with six timeline sections
- CSS styling with left-aligned timeline layout
- JavaScript functionality for scroll animations
- Responsive design for all screen sizes
- Timeline progress indicator
- Scroll-to-top functionality
- Placeholder content for all six life chapters

### 🔄 Recent Changes Made
- **Timeline Layout**: Moved timeline line to the left side
- **Content Alignment**: Removed alternating left/right layout, now all content is left-aligned
- **Navigation**: Simplified navigation bar to show only the main title
- **Responsive Design**: Updated mobile layout to work with left-aligned timeline
- **Color Scheme**: Implemented darker blue-dominant Warm Autumn Glow palette throughout the site
- **Layout**: Made design more compact with responsive width adjustments (max-width: 900px desktop, 800px tablet)
- **Illustrations**: Prepared for pencil-drawing-style illustrations with new placeholder design
- **Background**: Removed color gradients, using solid dark blue background for cohesive appearance

## Extensibility

- Modular section structure to easily add more chapters later
- CSS variables for easy theme customization
- Commented code for easy content updates
- JavaScript method `addTimelineSection()` for dynamic section addition

## Next Steps

- Replace placeholder content with actual life story content
- **Add pencil-drawing-style illustrations** for each section (user will provide)
- Customize typography if desired
- Add more interactive features as needed
