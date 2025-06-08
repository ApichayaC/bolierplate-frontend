import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IProjectState, IProjectStore } from "./projects.type";
import { PROJECTS } from "@/constants/bof.constant";
import { IProject } from "@/interface/bof.interface";

const initialState: IProjectState = {
  projects: PROJECTS,
  project: "",
  type: "",
  isOpenDialog: false,
};

export const useProjectStore = create<IProjectStore>()(
  persist(
    (set) => ({
      ...initialState,
      addProject: (newProject: IProject) => {
        set((state) => ({
          projects: [...state.projects, newProject],
        }));
      },
      setProject: (project: string) => {
        set({ project });
      },
      setType: (type: string) => {
        set({ type });
      },
      setIsOpenDialog: (isOpenDialog: boolean) => {
        set({ isOpenDialog });
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
