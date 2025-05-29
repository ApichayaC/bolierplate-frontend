import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IContentState, IContentStore } from "./content.type";

const initialState: IContentState = {
  content: "home",
};

export const useContentStore = create<IContentStore>()(
  persist(
    (set) => ({
      ...initialState,
      setContent: (value: string) => {
        set({ content: value });
      },
      reset: () => {
        set(initialState);
      },
    }),
    {
      name: "content-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
