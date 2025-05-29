import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ISignInState, ISignInStore } from "./signIn.type";

const initialState: ISignInState = {
  email: "",
  password: "",
};

export const useSignInStore = create<ISignInStore>()(
  persist(
    (set) => ({
      ...initialState,
      setEmail: (value: string) => {
        set({ email: value });
      },
      setPassword: (value: string) => {
        set({ password: value });
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
