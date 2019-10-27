import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Board from "./components/Board";
import Footer from "./components/Footer";
import ErrorMessage from "./components/ErrorMessage";
import Modal from "react-modal";
import { Form, Button } from 'react-bootstrap'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

function App() {
  const clientId = "a8e0965c1810612702aa";
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [issues, setIssues] = useState([]);
  const [repoIssues, setRepoIssues] = useState([]);
  const [repoInfo, setRepoInfo] = useState ({});
  // const [query, setQuery] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [repo, setRepo] = useState('Group1-GitHub-Issues')
  const [owner, setOwner] = useState('freerangeunicorn')

  // const handleSearch = e => {
  //   e.preventDefault();
  //   // console.log("Query", query);
  //   getSearchResults();
  // };

  const getCurrentUser = async token => {
    const options = {
      json: true,
      method: "GET",
      headers: {
        Authorization: `token ${token}`.split("&")[0]
      }
    };
    const response = await fetch("https://api.github.com/user", options);
    const currentUser = await response.json();
    // console.log(response);

    if (currentUser) {
      setCurrentUser(currentUser.login);
    }
  };
  // 1st async function to fetch api for keyword
  // THIS SEARCHES ALL REPOSITORIES FOR A KEYWORD - original api call 
  const getIssues = async () => {
    const url = `https://api.github.com/search/repositories?q=facebook/react`;
    // console.log("ISSUEURL", url);

    const response = await fetch(url);

    const data = await response.json();
    setIssues(data.items);
  };


  // Our new API Call  

  // const getRepoIssues = async () => {
  //   const url =`https://api.github.com/repos/${owner}/${repo}/issues?`
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setRepoIssues(data)
  //   console.log("repo issues" , repoIssues)
  // }

  const getRepoIssues = async () => {
    const url = `https://api.github.com/repos/${owner}/${repo}/issues?page=1&per_page=20&order=asc`;
    const response = await fetch(url);

    // get header link
    // const link = await response.headers.get("link");  MAI CHANGE THE NAMES!! 

    const data = await response.json();
    setRepoIssues(data);

  };

  console.log("repoIssues", repoIssues)
  
  // const getSearchResults = async () => {  THIS API CALL SEARCHES ALL OF GITHUB 
  //   const url = `https://api.github.com/search/issues?q=${query}`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setIssues(data.items);
  // };
  const getRepoInfo = async () => {
    const url = `https://api.github.com/repos/${owner}/${repo}/`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);
    setRepoInfo(data);
  };
  console.log("repoInfo", repoInfo)


  console.log("did they pull through search results , data, owner,repo", repoIssues, owner, repo)

  useEffect(() => {
    const existingToken = sessionStorage.getItem("token");
    const accessToken =
      window.location.search.split("=")[0] === "?access_token"
        ? window.location.search.split("=")[1]
        : null;

    if (!accessToken && !existingToken) {
      window.location.replace(
        `https://github.com/login/oauth/authorize?scope=user:email,repo&client_id=${clientId}`
      );
    }

    if (accessToken) {
      console.log(`New accessToken: ${accessToken}`);

      sessionStorage.setItem("token", accessToken);
      setToken(accessToken);
    }

    if (existingToken) {
      setToken(existingToken);
      getCurrentUser(existingToken);
    }
    // eslint-disable-next-line
    // console.log("current user check", currentUser);
  }, []);

  useEffect(() => {
    getRepoIssues();
  }, []);

  useEffect(() => {
    getRepoInfo();
  }, []);


  function toggle(idx) {
    setIsShown(!isShown);
  }
  // const ToggleContent = ({toggle, content}) =>{
  //   const [isShown, setIsShown] = useState(false)
  //   const hide = () => setIsShown(false)
  //   const show = () => setIsShown(true)
  //   return(
  //     <>
  //       {toggle(show)}
  //       {
  //         isShown && content(hide)
  //       }
  //     </>
  //   )

  // }

  // const Modal =({children})=>{
  //   ReactDOM.createPortal(
  //     <div className="modal">{children}</div>,
  //     document.getElementById('modal-root')
  //   )
  // }
  // console.log("skskk", isShown);

  return (
    <div className="App">
      <Modal isOpen={isShown} style={customStyles}>
        {/* form  */}
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Submit a new issue</Form.Label>
            <Form.Control type="text" placeholder="Issue Title" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comments</Form.Label>
            <Form.Control as="textarea" rows="6" />
          </Form.Group>
          <Button variant="dark" onClick={console.log("test button")}>
            Submit A New Issue
          </Button>
          <Button variant="dark" onClick={toggle}>
            Close
          </Button>
        </Form>
        {/* end form  */}
      </Modal>

      <NavBar
        // handleSearch={handleSearch}
        // setQuery={setQuery} 
        // query={query}
        setOwner={setOwner}
        setRepo={setRepo}
        getRepoIssues={getRepoIssues}
        getRepoInfo={getRepoInfo}

      />
      {repoIssues.length > 0 ? (
        <Board
          issues={issues}
          setRepoIssues={setRepoIssues}
          repoIssues={repoIssues}
          repoInfo={repoInfo}
          owner={owner}
          repo={repo}
          toggle={toggle} />
      ) : (
          <ErrorMessage />
        )}
      <Footer />
    </div>
  );
}

export default App;
