import React from "react";

const LayoutOne = ({ Head }) => {
  const { tag, title, desc } = Head;
  return (
    <div className="layout-1">
      <div className="layout-1__tag ff-base fw-medium text-center border-2 border-radius-6">
        {tag}
      </div>
      <div className="layout-1__title ff-accent fw-extra-bold text-center">
        {title}
      </div>
      <div className="layout-1__para ff-base fw-medium text-center">{desc}</div>
    </div>
  );
};

export default LayoutOne;
