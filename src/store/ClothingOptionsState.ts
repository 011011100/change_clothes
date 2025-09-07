import { create } from "zustand";
import {findOptionByKey} from "./FindOptionByKey.ts";

interface ClothingOptionsState {
    choose: {
        hair: { key: string; path: string };
        shirt: { key: string; shirt: string; shirtArm: string };
        shoes: { key: string; path: string };
    };

    setClothing: (part: keyof ClothingOptionsState["choose"], key: string) => void;
}

export const useClothingOptionsStore = create<ClothingOptionsState>((set) => ({
    choose: {
        hair: {
            key: "hair1",
            path: "/PNG/Hair/Black/blackMan1.png"
        },
        shirt: {
            key: "shirt_b1",
            shirt: "/PNG/Shirts/Blue/blueShirt2.png",
            shirtArm: "/PNG/Shirts/Blue/blueArm_long.png"
        },
        shoes: {
            key: "shoes1",
            path: "/PNG/Shoes/Black/blackShoe1.png"
        }
    },

    setClothing: (part, key) =>
        set((state) => {
            const found = findOptionByKey(part, key);
            if (found) {
                return {
                    choose: { ...state.choose, [part]: found }
                };
            }
            return state;
        })
}));
