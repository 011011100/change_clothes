export const apiUrl = import.meta.env.VITE_API_URL;

export interface Head {
    hair: string;
    face: string;
    head: string;
    neck: string;
}

export interface Body {
    shirt: string;
    shirtArm: string;
    hand: string;
    arm: string;
}

export interface LowerBody {
    waist: string;
    pants: string;
    shoes: string;
}

export interface CharacterAssets {
    head: Head;
    body: Body;
    lowerBody: LowerBody;
}

export const characterAssets: CharacterAssets = {
    head: {
        hair: `${apiUrl}assets/Hair/Black/blackMan1.png`,
        face: `${apiUrl}assets/Face/Completes/face1.png`,
        head: `${apiUrl}assets/Skin/Tint 1/tint1_head.png`,
        neck: `${apiUrl}assets/Skin/Tint 1/tint1_neck.png`
    },
    body: {
        shirt: `${apiUrl}assets/Shirts/Blue/blueShirt1.png`,
        shirtArm: `${apiUrl}assets/Shirts/Blue/blueArm_long.png`,
        hand: `${apiUrl}assets/Skin/Tint 1/tint1_hand.png`,
        arm: `${apiUrl}assets/Skin/Tint 1/tint1_arm.png`
    },
    lowerBody: {
        waist: `${apiUrl}assets/Pants/Blue 1/pantsBlue11.png`,
        pants: `${apiUrl}assets/Pants/Blue 1/pantsBlue1_long.png`,
        shoes: `${apiUrl}assets/Shoes/Black/blackShoe1.png`
    }
};
