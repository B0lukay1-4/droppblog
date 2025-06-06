import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../supabase-client'


const FindAccount = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handlePasswordReset = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:5173/verified',
    })

    if (error) {
      setError(error.message)
      setMessage('')
    } else {
      setMessage('Password reset link sent. Check your email.')
      setError('')
      navigate('/emailcheck', { state: { email: email, found: true } })
    }
  }

  return (
    <div className="find-account-container">
      <div className="find-account-content">
        <h2 className="title">Find Your Account</h2>
        <hr className="divider" />

        <p className="description">
          Please kindly enter your email address to search for your account
        </p>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />

        <hr className="divider" />

        <div className="button-group">
          <button className="cancel-button">Cancel</button>
          <button onClick={handlePasswordReset} className="search-button">
            Search
          </button>
        </div>

        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  )
}

export default FindAccount
