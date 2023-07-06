import { createContext } from "react";
const veticleMatrix = () =>
  new Array(6).fill({}).map(() => new Array(3).fill({}));
const horizontalMatrix = () =>
  new Array(3).fill({}).map(() => new Array(6).fill({}));

const initialState = {
  homeBasePlayerTokenCount: {
    red: 4,
    blue: 4,
    green: 4,
    yellow: 4,
  },
  path: {
    red: veticleMatrix(),
    blue: veticleMatrix(),
    green: horizontalMatrix(),
    yellow: horizontalMatrix(),
  },
};
export const storeForLudo = createContext(initialState);
