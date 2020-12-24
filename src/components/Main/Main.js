/**
 *
 * Main
 *
 */

import React from 'react'

import TopSection from '@/shared/sections/TopSection'
import AboutMe from '@/shared/sections/AboutMe'
import Relationships from '@/shared/sections/Relationships'
import Requirements from '@/shared/sections/Requirements'
import Users from '@/shared/sections/Users'
import Registration from '@/shared/sections/Registration'

import './style.css'

const Main = () => {
  return (
    <main className="page-content">
      <TopSection />
      <AboutMe />
      <Relationships />
      <Requirements />
      <Users />
      <Registration />
    </main>
  )
}

export default Main
