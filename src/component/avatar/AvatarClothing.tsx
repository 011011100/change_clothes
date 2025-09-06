import React from 'react';

interface ClothingProps {
    shirt: string;
    shirtArm: string;
}

const AvatarClothing: React.FC<ClothingProps> = ({shirt, shirtArm}) => {
    return (
        <div className="avatar-clothing" style={{
            position: 'relative',
            width: '100%',
            height: 100,
            transform: 'scale(0.5)',   // 整体缩放 0.5 倍
            transformOrigin: 'top left'
        }}>
            <img src={shirt} style={{position: 'absolute', top: 0, left: 140, zIndex: 0}}/>
            {/* 右手 */}
            <img src={shirtArm} style={{position: 'absolute', top: 0, left: 255, zIndex: 45}}/>
            {/* 左手 */}
            <img
                src={shirtArm}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 5,
                    transform: 'scaleX(-1)'
                }}
            />
        </div>
    );
};

export default AvatarClothing;
