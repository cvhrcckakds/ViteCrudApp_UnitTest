import { useState } from "react"
import Form from "./components/Form"
import List from "./components/List"

const App = () => {
  const [users,setUsers]=useState([
    {
      name: "Bera",
      mail:"bera@gmail.com",
      age:0,
    },

    {
      name: "Mustafa",
      mail:"mustafa@gmail.com",
      age:30,
    },
  ]);

  //yeni kullanıcı ekle
  const addUser = (newUser) =>{
    setUsers([...users, newUser])
  }

  return (
    <div className="container">
      <h2 className="text-center my-5">Kullanıcı Paneli</h2>
      <Form addUser={addUser} />
      <List users={users}/>
    </div>
  )
}

export default App
