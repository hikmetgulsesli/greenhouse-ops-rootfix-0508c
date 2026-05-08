// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Profile Panel
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

export interface ProfilePanelProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (screen: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
  state?: unknown;
}

export function ProfilePanel(_props: ProfilePanelProps = {}) {
  return (
    <>
      {/* BACKGROUND LAYER (Dashboard Context) */}
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container flex flex-col py-md px-sm z-0 border-r border-surface-container-lowest">
      {/* Brand */}
      <div className="px-md py-md mb-xl">
      <h1 className="font-h2 text-h2 text-primary">Greenhouse Ops</h1>
      <p className="font-label-md text-label-md text-on-surface-variant mt-xs">Maintenance Console</p>
      </div>
      {/* CTA */}
      <button className="mx-md mb-xl h-touch-target bg-primary-container text-on-primary-container font-label-md text-label-md rounded-lg flex items-center justify-center gap-sm hover:opacity-90 transition-opacity">
      <span className="material-symbols-outlined">add</span> Create Task
              </button>
      {/* Navigation Links */}
      <nav className="flex flex-col gap-unit">
      <a className="flex items-center gap-md px-md h-touch-target bg-surface-container-high text-primary font-bold border-r-2 border-primary opacity-80 hover:bg-surface-container-high hover:text-on-surface transition-colors rounded-l-lg" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
                      Dashboard
                  </a>
      <a className="flex items-center gap-md px-md h-touch-target text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors rounded-l-lg" href="#">
      <span className="material-symbols-outlined">assignment</span>
                      Task Board
                  </a>
      <a className="flex items-center gap-md px-md h-touch-target text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors rounded-l-lg" href="#">
      <span className="material-symbols-outlined">precision_manufacturing</span>
                      Equipment
                  </a>
      <a className="flex items-center gap-md px-md h-touch-target text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors rounded-l-lg" href="#">
      <span className="material-symbols-outlined">database</span>
                      Logs
                  </a>
      </nav>
      </aside>
      {/* TopAppBar */}
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] bg-surface flex justify-between items-center h-[64px] px-lg py-md border-b border-surface-container-lowest z-0">
      <div className="flex-1"></div> {/* Spacer for 'on_right' search logic */}
      <div className="flex items-center gap-md">
      {/* Search */}
      <div className="relative hidden md:block w-64 mr-md">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
      <input className="w-full h-touch-target bg-surface-container border border-outline-variant rounded-lg pl-xl pr-md text-on-surface font-body-md text-body-md placeholder-on-surface-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Search operations..." type="text" />
      </div>
      {/* Trailing Actions */}
      <button className="h-touch-target w-touch-target flex items-center justify-center text-on-surface-variant hover:text-primary transition-all rounded-full hover:bg-surface-container-high">
      <span className="material-symbols-outlined">sync</span>
      </button>
      <button className="h-touch-target w-touch-target flex items-center justify-center text-primary transition-all bg-surface-container-highest rounded-full border border-primary/20">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>account_circle</span>
      </button>
      </div>
      </header>
      {/* Main Canvas (Blurred Background) */}
      <main className="ml-64 mt-[64px] p-xl w-full h-[calc(100vh-64px)] overflow-hidden">
      {/* Mock Dashboard Content to blur */}
      <div className="filter blur-md opacity-40 transition-all duration-300 pointer-events-none h-full flex flex-col gap-xl">
      {/* Bento Grid Structure */}
      <div className="grid grid-cols-12 gap-gutter h-[300px]">
      <div className="col-span-8 bg-surface-container rounded-xl border border-surface-container-highest p-lg flex flex-col">
      <div className="w-1/3 h-6 bg-surface-container-highest rounded mb-lg"></div>
      <div className="flex-1 bg-surface-container-lowest rounded border border-outline-variant/20"></div>
      </div>
      <div className="col-span-4 bg-surface-container rounded-xl border border-surface-container-highest p-lg flex flex-col gap-md">
      <div className="w-1/2 h-6 bg-surface-container-highest rounded mb-md"></div>
      <div className="h-16 bg-error-container/20 border border-error/30 rounded flex items-center px-md gap-md">
      <div className="w-8 h-8 rounded-full bg-error/20"></div>
      <div className="flex-1 h-4 bg-error/30 rounded"></div>
      </div>
      <div className="h-16 bg-surface-container-highest rounded flex items-center px-md gap-md">
      <div className="w-8 h-8 rounded-full bg-surface-variant"></div>
      <div className="flex-1 h-4 bg-surface-variant rounded"></div>
      </div>
      </div>
      </div>
      <div className="grid grid-cols-12 gap-gutter flex-1 pb-xl">
      <div className="col-span-12 bg-surface-container rounded-xl border border-surface-container-highest p-lg flex flex-col">
      <div className="w-1/4 h-6 bg-surface-container-highest rounded mb-lg"></div>
      <div className="w-full h-8 bg-surface-container-highest rounded mb-sm"></div>
      <div className="w-full h-8 bg-surface-container-highest rounded mb-sm"></div>
      <div className="w-full h-8 bg-surface-container-highest rounded mb-sm"></div>
      </div>
      </div>
      </div>
      </main>
      {/* OVERLAY LAYER (Profile Panel) */}
      {/* Backdrop */}
      <div aria-hidden={true} className="fixed inset-0 bg-background/70 backdrop-blur-sm z-40 transition-opacity"></div>
      {/* Side Drawer */}
      <section aria-labelledby="profile-title" aria-modal="true" className="fixed inset-y-0 right-0 w-full max-w-sm bg-surface flex flex-col z-50 border-l border-surface-container-lowest shadow-2xl transform transition-transform duration-300 ease-out">
      {/* Drawer Header */}
      <header className="flex items-center justify-between px-lg h-[64px] border-b border-surface-container-low shrink-0 bg-surface">
      <h2 className="font-h2 text-h2 text-on-surface" id="profile-title">Profile</h2>
      <button aria-label="Close Profile Panel" className="h-touch-target w-touch-target flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
      <span className="material-symbols-outlined">close</span>
      </button>
      </header>
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
      {/* User Identity Section */}
      <div className="flex flex-col items-center py-[40px] px-lg border-b border-surface-container-low bg-surface-container-lowest/50">
      <div className="w-[100px] h-[100px] rounded-full bg-surface-container-highest border-2 border-primary-container p-1 mb-md relative group">
      <img className="w-full h-full rounded-full object-cover" data-alt="A professional headshot of a confident male operations manager in his late 30s. He is wearing a dark, utilitarian button-down shirt. The lighting is crisp and cool, reflecting a modern, high-tech industrial environment. The background is a soft, out-of-focus deep blue and slate grey, complementing the dark mode UI aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3dGeaMu2biFaqNJEWLj4sy60QBFRglGZA85a5KKicWDPRhjCPpQSF4CPPKgayEH9W159IgUsdNpv3Mz2UDOBXCmmCqC1rS3Y5bSXaYRlPuH_FEaRz8SYtDt2XBHAMyXfz_t0bXCzy002G5hXd_zcALTyj_xvUb0mKz595cIjmVxD9A6cloB1b8yqoHrjlhChel6iral5MgXWmLoEGyCTX2oQDY9D-CBnGrNIK1IuZrTa4fqnk8w7tuEFIQ_9clwe1zHFVe-H4Iak" />
      <button aria-label="Edit Avatar" className="absolute bottom-0 right-0 w-8 h-8 bg-surface-container-high border border-outline-variant rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary shadow-lg">
      <span className="material-symbols-outlined text-[16px]">edit</span>
      </button>
      </div>
      <h3 className="font-display text-display text-on-surface text-center">Alex Rivera</h3>
      <div className="flex items-center gap-xs mt-xs text-primary bg-primary/10 px-sm py-unit rounded-full border border-primary/20">
      <span className="material-symbols-outlined text-[14px]">admin_panel_settings</span>
      <p className="font-label-md text-label-md">Operations Lead</p>
      </div>
      </div>
      {/* Settings Section */}
      <div className="p-lg">
      <h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-lg">Alert Preferences</h4>
      <div className="flex flex-col gap-lg">
      {/* Toggle: Email Alerts */}
      <div className="flex items-center justify-between">
      <div className="pr-md">
      <p className="font-body-lg text-body-lg text-on-surface mb-unit">Email Notifications</p>
      <p className="font-body-md text-body-md text-on-surface-variant">Daily system summaries and critical failure reports.</p>
      </div>
      <button aria-checked={true} aria-label="Toggle Email Notifications" className="w-[44px] h-[24px] bg-primary rounded-full relative shrink-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface transition-colors cursor-pointer" role="switch">
      <span className="absolute right-[2px] top-[2px] w-[20px] h-[20px] bg-on-primary rounded-full shadow-sm transition-transform"></span>
      </button>
      </div>
      {/* Divider */}
      <hr className="border-t border-surface-container-low w-full" />
      {/* Toggle: Push Notifications */}
      <div className="flex items-center justify-between">
      <div className="pr-md">
      <p className="font-body-lg text-body-lg text-on-surface mb-unit">Push Notifications</p>
      <p className="font-body-md text-body-md text-on-surface-variant">Real-time status updates on active maintenance tasks.</p>
      </div>
      <button aria-checked={false} aria-label="Toggle Push Notifications" className="w-[44px] h-[24px] bg-surface-container-highest border border-outline-variant rounded-full relative shrink-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface transition-colors cursor-pointer hover:bg-surface-container-high" role="switch">
      <span className="absolute left-[2px] top-[2px] w-[18px] h-[18px] bg-outline rounded-full transition-transform"></span>
      </button>
      </div>
      {/* Divider */}
      <hr className="border-t border-surface-container-low w-full" />
      {/* Toggle: SMS Warnings */}
      <div className="flex items-center justify-between">
      <div className="pr-md">
      <p className="font-body-lg text-body-lg text-on-surface mb-unit flex items-center gap-sm">
                                      SMS Alerts
                                      <span className="bg-error/20 text-error font-label-md text-label-md px-unit py-[2px] rounded border border-error/30">High Priority</span>
      </p>
      <p className="font-body-md text-body-md text-on-surface-variant">Immediate paging for catastrophic environmental anomalies.</p>
      </div>
      <button aria-checked={true} aria-label="Toggle SMS Alerts" className="w-[44px] h-[24px] bg-primary rounded-full relative shrink-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface transition-colors cursor-pointer" role="switch">
      <span className="absolute right-[2px] top-[2px] w-[20px] h-[20px] bg-on-primary rounded-full shadow-sm transition-transform"></span>
      </button>
      </div>
      </div>
      </div>
      <div className="p-lg pt-0">
      <button className="w-full h-touch-target flex items-center justify-between px-md border border-outline-variant rounded-lg hover:bg-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary transition-colors text-on-surface font-body-md text-body-md group">
      <span>Manage Account Settings</span>
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">arrow_forward</span>
      </button>
      </div>
      </div>
      {/* Drawer Footer */}
      <footer className="p-lg border-t border-surface-container-low shrink-0 bg-surface">
      <button className="w-full h-touch-target flex items-center justify-center gap-sm border border-outline-variant bg-surface text-error rounded-lg hover:bg-error-container/10 focus:outline-none focus:ring-2 focus:ring-error transition-colors font-label-md text-label-md">
      <span className="material-symbols-outlined text-[18px]">logout</span>
                      Logout
                  </button>
      </footer>
      </section>
    </>
  );
}
