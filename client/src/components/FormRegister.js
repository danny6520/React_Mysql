import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import Axios from 'axios'

function FormRegister () {

const [userName, setUserName] = useState('')
const [userDistrict, setUserDistrict] = useState('')
const [userDataList, setUserDataList] = useState([])

useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
        setUserDataList(response.data)
    })
}, []);

const submitForm = () => {
    Axios.post("http://localhost:3001/api/insert", {
        userName: userName, 
        userDistrict: userDistrict,
    }).then(() => {
        alert("Inserted Succssfully");
    });
}

    return (
        <>
        <div className="container">
        
            <label>Your Name:</label><br/>
            <input type="text" name="userName" onChange={(e) => {
                setUserName(e.target.value);
            }}  className="form-control" required /><br/><br/>
            
            <label>Your District:</label><br/>
            <input type="text" name="userDistrict" onChange={(e) => {
                setUserDistrict(e.target.value);
            }} className="form-control" required/><br/><br/>

            <button onClick={submitForm} className="btn btn-success">Submit</button>
      
            {userDataList.map((val) => {
                return <h4>User Name: {val.name} | User District: {val.district}</h4>
            }) }
           
        </div>
        </>
    )
}
export default FormRegister