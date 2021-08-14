import { AiOutlineUser} from 'react-icons/ai';
import { BsLock } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import './Login.css';

function Login(){
    //Declaration of state variables
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    //Error message
    const[loginStaus,setLoginStatus] = useState("")

    const userLogin = () =>{
        Axios.post('http://localhost:3001/login', {
            username: username,
            password: password
        }).then((response) =>{
            if(response.data.message){
                setLoginStatus(response.data.message);
               // console.log(response);
            } else{
                setLoginStatus("Log as: " + response.data[0].username)
            }
        });
    };


    return ( 
        <div className = "login-form-container">
            <div className ="login">
                <div className = "login-title">
                    <h1>LOGIN</h1>
                </div>
                <div className = "login-data">
                    <div className = "login-username-container">
                        <div className = "login-username">
                            <AiOutlineUser size={30} color={"white"} className ="user-img"/>
                            <input type="text" placeholder = "Username" onChange={(event) =>{
                                setUsername(event.target.value)}}/>
                        </div>
                    </div>
                    <div className="login-password-container">
                        <div className ="login-password">
                            <BsLock size={30} color={"white"} className ="password-img"/>
                            <input type="password" placeholder = "Password" onChange={(event) =>{
                                setPassword(event.target.value)}}/>
                        </div>
                    </div>
                    <h4 className = "login-status">{loginStaus}</h4>
                </div>
                <div className = "login-button">
                    <button onClick={userLogin}>Login</button>
                    <span>New here? <Link to="/signup">Sign Up</Link></span>
                </div>
            </div>
        </div>
     );
    
}
 
export default Login;