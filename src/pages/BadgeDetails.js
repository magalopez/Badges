import React from "react";
import {Link} from 'react-router-dom'

import './styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'

import Badge from "../components/Badge";
import Modal from "../components/Modal"
import DeleteBadgeModal from '../components/DeleteBadgeModal'

function BadgeDetails (props) {
  const badge = props.data
  return(
    <>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="confLogo" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name ">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge  firstName={badge.firstName}
                    lastName={badge.lastName}
                    jobTitle={badge.jobTitle}
                    email={badge.email}
                    twitter={badge.twitter} />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div >
              <Link to={`/badges/${badge.id}/edit`}
                    className='btn btn-primary mb-4'>
                Edit
              </Link>
            </div>
            <div>
              <button className='btn btn-danger' 
                      onClick={props.onOpenModal}>
                Delete
              </button>
              <DeleteBadgeModal isOpen={props.modalIsOpen}
                                onClose={props.onCloseModal}
                                onDeleteBadge={props.onDeleteBadge} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BadgeDetails;
