import React, {useEffect, useState} from 'react';
import Body from './AvatarBody.tsx';
import LowerBody from './AvatarLowerBody.tsx';
import Head from "./AvatarHand.tsx";
import {useClothingOptionsStore} from "../../store/ClothingOptionsState.ts";

interface AvatarConfig {
    head: {
        hair: string;
        face: string;
        head: string;
        neck: string;
    };
    body: {
        shirt: string;
        shirtArm: string
        hand: string
        arm: string;
    };
    lowerBody: {
        waist: string;
        pants: string
        shoes: string
    };
}

const Avatar: React.FC = () => {

    const { choose } = useClothingOptionsStore();

    const [config, setConfig] = useState<AvatarConfig | null>(null);

    useEffect(() => {
        fetch('/avatarConfig.json')
            .then((res) => res.json())
            .then((data) => setConfig(data))
            .catch((err) => console.error(err));
    }, []);

    if (!config) return <div>Loading...</div>;

    return (
        <div className="avatar-container" style={{
            position: 'relative',
            width: 240,
            height: 270,
            transform: 'scale(0.5)',   // 整体缩放 0.5 倍
            transformOrigin: 'top left'
        }}>
            <Head
                hair={choose.hair.path}
                face={config.head.face}
                head={config.head.head}
                neck={config.head.neck}
            />
            <Body
                shirt={choose.shirt.shirt}
                shirtArm={choose.shirt.shirtArm}
                shirtType={choose.shirt.type}
                hand={config.body.hand}
                arm={config.body.arm}
            />
            <LowerBody
                waist={config.lowerBody.waist}
                pants={config.lowerBody.pants}
                shoes={choose.shoes.path}
            />
        </div>
    );
};

export default Avatar;
