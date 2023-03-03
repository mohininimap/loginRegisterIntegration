import React,{useState} from 'react'
import {Box,TextField,Typography,Button} from "@mui/material";
import {
  BrowserRouter as Router,
  useNavigate
} from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [isSignup,setIsSignup]=useState(false);
  const [inputs,setInputs]=useState({
    name:"",
    email:"",
    password:""
  })
  const handleChange=(e)=>{
    setInputs((prevState)=>(
      {
        ...prevState,
        [e.target.name]:e.target.value
      }
    ))
  }

  const handleSubmit=(e)=>{
e.preventDefault();
const {name,email,password} =inputs;
const signinurl="http://localhost:3000/user/signin";
const signupurl="http://localhost:3000/user/signup";
const url=isSignup?signupurl:signinurl
fetch(url,{
  method:"POST",
  crossDomain:true,
  headers:{
"Content-Type":"application/json",
Accept:"application/json",  
"Access-Control-Allow-Origin":"*",
  },
  body:JSON.stringify({
    name,
    email,
    password
  }),
}).then((res)=>res.json())
.then((data)=>{
  console.log(data,"userRegister");
  if(data.status=="SUCCESS"){
    
    alert("login successful");
    window.localStorage.setItem("token",data.data);
     navigate('/Home',{ state: inputs })
  }
})
  }
  const resetState=()=>{
    setIsSignup(!isSignup);
    setInputs({name:'',email:'',password:''})
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection={"column"} 
        maxWidth={400}
         alignItems="center" 
         justifyContent='center'
         margin="auto"
         marginTop={5}
         padding={5}
         borderRadius={5}
         boxShadow={'5px 5px 10px #ccc'}

         sx={{
          ":hover":{
            boxShadow:'10px 10px 20px #ccc',
          },
         }}
         >
           <Typography variant='h2' padding={3} textAlign="center">
           {isSignup?"Signup":"Login"}
            </Typography>
           {
            isSignup && (
            <TextField 
            onChange={handleChange}
              name="name"
              value={inputs.name}
            margin='normal'
           type={'text'} 
           variant='outlined'
            placeholder='Name'
            />
           )}
           <TextField 
           onChange={handleChange}
           name="email"
           value={inputs.email}
            margin='normal'
           type={'email'}
            variant='outlined' 
           placeholder='Email'
           />
           <TextField 
            onChange={handleChange}
           name="password"
           value={inputs.password}
           margin='normal'
           type={'password'} 
           variant='outlined'
            placeholder='Password'
            />
          <Button sx={{marginTop:3,borderRadius:3}}  
          type="submit"
          margin="normal"
          variant="contained"
          color="warning"
          disabled={(inputs.password.length<1)}
          >
          {isSignup?"Signup":"Login"}
           </Button>
           <Button onClick={resetState} sx={{marginTop:3,borderRadius:3}}>
            Change To{isSignup?"Login":"Signup"}
           </Button>
        </Box>
      </form>
    </div>
  )
}
export default Login