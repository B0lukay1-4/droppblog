import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../supabase-client'
// import the CSS file below

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      if (!data?.session) {
        setError('Invalid or expired reset link.')
      }
    }
    getSession()
  }, [])

  const handleChangePassword = async () => {
    const { error } = await supabase.auth.updateUser({ password: newPassword })

    if (error) {
      setError(error.message)
      setMessage('')
    } else {
      setMessage('Password updated successfully. You can now log in.')
      setError('')
      setTimeout(() => navigate('/login'), 2000)
    }
  }

  return (
    <div className="change-password-container">
      <div className="change-password-content">
        <h2 className="title">Choose a new Password</h2>
        <hr className="divider" />

        <p className="description">
          Create a new password that is at least 8 characters long. <br />
          A strong password has a combination of letters, digits, and punctuation marks.
        </p>

        <div className="input-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="password-input"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="toggle-button"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <hr className="divider" />

        <div className="button-wrapper">
          <button onClick={handleChangePassword} className="submit-button">
            Continue
          </button>
        </div>

        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  )
}

export default ChangePassword
