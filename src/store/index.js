import { create } from "zustand";
import { createSystemSlice } from "./slices/system";

export const useStore = create((...a) => ({
  ...createSystemSlice(...a),
}));
