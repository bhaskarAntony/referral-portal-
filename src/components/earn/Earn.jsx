import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReferralRewards from './ReferralRewards'
import ReferralPopup from '../ReferralPopup/ReferralPopup';
import Callback from '../callback/Callback';

function Earn({show, onClose, onOpen}) {
    const [showModal, setShowModal] = useState(false);
    const handleShow = () =>{setShowModal(true)}
    const handleHide = () =>{setShowModal(false)}
  return (
  <div className="bg-light py-3">
     <section className="container p-md-2 p-3 mt-3">
    <div className="row">
        <div className="col-md-8">
            <h1 className="fs-3 fw-bold">Know how much you can earn by Referring <span className="text-small"><i class="bi bi-question-circle fs-6"></i></span></h1>

            <Link className='d-flex gap-2 mt-3'><i class="bi bi-download"></i> <span >View Referral Reward Details</span></Link>

        </div>
        <div className="col-md-4 mt-3 mt-md-0 d-flex justify-content-end align-items-center">
            <button className="btn-main btn-100" onClick={onOpen}>talk to Referral manager</button>
        </div>
    </div>
    <ReferralRewards/>
    <ReferralPopup show={showModal} hide={handleHide}/>
    <Callback show={show} onClose={onClose} />
   </section>
  </div>
  )
}

export default Earn