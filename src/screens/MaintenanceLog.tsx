// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Maintenance Log
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

export interface MaintenanceLogProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (screen: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
  state?: unknown;
}

export function MaintenanceLog(_props: MaintenanceLogProps = {}) {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] bg-surface dark:bg-surface-dim flex justify-between items-center h-touch-target px-lg py-md z-20">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface">Logs</h1>
      </div>
      <div className="flex items-center space-x-md">
      <div className="relative hidden md:block">
      <span className="material-symbols-outlined absolute left-sm top-1/2 transform -translate-y-1/2 text-on-surface-variant font-body-md">search</span>
      <input className="bg-surface-container-high border border-outline-variant text-on-surface placeholder-on-surface-variant rounded-DEFAULT pl-xl pr-sm py-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary h-touch-target w-64 font-body-md text-body-md" placeholder="Search logs..." type="text" />
      </div>
      <button className="h-touch-target w-touch-target flex items-center justify-center text-on-surface-variant hover:text-primary transition-all hover:bg-surface-container-high rounded-full">
      <span className="material-symbols-outlined">sync</span>
      </button>
      <button className="h-touch-target w-touch-target flex items-center justify-center text-on-surface-variant hover:text-primary transition-all hover:bg-surface-container-high rounded-full">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* SideNavBar */}
      <nav className="fixed left-0 top-0 h-full w-64 bg-surface-container dark:bg-surface-container flex flex-col py-md px-sm z-30 border-r border-surface-container-low">
      <div className="mb-xl px-md">
      <h2 className="font-h2 text-h2 text-primary">Greenhouse Ops</h2>
      <p className="font-label-md text-label-md text-on-surface-variant mt-xs">Maintenance Console</p>
      </div>
      <button className="w-full bg-primary text-on-primary font-label-md text-label-md h-touch-target rounded-DEFAULT mb-xl flex items-center justify-center hover:bg-primary-fixed transition-colors">
      <span className="material-symbols-outlined mr-sm">add</span>
                  Create Task
              </button>
      <ul className="space-y-sm flex-1">
      <li>
      <a className="flex items-center space-x-md px-md h-touch-target rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-body-md text-body-md" href="#">
      <span className="material-symbols-outlined">dashboard</span>
      <span>Dashboard</span>
      </a>
      </li>
      <li>
      <a className="flex items-center space-x-md px-md h-touch-target rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-body-md text-body-md" href="#">
      <span className="material-symbols-outlined">assignment</span>
      <span>Task Board</span>
      </a>
      </li>
      <li>
      <a className="flex items-center space-x-md px-md h-touch-target rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-body-md text-body-md" href="#">
      <span className="material-symbols-outlined">precision_manufacturing</span>
      <span>Equipment</span>
      </a>
      </li>
      <li>
      <a className="flex items-center space-x-md px-md h-touch-target rounded-DEFAULT text-primary font-bold border-r-2 border-primary bg-surface-container-high hover:bg-surface-container-high hover:text-on-surface transition-colors font-body-md text-body-md opacity-80" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>database</span>
      <span>Logs</span>
      </a>
      </li>
      </ul>
      <div className="mt-auto px-md">
      <img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant object-cover" data-alt="A small circular profile picture of an industrial technician wearing safety gear in a modern facility. The lighting is slightly moody, reflecting the dark mode aesthetic of the enterprise dashboard. High contrast, professional portrait style fitting an operations center UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFOIUqCeM9vpswPjXivqc6XYVymoLt8y8BONuHaG39-V6xpZXk0UzNZkU2XGlfKPs1NdYRaHmK426YnOdpzwRPM8gcAhEdnwkJLItg_8pQcvd0sUsykDr5vnpKK6zy23LP2ab_L3v1OxP2hW5GfANE1e_LTpKacyHnE-uhe2l4D40gTDOohaE8fSwpyhLx0XNP87BYNFIOVrVDTiERlHoUpACJN9ydPIFCAIv82-9on3vqI160TIx_WvGn35woSeniSZvOrxY0OMc" />
      </div>
      </nav>
      {/* Main Content */}
      <main className="ml-64 mt-touch-target p-gutter pb-xl min-h-[calc(100vh-44px)]">
      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-md">
      <div className="flex items-center space-x-md">
      <button className="h-touch-target px-md flex items-center justify-center bg-surface-container-high border border-outline-variant rounded-DEFAULT text-on-surface font-label-md text-label-md hover:bg-surface-variant transition-colors">
      <span className="material-symbols-outlined mr-sm text-on-surface-variant">filter_list</span>
                          Filter
                      </button>
      <div className="flex items-center bg-surface-container-high border border-outline-variant rounded-DEFAULT h-touch-target px-md">
      <span className="material-symbols-outlined text-on-surface-variant mr-sm">calendar_today</span>
      <span className="font-body-md text-body-md text-on-surface">Oct 24, 2023 - Oct 31, 2023</span>
      </div>
      </div>
      <button className="h-touch-target px-md flex items-center justify-center border border-outline-variant rounded-DEFAULT text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors">
      <span className="material-symbols-outlined mr-sm text-on-surface-variant">download</span>
                      Export CSV
                  </button>
      </div>
      {/* Data Table Container */}
      <div className="bg-surface rounded-lg border border-surface-container-low overflow-hidden">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-surface-container-lowest border-b border-surface-container-low">
      <th className="p-sm font-label-md text-label-md text-on-surface-variant whitespace-nowrap">Date/Time</th>
      <th className="p-sm font-label-md text-label-md text-on-surface-variant whitespace-nowrap">Equipment</th>
      <th className="p-sm font-label-md text-label-md text-on-surface-variant whitespace-nowrap">Action Taken</th>
      <th className="p-sm font-label-md text-label-md text-on-surface-variant whitespace-nowrap">Technician</th>
      <th className="p-sm font-label-md text-label-md text-on-surface-variant whitespace-nowrap">Status</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-surface-container-low font-code text-code">
      <tr className="hover:bg-surface-container-lowest transition-colors">
      <td className="p-sm text-on-surface">2023-10-31 08:15</td>
      <td className="p-sm">
      <div className="flex flex-col">
      <span className="text-on-surface font-medium">GH-PUMP-04</span>
      <span className="text-on-surface-variant text-[10px]">Zone A Irrigation</span>
      </div>
      </td>
      <td className="p-sm text-on-surface">Replaced primary seal; recalibrated flow sensor.</td>
      <td className="p-sm text-on-surface-variant">J. Miller</td>
      <td className="p-sm">
      <span className="inline-flex items-center px-xs py-[2px] rounded-DEFAULT bg-primary/10 text-primary font-label-md text-[10px]">
      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-1"></span> Completed
                                      </span>
      </td>
      </tr>
      <tr className="hover:bg-surface-container-lowest transition-colors">
      <td className="p-sm text-on-surface">2023-10-30 14:30</td>
      <td className="p-sm">
      <div className="flex flex-col">
      <span className="text-on-surface font-medium">HVAC-UNIT-12</span>
      <span className="text-on-surface-variant text-[10px]">Climate Control C</span>
      </div>
      </td>
      <td className="p-sm text-on-surface">Routine filter replacement and coolant level check.</td>
      <td className="p-sm text-on-surface-variant">S. Chen</td>
      <td className="p-sm">
      <span className="inline-flex items-center px-xs py-[2px] rounded-DEFAULT bg-primary/10 text-primary font-label-md text-[10px]">
      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-1"></span> Completed
                                      </span>
      </td>
      </tr>
      <tr className="hover:bg-surface-container-lowest transition-colors">
      <td className="p-sm text-on-surface">2023-10-30 09:45</td>
      <td className="p-sm">
      <div className="flex flex-col">
      <span className="text-on-surface font-medium">SENS-HUM-09</span>
      <span className="text-on-surface-variant text-[10px]">Zone B Monitoring</span>
      </div>
      </td>
      <td className="p-sm text-on-surface">Attempted recalibration; sensor unresponsive. Hardware swap required.</td>
      <td className="p-sm text-on-surface-variant">A. Torres</td>
      <td className="p-sm">
      <span className="inline-flex items-center px-xs py-[2px] rounded-DEFAULT bg-error/10 text-error font-label-md text-[10px]">
      <span className="w-1.5 h-1.5 rounded-full bg-error mr-1"></span> Failed
                                      </span>
      </td>
      </tr>
      <tr className="hover:bg-surface-container-lowest transition-colors">
      <td className="p-sm text-on-surface">2023-10-29 16:20</td>
      <td className="p-sm">
      <div className="flex flex-col">
      <span className="text-on-surface font-medium">GH-VALVE-22</span>
      <span className="text-on-surface-variant text-[10px]">Nutrient Line D</span>
      </div>
      </td>
      <td className="p-sm text-on-surface">Cleared blockage in primary feed line; tested flow rate.</td>
      <td className="p-sm text-on-surface-variant">J. Miller</td>
      <td className="p-sm">
      <span className="inline-flex items-center px-xs py-[2px] rounded-DEFAULT bg-primary/10 text-primary font-label-md text-[10px]">
      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-1"></span> Completed
                                      </span>
      </td>
      </tr>
      <tr className="hover:bg-surface-container-lowest transition-colors">
      <td className="p-sm text-on-surface">2023-10-28 11:10</td>
      <td className="p-sm">
      <div className="flex flex-col">
      <span className="text-on-surface font-medium">LIGHT-ARRAY-05</span>
      <span className="text-on-surface-variant text-[10px]">Grow Zone A</span>
      </div>
      </td>
      <td className="p-sm text-on-surface">Replaced 3 faulty LED modules; updated firmware on controller.</td>
      <td className="p-sm text-on-surface-variant">K. Davis</td>
      <td className="p-sm">
      <span className="inline-flex items-center px-xs py-[2px] rounded-DEFAULT bg-primary/10 text-primary font-label-md text-[10px]">
      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-1"></span> Completed
                                      </span>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Pagination Footer */}
      <div className="bg-surface-container-lowest border-t border-surface-container-low p-sm flex items-center justify-between">
      <span className="font-label-md text-label-md text-on-surface-variant">Showing 1-5 of 142 entries</span>
      <div className="flex space-x-xs">
      <button className="h-8 w-8 flex items-center justify-center rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-high transition-colors disabled:opacity-50" disabled={true}>
      <span className="material-symbols-outlined text-[18px]">chevron_left</span>
      </button>
      <button className="h-8 w-8 flex items-center justify-center rounded-DEFAULT bg-surface-container-high text-primary font-label-md text-label-md">1</button>
      <button className="h-8 w-8 flex items-center justify-center rounded-DEFAULT text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md">2</button>
      <button className="h-8 w-8 flex items-center justify-center rounded-DEFAULT text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md">3</button>
      <span className="h-8 w-8 flex items-center justify-center text-on-surface-variant">...</span>
      <button className="h-8 w-8 flex items-center justify-center rounded-DEFAULT text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md">29</button>
      <button className="h-8 w-8 flex items-center justify-center rounded-DEFAULT text-on-surface hover:bg-surface-container-high transition-colors">
      <span className="material-symbols-outlined text-[18px]">chevron_right</span>
      </button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
