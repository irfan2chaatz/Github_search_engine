import React from 'react'
import ProfileLayout from '../components/ProfileLayout'
import SearchNav from '../components/SearchNav'
import BgImage from '../assets/images/black_bg.jpg'

function SearchUsers() {
  return (
    <div className="p-10 min-h-screen bg-cover bg-fixed bg-no-repeat bg-center"
         style={{ backgroundImage: `url(${BgImage})` }}>
        <SearchNav />
        <ProfileLayout />
    </div>
  )
}

export default SearchUsers