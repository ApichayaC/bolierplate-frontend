import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IProjectState, IProjectStore } from "./projects.type";

const initialState: IProjectState = {
  project: "",
  type: "",
};

export const useProjectStore = create<IProjectStore>()(
  persist(
    (set) => ({
      ...initialState,
      setProject: (project: string) => {
        set({ project });
      },
      setType: (type: string) => {
        set({ type });
      },
      reset: () => {
        set(initialState);
      },
    }),
    {
      name: "project-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
