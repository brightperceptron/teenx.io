/**
 * ========================================
 * TeenX Bangladesh - Main JavaScript
 * ========================================
 * 
 * Author: TeenX Development Team
 * Date: 2026
 * Description: Core JavaScript functionality for TeenX Bangladesh website
 * Folder Structure: js/script.js
 * 
 * Features:
 * - Scroll reveal animation system
 * - Intersection Observer for viewport detection
 * - Dynamic element visibility based on scroll
 * 
 * Dependencies:
 * - AlpineJS (loaded via CDN in index.html)
 * - No external dependencies required for this file
 * ========================================
 */

/* ========================================
   SCROLL REVEAL ANIMATION SYSTEM
   ======================================== */

/**
 * Intersection Observer Configuration
 * 
 * Purpose:
 * - Detects when elements with class 'reveal' enter the viewport
 * - Automatically adds 'active' class to trigger CSS animations
 * - Provides smooth fade-in and slide-up effects during scroll
 * 
 * Configuration:
 * - threshold: 0.1 (element is 10% visible before triggering)
 * - Once active, elements stay in 'active' state
 * 
 * CSS Classes:
 * - .reveal: Initial state (opacity 0, transform down)
 * - .reveal.active: Final state (opacity 1, transform center)
 */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Check if element is intersecting (visible in viewport)
        if (entry.isIntersecting) {
            // Add active class to trigger reveal animation
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1  // Trigger when 10% of element is visible
});

/**
 * Observe All Reveal Elements
 * 
 * Process:
 * 1. Select all elements with class 'reveal' in the document
 * 2. Register each element with the IntersectionObserver
 * 3. Observer watches for when elements enter viewport
 * 4. Automatically adds 'active' class when element is visible
 */
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ========================================
   EXPANDABLE TEXT - SEE MORE/LESS FEATURE
   ======================================== */

/**
 * See More / See Less Functionality
 * 
 * Purpose:
 * - Adds ability to expand/collapse long paragraphs
 * - Shows first 3 lines by default with gradient fade
 * - Dynamically creates "See More" button
 * 
 * Usage:
 * Add class "expandable-text" to any paragraph
 * Button will auto-generate below the paragraph
 */
document.addEventListener('DOMContentLoaded', () => {
    const expandableTexts = document.querySelectorAll('.expandable-text');
    
    expandableTexts.forEach(textElement => {
        // Add collapsed class by default
        textElement.classList.add('collapsed');
        
        // Create see more button
        const button = document.createElement('button');
        button.className = 'see-more-btn';
        button.type = 'button';
        button.setAttribute('aria-expanded', 'false');
        button.textContent = 'See More';
        
        // Insert button after the text element
        textElement.parentNode.insertBefore(button, textElement.nextSibling);
        
        // Toggle functionality
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const isCollapsed = textElement.classList.contains('collapsed');
            
            if (isCollapsed) {
                textElement.classList.remove('collapsed');
                textElement.classList.add('expanded');
                button.textContent = 'See Less';
                button.setAttribute('aria-expanded', 'true');
            } else {
                textElement.classList.add('collapsed');
                textElement.classList.remove('expanded');
                button.textContent = 'See More';
                button.setAttribute('aria-expanded', 'false');
            }
        });
    });
});

/* End of script.js */
