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
        hair: `${apiUrl}/api/resource/Hair/Black/blackMan1.png`,
        face: `${apiUrl}/api/resource/Face/Completes/face1.png`,
        head: `${apiUrl}/api/resource/Skin/Tint 1/tint1_head.png`,
        neck: `${apiUrl}/api/resource/Skin/Tint 1/tint1_neck.png`
    },
    body: {
        shirt: `${apiUrl}/api/resource/Shirts/Blue/blueShirt1.png`,
        shirtArm: `${apiUrl}/api/resource/Shirts/Blue/blueArm_long.png`,
        hand: `${apiUrl}/api/resource/Skin/Tint 1/tint1_hand.png`,
        arm: `${apiUrl}/api/resource/Skin/Tint 1/tint1_arm.png`
    },
    lowerBody: {
        waist: `${apiUrl}/api/resource/Pants/Blue 1/pantsBlue11.png`,
        pants: `${apiUrl}/api/resource/Pants/Blue 1/pantsBlue1_long.png`,
        shoes: `${apiUrl}/api/resource/Shoes/Black/blackShoe1.png`
    }
};
