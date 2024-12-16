import React from "react";

function ProfileSideBar({ profileData }) {
  let { login, avatar_url, html_url } = profileData;
  return (
    <div className="rounded-lg border border-black shadow-lg shadow-white w-fit m-10 text-center">
      <img src={avatar_url} alt={login} className="h-80 w-80 rounded-t-lg" />
      <div className="border border-white rounded-b-lg py-2">
      <a href={html_url} target="_blank" rel="noopener noreferrer" className="text-white font-semibold text-2xl">
        {login}
      </a>
      </div>
    </div>
  );
}

export default ProfileSideBar;
