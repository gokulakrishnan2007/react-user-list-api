import React,{useEffect,useState}from 'react';
import './App.css';
import Card from './assets/component/card/Card.jsx';

const App = () => {

  const [user, setUser] = useState([])
  const [isLoading , setIsLoading] = useState(false);
  useEffect(() =>{
async function fetchUsers() {
  try {
    setIsLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");       
    const users = await response.json(); 
    setUser(users);
  }catch(error){
    console.log(error);
  }
  finally{
    setIsLoading(false);
  }
}
fetchUsers();
  },[]);

  if (isLoading) return <p>Loading</p>
  return (
    <>
      <h1>Users List</h1>
      <div className="container" id="userContainer">
       {
        user.map((user)=>(
          <Card key ={user.id} user = {user} />
        ))
       }
      </div>
    </>
  )
}

export default App;