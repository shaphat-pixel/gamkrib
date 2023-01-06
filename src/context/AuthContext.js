import  {createContext, useState, useEffect} from 'react'
import Cookie from "js-cookie";
import jwt_decode from "jwt-decode"
import {useHistory} from 'react-router-dom'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';





const SetCookie = (cookiename, cookie) => {
	Cookie.set(cookiename, cookie)
}

const GetCookie = (cookiename) => {
	return Cookie.get(cookiename)
}

const RemoveCookie = (cookiename) => {
	return Cookie.remove(cookiename)
}


const AuthContext = createContext()





export default AuthContext


export const AuthProvider = ({children}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [requestReceived, setRequestReceived] = useState(false)
	const [emailSent, setEmailSent] = useState(false)
	const [open, setOpen] = useState(true);
	let [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):null)
	let [user, setUser] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):null)
	
	const histroy = useHistory()
	histroy.push('/')


	let loginUser = async (e)=> {
		setIsLoading(true)
		e.preventDefault()
		

		let response = await fetch('https://api.gamkrib.com/users/login/', {

			method: "POST",

			credentials: "include",
      		headers: {
			"Content-Type": "application/json",
			
      },
      		
			body:JSON.stringify({'email':e.target.email.value, 'password':e.target.password.value})
		})
		
		let data = await response.json()
		setIsLoading(false)


		console.log('response:', response)
		if (response.status === 200) {
			setAuthTokens(data)
			setUser(data)
			SetCookie('cookie', data.access_token)
			localStorage.setItem('authTokens', JSON.stringify(data))
		} else{
			alert('oops..... you might have entered an incorrect email or password.')
		}
		
	}


		let registerUser = async (e)=> {
		setIsLoading(true)
		e.preventDefault()

		let response = await fetch('https://api.gamkrib.com/users/register/', {

			method: 'POST',
			headers:{

				'Content-Type':'application/json'	
			},
			body:JSON.stringify({
			'firstName':e.target.firstName.value,
			'lastName':e.target.lastName.value,
			
			'gender':e.target.gender.value,
			'email':e.target.email.value,
			'phone_number':e.target.phone_number.value,
			'school':e.target.school.value,
			'level':e.target.level.value,

			'password1': e.target.password1.value,
			'password2': e.target.password2.value,
			
			})

		})
			
		
		let data = await response.json()
		setIsLoading(false)
		console.log('response:', response)
		if (response.status === 201) {
			alert("A confirmation link has been sent to your email address")

			

			setEmailSent(true)
		} else{
			alert('Something went wrong! Check your credentials and try again')
		}
		
	}





	let registerLandlord = async (e)=> {
		setIsLoading(true)
		e.preventDefault()

		let response = await fetch('https://api.gamkrib.com/users/register/', {
			method: 'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify({

			'firstName':e.target.firstName.value,
			'lastName':e.target.lastName.value,
		
			'email':e.target.email.value,
			'phone_number':e.target.phone_number.value,
			'password1': e.target.password1.value,
			'password2': e.target.password2.value,
		

			})
		})
		
		let data = await response.json()
		setIsLoading(false)
		console.log('response:', response)

		if (response.status === 201) {
			alert("A verification link has been sent your email address")
		}
		if (response.status === 400) {
			

			setRequestReceived(true)
		} else{
			alert('Something went wrong! Check your credentials and try again')
		}
		
	}

	

		


	let logoutUser = () => {
		setAuthTokens(null)
		setUser(null)
		RemoveCookie('cookie')
		localStorage.removeItem('authTokens')
		histroy.push('/')
	}


	let contextData = {
		user:user,
		loginUser : loginUser,
		logoutUser : logoutUser,
		registerUser : registerUser,
		registerLandlord: registerLandlord,
		isLoading	 : isLoading,
		
		


	}

	const close = ()=>{
		setOpen(false)
	}
	return(

		<AuthContext.Provider value={contextData}>
			<div>

{isLoading ? <Alert  className='auth-alert' severity="success">
			  <AlertTitle></AlertTitle>
			  Please wait, <strong>We are authenticating you</strong>
			</Alert> : <p></p>}
			
			{emailSent ? 
			open?
			
			<Alert className='auth-alert' onClose={close} severity="success">
			  <AlertTitle>Bravo!!</AlertTitle>
			  You are almost done- <strong>We have sent a confirmation email to the address you entered.</strong>
			</Alert>
			: null
			: null}
			{/* 
			{requestReceived ? 
			open?
			  <Alert className='auth-alert' onClose={close} severity="success">
			  <AlertTitle>Bravo!!</AlertTitle>
			  We have received your registration request- <strong>We will contact you shortly for approval. Thank you.</strong>
			</Alert>
			: null
			 :null}
			 */}

</div>
			{children}
		
		</AuthContext.Provider>

		)
}