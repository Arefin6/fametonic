import React from "react";

type FeatureListProps = {
  items: string[];
};

const FeatureList: React.FC<FeatureListProps> = ({ items }) => {
  return (
    <ul className="list-none space-y-2 text-[16px] font-semibold mb-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-center leading-relaxed gap-3 pl-2 md:pl-0"
        >
          <span>✨</span>
          <span className="flex-1">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
