import React from "react";

type FeatureListProps = {
  items: string[];
};

const FeatureList: React.FC<FeatureListProps> = ({ items }) => {
  return (
    <ul className="list-none space-y-2 text-[16px] font-semibold mb-3">
      {items.map((item, index) => (
        <li key={index} className="leading-relaxed">
          <span>✨</span>
          <span className="pl-3">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
