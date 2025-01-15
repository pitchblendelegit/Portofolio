"use client";
import React from "react";

interface CertificationProps {
  title: string;
  img: string[];
}

const Certification: React.FC<CertificationProps> = ({ title, img }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {img.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Certificate-${index}`}
            className="w-40 h-auto rounded-lg shadow-md object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Certification;
