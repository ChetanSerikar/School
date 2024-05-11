import React from "react";

const MemberProfile = ({ img, title }) => {
  return (
    <div className="member__profile">
      <img src={img} alt="" />
      <div className="member__profile__name fw-extra-bold">{title}</div>
    </div>
  );
};

export default MemberProfile;
