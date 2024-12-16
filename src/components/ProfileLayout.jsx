import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { useParams } from "react-router-dom";
import GITHUB_INSTANCE from "../services/utility";

function ProfileLayout() {

  let { user } = useParams();
  let [userData, setUserData] = useState(null);
  
  async function fetchData() {
    try {
      let url = `/search/users?q=${user}`;
      let res = await GITHUB_INSTANCE.get(url);

      setUserData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    fetchData();
  },[user])


  return (
    <div className="flex flex-row flex-wrap text-white">
      {userData && userData.items.map((ele, idx) => {
        return (
          <ProfileCard
            profile_img={ele.avatar_url}
            home_profile={ele.html_url}
            profile_name={ele.login}
            key = {idx}
          />
        );
      })}
    </div>
  );
}

export default ProfileLayout;
