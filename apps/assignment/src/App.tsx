// import { useEffect, useState } from 'react'
// import {Modal} from "assignment-ui"
// import { useQuery } from 'react-query';

// function App() {
//   const [count, setCount] = useState(0)

//   const userData = [{name:"Testman", dob:"1998-09-22", description:"hello"},
//   {name:"Testman 1", dob:"1998-09-22", description:"hello"},
//   {name:"Testman 2", dob:"1998-09-22", description:"hello"},
//   {name:"Testman 3", dob:"1998-09-22", description:"hello"},
//   {name:"Testman 5", dob:"1998-09-22", description:"hello"},
//   {name:"Testman", dob:"1998-09-22", description:"hello"}]

//   const fetchData = async () => {
//   // Simulate fetching data
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   return response.json();
// };


// useEffect(() => {
// fetchData()

// }, [])

//   return (
//     <>  
//     <Modal userData={userData}>

//     {/* {renderContent()} */}
//     <h1 className=''>24 Birthdays Today</h1>
//     </Modal>
//     </>
//   )
// }

// export default App

// src/App.tsx
// src/App.tsx
// import React from 'react';
// import { useQuery } from 'react-query';
// import { Modal } from 'assignment-ui';

// const fetchData = async () => {
//   try {
//     // Simulate fetching data
//     const response = await fetch('https://dummyjson.com/users');
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };

// const App: React.FC = () => {
//   const { data, isLoading, isError } = useQuery('todos', fetchData);

//   const userData = [
//     { name: "Testman", dob: "1998-09-22", description: "hello" },
//     // ... other user data
//   ];

//   return (
//     <div>
//       <h1>Vite-React App</h1>

//       <Modal userData={userData}>
//         {isLoading ? (
//           // Skeleton loading state
//           <div>Loading...</div>
//         ) : isError ? (
//           // Error state
//           <div>Error fetching data</div>
//         ) : (
//           // Display fetched data
//           <ul>
//             {data.map((item: { id: string; firstName: string}) => (
//               <li key={item.id}>
//                 {item.firstName}
//               </li>
//             ))}
//           </ul>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default App;


// src/App.tsx

"use client";
// src/App.tsx
import React, { useState, useEffect } from 'react';
import { Modal } from 'assignment-ui';


const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {

        // Simulating a delay of 5 seconds
        setTimeout(async () => {
          const response = await fetch('https://dummyjson.com/users');

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const result = await response.json();
        setIsLoading(false);

          setData(result.users);
        }, 5000); // 5000 milliseconds = 5 seconds
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      } 
    };

    fetchData();
  }, []);

  return (
    <div>

  
            <Modal>
      <>
      
      {isLoading && <p>Loading...</p>}



<ul>
{data.map((item: { id: string; firstName: string}) => (
        <li key={item.id}>
          {item.firstName}
        </li>
      ))}
</ul>
</>
      </Modal>

    </div>
  );
};

export default App;
