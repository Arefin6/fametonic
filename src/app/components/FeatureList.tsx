import React from "react";

type FeatureListProps = {
  items: string[];
};

const FeatureList: React.FC<FeatureListProps> = ({ items }) => {
  return (
    <ul className="list-none space-y-2 text-[16px] font-semibold mb-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start leading-relaxed gap-3">
          <span>✨</span>
          <span className="flex-1">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
