// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Storage Error State
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

export interface StorageErrorStateProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (screen: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
  state?: unknown;
}

export function StorageErrorState(_props: StorageErrorStateProps = {}) {
  return (
    <>
      {/* Error State Overlay (Backdrop for dimming effect) */}
      <div className="fixed inset-0 bg-surface-dim/80 z-40 pointer-events-none flex items-center justify-center pointer-events-auto backdrop-blur-sm">
      {/* Error Modal Container */}
      <div className="bg-surface-container border border-surface-variant rounded-xl shadow-2xl p-xl max-w-lg w-full mx-gutter flex flex-col items-center text-center relative z-50">
      {/* Warning Icon */}
      <div className="bg-error-container/20 text-error rounded-full p-md mb-lg">
      <span className="material-symbols-outlined text-display font-display" style={{fontVariationSettings: "'FILL' 1"}}>cloud_off</span>
      </div>
      {/* Error Heading */}
      <h2 className="font-h1 text-h1 text-error mb-sm">Persistence Error</h2>
      {/* Descriptive Message */}
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
                      We encountered an issue saving your application data. This might be due to a corrupted local state, restricted browser settings, or reaching your device's storage limits.
                  </p>
      {/* Technical Details Toggle (Optional context for ops center) */}
      <div className="w-full bg-surface-container-low border border-surface-variant rounded-lg p-md mb-xl text-left">
      <p className="font-label-md text-label-md text-on-surface-variant uppercase mb-sm">Diagnostic Info</p>
      <code className="font-code text-code text-error bg-surface px-sm py-xs rounded block whitespace-pre-wrap break-all">DOMException: Failed to execute 'setItem' on 'Storage': Setting the value of 'app_state_v2' exceeded the quota.</code>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-md w-full justify-center">
      <button className="bg-primary text-on-primary font-body-lg text-body-lg font-medium rounded-lg h-touch-target px-lg hover:bg-primary-fixed-dim transition-colors flex-1 flex justify-center items-center gap-sm">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>refresh</span>
                          Retry Connection
                      </button>
      <button className="border border-error text-error font-body-lg text-body-lg font-medium rounded-lg h-touch-target px-lg hover:bg-error-container/30 transition-colors flex-1 flex justify-center items-center gap-sm">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>delete_forever</span>
                          Reset Application Data
                      </button>
      </div>
      <p className="font-label-md text-label-md text-error mt-md text-center opacity-80">
                      Warning: Resetting data will clear unsaved local drafts.
                  </p>
      </div>
      </div>
      {/* SideNavBar (Dimmed/Disabled Appearance) */}
      <nav aria-label="Sidebar" className="hidden md:flex flex-col h-full py-md px-sm bg-surface-container bg-surface-container-low fixed left-0 top-0 h-full w-64 border-r border-surface-container-low opacity-40 pointer-events-none z-10">
      {/* Brand / Header */}
      <div className="mb-xl px-sm flex items-center gap-md">
      <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-on-surface-variant" style={{fontVariationSettings: "'FILL' 1"}}>spa</span>
      </div>
      <div>
      <h1 className="font-h2 text-h2 text-primary font-bold tracking-tight">Greenhouse Ops</h1>
      <p className="font-label-md text-label-md text-on-surface-variant mt-xs">Maintenance Console</p>
      </div>
      </div>
      {/* Navigation Links */}
      <ul className="flex-1 space-y-unit">
      <li>
      <a className="flex items-center gap-md px-md h-touch-target rounded-lg text-on-surface-variant" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>dashboard</span>
      <span className="font-body-md text-body-md">Dashboard</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md h-touch-target rounded-lg text-on-surface-variant" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>assignment</span>
      <span className="font-body-md text-body-md">Task Board</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md h-touch-target rounded-lg text-on-surface-variant" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>precision_manufacturing</span>
      <span className="font-body-md text-body-md">Equipment</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md h-touch-target rounded-lg text-on-surface-variant" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>database</span>
      <span className="font-body-md text-body-md">Logs</span>
      </a>
      </li>
      </ul>
      {/* CTA */}
      <div className="mt-auto pt-lg">
      <button className="w-full flex items-center justify-center gap-sm bg-surface-variant text-on-surface-variant h-touch-target rounded-lg font-body-md text-body-md font-medium" disabled={true}>
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>add</span>
                      Create Task
                  </button>
      </div>
      </nav>
      {/* Main Content Area (Dimmed/Disabled Appearance) */}
      <div className="flex-1 ml-0 md:ml-64 flex flex-col min-h-screen opacity-40 pointer-events-none z-10">
      {/* TopAppBar */}
      <header className="flex justify-between items-center h-touch-target px-lg py-md bg-surface border-b border-surface-container-lowest sticky top-0 z-20">
      <div className="md:hidden">
      <h1 className="font-h2 text-h2 text-primary font-bold tracking-tight">Greenhouse Ops</h1>
      </div>
      {/* Search Bar placeholder */}
      <div className="flex-1 max-w-md mx-lg hidden md:block">
      <div className="relative bg-surface-container rounded-lg h-10 flex items-center px-md border border-outline-variant">
      <span className="material-symbols-outlined text-on-surface-variant mr-sm" style={{fontVariationSettings: "'FILL' 0"}}>search</span>
      <span className="font-body-md text-body-md text-on-surface-variant">Search equipment, logs...</span>
      </div>
      </div>
      <div className="flex items-center gap-sm">
      <button aria-label="Sync" className="w-touch-target h-touch-target rounded-full flex items-center justify-center text-on-surface-variant">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>sync</span>
      </button>
      <button aria-label="Account" className="w-touch-target h-touch-target rounded-full flex items-center justify-center text-on-surface-variant">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>account_circle</span>
      </button>
      </div>
      </header>
      {/* Canvas Area (Fake background content) */}
      <main className="flex-1 p-gutter bg-background">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      <div className="bg-surface-container border border-surface-variant rounded-xl h-64 p-lg">
      <div className="h-6 w-1/3 bg-surface-variant rounded mb-md"></div>
      <div className="h-full bg-surface-container-low rounded"></div>
      </div>
      <div className="bg-surface-container border border-surface-variant rounded-xl h-64 p-lg md:col-span-2">
      <div className="h-6 w-1/4 bg-surface-variant rounded mb-md"></div>
      <div className="h-full bg-surface-container-low rounded"></div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
