import { useState, useEffect }from 'react'
import fetchRandomUser from '../services/api'

const UserInfo = () => {
  //create state to store the user info
  const [user, setUser] = useState(null);

  //use useEffect to faciliate call to API on page load
  useEffect(() => {
    //if useEffect needs to do something async, make a new
    //async helper function inside of useEffect rather than
    //making useEffect itself async
    const getUser = async () => {
      //call fetchRandomUser to get the user data
      const userData = await fetchRandomUser();
      //set user to be the new userData
      setUser(userData)
    };
    
    //call getUser to run the above
    getUser();
   }, [])

  //check if user exists first, and if not, display a loading message 
  if (!user) return <h3>Loading...</h3> 

  //the "real" return will only run if the user exists and is defined
  return (
    <div>
      <h2>User Info</h2>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      {/* to handle loading time issues, on option is to use optionals:
      if the value before the ? does not exist, it won't try to access the
      property that comes after the ?. */}

      {/* <h3>{user?.name?.title} {user?.name?.first} {user?.name?.last}</h3>
      <img src={user?.picture?.medium} alt={`user`}/>
      <p>Email: {user?.email}</p>  */}

    
    </div>
  )
}

export default UserInfo;