// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Task Board
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

export interface TaskBoardProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (screen: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
  state?: unknown;
}

export function TaskBoard(_props: TaskBoardProps = {}) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-full py-md px-sm bg-surface-container w-64 border-r border-surface-container-low shrink-0">
      <div className="flex items-center gap-sm mb-lg px-sm">
      <img alt="Company Logo" className="w-8 h-8 rounded-full" data-alt="A macro shot of a single green leaf with glowing dew drops, set against a dark, moody background. The lighting is dramatic, highlighting the intricate veins of the leaf. This represents the high-tech, precision nature of the Greenhouse Ops brand in a dark, corporate minimalist aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyuIMymQlKBdXU-OTSpvGxWdoGlzzg4RDnIdyQXLtT5a49Bcmqhqq1pW8I1-zfjlVuhAkNDNupeubBA2otXsmacr7Dx3wRwIvktpCq7TFK-HccbQ8W7w1UQ8ycs1Nt78my7rTbUUXwWps2MaTUmUqCFL2qY8H7bFJxJ_dCKwbwaOZDq-9dlnatP_m1lO1oIS2SlLW_8YAFYGGQ_TdjIvQZN97qO2YQQRlA5b_YpxPoEA6GS-VGrY56d2GW47ZLTX1oCw03cYhjKXU" />
      <div>
      <h2 className="font-h2 text-h2 text-primary">Greenhouse Ops</h2>
      <p className="font-label-md text-label-md text-on-surface-variant">Maintenance Console</p>
      </div>
      </div>
      <button className="flex items-center justify-center gap-sm bg-primary text-on-primary rounded h-touch-target font-label-md text-label-md hover:bg-primary-fixed transition-colors mb-lg mx-sm">
      <span className="material-symbols-outlined text-[18px]">add</span>
            Create Task
          </button>
      <div className="flex flex-col gap-xs flex-1 overflow-y-auto">
      <a className="flex items-center gap-sm px-sm py-sm rounded h-touch-target text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
      <span className="material-symbols-outlined text-[20px]">dashboard</span>
      <span className="font-body-md text-body-md">Dashboard</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded h-touch-target text-primary font-bold bg-surface-container-high border-l-2 border-primary" href="#">
      <span className="material-symbols-outlined text-[20px]">assignment</span>
      <span className="font-body-md text-body-md">Task Board</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded h-touch-target text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
      <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
      <span className="font-body-md text-body-md">Equipment</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded h-touch-target text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
      <span className="material-symbols-outlined text-[20px]">database</span>
      <span className="font-body-md text-body-md">Logs</span>
      </a>
      </div>
      <div className="mt-auto px-sm pt-md border-t border-surface-container-low">
      <div className="flex items-center gap-sm h-touch-target">
      <img alt="User profile" className="w-8 h-8 rounded-full" data-alt="A professional headshot of a technician in a dark blue uniform, looking confidently at the camera. The background is a slightly blurred, dimly lit industrial greenhouse setting. The lighting on the face is crisp and cool, matching the dark mode, enterprise-grade aesthetic of the interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlg0YpsW1GszFacBvYyp5-7TeYjQHe-5OJkE0uF8a6me4j24nSOWtWGVOfkOS88jYluQNPz-WJHBtFq6rYmdH11iBkBp0pyVLxG3d2LidASLOCfGDcFz9U0nO7NdWjEg5kS82mul3hWQZJII9ZctpuA_XHuqmf-8MrZyRRCAVeRmqdzNj5OPyk6eBXgGuw39c0uZOFOJsa3TqT_ILmh_hw5Wgzr6my7hKPD3vbCXfsk5_OdtdLVl_8WtbNOKieGaW8d2TD1JaIl38" />
      <div className="flex-1 min-w-0">
      <p className="font-body-md text-body-md text-on-surface truncate">Tech 04 - JD</p>
      </div>
      </div>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
      {/* TopAppBar */}
      <header className="flex justify-between items-center h-touch-target px-lg py-md bg-surface shrink-0 border-b border-surface-container-lowest">
      <h1 className="font-h1 text-h1 text-primary truncate">Task Board</h1>
      <div className="flex items-center gap-sm">
      <div className="relative hidden sm:block">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
      <input className="bg-surface-container border border-outline-variant rounded h-touch-target pl-xl pr-sm text-on-surface font-body-md focus:border-primary focus:ring-1 focus:ring-primary w-64 placeholder-on-surface-variant" placeholder="Search tasks..." type="text" />
      </div>
      <button className="w-11 h-touch-target flex items-center justify-center rounded text-on-surface-variant hover:text-primary transition-all hover:bg-surface-container-high">
      <span className="material-symbols-outlined">sync</span>
      </button>
      </div>
      </header>
      {/* Kanban Canvas */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden p-lg bg-background">
      <div className="flex h-full gap-gutter min-w-max">
      {/* Column: Todo */}
      <div className="flex flex-col w-80 shrink-0 h-full">
      <div className="flex items-center justify-between mb-sm px-xs">
      <div className="flex items-center gap-xs">
      <h3 className="font-h2 text-h2 text-on-surface">Todo</h3>
      <span className="bg-surface-container px-xs py-1 rounded font-code text-code text-on-surface-variant">3</span>
      </div>
      <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[18px]">more_horiz</span></button>
      </div>
      <div className="flex-1 overflow-y-auto space-y-sm p-1">
      {/* Card 1 */}
      <div className="bg-surface rounded-xl border border-surface-container-lowest p-md hover:bg-surface-container-low transition-colors cursor-pointer group">
      <div className="flex justify-between items-start mb-sm">
      <span className="bg-error-container/20 text-error px-2 py-0.5 rounded-full font-label-md text-label-md">High</span>
      <span className="text-on-surface-variant font-code text-code group-hover:text-primary">TSK-892</span>
      </div>
      <h4 className="font-body-lg text-body-lg text-on-surface mb-2">Irrigation Filter Cleaning</h4>
      <p className="font-body-md text-body-md text-on-surface-variant mb-md line-clamp-2">Zone C main line filter requires backwashing and visual inspection.</p>
      <div className="flex items-center justify-between mt-auto">
      <div className="flex -space-x-2">
      <img alt="Assignee" className="w-6 h-6 rounded-full border-2 border-surface" data-alt="A small circular avatar portrait of a female technician in a dark setting, looking focused. The lighting highlights her face against a dark, out-of-focus background, fitting the high-tech, corporate minimalist style of the application." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg6481oZNfnpgrBsdFOfZcxOBSHOcFKtym-JyTlt1k_Mo4Ucbe3JewLZ-oa9GRaex9PUoo92QnYTQZX9Sg6mt_3F0RYi-v4KSiyLmiUM5VfTuDLtFqFgP5SZi5CCjwDadILG0ndpAC13n05Dkn9g0tKRzy4bwHlITvXpEbwNYEXAawfOvDAeW8-cWIj7Z4KrYMscJ4bZvoUe7NiVsS87CEEhSvE0j-I1MC54JhHF2nP8900k0CoGaGr9VKnMUluMv88x96tquLAd0" />
      </div>
      <div className="flex items-center text-on-surface-variant gap-xs">
      <span className="material-symbols-outlined text-[16px]">calendar_today</span>
      <span className="font-label-md text-label-md">Today</span>
      </div>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface rounded-xl border border-surface-container-lowest p-md hover:bg-surface-container-low transition-colors cursor-pointer group">
      <div className="flex justify-between items-start mb-sm">
      <span className="bg-tertiary-container/20 text-tertiary px-2 py-0.5 rounded-full font-label-md text-label-md">Med</span>
      <span className="text-on-surface-variant font-code text-code group-hover:text-primary">TSK-895</span>
      </div>
      <h4 className="font-body-lg text-body-lg text-on-surface mb-2">Sensor Calibration - Bay 4</h4>
      <p className="font-body-md text-body-md text-on-surface-variant mb-md line-clamp-2">Recalibrate humidity and temperature nodes on the east wall.</p>
      <div className="flex items-center justify-between mt-auto">
      <div className="flex -space-x-2">
      <img alt="Assignee" className="w-6 h-6 rounded-full border-2 border-surface" data-alt="A small circular avatar portrait of a male technician. He is wearing a dark shirt and the background is a muted, dark grey. The portrait is sharp and professional, aligning with the dark mode operational aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFdE83gJMK32e0yoUaeN5dD32tURcpErnPRPPvvop6NJFO9GC25Cwcc9XChSiSpr44z0yhoy4Vp8oEe2U6q3LTgWsB81EFvzdMjUDj3E7hPdbvNqGljqyXmJ3cQeStiHN7dgete4t7M4Lsa1PLEzsogJiIoOISbWT-PiLw0Yrn46Y_YHUp_HDG1eL4ognPnb77Tyork4HmTEwZvhevI5L79EPnkziK_7wr-s_CYKPmwB8FXJgMoyg0nomlfDwncj4tcjqj_dizR7E" />
      </div>
      <div className="flex items-center text-on-surface-variant gap-xs">
      <span className="material-symbols-outlined text-[16px]">calendar_today</span>
      <span className="font-label-md text-label-md">Tomorrow</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Column: In Progress */}
      <div className="flex flex-col w-80 shrink-0 h-full">
      <div className="flex items-center justify-between mb-sm px-xs">
      <div className="flex items-center gap-xs">
      <h3 className="font-h2 text-h2 text-on-surface">In Progress</h3>
      <span className="bg-surface-container px-xs py-1 rounded font-code text-code text-on-surface-variant">2</span>
      </div>
      <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[18px]">more_horiz</span></button>
      </div>
      <div className="flex-1 overflow-y-auto space-y-sm p-1">
      {/* Card 3 */}
      <div className="bg-surface-container border border-primary/30 rounded-xl p-md shadow-[0_0_10px_rgba(77,142,255,0.05)] cursor-pointer group">
      <div className="flex justify-between items-start mb-sm">
      <span className="bg-error-container/20 text-error px-2 py-0.5 rounded-full font-label-md text-label-md">High</span>
      <span className="text-primary font-code text-code">TSK-889</span>
      </div>
      <h4 className="font-body-lg text-body-lg text-on-surface mb-2">HVAC Fan Bearing Replacement</h4>
      <p className="font-body-md text-body-md text-on-surface-variant mb-md line-clamp-2">Unit 2A is reporting high vibration levels. Replace main bearings.</p>
      <div className="w-full bg-surface-container-high rounded-full h-1.5 mb-md">
      <div className="bg-primary h-1.5 rounded-full w-[65%]"></div>
      </div>
      <div className="flex items-center justify-between mt-auto">
      <div className="flex -space-x-2">
      <img alt="Assignee" className="w-6 h-6 rounded-full border-2 border-surface" data-alt="A small circular avatar portrait of a technician in a dark blue uniform, looking confidently at the camera. The background is a slightly blurred, dimly lit industrial greenhouse setting. The lighting on the face is crisp and cool, matching the dark mode, enterprise-grade aesthetic of the interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbrn6t104DzxgkMMuhh8DeCzvtPaaUrK7XQ7GrMWWY7cQcsB0T3Y7PQYKYjp5eJmGmTngI8HkkUjWT7Ca6HTtbGwxFRFwJHOnWufw4PA0AJBlTrpLv7UXKOzmiRC1z9DOwo7AziAWq2G_8OcKNsWfVwUtzqzvTJ10dJ_5upMv4b9zFmWx-vO-Q2lASVhOxt4kbLfbTwLo0PMQd9MPP9LbqLIqnT_vQ3UJdnE-gh1lHGq87aldeWGNRlUgxYMz9_fLFAu6Ttj4Cy38" />
      </div>
      <div className="flex items-center text-primary gap-xs">
      <span className="material-symbols-outlined text-[16px] animate-pulse">pending</span>
      <span className="font-label-md text-label-md">In Progress</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Column: Done */}
      <div className="flex flex-col w-80 shrink-0 h-full opacity-70 hover:opacity-100 transition-opacity">
      <div className="flex items-center justify-between mb-sm px-xs">
      <div className="flex items-center gap-xs">
      <h3 className="font-h2 text-h2 text-on-surface">Done</h3>
      <span className="bg-surface-container px-xs py-1 rounded font-code text-code text-on-surface-variant">12</span>
      </div>
      <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[18px]">more_horiz</span></button>
      </div>
      <div className="flex-1 overflow-y-auto space-y-sm p-1">
      {/* Card 4 */}
      <div className="bg-surface rounded-xl border border-surface-container-lowest p-md cursor-default">
      <div className="flex justify-between items-start mb-sm">
      <span className="bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-full font-label-md text-label-md">Low</span>
      <span className="text-on-surface-variant font-code text-code">TSK-880</span>
      </div>
      <h4 className="font-body-lg text-body-lg text-on-surface-variant line-through mb-2">Nutrient Tank Refill</h4>
      <div className="flex items-center justify-between mt-md">
      <div className="flex -space-x-2 opacity-50">
      <img alt="Assignee" className="w-6 h-6 rounded-full border-2 border-surface" data-alt="A small circular avatar portrait of a male technician. He is wearing a dark shirt and the background is a muted, dark grey. The portrait is sharp and professional, aligning with the dark mode operational aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCOpdW8jNGI-VRtBVK3RQYCbgyqpELAJPsifNBlxXbqZutMvJ0mNcgdF0LW3Mm8S5dX61YEFn6frUrx3R31XTSIduzLYk0U00xV7qZL-uwAUrTaLsrSWlNQuHW4LncSYbD_MnAfz0IJJYNmPOq9scCnk_qCjYfIktsRDOOD-6hiXjm5w2CYnQPj7MX3Y2oNVxWsvw-K0kawnP7AkqdgJ2Kl-w_UiXJ2PwGc_szOEOqRYPfdgluKfWPQDJjDqC5mcE4h-t4-pK4Un4" />
      </div>
      <div className="flex items-center text-on-surface-variant gap-xs">
      <span className="material-symbols-outlined text-[16px]">check_circle</span>
      <span className="font-label-md text-label-md">08:30 AM</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
