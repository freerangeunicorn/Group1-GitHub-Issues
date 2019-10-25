import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar'
import Board from './components/Board'
import Footer from './components/Footer'

function App() {
  const clientId = 'a8e0965c1810612702aa'
  const [currentUser, setCurrentUser] = useState(null)
  const [token, setToken] = useState(null)
  const [issues, setIssues] = useState([])

  const getCurrentUser = async token => {
    const options = {
      json: true,
      method: 'GET',
      headers: {
        Authorization: `token ${token}`.split('&')[0]
      }
    }
    const response = await fetch('https://api.github.com/user', options)
    const currentUser = await response.json()
    console.log(response)

    if (currentUser) {
      setCurrentUser(currentUser.login)
    }
  }

  const getIssues = async () => {
    const url = `https://api.github.com/search/issues?q=author:${currentUser}`;
    console.log("ISSUEURL", url);

    const response = await fetch(url)

    const data = await response.json();
    setIssues(data.items)
  }

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
      getCurrentUser(existingToken)
      
    }
    // eslint-disable-next-line
    console.log("current user check",currentUser)
  }, []);


  useEffect (()=>{
    getIssues()
  },[currentUser])

  console.log("cUser", currentUser)
  console.log("Issues", issues)
  return (
    <div className='App'>
      <NavBar />
      <Board issues={issues}/>
      <Footer />
    </div>
  )
}

export default App
