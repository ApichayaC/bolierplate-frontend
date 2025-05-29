import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IDashboardState, IDashboardStore } from "./dashboard.type";

const initialState: IDashboardState = {
  dashboard: "",
  owner: "",
  project: "",
  group: "",
};

export const useDashboardStore = create<IDashboardStore>()(
  persist(
    (set) => ({
      ...initialState,
      setDashboard: (dashboard: string) => {
        set({ dashboard });
      },
      setOwner: (owner: string) => {
        set({ owner });
      },
      setProject: (project: string) => {
        set({ project });
      },
      setGroup: (group: string) => {
        set({ group });
      },
      reset: () => {
        set(initialState);
      },
    }),
    {
      name: "dashboard-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
