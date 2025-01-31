
import { useRef } from "react"


function Login() {
  let user = useRef(0)
  let pass = useRef(0)
  let respons = null
  async function data() {
    let userData = await fetch("https://dummyjson.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.current.value,
          password: pass.current.value,
          // expiresInMins: 30,
        })
      })
    respons = await userData.json();
    console.log(respons);
    respons && (localStorage.userName = respons.firstName)
    respons && (localStorage.userId = respons.id)
    localStorage.userName && window.location.assign('/')
  }
  return (
    <div className="form">  
      <form>
        <div>
        <label>
          User name
          <input ref={user} type="text" placeholder="Enter username"/>
        </label>
        </div>
        <label>
          Password
          <input ref={pass} type="text" placeholder="Enter Password"/>
        </label>
        <div>
        <button onClick={(e)=>{
          e.preventDefault();
          console.log(user.current.value,pass.current.value);
          data()
          }}>Submit</button>
        </div>
      </form>
      </div>


  )
}

export default Login