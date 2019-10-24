import React, { useState, useEffect } from 'react'
import './App.css'

function App () {
  const clientId = process.env.CLIENT_ID
  const [token, setToken] = useState(null)

  useEffect(() => {
    const existingToken = sessionStorage.getItem('token')
    const accessToken =
      window.location.search.split('=')[0] === '?access_token'
        ? window.location.search.split('=')[1]
        : null

    if (!accessToken && !existingToken) {
      window.location.replace(
        `https://github.com/login/oauth/authorize?scope=user:email,repo&client_id=${clientId}`
      )
    }

    if (accessToken) {
      console.log(`New accessToken: ${accessToken}`)

      sessionStorage.setItem('token', accessToken)
      setToken(accessToken)
    }

    if (existingToken) {
      setToken(existingToken)
    }
    // eslint-disable-next-line
  }, []);

  console.log(token)

  return <div className='App'>Hwheheheh</div>
}

export default App
