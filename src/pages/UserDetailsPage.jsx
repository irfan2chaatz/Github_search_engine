import React from "react";
import { useParams } from "react-router-dom";
import ProfileSideBar from "../components/ProfileSideBar";
import RepoSection from "../components/RepoSection";
import GITHUB_INSTANCE from "../services/utility";
import BgImage from "../assets/images/black_bg.jpg"

function UserDetailsPage({ isLoading, setIsLoading, isError, setIsError }) {
  let { userName } = useParams();
  let [profileData, setProfileData] = React.useState(null);
  let [repoData, setRepoData] = React.useState([]);

  async function getUserDetails() {
    try {
      let profile_url = `/users/${userName}`;
      let repo_url = `/users/${userName}/repos`;

      setIsLoading(true);
      let resPro = await GITHUB_INSTANCE.get(profile_url);
      let resRep = await GITHUB_INSTANCE.get(repo_url);

      setProfileData(resPro.data);
      setRepoData(resRep.data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    finally {
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    getUserDetails();
  }, []);

  if (isError) {
    return <h1>Something went wrong</h1>
  }

  if (isLoading) {
    return <h3>Loading ...</h3>
  }

  return (
    <div className="grid grid-cols-4 gap-4 min-h-screen bg-cover bg-fixed bg-no-repeat bg-center text-white"
         style={{ backgroundImage: `url(${BgImage})` }}>
      <div className="col-span-1">
        {profileData != null ? (
          <ProfileSideBar profileData={profileData} />
        ) : (
          "Loading"
        )}
      </div>
      <div className="col-span-3">
        <RepoSection repoData={repoData} />
      </div>
    </div>
  );
}

export default UserDetailsPage;
