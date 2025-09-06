import React, {useEffect, useState} from 'react';
import Body from './AvatarBody.tsx';
import LowerBody from './AvatarLowerBody.tsx';
import Head from "./AvatarHand.tsx";

interface AvatarConfig {
    head: {
        hair: string;
        face: string;
        head: string;
        neck: string;
    };
    body: {
        shirt: string;
        shirtArm: { src: string; flip?: boolean };
        hand: { src: string; flip?: boolean };
    };
    lowerBody: {
        waist: string;
        pants: { src: string; flip?: boolean };
        shoes: { src: string; flip?: boolean };
    };
}

const Avatar: React.FC = () => {
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
                hair={config.head.hair}
                face={config.head.face}
                head={config.head.head}
                neck={config.head.neck}
            />
            <Body
                shirt={config.body.shirt}
                shirtArm={config.body.shirtArm.src}
                hand={config.body.hand.src}
            />
            <LowerBody
                waist={config.lowerBody.waist}
                pants={config.lowerBody.pants.src}
                shoes={config.lowerBody.shoes.src}
                pantsFlip={config.lowerBody.pants.flip}
                shoesFlip={config.lowerBody.shoes.flip}
            />
        </div>
    );
};

export default Avatar;
