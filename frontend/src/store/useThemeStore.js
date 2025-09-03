import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("TalkTribe-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("TalkTribe-theme", theme);
    set({ theme });
  },
}));
