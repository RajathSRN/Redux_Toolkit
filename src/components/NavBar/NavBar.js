import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from "../../slices/users";
import "./NavBar.css";

function NavBar() {
    let [ userName, setUserName ] = useState("John");
    
    let dispatch = useDispatch();
    let state = useSelector((state) => state.users);

    let onLoginClick = () => {
        dispatch(login(userName));
    }

    let onLogoutClick = () => {
        dispatch(logout())
    }
    return (
        <div className="nav">
           {!state.isLoggedIn ? 
           <div>
               <input type="text" className='form-control' placeholder='Username' value={userName} onChange={(e) => setUserName(e.target.value)} />
               <button className="button button-blue" onClick={onLoginClick}>Login</button>
           </div>: 
           <div>
             <i className='fas fa-user'></i>&nbsp;
             <span>{state.currentUser}</span>
             <button className="button button-blue" onClick={onLogoutClick}>Logout</button>
           </div>
            }
        </div>
    );
}

export default NavBar;