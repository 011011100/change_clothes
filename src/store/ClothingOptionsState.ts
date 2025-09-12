import {create} from "zustand";
import {findOptionByKey} from "./FindOptionByKey.ts";

const apiUrl = import.meta.env.VITE_API_URL;

interface ClothingOptionsState {
    choose: {
        hair: { key: string; path: string };
        shirt: { key: string; shirt: string; shirtArm: string; type: 'long' | 'short' | 'shorter' };
        shoes: { key: string; path: string };
        background: { key: string; path: string };
    };

    setClothing: (part: keyof ClothingOptionsState["choose"], key: string) => void;
}

export const useClothingOptionsStore = create<ClothingOptionsState>((set) => ({
    choose: {
        hair: {
            key: "hair1",
            path: apiUrl + "/api/resource/Hair/Black/blackMan1.png"
        },
        shirt: {
            key: "shirt_b1",
            shirt: apiUrl + "/api/resource/Shirts/Blue/blueShirt2.png",
            shirtArm: apiUrl + "/api/resource/Shirts/Blue/blueArm_long.png",
            type: "long"
        },
        shoes: {
            key: "shoes1",
            path: apiUrl + "/api/resource/Shoes/Black/blackShoe1.png"
        },
        background: {
            key: "room3",
            path: apiUrl + "/api/resource/Background/Wasteland.jpg"
        }
    },

    setClothing: (part, key) =>
        set((state) => {
            const found = findOptionByKey(part, key);
            if (found) {
                return {
                    choose: {...state.choose, [part]: found}
                };
            }
            return state;
        })
}));
