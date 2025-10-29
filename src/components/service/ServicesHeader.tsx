import React from "react";

interface Props {
  title: string;
}

const ServicesHeader: React.FC<Props> = ({ title }) => {
  return (
    <div className="text-center md:text-left mb-12">
      <h2 className="text-white text-3xl md:text-4xl font-bold">{title}</h2>
      <div className="flex justify-center md:justify-start mt-3 space-x-2">
        <span className="w-6 h-0.5 bg-yellow-400" />
        <span className="w-2 h-2 rounded-full bg-yellow-400" />
        <span className="w-2 h-2 rounded-full bg-yellow-400" />
        <span className="w-2 h-2 rounded-full bg-yellow-400" />
      </div>
    </div>
  );
};

export default ServicesHeader;
