import React, { useEffect, useState } from "react"
import routes from "./routes/pagesRoutes"
import { RouterProvider } from "react-router-dom"
import { db } from "../config/firebase"
import { getDocs, collection } from "firebase/firestore"


function App() {
    const [userList, setUserList] = useState([]);

    const userCollectionRef = collection(db, "Users");

    useEffect(() => {
        const getUserList = async () =>{
            //READ THE DATA 
            //SET THE USER LIST
            try {
                const data = await getDocs(userCollectionRef);
                const filterData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
               // console.log(filterData);
            } catch (err) {
                //console.error(err);
                
            }
        };
        getUserList();
    }, []);
    
  return (
        <>
            <RouterProvider router={routes} />
        </>
  )
}

export default App 
