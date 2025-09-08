// 定义发型、上衣、鞋子的类型
export interface HairOption {
    key: string;
    path: string;
}

export interface ShirtOption {
    key: string;
    shirt: string;
    shirtArm: string;
    type: 'long' | 'short' | 'shorter'
}

export interface ShoeOption {
    key: string;
    path: string;
}

// 总类型
export interface ClothingOptions {
    hair: HairOption[];
    shirt: ShirtOption[];
    shoes: ShoeOption[];
}

// 实际数据
export const clothingOptions: ClothingOptions = {
    hair: [
        { key: "hair1", path: "/PNG/Hair/Black/blackMan1.png" },
        { key: "hair2", path: "/PNG/Hair/Black/blackMan2.png" },
        { key: "hair3", path: "/PNG/Hair/Black/blackMan3.png" },
        { key: "hair4", path: "/PNG/Hair/Black/blackMan4.png" },
        { key: "hair5", path: "/PNG/Hair/Black/blackMan5.png" },
        { key: "hair6", path: "/PNG/Hair/Black/blackMan6.png" }
    ],
    shirt: [
        {
            key: "shirt_b1",
            shirt: "/PNG/Shirts/Blue/blueShirt2.png",
            shirtArm: "/PNG/Shirts/Blue/blueArm_long.png",
            type: "long"
        },
        {
            key: "shirt_b2",
            shirt: "/PNG/Shirts/Blue/blueShirt3.png",
            shirtArm: "/PNG/Shirts/Blue/blueArm_short.png",
            type: "short"
        },
        {
            key: "shirt_b3",
            shirt: "/PNG/Shirts/Blue/blueShirt1.png",
            shirtArm: "/PNG/Shirts/Blue/blueArm_shorter.png",
            type: "shorter"
        },
        {
            key: "shirt_r1",
            shirt: "/PNG/Shirts/Red/redShirt5.png",
            shirtArm: "/PNG/Shirts/Red/redArm_long.png",
            type: "long"
        },
        {
            key: "shirt_r2",
            shirt: "/PNG/Shirts/Red/redShirt6.png",
            shirtArm: "/PNG/Shirts/Red/redArm_short.png",
            type: "short"
        },
        {
            key: "shirt_r3",
            shirt: "/PNG/Shirts/Red/redShirt7.png",
            shirtArm: "/PNG/Shirts/Red/redArm_shorter.png",
            type: "shorter"
        },
        {
            key: "shirt_y1",
            shirt: "/PNG/Shirts/Yellow/shirtYellow8.png",
            shirtArm: "/PNG/Shirts/Yellow/armYellow_long.png",
            type: "long"
        },
        {
            key: "shirt_y2",
            shirt: "/PNG/Shirts/Yellow/shirtYellow1.png",
            shirtArm: "/PNG/Shirts/Yellow/armYellow_short.png",
            type: "short"
        },
        {
            key: "shirt_y3",
            shirt: "/PNG/Shirts/Yellow/shirtYellow2.png",
            shirtArm: "/PNG/Shirts/Yellow/armYellow_shorter.png",
            type: "shorter"
        }
    ],
    shoes: [
        { key: "shoes1", path: "/PNG/Shoes/Black/blackShoe1.png" },
        { key: "shoes2", path: "/PNG/Shoes/Black/blackShoe2.png" },
        { key: "shoes3", path: "/PNG/Shoes/Black/blackShoe3.png" },
        { key: "shoes4", path: "/PNG/Shoes/Black/blackShoe4.png" },
        { key: "shoes5", path: "/PNG/Shoes/Black/blackShoe5.png" }
    ]
};
