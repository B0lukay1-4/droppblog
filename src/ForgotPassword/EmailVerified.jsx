import React from 'react'
import { Link } from 'react-router-dom'


const EmailVerified = () => {
  return (
    <div className="email-verified-container">
      <div className="email-verified-content">
        <h2 className="email-verified-title">Email Verified</h2>

        <p className="email-verified-message">
          Your email address has been verified successfully. You can now reset the password for your account.
        </p>

        <Link to="/password/change">
          <button className="email-verified-button">OK</button>
        </Link>
      </div>
    </div>
  )
}

export default EmailVerified
