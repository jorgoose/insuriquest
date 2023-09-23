import React from 'react';

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>
            {children}
        </div>
    );
}

export default Card;
