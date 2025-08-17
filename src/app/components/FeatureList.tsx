import React from "react";

type FeatureListProps = {
  items: string[];
};

const FeatureList: React.FC<FeatureListProps> = ({ items }) => {
  return (
    <ul className="list-none pl-6 space-y-2 text-lg">
      {items.map((item, index) => (
        <li key={index} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
