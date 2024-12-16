import React from "react";
import { Link } from "react-router-dom";

function ProfileCard({ profile_img, home_profile, profile_name }) {
  return (
    <div className="border rounded-lg w-fit m-10 text-center">
      <img src={profile_img} alt={profile_name} className="h-44 w-44 rounded-lg" />
      <a href={home_profile} target="_blank" rel="noopener noreferrer" className="block">
        {profile_name}
      </a>
      <Link to={`/users/${profile_name}`}> More Details</Link>
      <hr />
    </div>
  );
}

export default ProfileCard;
