<!-- 
================================================================================
                    TeenX BANGLADESH - PROJECT DOCUMENTATION
================================================================================

PROJECT: TeenX Bangladesh Official Website
VERSION: 1.0.0
LAST UPDATED: March 2026

================================================================================
                            FOLDER ARCHITECTURE
================================================================================

teenxapple/
│
├── index.html                    # Main HTML document with page structure
│   ├── HEAD Section
│   │   ├── Meta tags and viewport configuration
│   │   ├── CDN dependencies (Tailwind, Fonts, Alpine.js)
│   │   ├── Tailwind configuration (colors, fonts)
│   │   └── External stylesheet reference → css/style.css
│   │
│   └── BODY Section
│       ├── Navigation Component
│       ├── Hero Section
│       ├── Institutional Structure Section
│       ├── Strategic Roadmap Section
│       ├── Governance & Transparency Section
│       ├── National Network Section
│       ├── Secretariat Application Section
│       ├── Global Strategic Affiliations
│       ├── Footer Section
│       └── External script reference → js/script.js
│
├── css/
│   └── style.css                # Centralized stylesheet
│       ├── Global body styles
│       ├── Glass morphism effects (.apple-glass, .glass-card)
│       ├── Typography utilities (.hero-text)
│       ├── Accessibility features ([x-cloak])
│       ├── Scroll reveal animations (.reveal, .reveal.active)
│       ├── Layout utilities (.container-custom)
│       └── Form styling (input/textarea focus states)
│
├── js/
│   └── script.js                # Core JavaScript functionality
│       ├── Intersection Observer initialization
│       ├── Scroll reveal animation system
│       └── Viewport detection and element activation
│
└── assets/
    ├── logo/
    │   └── logo.svg             # TeenX main logo (SOURCE: assets/logo/)
    │
    └── image/
        ├── leaders/             # Leadership team photos
        ├── projects/            # Project showcase images
        └── teams/               # Team/division photos

================================================================================
                        ASSET PATHS & REFERENCES
================================================================================

All asset imports follow the folder architecture pattern:

1. LOGO REFERENCE
   - From: assets/logo/
   - Usage: <img src="assets/logo/logo.svg" alt="teenx logo">
   
2. FUTURE IMAGE REFERENCES (placeholder locations)
   - Leaders: <img src="assets/image/leaders/[filename]">
   - Projects: <img src="assets/image/projects/[filename]">
   - Teams: <img src="assets/image/teams/[filename]">

3. STYLESHEET REFERENCE
   - From: css/
   - Usage: <link rel="stylesheet" href="css/style.css">
   
4. JAVASCRIPT REFERENCE
   - From: js/
   - Usage: <script src="js/script.js"></script>

================================================================================
                        KEY FEATURES & COMPONENTS
================================================================================

1. NAVIGATION COMPONENT
   - Fixed positioning with glass morphism effect
   - Responsive mobile menu using Alpine.js state (mobileMenu)
   - Links to main sections (Structure, Roadmap, Governance, Network)
   - Logo placement from assets/logo/

2. HERO SECTION
   - Main brand messaging and call-to-action
   - "Under Construction" notice
   - Dual CTAs (Join Secretariat, Download Audit)

3. INSTITUTIONAL STRUCTURE (Tabbed Interface)
   - Alpine.js state: activeTab (leadership/secretariat)
   - Leadership tab: 3 executive roles
   - Secretariat tab: 4 departments (FinOps, Legal, Communications, IT)

4. STRATEGIC ROADMAP (Timeline)
   - 2026: Infrastructure Consolidation
   - 2027: Policy Integration
   - 2030: Regional Leadership Hub

5. GOVERNANCE & TRANSPARENCY
   - Document vault with 4 documents
   - Hover effects on cards
   - Emphasis on institutional transparency

6. NATIONAL NETWORK
   - 64 District Envoys
   - 8 Divisional Hubs
   - 1 Central Secretariat
   - Interactive map placeholder

7. SECRETARIAT APPLICATION
   - Netlify form integration (name="secretariat-application")
   - Fields: Name, Email, Expertise, Cover Note
   - Dark theme styling
   - Auto-handled by Netlify Forms

8. RESPONSIVE DESIGN
   - Tailwind CSS responsive classes
   - Mobile-first approach
   - Breakpoints: mobile, sm, md, lg
   - Custom container max-width: 1200px

================================================================================
                        TECHNOLOGY STACK
================================================================================

DEPENDENCIES (via CDN):
1. Tailwind CSS 3 - Utility-first CSS framework
   - Custom color palette (Apple-inspired)
   - Custom fonts (Inter typeface)
   
2. Google Fonts - Inter typeface family
   - Weights: 100, 300, 400, 500, 600, 700, 800
   
3. Alpine.js 3.x - Lightweight reactive framework
   - State management (mobileMenu, activeTab)
   - Event handling (@click directives)
   - Conditional rendering (x-show, x-cloak)

LOCAL FILES:
1. css/style.css - Custom styles and animations
2. js/script.js - Scroll reveal functionality

================================================================================
                        ANIMATIONS & INTERACTIONS
================================================================================

1. SCROLL REVEAL SYSTEM
   - CSS Classes: .reveal, .reveal.active
   - JavaScript: IntersectionObserver API
   - Threshold: 10% element visibility
   - Animation: 0.8s fade-in + slide-up effect
   - Easing: cubic-bezier(0.2, 0, 0, 1)

2. GLASS MORPHISM EFFECTS
   - Classes: .apple-glass, .glass-card
   - Backdrop blur: 20px
   - Saturate: 180%
   - Semi-transparent backgrounds

3. Mobile MENU
   - Alpine.js state controlled
   - Hamburger icon with animated transitions
   - Fixed positioning overlay

4. FORM INTERACTIONS
   - Focus states with custom styling
   - Netlify form auto-handling
   - Input validation (required fields)

================================================================================
                        BROWSER COMPATIBILITY
================================================================================

TESTED ON:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

REQUIREMENTS:
- CSS Grid support
- Flexbox support
- Backdrop-filter support
- JavaScript ES6+ support
- Intersection Observer API support

================================================================================
                        CUSTOMIZATION GUIDE
================================================================================

1. TO CHANGE COLORS:
   - Edit Tailwind config in index.html <script> tag
   - Or use Tailwind utility classes directly

2. TO ADD IMAGES:
   - Place in appropriate assets/image/ subfolder
   - Update src attribute with correct path: assets/image/[folder]/[file]

3. TO MODIFY STYLES:
   - Edit css/style.css
   - Maintain comment structure for clarity
   - Follow existing CSS organization

4. TO ADD JAVASCRIPT:
   - Add functions to js/script.js
   - Keep proper documentation comments
   - Avoid inline scripts in HTML

5. TO UPDATE CONTENT:
   - Edit text directly in index.html sections
   - Maintain semantic HTML structure
   - Keep class names for styling integrity

================================================================================
                        NOTES & BEST PRACTICES
================================================================================

1. All CSS is centralized in css/style.css for maintainability
2. All JavaScript is centralized in js/script.js for performance
3. Logo path fixed from CDN to local assets/logo/logo.svg
4. Proper inline comments added throughout HTML
5. Responsive design uses Tailwind's mobile-first approach
6. Alpine.js provides lightweight state management
7. Scroll animations use native IntersectionObserver API
8. Form submission handled by Netlify Forms
9. Glass morphism effects enhance modern aesthetic
10. Folder structure supports future asset scaling

================================================================================
                        FORM SUBMISSION SETUP
================================================================================

To enable Netlify form submissions:
1. Deploy to Netlify
2. Form: name="secretariat-application" will auto-register
3. Submissions appear in Netlify dashboard
4. Email notifications (optional via Netlify settings)

Network form fields:
- name (text input, required)
- email (email input, required)
- expertise (select dropdown, required)
- message (textarea, optional)

================================================================================
-->
