import React from 'react';

interface HeadProps {
    hair: string;
    face: string;
    head: string;
    neck: string;
}

const Head: React.FC<HeadProps> = ({ hair, face, head, neck }) => {
    return (
        <div className="avatar-head">
            <img src={hair} style={{ position: 'absolute', top: 0, left: 10, zIndex: 30 }} />
            <img src={face} style={{ position: 'absolute', top: 70, left: 35, zIndex: 20 }} />
            <img src={head} style={{ position: 'absolute', top: 20, left: 0, zIndex: 10 }} />
            <img src={neck} style={{ position: 'absolute', top: 170, left: 40, zIndex: 1 }} />
        </div>
    );
};

export default Head;
