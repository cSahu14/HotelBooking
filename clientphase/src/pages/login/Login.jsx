import { useContext, useState } from "react"
import styles from "../../Styles/login/Login.module.css"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [credentials, setCredentials] = useState({
        username : undefined,
        password : undefined,
    })

    const {loading, error, dispatch} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
    }

    const handleClick = async e => {
        e.preventDefault()
        dispatch({type : "LOGIN_START"})
        try {
            const res = await axios.post("/auth/login", credentials)
            dispatch({type : "LOGIN_SUCCESS", payload : res.data})
            navigate("/")
        } catch (error) {
            dispatch({type : "LOGIN_FAILURE", payload : error.response.data})
        }
    }

    return <div className={styles.login}>
        <div className={styles.lContainer}>
            <input type="text" placeholder="username" id="username" onChange={handleChange} className={styles.lInput}/>
            <input type="password" placeholder="password" id="password" onChange={handleChange} className={styles.lInput}/>
            <button disabled={loading} onClick={handleClick} className={styles.lButton}>Login</button>
            {error && <span>{error.message}</span>}
        </div>
    </div>
}

export default Login