import React from "react";
import RepoCard from "./RepoCard";

function RepoSection({ repoData }) {
  return (
    <div className="grid grid-cols-2">
      {repoData.map((rawData) => {
        return <RepoCard rawData={rawData} />;
      })}
    </div>
  );
}

export default RepoSection;
