import React from 'react';

interface LowerBodyProps {
    waist: string;
    pants: string;
    shoes: string;
}

const AvatarLowerBody: React.FC<LowerBodyProps> = ({ waist, pants, shoes}) => {
    return (
        <div className="avatar-lower-body" style={{ position:'relative',top: 0, left:110 }}>
            <img src={waist} style={{ position: 'absolute', top: 344, left: 51, zIndex: 2 }} />
            {/* 右腿 */}
            <img src={pants} style={{ position: 'absolute', top: 360, left: 125, zIndex: 2 }} />
            <img src={shoes} style={{ position: 'absolute', top: 500, left: 162, zIndex: 3 }} />
            {/* 左腿 */}
            <img
                src={pants}
                style={{ position: 'absolute', top: 360, left: 20, zIndex: 2, transform:'scaleX(-1)' }}
            />
            <img
                src={shoes}
                style={{ position: 'absolute', top: 500, left: 0, zIndex: 3, transform: 'scaleX(-1)'}}
            />
        </div>
    );
};

export default AvatarLowerBody;
