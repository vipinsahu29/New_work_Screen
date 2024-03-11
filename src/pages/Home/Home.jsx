import React from 'react'
import SideMenu from '../../components/SideMenu/SideMenu'
import Classess from './Home.module.css'
import HomeMiddleContainer from './HomeMiddleContainer'
import HomeRightContainer from './HomeRightContainer'
import AtomVerticalDivider from '../../components/AtomDivder/AtomVerticalDivider'

const Home = () => {
  return (
    <div className={Classess.container}>
        <HomeMiddleContainer/>
        <AtomVerticalDivider/>
        <HomeRightContainer/>
    </div>
  )
}

export default Home