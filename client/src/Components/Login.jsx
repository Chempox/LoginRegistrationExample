import { AiOutlineUser} from 'react-icons/ai';
import { BsLock } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Login.css';

function Login(){
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
                            <input type="text" placeholder = "Username"/>
                        </div>
                    </div>
                    <div className="login-password-container">
                        <div className ="login-password">
                            <BsLock size={30} color={"white"} className ="password-img"/>
                            <input type="password" placeholder = "Password" />
                        </div>
                    </div>
                </div>
                <div className = "login-button">
                    <button>Login</button>
                    <span>New here? <Link to="/signup">Sign Up</Link></span>
                </div>
            </div>
        </div>
     );
    
}
 
export default Login;