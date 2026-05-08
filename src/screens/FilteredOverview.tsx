// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Filtered Overview
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

export interface FilteredOverviewProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (screen: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
  state?: unknown;
}

export function FilteredOverview(_props: FilteredOverviewProps = {}) {
  return (
    <>
      {/* SideNavBar */}
      <nav aria-label="Side Navigation" className="hidden md:flex flex-col h-full py-md px-sm bg-surface-container dark:bg-surface-container fixed left-0 top-0 h-full w-64 z-20">
      <div className="mb-xl px-sm flex items-center gap-md">
      <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-on-primary-container">spa</span>
      </div>
      <div>
      <h1 className="font-h2 text-h2 text-primary m-0 p-0 leading-tight">Greenhouse Ops</h1>
      <p className="font-label-md text-label-md text-on-surface-variant m-0 p-0">Maintenance Console</p>
      </div>
      </div>
      <button className="mb-lg h-touch-target w-full bg-primary text-on-primary rounded-lg font-body-lg text-body-lg flex items-center justify-center gap-sm hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container">
      <span className="material-symbols-outlined">add</span>
                  Create Task
              </button>
      <ul className="flex flex-col gap-unit flex-grow">
      <li>
      <a className="flex items-center gap-md px-md h-touch-target rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-body-md text-body-md" href="#">
      <span className="material-symbols-outlined">dashboard</span>
                          Dashboard
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md h-touch-target rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-body-md text-body-md" href="#">
      <span className="material-symbols-outlined">assignment</span>
                          Task Board
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md h-touch-target rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-body-md text-body-md" href="#">
      <span className="material-symbols-outlined">precision_manufacturing</span>
                          Equipment
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md h-touch-target rounded-lg text-primary font-bold border-r-2 border-primary bg-surface-container-high font-body-md text-body-md opacity-80" href="#">
      <span className="material-symbols-outlined filled-icon">database</span>
                          Logs
                      </a>
      </li>
      </ul>
      <div className="mt-auto border-t border-surface-container-low pt-md flex items-center gap-sm px-sm">
      <img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant" data-alt="A small circular profile picture of an industrial technician wearing a hard hat, photographed with dramatic lighting against a dark gray background to match the overall UI color scheme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA29zLB6plrbaTYbPplP2V-FrhBjVRFVHTlZR5102Ln5ZEmXRz61ysJYO0PYjyr3shLVlNzKxFyRfmWlF7Pb7V8sNWIRLv9G_tOjrvOloAigr_bJj8G3rA56Y2DlPJiluWWaWnY32yjX3cme4W6vYgB17M5YxTdrkaPHJZjgE_SsgL2bcTUetnEDuQn9UWplF9aus3to_xwE7hNzGglz3pl9P1_OIeGDMDm1tnGekHL0D-CAU86oQTsl4_X-3EHRVg_RJfQXSNvFRg" />
      <span className="font-body-md text-body-md text-on-surface">Tech Admin</span>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col h-full ml-0 md:ml-64 relative">
      {/* TopAppBar */}
      <header className="flex justify-between items-center h-touch-target px-lg py-md bg-surface dark:bg-surface-dim z-10 hidden md:flex sticky top-0 w-full border-b border-surface-container-lowest">
      <div className="flex-1 flex items-center">
      {/* Search Bar */}
      <div className="relative w-96 ml-auto">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
      <input className="w-full h-touch-target pl-[40px] pr-sm bg-surface-container border border-outline-variant rounded-lg text-on-surface font-body-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-on-surface-variant" placeholder="Search logs..." type="text" value="Pump Maintenance" />
      </div>
      </div>
      <div className="flex items-center gap-sm ml-lg">
      <button aria-label="Sync" className="w-touch-target h-touch-target flex items-center justify-center rounded-full hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-all active:scale-95 duration-150">
      <span className="material-symbols-outlined">sync</span>
      </button>
      <button aria-label="Account" className="w-touch-target h-touch-target flex items-center justify-center rounded-full hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-all active:scale-95 duration-150">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-gutter bg-background">
      {/* Header & Filters */}
      <div className="mb-xl">
      <div className="flex items-baseline gap-sm mb-md">
      <h2 className="font-display text-display text-on-surface">Showing 12 results for</h2>
      <span className="font-display text-display text-primary">"Pump Maintenance"</span>
      </div>
      <div className="flex flex-wrap gap-sm">
      <button className="h-8 px-md rounded-full bg-surface-container border border-primary text-primary font-label-md text-label-md flex items-center gap-xs focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                              Last 7 days
                              <span className="material-symbols-outlined text-[16px]">close</span>
      </button>
      <button className="h-8 px-md rounded-full bg-surface-container border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-label-md text-label-md flex items-center gap-xs focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                              High Priority
                              <span className="material-symbols-outlined text-[16px]">add</span>
      </button>
      <button className="h-8 px-md rounded-full bg-surface-container border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-label-md text-label-md flex items-center gap-xs focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                              Zone B
                              <span className="material-symbols-outlined text-[16px]">add</span>
      </button>
      <button className="h-8 px-md rounded-full bg-surface-container border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-label-md text-label-md flex items-center gap-xs focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                              Status: Pending
                              <span className="material-symbols-outlined text-[16px]">add</span>
      </button>
      </div>
      </div>
      {/* Results List */}
      <div className="flex flex-col gap-unit">
      {/* Item 1 */}
      <div className="bg-surface rounded-lg p-md flex items-center justify-between border border-surface-container-lowest hover:bg-surface-container-low transition-colors group">
      <div className="flex items-center gap-md">
      <div className="w-10 h-10 rounded-full bg-error-container/20 flex items-center justify-center shrink-0 border border-error-container">
      <span className="material-symbols-outlined text-error">warning</span>
      </div>
      <div>
      <div className="flex items-center gap-sm mb-xs">
      <span className="font-body-lg text-body-lg font-medium text-on-surface">Main Irrigation Pump Failure</span>
      <span className="bg-error/10 text-error font-label-md text-label-md px-sm py-xs rounded-full border border-error/20">Critical</span>
      </div>
      <div className="flex items-center gap-md font-body-md text-body-md text-on-surface-variant">
      <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">tag</span> PMP-001</span>
      <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">location_on</span> Zone A North</span>
      <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">schedule</span> 2 hrs ago</span>
      </div>
      </div>
      </div>
      <button className="h-touch-target px-md rounded-DEFAULT border border-outline-variant text-on-surface font-body-md text-body-md hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-primary opacity-0 group-hover:opacity-100 transition-opacity">
                              View Details
                          </button>
      </div>
      {/* Item 2 */}
      <div className="bg-surface rounded-lg p-md flex items-center justify-between border border-surface-container-lowest hover:bg-surface-container-low transition-colors group">
      <div className="flex items-center gap-md">
      <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0 border border-primary-container">
      <span className="material-symbols-outlined text-primary">build</span>
      </div>
      <div>
      <div className="flex items-center gap-sm mb-xs">
      <span className="font-body-lg text-body-lg font-medium text-on-surface">Routine Pump Seal Replacement</span>
      <span className="bg-tertiary-container/10 text-tertiary font-label-md text-label-md px-sm py-xs rounded-full border border-tertiary-container/20">Pending</span>
      </div>
      <div className="flex items-center gap-md font-body-md text-body-md text-on-surface-variant">
      <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">tag</span> PMP-004</span>
      <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">location_on</span> Zone B South</span>
      <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">schedule</span> Yesterday</span>
      </div>
      </div>
      </div>
      <button className="h-touch-target px-md rounded-DEFAULT border border-outline-variant text-on-surface font-body-md text-body-md hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-primary opacity-0 group-hover:opacity-100 transition-opacity">
                              View Details
                          </button>
      </div>
      {/* Item 3 */}
      <div className="bg-surface rounded-lg p-md flex items-center justify-between border border-surface-container-lowest hover:bg-surface-container-low transition-colors group">
      <div className="flex items-center gap-md">
      <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 border border-outline-variant">
      <span className="material-symbols-outlined text-on-surface-variant">check_circle</span>
      </div>
      <div>
      <div className="flex items-center gap-sm mb-xs">
      <span className="font-body-lg text-body-lg font-medium text-on-surface">Monthly Pump Flow Calibration</span>
      <span className="bg-surface-container-high text-on-surface-variant font-label-md text-label-md px-sm py-xs rounded-full border border-outline-variant">Completed</span>
      </div>
      <div className="flex items-center gap-md font-body-md text-body-md text-on-surface-variant">
      <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">tag</span> PMP-ALL</span>
      <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">location_on</span> Facility Wide</span>
      <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">schedule</span> 3 days ago</span>
      </div>
      </div>
      </div>
      <button className="h-touch-target px-md rounded-DEFAULT border border-outline-variant text-on-surface font-body-md text-body-md hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-primary opacity-0 group-hover:opacity-100 transition-opacity">
                              View Details
                          </button>
      </div>
      {/* Item 4 */}
      <div className="bg-surface rounded-lg p-md flex items-center justify-between border border-surface-container-lowest hover:bg-surface-container-low transition-colors group">
      <div className="flex items-center gap-md">
      <div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center shrink-0 border border-tertiary-container">
      <span className="material-symbols-outlined text-tertiary">water_drop</span>
      </div>
      <div>
      <div className="flex items-center gap-sm mb-xs">
      <span className="font-body-lg text-body-lg font-medium text-on-surface">Minor Leak Detected near Pump Intake</span>
      <span className="bg-tertiary-container/10 text-tertiary font-label-md text-label-md px-sm py-xs rounded-full border border-tertiary-container/20">Investigating</span>
      </div>
      <div className="flex items-center gap-md font-body-md text-body-md text-on-surface-variant">
      <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">tag</span> PMP-012</span>
      <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">location_on</span> Zone C East</span>
      <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">schedule</span> 4 days ago</span>
      </div>
      </div>
      </div>
      <button className="h-touch-target px-md rounded-DEFAULT border border-outline-variant text-on-surface font-body-md text-body-md hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-primary opacity-0 group-hover:opacity-100 transition-opacity">
                              View Details
                          </button>
      </div>
      </div>
      <div className="mt-lg flex justify-center">
      <button className="h-touch-target px-lg rounded-full border border-outline-variant text-on-surface-variant font-body-md text-body-md hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
                          Load More Results
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}
