
import React, {useContext, useState, useEffect} from 'react'
import AuthContext from '../context/AuthContext'
import {Link, Redirect} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import {ImCheckboxChecked} from 'react-icons/im'


const ProfilePage = () => {
	let {user, logoutUser} = useContext(AuthContext)
    console.log(user)
    const history = useHistory()


    const [show, setShow] = useState(false);

    const [loadCheckin, setLoadCheckin] = useState(false)

    const [open, setOpen] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    

    // getting booked properties

    const [bookings, setBookings] = useState("")

    const [bookingId, setBookingId] = useState("")

	const getBookings = async () => {
        
        const response = await fetch(`https://gamkrib-backend.up.railway.app/my-bookings-tenant/${user.user.pk}`,
        {
          method: 'GET',
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          
        
        }
        )
        const data = await response.json()
        
        setBookings(data)
        
    
        console.log(data)
    
      }

	 


    const setCheckedin = async () => {
        
      const response =  await fetch(`https://gamkrib-backend.up.railway.app/my-bookings-tenant-update/${bookingId}`,{
        method: "PUT",
        credentials: "include",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
         "checked_in": true
          
          
      })
      })

      let data = await response.json()
      setLoadCheckin(true)
      
      
     
    }
    console.log(bookingId)

    const home = ()=>{
      history.push('/')
    }

    const remain = ()=>{
      history.push('/profile')
    }

    const close = () =>{
      setOpen(false)
    }

    useEffect(() => {
      if(user.user.is_landlord===false){
        remain()
      }
      
      getBookings()
      }, [])




	return (
		<div>
            {user.user.is_landlord===true? <Redirect to ="/dashboard"/>:null}
            <div className='wrapper'>
             

            <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    
    <ul class="navbar-nav">
    <li class="nav-item">
    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
    <a href="" class="nav-link">Home</a>
    </li>
    
    </ul>
    
    <ul class="navbar-nav ml-auto">
    
 
    
   
    
    
    <li class="nav-item">
    
    <strong class="logout" onClick={logoutUser}>Logout </strong> 
   
    </li>
    
    </ul>
    </nav>


    <aside class="main-sidebar sidebar-dark-primary elevation-4">
    
    <a onClick={home}  class="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3 admin-image"/>
    <span class="brand-text font-weight-light">Gamkrib</span>
    </a>
    
    <div class="sidebar">
    
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
    <div class="image">
    <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image"/>
    </div>
    <div class="info">
     <a href="#" class="d-block">{user.user.username}</a>
    </div>
    </div>
    
    <div class="form-inline">
    <div class="input-group" data-widget="sidebar-search">
    
    <div class="input-group-append">
   
    </div>
    </div>
    </div>
    
    <nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
    
    
    <li class="nav-item">
    <a class="nav-link">
    <p>
    {user.user.email}
    </p>
    </a>
    </li>

    <li class="nav-item">
    <a class="nav-link">
    <p>
    {user.user.phone_number}
    </p>
    </a>
    </li>

    <li class="nav-item">
    <a class="nav-link">
    <p>
    {user.user.school}
    </p>
    </a>
    </li>

    <li class="nav-item">
    <a class="nav-link">
    <p>
    {user.user.department}
    </p>
    </a>
    </li>

    <li class="nav-item">
    <a class="nav-link">
    <p>
    {user.user.course}
    </p>
    </a>
    </li>

    <li class="nav-item">
    <a class="nav-link">
    <p>
    {user.user.school_id}
    </p>
    </a>
    </li>
    
    
    
    
    

    
    
   
   
   
   
    
   
   
    </ul>
    </nav>
    
    </div>
    
    </aside>

<div class="content-wrapper">
    <div class="content-header">
    <div class="container-fluid">
    <div class="row mb-2">
    <div class="col-sm-6">
    <h1 class="m-0">Students' Dashboard</h1>
    
    </div>
    <div class="col-sm-6">
 
    </div>
    </div>
    </div>
    </div>

    {loadCheckin?
    open?
    <Alert onClose={close} severity="success">
			  <AlertTitle>Yay!!</AlertTitle>
			  We are glad you love your new room- <strong>Stay Safe.</strong>
			</Alert>
      :null
      
      :null}


    <section class="content">
    <div class="container-fluid">
    
   
    
    
    <div class="row">
    
    <section class="col-lg-7 connectedSortable">
    
    
    
    
    
    
    
    


    <div class="card">
    <div class="card-header">
    <h3 class="card-title">
    <i class="ion ion-clipboard mr-1"></i>
    My Bookings
    </h3>
    
    </div>

    
   
    
    
    </div>

    <div class="card-body table-responsive p-0 table-header-fixed ">
    {bookings && bookings.map((booking, index)=>(
		<React.Fragment key={index}><table class="table table-head-fixed text-nowrap">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Price</th>
                    <th>Location</th>
                    <th>No. in room</th>
                    <th>Check in</th>

                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>{booking.id}</td>
                    <td>{booking.price}</td>
                    <td>{booking.location}</td>
                    <td>{booking.number_of_persons}</td>
                    <td>{booking.checked_in===false? 
                    <>{!bookingId?<input type="checkbox" class="my-checkbox" value={`${booking.id}`} onChange={(e) => setBookingId(e.target.value)} /> : null}
                    {bookingId? <button onClick={setCheckedin}>Confirm</button> : null}
                      
                    </>
                    
                
                     :
                     <ImCheckboxChecked/>
                     }
  

</td>

                </tr>
            </tbody>

        </table>
</React.Fragment>
))}
</div>
    
    </section>
    
    
    <section class="col-lg-5 connectedSortable">
    
    
    
    
    
    </section>
    
    </div>
    
    </div>
    </section>
    
    </div>   






    </div>
        </div>
	  

		)
}
export default ProfilePage