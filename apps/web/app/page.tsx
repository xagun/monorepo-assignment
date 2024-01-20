


import {Modal} from "assignment-ui"

export default function Page(): JSX.Element {


  const userData = [{name:"Testman", dob:"1998-09-22", description:"hello"},
  {name:"Testman 1", dob:"1998-09-22", description:"hello"},
  {name:"Testman 2", dob:"1998-09-22", description:"hello"},
  {name:"Testman 3", dob:"1998-09-22", description:"hello"},
  {name:"Testman 5", dob:"1998-09-22", description:"hello"},
  {name:"Testman", dob:"1998-09-22", description:"hello"}]


  return (
    <main>
  
  <Modal userData={userData}></Modal>
    </main>
  );
}
