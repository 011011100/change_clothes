import React from 'react';

interface BodyProps {
    shirt: string;
    shirtArm: string;
    hand: string;
}

const AvatarBody: React.FC<BodyProps> = ({ shirt, shirtArm, hand }) => {
    return (
        <div className="avatar-body">
            <img src={shirt} style={{ position: 'absolute', top: 179, left: 162, zIndex: 0 }} />
            {/* 右手 */}
            <img src={shirtArm} style={{ position: 'absolute', top: 181, left: 288, zIndex: 45 }} />
            <img src={hand} style={{ position: 'absolute', top: 280, left: 416, zIndex: 4 }} />
            {/* 左手 */}
            <img
                src={shirtArm}
                style={{
                    position: 'absolute',
                    top: 181,
                    left: 20,
                    zIndex: 5,
                    transform: 'scaleX(-1)'
                }}
            />
            <img
                src={hand}
                style={{
                    position: 'absolute',
                    top: 280,
                    left: 0,
                    zIndex: 4,
                    transform: 'scaleX(-1)'
                }}
            />
        </div>
    );
};

export default AvatarBody;
