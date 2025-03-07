import React,{useState} from 'react'
import Spinner from '../../components/spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, selectLoadingStatus } from './loginSlice';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css'
import { BiSolidShow,BiSolidHide  } from "react-icons/bi";

function Login() {
  const [creds, setCreds] = useState({username:"user1", password:"password123"})
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  const status = useSelector(selectLoadingStatus)
const handleSubmit = () => {  
  dispatch(loginUser(creds))
  
}

const navigate = useNavigate()
if(status === "loading"){
  return <Spinner />
}

console.log(status,"loginStatus")
return (
  <div className={styles.container}>
      <div className={`${styles.card} `}>
        
          <h2 >Login</h2>
          <div className={styles.fields}>
           
              <input
              value={creds.username}
              onChange={(e) => setCreds({...creds,username:e.target.value})}
              className={styles.input__field} type='text' placeholder='Enter Username'/>
              <div className={styles.password}>
              <input
              value={creds.password}
              onChange={(e) => setCreds({...creds,password:e.target.value})}
              type={showPassword ? 'text':'password'} placeholder='Enter Password'/>
              {showPassword ? <BiSolidShow onClick={() => setShowPassword(false)} color='#204151' size={25}/>
              :<BiSolidHide onClick={() => setShowPassword(true)} color='#204151' size={25}/>}
              </div>
              <button type='submit' onClick={handleSubmit} className={styles.button}>Log In</button>
            
          </div>
          

      </div>
  </div>
)
}

export default Login