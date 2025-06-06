import React from 'react'
import { useLocation, Link } from 'react-router-dom'


const CheckEmail = () => {
  const location = useLocation()
  const email = location.state?.email || 'Not provided'
  const found = location.state?.found || false

  return (
    <div className="check-email-container">
      <div className="check-email-content">
        <h2 className="title">Use your Google account</h2>
        <hr className="divider" />
        <p className="description">
          Quickly log in with your <br /> Google account
        </p>

        <div className="email-display">
          <p>{email}</p>
          <div className="email-details">
            <p>{email}</p>
            {found && <p className="user-label">droppblog user</p>}
          </div>
        </div>

        <hr className="divider" />

        <div className="button-wrapper">
          <Link to="/verified">
            <button className="submit-button">Continue</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CheckEmail

