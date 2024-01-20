import { useState } from 'react'
import {Modal} from "assignment-ui"



function App() {
  const [count, setCount] = useState(0)

  const userData = [{name:"Testman", dob:"1998-09-22", description:"hello"},
  {name:"Testman 1", dob:"1998-09-22", description:"hello"},
  {name:"Testman 2", dob:"1998-09-22", description:"hello"},
  {name:"Testman 3", dob:"1998-09-22", description:"hello"},
  {name:"Testman 5", dob:"1998-09-22", description:"hello"},
  {name:"Testman", dob:"1998-09-22", description:"hello"}]

  return (
   
   
          <Modal userData={userData}></Modal>

    


  )
}

export default App
