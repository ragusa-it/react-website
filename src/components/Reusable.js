// src/components/Reusable.js
import React, { memo } from 'react';

/**
 * A reusable section wrapper component with consistent padding.
 */
export const Section = memo(({ children, id, className = '' }) => (
  <section id={id} className={`py-20 scroll-mt-20 ${className}`}>
    {children}
  </section>
));

Section.displayName = 'Section';

/**
 * A reusable card component with consistent styling for sections.
 * Updated to match the dark monochrome theme with green glow.
 */
export const SectionCard = memo(({ children, className = '' }) => (
    <div className={`blur-card rounded-lg p-8 mx-auto transition-all duration-300 hover:blur-card-hover hover:glow-green hover:-translate-y-1 ${className}`}>
        {children}
    </div>
));

SectionCard.displayName = 'SectionCard';
