// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Settings
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

export interface SettingsProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (screen: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
  state?: unknown;
}

export function Settings(_props: SettingsProps = {}) {
  return (
    <>
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container dark:bg-surface-container flex flex-col py-md px-sm bg-surface-container-low border-r border-surface-variant z-20">
      {/* Header */}
      <div className="px-sm mb-lg flex items-center gap-md">
      <div aria-label="User profile" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0 border border-surface-variant">
      <span className="material-symbols-outlined text-primary" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>eco</span>
      </div>
      <div>
      <h2 className="font-h2 text-h2 text-primary dark:text-primary-fixed-dim tracking-tight">Greenhouse Ops</h2>
      <p className="font-label-md text-label-md text-on-surface-variant uppercase">Maintenance Console</p>
      </div>
      </div>
      {/* CTA */}
      <button className="mx-sm mb-lg h-touch-target bg-primary text-on-primary rounded font-label-md text-label-md flex items-center justify-center gap-sm hover:bg-primary-fixed transition-colors shadow-sm">
      <span className="material-symbols-outlined text-[18px]">add</span>
                  Create Task
              </button>
      {/* Navigation Links */}
      <nav className="flex-grow flex flex-col gap-sm">
      <a className="flex items-center gap-md px-md h-touch-target rounded font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
      <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                      Dashboard
                  </a>
      <a className="flex items-center gap-md px-md h-touch-target rounded font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
      <span className="material-symbols-outlined" data-icon="assignment">assignment</span>
                      Task Board
                  </a>
      <a className="flex items-center gap-md px-md h-touch-target rounded font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
      <span className="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
                      Equipment
                  </a>
      <a className="flex items-center gap-md px-md h-touch-target rounded font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
      <span className="material-symbols-outlined" data-icon="database">database</span>
                      Logs
                  </a>
      </nav>
      {/* Footer / Settings (Active) */}
      <div className="mt-auto border-t border-surface-variant pt-sm">
      <a className="flex items-center gap-md px-md h-touch-target rounded font-body-md text-body-md text-primary font-bold border-r-2 border-primary bg-surface-container-high bg-opacity-50 transition-colors opacity-80" href="#">
      <span className="material-symbols-outlined" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
                      Settings
                  </a>
      </div>
      </aside>
      {/* TopAppBar */}
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] bg-surface dark:bg-surface-dim flex justify-between items-center h-touch-target px-lg py-md bg-surface-container-lowest z-10">
      <div className="flex items-center gap-sm">
      {/* Contextual Title in Top Bar for high density */}
      <h1 className="font-h1 text-h1 text-primary dark:text-primary-fixed-dim hidden md:block">Settings Configuration</h1>
      </div>
      <div className="flex items-center gap-md">
      <div className="relative hidden lg:flex items-center">
      <span className="material-symbols-outlined absolute left-sm text-on-surface-variant">search</span>
      <input className="h-[36px] bg-surface-container border border-surface-variant rounded-full pl-xl pr-md font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none w-64 placeholder:text-on-surface-variant" placeholder="Search settings..." type="text" />
      </div>
      <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-all hover:bg-surface-container-high">
      <span className="material-symbols-outlined" data-icon="sync">sync</span>
      </button>
      <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-all hover:bg-surface-container-high">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </header>
      {/* Main Content Area */}
      <main className="ml-64 mt-[44px] p-lg xl:p-xl min-h-[calc(100vh-44px)] flex flex-col gap-xl">
      {/* Header Section */}
      <header className="flex flex-col gap-xs">
      <h2 className="font-display text-display text-on-surface tracking-tight">System Preferences</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Manage application settings, storage, and developer options for the Maintenance Console.</p>
      </header>
      {/* Bento Grid Layout for Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg auto-rows-min">
      {/* General Settings Card */}
      <section className="lg:col-span-7 bg-surface-container rounded-xl border border-surface-variant overflow-hidden flex flex-col">
      <div className="px-lg py-md border-b border-surface-variant bg-surface-container-low flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary text-[20px]">tune</span>
      <h3 className="font-h2 text-h2 text-on-surface">General</h3>
      </div>
      <div className="p-lg flex flex-col gap-xl">
      {/* Theme Toggle */}
      <div className="flex items-center justify-between">
      <div className="flex flex-col gap-xs">
      <span className="font-body-lg text-body-lg text-on-surface font-medium">Interface Theme</span>
      <span className="font-body-md text-body-md text-on-surface-variant">Select your preferred viewing mode</span>
      </div>
      <div className="flex items-center bg-surface-container-highest rounded-full p-xs border border-surface-variant">
      <button className="flex items-center gap-sm px-md h-[36px] rounded-full text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors">
      <span className="material-symbols-outlined text-[18px]">light_mode</span>
                                      Light
                                  </button>
      <button className="flex items-center gap-sm px-md h-[36px] rounded-full bg-surface border border-outline-variant text-primary font-label-md text-label-md shadow-sm">
      <span className="material-symbols-outlined text-[18px]" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>dark_mode</span>
                                      Dark
                                  </button>
      </div>
      </div>
      <div className="h-[1px] w-full bg-surface-variant"></div>
      {/* Language Selector */}
      <div className="flex items-center justify-between">
      <div className="flex flex-col gap-xs">
      <span className="font-body-lg text-body-lg text-on-surface font-medium">System Language</span>
      <span className="font-body-md text-body-md text-on-surface-variant">Applies to all console interfaces</span>
      </div>
      <div className="relative w-48">
      <select className="w-full h-touch-target bg-surface-container-highest border border-surface-variant text-on-surface rounded font-body-md text-body-md px-md appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer">
      <option value="en">English (US)</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
      <option value="de">Deutsch</option>
      </select>
      <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
      </div>
      </div>
      </div>
      </section>
      {/* Right Column Stack */}
      <div className="lg:col-span-5 flex flex-col gap-lg">
      {/* Persistence Card */}
      <section className="bg-surface-container rounded-xl border border-surface-variant overflow-hidden flex flex-col">
      <div className="px-lg py-md border-b border-surface-variant bg-surface-container-low flex items-center gap-sm">
      <span className="material-symbols-outlined text-tertiary text-[20px]">storage</span>
      <h3 className="font-h2 text-h2 text-on-surface">Persistence</h3>
      </div>
      <div className="p-lg flex flex-col gap-lg">
      {/* Storage Indicator */}
      <div className="flex flex-col gap-md">
      <div className="flex items-end justify-between">
      <span className="font-body-md text-body-md text-on-surface font-medium">Local Cache Usage</span>
      <span className="font-code text-code text-on-surface-variant">1.2 GB / 5.0 GB</span>
      </div>
      {/* Progress Bar */}
      <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden border border-surface-variant">
      <div className="h-full bg-tertiary-container rounded-full" style={{width: "24%"}}></div>
      </div>
      <p className="font-label-md text-label-md text-on-surface-variant text-right">24% capacity reached</p>
      </div>
      {/* Clear Cache Action */}
      <button className="w-full h-touch-target border border-error text-error rounded font-label-md text-label-md hover:bg-error-container hover:text-on-error-container transition-colors flex items-center justify-center gap-sm">
      <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
                                  Clear Application Cache
                              </button>
      </div>
      </section>
      {/* System & Developer Card */}
      <section className="bg-surface-container rounded-xl border border-surface-variant overflow-hidden flex flex-col">
      <div className="px-lg py-md border-b border-surface-variant bg-surface-container-low flex items-center gap-sm">
      <span className="material-symbols-outlined text-secondary text-[20px]">terminal</span>
      <h3 className="font-h2 text-h2 text-on-surface">System</h3>
      </div>
      <div className="p-lg flex flex-col gap-lg">
      {/* Version */}
      <div className="flex items-center justify-between">
      <span className="font-body-md text-body-md text-on-surface-variant">Client Version</span>
      <span className="font-code text-code text-on-surface bg-surface-container-highest px-sm py-[2px] rounded border border-surface-variant">v1.0.4-stable</span>
      </div>
      <div className="h-[1px] w-full bg-surface-variant"></div>
      {/* Dev Mode Toggle */}
      <div className="flex items-center justify-between">
      <div className="flex flex-col gap-[2px]">
      <span className="font-body-md text-body-md text-on-surface font-medium">Developer Mode</span>
      <span className="font-label-md text-label-md text-error">Warning: Advanced features</span>
      </div>
      {/* Toggle Visual Representation (CSS Only approach) */}
      <label className="relative inline-flex items-center cursor-pointer h-[24px]">
      <input className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-on-surface-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary peer-checked:after:bg-on-primary"></div>
      </label>
      </div>
      </div>
      </section>
      </div>
      </div>
      </main>
    </>
  );
}
