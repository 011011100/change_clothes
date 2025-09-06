import React from 'react';

interface LowerBodyProps {
    waist: string;
    pants: string;
    shoes: string;
    pantsFlip?: boolean;
    shoesFlip?: boolean;
}

const LowerBody: React.FC<LowerBodyProps> = ({ waist, pants, shoes, pantsFlip, shoesFlip}) => {
    return (
        <div className="avatar-lower-body">
            <img src={waist} style={{ position: 'absolute', top: 344, left: 12, zIndex: 2 }} />
            {/* 裤子 */}
            <img src={pants} style={{ position: 'absolute', top: 360, left: 86, zIndex: 2 }} />
            <img
                src={pants}
                style={{ position: 'absolute', top: 360, left: -19, zIndex: 2, transform: pantsFlip ? 'scaleX(-1)' : undefined}}
            />
            {/* 鞋子 */}
            <img src={shoes} style={{ position: 'absolute', top: 500, left: 123, zIndex: 3 }} />
            <img
                src={shoes}
                style={{ position: 'absolute', top: 500, left: -39, zIndex: 3, transform: shoesFlip ? 'scaleX(-1)' : undefined}}
            />
        </div>
    );
};

export default LowerBody;
