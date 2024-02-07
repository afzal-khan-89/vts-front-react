/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleTabClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="w-full max-auto">
      <div className="flex border-b border-gray-300 bg-white">
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label
                ? "border-b-2 border-purple-500 bg-[#F2F2F2]"
                : ""
            } flex-1 text-gray-700 font-medium py-2 flex justify-center items-center flex-wrap`}
            onClick={(e) => handleTabClick(e, child.props.label)}
          >
            <span className="mr-4">{child.props.icon}</span> {child.props.label}
          </button>
        ))}
      </div>

      <div className="py-4">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab = ({ label, icon, children }) => {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
};

export { Tab, Tabs };
