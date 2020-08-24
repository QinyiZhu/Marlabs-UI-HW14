import React, {useState, useEffect} from 'react';
import './App.css';
import {SearchBox} from '../components/SearchBox'
import {Button} from '../components/Button'
import {Text} from '../components/Text'
import ErrorBoundry from '../components/ErrorBoundary'
 
function App() {
  const [id, setID] = useState("");
  const [title, setTitle] = useState("");
  const [allusers, setAllUsers] = useState("");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    if(allusers === "") {
      fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => {
        return response.json();
      })
      .then(users => {
        setAllUsers(users);
      });
    }
  });

  const searchChangeEvent = (event) => {
    setID(event.target.value);
  }

  const buttonOnClickEvent = (event) => {
    const filteredTitle = allusers.filter(user => String(user.id) === id).map(user => user.title);
    setTitle(filteredTitle);
  };

  return (
    <div>
      <SearchBox searchChange={searchChangeEvent}/>
        <ErrorBoundry>
          <Button buttonclick={buttonOnClickEvent}/>
          <Text newtitle={title}/>
        </ErrorBoundry>
    </div>
  );
}

export default App;
