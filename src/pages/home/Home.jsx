import React, { useState } from 'react'
import './style.css'
import Hero from '../../components/hero/Hero'
import Earn from '../../components/earn/Earn'
import ReferralRewardsTable from '../../components/ReferralRewardsTable/ReferralRewardsTable'
import WhoCanRefer from '../../components/WhoCanRefer/WhoCanRefer'
import WhyShouldRefer from '../../components/whyShouldRefer/WhyShouldRefer'
import ReferralPopup from '../../components/ReferralPopup/ReferralPopup'

function Home() {
  const [showCallback, setShowCallback] = useState(false);
  const handleShowCallback = () => setShowCallback(true)
  const handleHideCallback = () => setShowCallback(false)
  return (
    <section>
        <Hero/>
        <Earn show={showCallback} onClose={handleHideCallback} onOpen={handleShowCallback}/>
        <ReferralRewardsTable/>
        <WhoCanRefer/>
        <WhyShouldRefer/>
      
    </section>
  )
}

export default Home