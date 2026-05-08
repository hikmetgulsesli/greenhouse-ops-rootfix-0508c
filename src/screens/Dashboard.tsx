// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Dashboard
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

export interface DashboardProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (screen: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
  state?: unknown;
}

export function Dashboard(_props: DashboardProps = {}) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container dark:bg-surface-container fixed left-0 top-0 h-full w-64 bg-surface-container-low flex flex-col h-full py-md px-sm border-r-0 z-50">
      <div className="px-md pb-xl pt-lg">
      <h2 className="font-h2 text-h2 text-primary tracking-tight">Greenhouse Ops</h2>
      <p className="font-label-md text-label-md text-on-surface-variant mt-xs">Maintenance Console</p>
      </div>
      <ul className="flex flex-col gap-sm flex-grow">
      {/* Active: Dashboard */}
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-primary font-bold border-r-2 border-primary bg-surface-container-high transition-colors min-h-touch-target" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
      <span className="font-body-md text-body-md">Dashboard</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors min-h-touch-target" href="#">
      <span className="material-symbols-outlined">assignment</span>
      <span className="font-body-md text-body-md">Task Board</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors min-h-touch-target" href="#">
      <span className="material-symbols-outlined">precision_manufacturing</span>
      <span className="font-body-md text-body-md">Equipment</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors min-h-touch-target" href="#">
      <span className="material-symbols-outlined">database</span>
      <span className="font-body-md text-body-md">Logs</span>
      </a>
      </li>
      </ul>
      <div className="pt-lg border-t border-surface-container-highest mt-auto">
      <button className="w-full flex items-center justify-center gap-sm bg-primary text-on-primary font-label-md text-label-md rounded-lg min-h-touch-target hover:bg-primary-fixed transition-colors">
      <span className="material-symbols-outlined">add</span>
                       Create Task
                   </button>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="ml-64 flex-1 flex flex-col min-h-screen pb-xl">
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface-dim fixed top-0 right-0 w-[calc(100%-16rem)] bg-surface-container-lowest flex justify-between items-center h-touch-target px-lg py-md z-40">
      <h1 className="font-h1 text-h1 text-on-surface">Dashboard</h1>
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant hover:text-primary transition-all flex items-center justify-center min-w-touch-target min-h-touch-target rounded-full hover:bg-surface-container">
      <span className="material-symbols-outlined">sync</span>
      </button>
      <button className="text-on-surface-variant hover:text-primary transition-all flex items-center justify-center min-w-touch-target min-h-touch-target rounded-full hover:bg-surface-container">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Canvas */}
      <div className="mt-touch-target px-margin pt-lg max-w-[1440px] mx-auto w-full flex flex-col gap-gutter">
      {/* Summary Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {/* Total Tasks */}
      <div className="bg-surface p-lg rounded-xl border border-surface-container-highest flex flex-col gap-md relative overflow-hidden">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary opacity-5 rounded-full blur-xl pointer-events-none"></div>
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Tasks</span>
      <span className="material-symbols-outlined text-primary">assignment</span>
      </div>
      <div className="flex items-end gap-sm mt-sm">
      <span className="font-display text-display text-on-surface leading-none">24</span>
      <span className="font-body-md text-body-md text-on-surface-variant mb-1">active</span>
      </div>
      </div>
      {/* Equipment Health */}
      <div className="bg-surface p-lg rounded-xl border border-surface-container-highest flex flex-col gap-md relative overflow-hidden">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#4ade80] opacity-5 rounded-full blur-xl pointer-events-none"></div>
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Equipment Health</span>
      <span className="material-symbols-outlined text-[#4ade80]">health_and_safety</span>
      </div>
      <div className="flex items-end gap-sm mt-sm">
      <span className="font-display text-display text-on-surface leading-none">98%</span>
      <span className="font-body-md text-body-md text-on-surface-variant mb-1">nominal</span>
      </div>
      </div>
      {/* Pending Maintenance */}
      <div className="bg-surface p-lg rounded-xl border border-surface-container-highest flex flex-col gap-md relative overflow-hidden">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary-container opacity-10 rounded-full blur-xl pointer-events-none"></div>
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Pending Maint.</span>
      <span className="material-symbols-outlined text-tertiary">warning</span>
      </div>
      <div className="flex items-end gap-sm mt-sm">
      <span className="font-display text-display text-on-surface leading-none">5</span>
      <span className="font-body-md text-body-md text-on-surface-variant mb-1">critical</span>
      </div>
      </div>
      </div>
      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
      {/* Maintenance Overview Chart (Simulated) */}
      <div className="lg:col-span-2 bg-surface rounded-xl border border-surface-container-highest p-lg flex flex-col">
      <div className="flex justify-between items-center mb-xl">
      <h3 className="font-h2 text-h2 text-on-surface">Maintenance Overview</h3>
      <button className="font-label-md text-label-md text-primary flex items-center gap-xs hover:text-primary-fixed transition-colors">
                                  This Week <span className="material-symbols-outlined text-sm">arrow_drop_down</span>
      </button>
      </div>
      {/* Simulated Chart Canvas */}
      <div className="flex-1 min-h-[300px] border-b border-l border-surface-container-highest relative pb-sm pl-sm flex items-end gap-md">
      {/* Y-axis labels */}
      <div className="absolute left-[-24px] top-0 bottom-0 flex flex-col justify-between font-code text-code text-on-surface-variant py-sm">
      <span>100</span>
      <span>50</span>
      <span>0</span>
      </div>
      {/* Bars */}
      <div className="flex-1 h-[60%] bg-primary rounded-t-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer group relative">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container-high text-on-surface font-label-md text-label-md px-sm py-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">12</div>
      </div>
      <div className="flex-1 h-[40%] bg-surface-container-highest rounded-t-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer relative group">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container-high text-on-surface font-label-md text-label-md px-sm py-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">8</div>
      </div>
      <div className="flex-1 h-[80%] bg-primary rounded-t-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer relative group">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container-high text-on-surface font-label-md text-label-md px-sm py-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">16</div>
      </div>
      <div className="flex-1 h-[30%] bg-tertiary-container rounded-t-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer relative group">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container-high text-on-surface font-label-md text-label-md px-sm py-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">6</div>
      </div>
      <div className="flex-1 h-[90%] bg-primary rounded-t-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer relative group">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container-high text-on-surface font-label-md text-label-md px-sm py-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">18</div>
      </div>
      </div>
      {/* X-axis labels */}
      <div className="flex justify-between mt-sm font-code text-code text-on-surface-variant pl-sm">
      <span className="flex-1 text-center">Mon</span>
      <span className="flex-1 text-center">Tue</span>
      <span className="flex-1 text-center">Wed</span>
      <span className="flex-1 text-center">Thu</span>
      <span className="flex-1 text-center">Fri</span>
      </div>
      </div>
      {/* Recent Activity List */}
      <div className="bg-surface rounded-xl border border-surface-container-highest p-lg flex flex-col h-full">
      <div className="flex justify-between items-center mb-md">
      <h3 className="font-h2 text-h2 text-on-surface">Recent Activity</h3>
      <button className="min-w-touch-target min-h-touch-target rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant">
      <span className="material-symbols-outlined">more_vert</span>
      </button>
      </div>
      <div className="flex flex-col gap-sm flex-1 overflow-y-auto pr-sm">
      {/* Activity Item 1 */}
      <div className="p-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors border border-transparent hover:border-surface-container-highest cursor-pointer flex gap-md items-start">
      <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center flex-shrink-0 mt-1">
      <span className="material-symbols-outlined text-primary text-sm">build</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface">HVAC-04 Filter Replacement</span>
      <span className="font-body-md text-body-md text-on-surface-variant line-clamp-1">Completed by J. Smith</span>
      <span className="font-code text-code text-outline mt-1">10 mins ago</span>
      </div>
      </div>
      {/* Activity Item 2 */}
      <div className="p-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors border border-transparent hover:border-surface-container-highest cursor-pointer flex gap-md items-start">
      <div className="w-10 h-10 rounded-full bg-error-container/20 flex items-center justify-center flex-shrink-0 mt-1">
      <span className="material-symbols-outlined text-error text-sm">warning</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface">PUMP-02 Pressure Drop</span>
      <span className="font-body-md text-body-md text-on-surface-variant line-clamp-1">Automated alert triggered in Sector B</span>
      <span className="font-code text-code text-outline mt-1">45 mins ago</span>
      </div>
      </div>
      {/* Activity Item 3 */}
      <div className="p-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors border border-transparent hover:border-surface-container-highest cursor-pointer flex gap-md items-start">
      <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 mt-1">
      <span className="material-symbols-outlined text-on-surface-variant text-sm">assignment_turned_in</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface">Daily Log Submitted</span>
      <span className="font-body-md text-body-md text-on-surface-variant line-clamp-1">Sector A morning walkthrough</span>
      <span className="font-code text-code text-outline mt-1">2 hours ago</span>
      </div>
      </div>
      {/* Activity Item 4 */}
      <div className="p-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors border border-transparent hover:border-surface-container-highest cursor-pointer flex gap-md items-start opacity-70">
      <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 mt-1">
      <span className="material-symbols-outlined text-on-surface-variant text-sm">update</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface">System Backup</span>
      <span className="font-body-md text-body-md text-on-surface-variant line-clamp-1">Routine data sync</span>
      <span className="font-code text-code text-outline mt-1">5 hours ago</span>
      </div>
      </div>
      </div>
      <button className="w-full mt-md py-sm font-label-md text-label-md text-primary hover:bg-surface-container rounded transition-colors text-center">
                              View All Activity
                          </button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
