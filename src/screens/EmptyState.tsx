// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Empty State
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

export interface EmptyStateProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (screen: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
  state?: unknown;
}

export function EmptyState(_props: EmptyStateProps = {}) {
  return (
    <>
      {/* SideNavBar Component */}
      <nav className="bg-surface-container dark:bg-surface-container fixed left-0 top-0 h-full w-64 bg-surface-container-low hidden md:flex flex-col py-md px-sm z-50">
      <div className="mb-xl px-sm">
      <h1 className="font-h2 text-h2 text-primary">Greenhouse Ops</h1>
      <p className="font-label-md text-label-md text-on-surface-variant mt-unit">Maintenance Console</p>
      </div>
      <ul className="flex flex-col gap-unit flex-grow">
      {/* Dashboard (Active based on context/intent of general entry point, though "Task Board" might also fit if it's task specific. We'll default to Dashboard for empty state overview) */}
      <li>
      <a className="flex items-center gap-md px-md h-touch-target rounded-lg text-primary font-bold border-r-2 border-primary bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
      <span className="font-body-md text-body-md">Dashboard</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md h-touch-target rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container" href="#">
      <span className="material-symbols-outlined">assignment</span>
      <span className="font-body-md text-body-md">Task Board</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md h-touch-target rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container" href="#">
      <span className="material-symbols-outlined">precision_manufacturing</span>
      <span className="font-body-md text-body-md">Equipment</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md h-touch-target rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container" href="#">
      <span className="material-symbols-outlined">database</span>
      <span className="font-body-md text-body-md">Logs</span>
      </a>
      </li>
      </ul>
      <div className="mt-auto pt-md">
      <button className="w-full flex items-center justify-center gap-sm bg-primary text-on-primary h-touch-target rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container">
      <span className="material-symbols-outlined">add</span>
                      Create Task
                  </button>
      <div className="flex items-center gap-sm mt-md px-sm">
      <img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSkCCSBuVNrLupTlcBxY5dNmkv5ZcPjA-mHhxcJIy1aXlJDOBIEINqiGc7ATw3ZVQG50PpELbqWVZv-tIM36MYkqqBG98Z5B1pAOnZp0YkSi5iBdqU1eF90ENOTqBwY4dEwJPDUH8426A0SJu9YtU7RJZfMYVD4tvkWud8Re1DAvXDYyclagMtteTEO1Vb5GCP5w8M0MUUz9r93z4Mrg8tyXmUirniH_ZKjLrpqSeLGfbmGsMjO0tpmhXdKVWQDL1FRbiviIEtFu0" />
      <div className="flex-1 min-w-0">
      <p className="font-label-md text-label-md text-on-surface truncate">Admin User</p>
      </div>
      </div>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
      {/* TopAppBar Component */}
      <header className="bg-surface dark:bg-surface-dim fixed top-0 right-0 w-full md:w-[calc(100%-16rem)] bg-surface-container-lowest flex justify-between items-center h-touch-target px-lg py-md z-40 transition-transform duration-150">
      <div className="flex items-center gap-md">
      {/* Mobile menu trigger would go here if implemented */}
      <h2 className="font-h1 text-h1 text-on-surface hidden md:block">Greenhouse Ops</h2>
      <h2 className="font-h1 text-h1 text-on-surface md:hidden">Dashboard</h2>
      </div>
      <div className="flex items-center gap-sm">
      <button className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all focus:outline-none focus:ring-2 focus:ring-primary">
      <span className="material-symbols-outlined">sync</span>
      </button>
      <button className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all focus:outline-none focus:ring-2 focus:ring-primary">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Canvas / Empty State */}
      <main className="flex-1 pt-[calc(44px+32px)] p-margin md:p-xl flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full flex flex-col items-center text-center">
      {/* Illustration (Using a CSS shape/icon composition for minimalist corporate feel) */}
      <div className="relative w-48 h-48 mb-lg flex items-center justify-center bg-surface-container rounded-full border border-surface-container-high">
      <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" style={{animationDuration: "3s"}}></div>
      <span className="material-symbols-outlined text-6xl text-primary opacity-80" style={{fontSize: "80px"}}>psychiatry</span>
      </div>
      <h2 className="font-display text-display text-on-surface mb-sm">No tasks scheduled yet</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-lg">
                          Your maintenance console is currently empty. Set up your first equipment check or operational task to begin monitoring greenhouse performance.
                      </p>
      <button className="flex items-center justify-center gap-sm bg-primary text-on-primary h-touch-target px-xl rounded-lg font-body-md text-body-md font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background mb-xl shadow-sm">
      <span className="material-symbols-outlined">add</span>
                          Create Your First Task
                      </button>
      {/* 3-Step Guide (Bento-style cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter w-full mt-lg text-left">
      {/* Step 1 */}
      <div className="bg-surface p-md rounded-xl border border-surface-container-high hover:bg-surface-container transition-colors group">
      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center mb-md group-hover:bg-primary/20 transition-colors">
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">precision_manufacturing</span>
      </div>
      <h3 className="font-h2 text-h2 text-on-surface mb-xs text-[16px]">1. Add Equipment</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Log sensors, pumps, or HVAC units into the system registry.</p>
      </div>
      {/* Step 2 */}
      <div className="bg-surface p-md rounded-xl border border-surface-container-high hover:bg-surface-container transition-colors group">
      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center mb-md group-hover:bg-primary/20 transition-colors">
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">calendar_month</span>
      </div>
      <h3 className="font-h2 text-h2 text-on-surface mb-xs text-[16px]">2. Schedule Routine</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Set recurring maintenance intervals for critical infrastructure.</p>
      </div>
      {/* Step 3 */}
      <div className="bg-surface p-md rounded-xl border border-surface-container-high hover:bg-surface-container transition-colors group">
      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center mb-md group-hover:bg-primary/20 transition-colors">
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">monitoring</span>
      </div>
      <h3 className="font-h2 text-h2 text-on-surface mb-xs text-[16px]">3. Monitor Status</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Track task completion and review operational logs over time.</p>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
