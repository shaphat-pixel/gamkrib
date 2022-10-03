
import React, {useContext, useState, useEffect} from 'react'
import AuthContext from '../context/AuthContext'
import {Link} from 'react-router-dom'


const RegisterPage = () => {
	let {registerUser} = useContext(AuthContext)


	return (
		<div class="text-center">

  <div class="p-5 bg-image image-auth"></div>
  

  <div class="card mx-4 mx-md-5 shadow-5-strong main">
    <div class="card-body py-5 px-md-5">

      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h2 class="fw-bold mb-5">Sign up as <Link to={"/student-register"}>Student</Link>/<Link to={"/landlord-register"}>Landlord</Link></h2>
          
        </div>
      </div>
    </div>
  </div>
</div>
	  

		)
}
export default RegisterPage