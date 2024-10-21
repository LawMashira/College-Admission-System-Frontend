import React from 'react';

interface TitleProps {
  title: string;
 
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="flex flex-col gap-4 mb-8 ">
      <h3 className="text-2xl uppercas font-light text-black tracking-wide">
        {title}
      </h3>
     
      
    </div>
  );
};

export default Title;
