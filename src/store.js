import { createContext } from "react";

const initialState = {
  homeBasePlayerTokenCount: {
    red: 4,
    blue: 4,
    green: 4,
    yellow: 4,
  },
};
export const storeForLudo = createContext(initialState);
