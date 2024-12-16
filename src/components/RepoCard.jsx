import React from 'react'

function RepoCard({rawData}) {
  let {full_name, private:flag, html_url, description} = rawData;

  return (
    <div className='m-3 p-3'>
      <h2 className='font-bold'>NAME : {full_name}</h2>
      <h3>PROFILE : {flag ? "Private" : "Public"}</h3>
      <a href={html_url} target="_blank" className='text-sky-400/100'>REPO LINK</a>
      <p>DESCRIPTION : {description}</p>
      {/* <hr/> */}
    </div>
  )
}

export default RepoCard