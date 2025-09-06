import React from 'react';

interface BodyProps {
    shirt: string;
    shirtArm: string;
    hand: string;
    shirtArmFlip?: boolean;
    handFlip?: boolean;
}

const Body: React.FC<BodyProps> = ({ shirt, shirtArm, hand, shirtArmFlip, handFlip }) => {
    return (
        <div className="avatar-body">
            <img src={shirt} style={{ position: 'absolute', top: 179, left: 12, zIndex: 0 }} />
            {/* 右手 */}
            <img src={shirtArm} style={{ position: 'absolute', top: 181, left: 138, zIndex: 45 }} />
            <img src={hand} style={{ position: 'absolute', top: 280, left: 266, zIndex: 4 }} />
            {/* 左手 */}
            <img
                src={shirtArm}
                style={{
                    position: 'absolute',
                    top: 181,
                    left: -130,
                    zIndex: 5,
                    transform: shirtArmFlip ? 'scaleX(-1)' : undefined
                }}
            />
            <img
                src={hand}
                style={{
                    position: 'absolute',
                    top: 280,
                    left: -149,
                    zIndex: 4,
                    transform: handFlip ? 'scaleX(-1)' : undefined
                }}
            />
        </div>
    );
};

export default Body;
