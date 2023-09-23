import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  classNames?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, classNames = '' }) => {
  return (
    <h2 className={`text-2xl font-semibold text-gray-800 ${classNames}`}>
      {children}
    </h2>
  );
};

export default Heading;
