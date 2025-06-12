import React from 'react';

interface PropsType {
  subtitle?: string;
  title?: string;
}

const PageHeading: React.FC<PropsType> = ({ subtitle, title }) => {
  return (
    <div className="text-center lg:my-10 md:my-6">
      {subtitle && <h5 className="text-primaryRed text-sm font-medium uppercase mb-2">{subtitle}</h5>}
      {title && <h1 className="text-grayLight text-3xl md:text-4xl font-bold">{title}</h1>}
    </div>
  );
};

export default PageHeading;
