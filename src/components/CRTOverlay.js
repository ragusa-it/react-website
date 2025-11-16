import React, { memo } from 'react';

/**
 * CRTOverlay Component
 * Simulates a CRT monitor effect with:
 * - Scanlines
 * - Screen flicker
 * - Vignette overlay
 * - RGB separation
 * - Slight screen curvature
 */
const CRTOverlay = memo(() => {
  return (
    <>
      {/* Scanlines */}
      <div
        className="crt-scanlines fixed top-0 left-0 w-full h-full pointer-events-none z-50"
        aria-hidden="true"
      />

      {/* Flicker overlay */}
      <div
        className="crt-flicker fixed top-0 left-0 w-full h-full pointer-events-none z-50"
        aria-hidden="true"
      />

      {/* Vignette */}
      <div
        className="crt-vignette fixed top-0 left-0 w-full h-full pointer-events-none z-50"
        aria-hidden="true"
      />

      {/* RGB Separation (subtle) */}
      <div
        className="crt-rgb fixed top-0 left-0 w-full h-full pointer-events-none z-50 mix-blend-screen opacity-30"
        aria-hidden="true"
      />
    </>
  );
});

CRTOverlay.displayName = 'CRTOverlay';

export default CRTOverlay;
