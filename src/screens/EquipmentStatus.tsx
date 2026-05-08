// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Equipment Status
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

export interface EquipmentStatusProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (screen: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
  state?: unknown;
}

export function EquipmentStatus(_props: EquipmentStatusProps = {}) {
  return (
    <>
      {/* SideNavBar (Shared Component) */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-surface-container dark:bg-surface-container flex flex-col h-full py-md px-sm shadow-[1px_0_0_0_rgba(25,27,35,1)] z-50">
      {/* Brand Header */}
      <div className="flex items-center gap-md px-md pb-lg mb-md shadow-[0_1px_0_0_rgba(25,27,35,1)]">
      <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-on-primary-container" data-icon="eco">eco</span>
      </div>
      <div className="flex flex-col">
      <span className="font-h2 text-h2 text-primary">Greenhouse Ops</span>
      <span className="font-label-md text-label-md text-on-surface-variant">Maintenance Console</span>
      </div>
      </div>
      {/* Navigation Tabs */}
      <ul className="flex flex-col gap-sm flex-1">
      <li>
      <a className="flex items-center gap-md px-md h-touch-target rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
      <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
      <span className="font-body-md text-body-md">Dashboard</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md h-touch-target rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
      <span className="material-symbols-outlined" data-icon="assignment">assignment</span>
      <span className="font-body-md text-body-md">Task Board</span>
      </a>
      </li>
      {/* Active Tab */}
      <li>
      <a className="flex items-center gap-md px-md h-touch-target rounded-DEFAULT text-primary font-bold border-r-2 border-primary bg-surface-container-high opacity-80" href="#">
      <span className="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
      <span className="font-body-md text-body-md">Equipment</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md h-touch-target rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
      <span className="material-symbols-outlined" data-icon="database">database</span>
      <span className="font-body-md text-body-md">Logs</span>
      </a>
      </li>
      </ul>
      {/* CTA */}
      <div className="pt-md mt-auto">
      <button className="w-full flex items-center justify-center gap-sm h-touch-target bg-primary-container text-on-primary-container font-label-md text-label-md rounded-lg hover:bg-primary hover:text-on-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container">
      <span className="material-symbols-outlined" data-icon="add">add</span>
                      Create Task
                  </button>
      </div>
      </nav>
      {/* TopAppBar (Shared Component) */}
      <header className="hidden md:flex fixed top-0 right-0 w-[calc(100%-16rem)] bg-surface dark:bg-surface-dim flex justify-between items-center h-[76px] px-lg py-md shadow-[0_1px_0_0_rgba(11,14,21,1)] z-40">
      <div className="flex items-center">
      <h1 className="font-h1 text-h1 text-primary dark:text-primary-fixed-dim">Equipment Status</h1>
      </div>
      <div className="flex items-center gap-md">
      <div className="relative w-64">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" data-icon="search">search</span>
      <input className="w-full h-touch-target pl-10 pr-4 bg-surface-container text-on-surface font-body-md text-body-md rounded-lg border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant transition-colors" placeholder="Search equipment..." type="text" />
      </div>
      <button className="w-touch-target h-touch-target flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all active:scale-95 duration-150">
      <span className="material-symbols-outlined" data-icon="sync">sync</span>
      </button>
      <button className="w-touch-target h-touch-target flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all active:scale-95 duration-150">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 md:ml-64 mt-[76px] p-xl flex flex-col gap-lg">
      {/* Filter Bar */}
      <section className="flex flex-wrap items-center gap-sm">
      <span className="font-label-md text-label-md text-on-surface-variant mr-md uppercase tracking-wider">Filter By Status:</span>
      <button className="px-md h-touch-target flex items-center justify-center rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-bold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                      All Systems
                  </button>
      <button className="px-md h-touch-target flex items-center justify-center rounded-full border border-outline-variant text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                      Healthy
                  </button>
      <button className="px-md h-touch-target flex items-center justify-center rounded-full border border-outline-variant text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                      Warning
                  </button>
      <button className="px-md h-touch-target flex items-center justify-center rounded-full border border-outline-variant text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                      Critical
                  </button>
      </section>
      {/* Equipment Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
      {/* Card 1: Healthy */}
      <div className="bg-surface-container rounded-xl p-md border border-outline-variant hover:bg-surface-container-high transition-colors flex flex-col gap-md group">
      <div className="flex justify-between items-start">
      <div className="flex items-center gap-sm">
      <div className="w-10 h-10 rounded-DEFAULT bg-primary-container flex items-center justify-center">
      <span className="material-symbols-outlined text-on-primary-container" data-icon="water_pump">water_pump</span>
      </div>
      <div>
      <h3 className="font-h2 text-h2 text-on-surface">Hydroponic Pump A</h3>
      <p className="font-label-md text-label-md text-on-surface-variant">Zone 1 - Main Artery</p>
      </div>
      </div>
      <span className="px-sm py-[2px] rounded-full bg-primary-fixed-dim/20 text-primary-fixed-dim font-label-md text-label-md border border-primary-fixed-dim/30">Active</span>
      </div>
      <div className="flex flex-col gap-unit">
      <div className="flex justify-between items-end">
      <span className="font-label-md text-label-md text-on-surface-variant">System Health</span>
      <span className="font-body-md text-body-md font-bold text-primary">98%</span>
      </div>
      <div className="w-full h-unit bg-surface-variant rounded-full overflow-hidden">
      <div className="h-full bg-primary rounded-full w-[98%]"></div>
      </div>
      </div>
      <div className="grid grid-cols-2 gap-sm pt-sm border-t border-surface-variant">
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase">Power Usage</span>
      <span className="font-body-md text-body-md text-on-surface">1.2 kW/h</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase">Flow Rate</span>
      <span className="font-body-md text-body-md text-on-surface">450 L/min</span>
      </div>
      </div>
      </div>
      {/* Card 2: Warning */}
      <div className="bg-surface-container rounded-xl p-md border border-outline-variant hover:bg-surface-container-high transition-colors flex flex-col gap-md group">
      <div className="flex justify-between items-start">
      <div className="flex items-center gap-sm">
      <div className="w-10 h-10 rounded-DEFAULT bg-tertiary-container/20 flex items-center justify-center">
      <span className="material-symbols-outlined text-tertiary-container" data-icon="air">air</span>
      </div>
      <div>
      <h3 className="font-h2 text-h2 text-on-surface">Ventilation Fan 4</h3>
      <p className="font-label-md text-label-md text-on-surface-variant">Zone 3 - West Wing</p>
      </div>
      </div>
      <span className="px-sm py-[2px] rounded-full bg-tertiary-container/20 text-tertiary-container font-label-md text-label-md border border-tertiary-container/30">Warning</span>
      </div>
      <div className="flex flex-col gap-unit">
      <div className="flex justify-between items-end">
      <span className="font-label-md text-label-md text-on-surface-variant">System Health</span>
      <span className="font-body-md text-body-md font-bold text-tertiary-container">65%</span>
      </div>
      <div className="w-full h-unit bg-surface-variant rounded-full overflow-hidden">
      <div className="h-full bg-tertiary-container rounded-full w-[65%]"></div>
      </div>
      </div>
      <div className="grid grid-cols-2 gap-sm pt-sm border-t border-surface-variant">
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase">RPM</span>
      <span className="font-body-md text-body-md text-on-surface">1150 / 1500</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase">Vibration</span>
      <span className="font-body-md text-body-md text-tertiary-container">Elevated</span>
      </div>
      </div>
      </div>
      {/* Card 3: Critical */}
      <div className="bg-surface-container rounded-xl p-md border border-error/50 shadow-[0_0_15px_rgba(255,180,171,0.1)] hover:bg-surface-container-high transition-colors flex flex-col gap-md group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-error"></div>
      <div className="flex justify-between items-start pl-sm">
      <div className="flex items-center gap-sm">
      <div className="w-10 h-10 rounded-DEFAULT bg-error-container flex items-center justify-center animate-pulse">
      <span className="material-symbols-outlined text-on-error-container" data-icon="thermostat">thermostat</span>
      </div>
      <div>
      <h3 className="font-h2 text-h2 text-on-surface">Climate Control Unit C</h3>
      <p className="font-label-md text-label-md text-on-surface-variant">Zone 2 - Seedlings</p>
      </div>
      </div>
      <span className="px-sm py-[2px] rounded-full bg-error text-on-error font-label-md text-label-md">Critical</span>
      </div>
      <div className="flex flex-col gap-unit pl-sm">
      <div className="flex justify-between items-end">
      <span className="font-label-md text-label-md text-on-surface-variant">System Health</span>
      <span className="font-body-md text-body-md font-bold text-error">15%</span>
      </div>
      <div className="w-full h-unit bg-surface-variant rounded-full overflow-hidden">
      <div className="h-full bg-error rounded-full w-[15%]"></div>
      </div>
      </div>
      <div className="grid grid-cols-2 gap-sm pt-sm border-t border-surface-variant pl-sm">
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase">Temp Delta</span>
      <span className="font-body-md text-body-md text-error">+5.2°C</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase">Coolant Level</span>
      <span className="font-body-md text-body-md text-error">Depleted</span>
      </div>
      </div>
      </div>
      {/* Card 4: Healthy */}
      <div className="bg-surface-container rounded-xl p-md border border-outline-variant hover:bg-surface-container-high transition-colors flex flex-col gap-md group">
      <div className="flex justify-between items-start">
      <div className="flex items-center gap-sm">
      <div className="w-10 h-10 rounded-DEFAULT bg-surface-variant flex items-center justify-center">
      <span className="material-symbols-outlined text-on-surface-variant" data-icon="lightbulb">lightbulb</span>
      </div>
      <div>
      <h3 className="font-h2 text-h2 text-on-surface">LED Array Alpha</h3>
      <p className="font-label-md text-label-md text-on-surface-variant">Zone 1 - Canopy</p>
      </div>
      </div>
      <span className="px-sm py-[2px] rounded-full bg-primary-fixed-dim/20 text-primary-fixed-dim font-label-md text-label-md border border-primary-fixed-dim/30">Active</span>
      </div>
      <div className="flex flex-col gap-unit">
      <div className="flex justify-between items-end">
      <span className="font-label-md text-label-md text-on-surface-variant">System Health</span>
      <span className="font-body-md text-body-md font-bold text-primary">100%</span>
      </div>
      <div className="w-full h-unit bg-surface-variant rounded-full overflow-hidden">
      <div className="h-full bg-primary rounded-full w-full"></div>
      </div>
      </div>
      <div className="grid grid-cols-2 gap-sm pt-sm border-t border-surface-variant">
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase">Power Usage</span>
      <span className="font-body-md text-body-md text-on-surface">4.5 kW/h</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase">Spectrum</span>
      <span className="font-body-md text-body-md text-on-surface">Optimal (Veg)</span>
      </div>
      </div>
      </div>
      {/* Card 5: Healthy */}
      <div className="bg-surface-container rounded-xl p-md border border-outline-variant hover:bg-surface-container-high transition-colors flex flex-col gap-md group">
      <div className="flex justify-between items-start">
      <div className="flex items-center gap-sm">
      <div className="w-10 h-10 rounded-DEFAULT bg-surface-variant flex items-center justify-center">
      <span className="material-symbols-outlined text-on-surface-variant" data-icon="water_drop">water_drop</span>
      </div>
      <div>
      <h3 className="font-h2 text-h2 text-on-surface">Irrigation Valve B</h3>
      <p className="font-label-md text-label-md text-on-surface-variant">Zone 4 - Substrate</p>
      </div>
      </div>
      <span className="px-sm py-[2px] rounded-full bg-primary-fixed-dim/20 text-primary-fixed-dim font-label-md text-label-md border border-primary-fixed-dim/30">Active</span>
      </div>
      <div className="flex flex-col gap-unit">
      <div className="flex justify-between items-end">
      <span className="font-label-md text-label-md text-on-surface-variant">System Health</span>
      <span className="font-body-md text-body-md font-bold text-primary">95%</span>
      </div>
      <div className="w-full h-unit bg-surface-variant rounded-full overflow-hidden">
      <div className="h-full bg-primary rounded-full w-[95%]"></div>
      </div>
      </div>
      <div className="grid grid-cols-2 gap-sm pt-sm border-t border-surface-variant">
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase">Moisture Level</span>
      <span className="font-body-md text-body-md text-on-surface">62% (Target 60%)</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase">Pressure</span>
      <span className="font-body-md text-body-md text-on-surface">Normal</span>
      </div>
      </div>
      </div>
      </section>
      </main>
    </>
  );
}
