
import React, {useContext, useState, useEffect} from 'react'
import AuthContext from '../context/AuthContext'
import {Link, Redirect} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


const DashboardPage = () => {
        //authentication
        let {user, logoutUser} = useContext(AuthContext)
        console.log(user)
        const [isLoading, setIsLoading] = useState(false);
        const [isSubmitting, setIsSubmitting] = useState(false)

        const [listed, setListed] = useState(false)
        const [open, setOpen] = useState(true)
        const [isWithdrawing, setIsWithdrawing] = useState(false)

        const history = useHistory()

        // listing properties
    const [image, setImage] = useState("")
    const [imageUpload, setImageUpload] = useState("")
    const [numberOfPersons, setNumberOfPersons] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")

    //getting listed properties
    
    const [myListing, setMyListing] = useState("")

    const [myBookings, setMyBookings] = useState("")


    /// calculating Earnings

    const [totalEarned, setTotalEarned] = useState("")


    /// Withdrawals

    const [recipient_code, setRecipientCode] = useState()
    const [show_withdraw, setShow_Withdraw] = useState(false)
    const handleWithdrawClose = () => setShow_Withdraw(false)
    const handleShow_Withdraw = () => setShow_Withdraw(true)

    const [showWhithdrawalHistory, setShowWithdrawalHistory] = useState(false)
    const handleShowWithdrawalHistory = () => setShowWithdrawalHistory(true)
    const handleWithdrawalHistoryClose = () => setShowWithdrawalHistory(false)


    const [balance, setBalance] = useState("")
    const [withdrawalAmount, setWithdrawalAmount] = useState("")
    const [withdrawalList, setWithdrawalList] = useState("")
    const [withdrawalTotal, setWithdrawalTotal] = useState("")
    
    //const handleShow = () => setShow(true);



    // listing a property
    let ListProperty = async (e)=> {
      setIsSubmitting(true)
        e.preventDefault()
<<<<<<< HEAD
           let response =  await fetch('https://gamkrib-backend.up.railway.app/listings-create/', {
=======
           let response =  await fetch('https://web-production-e7a3.up.railway.app/listings-create/', {
>>>>>>> c020432 (added new backend links)
               method: "POST",
      
               credentials: "include",
               headers: {
              
              "Content-Type": "application/json"
              
               
         },
                 
               body:JSON.stringify({
                  "user": user.user.pk,
                  "image": imageUpload,
                  "number_of_persons": numberOfPersons,
                  "location": location,
                  "description": description,
                  "price": price

                 
                  
              })
              
              
           })
          
           let data = await response.json()
           setIsSubmitting(false)
           setListed(true)
           
           
           console.log('response:', response)
           console.log(data)
           
       }

       //uploading images
       let formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "buymeanapple")
  

  const uploadImage = async (e) => {
    setIsLoading(true)

    const response =  await fetch(`https://api.cloudinary.com/v1_1/dmdf71t0f/image/upload`,{
      method: "POST",
      
      
     headers: {
      
       
      },
      
      
      body:formData
    })

    let data = await response.json()
    setImageUpload(data.secure_url)
    setIsLoading(false)
    console.log(data.secure_url)
  }             


       // Getting a landlord's listed properties
       const getListedProperties = async () => {
        
<<<<<<< HEAD
        const response = await fetch(`https://gamkrib-backend.up.railway.app/my-listings/${user.user.pk}`,
=======
        const response = await fetch(`https://web-production-e7a3.up.railway.app/my-listings/${user.user.pk}`,
>>>>>>> c020432 (added new backend links)
        {
          method: 'GET',
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          
        
        }
        )
        const data = await response.json()
        
        setMyListing(data)
        
    
        //console.log(data)
    
      }


      // Getting booked properties of the landlord
       const getBookedProperties= async () => {
        
<<<<<<< HEAD
        const response = await fetch(`https://gamkrib-backend.up.railway.app/my-bookings/${user.user.pk}`,
=======
        const response = await fetch(`https://web-production-e7a3.up.railway.app/my-bookings/${user.user.pk}`,
>>>>>>> c020432 (added new backend links)
        {
          method: 'GET',
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          
        
        }
        )
        const data = await response.json()
        
        setMyBookings(data)
        
    
        //console.log(data)

        // Total amount
    let sumOfEarnings = 0;
    for (var i = 0; i < data.length; i++) {
      if(data[i].checked_in === true){

      
           sumOfEarnings = sumOfEarnings + parseFloat(data[i].price);
         }
        }
   //console.log(amount_total)
   setTotalEarned(sumOfEarnings)
    
      }



      //WITHDRAWALS

 // List Of Banks
 const ListBanks = async () => {
  const response = await fetch(`https://api.paystack.co/bank?currency=GHS&type=mobile_money`,{
    method: "GET",
    
    headers:{
      "Content-Type": "application/json",
      "Authorization": "Bearer pk_test_0019a4e3acb7a9886c8c65386a5be0619de6223e",
    }
  })

  const data = await response.json()
  //console.log(data)
}


// Creating Receipient

const Receipient = async () => {
  const response = await fetch(`https://api.paystack.co/transferrecipient`,{
    method: "POST",
    
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer sk_test_ff6da6f1a15dbc14e2eb995db694bb824e3679c2",

    },

    body:JSON.stringify({
      "type": "mobile_money", 
      "name": user.user.username, 
      "account_number": "0551911595", 
      "bank_code": "MTN", 
      "currency": "GHS"
      
  })
  })

  const data = await response.json()
  //console.log(data)
  setRecipientCode(data.data.recipient_code)
 }


 //initiate transfer
 

 const createWithdrawal = async () => {
<<<<<<< HEAD
  const response = await fetch(`https://gamkrib-backend.up.railway.app/withdrawal/`,{
=======
  const response = await fetch(`https://web-production-e7a3.up.railway.app/withdrawal/`,{
>>>>>>> c020432 (added new backend links)
    method: "POST",
    
    headers: {
      "Content-Type": "application/json",

    },

    body:JSON.stringify({
      "user": user.user.pk,
      "amount": withdrawalAmount
      
  })
  })

  const data = await response.json()
  //console.log(data)
  
 }


 const initiateTransfer = async () => {
  setIsWithdrawing(true)
  const response = await fetch(`https://api.paystack.co/transfer`,{
    method: "POST",
    
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer sk_test_ff6da6f1a15dbc14e2eb995db694bb824e3679c2",

    },

    body:JSON.stringify({
      "source": "balance", 
      "amount": withdrawalAmount, 
      "recipient": "RCP_ngj4s2o8ss2cfo0", 
      "reason": "Holiday Flexing" 
      
  })
  })

  const data = await response.json()
  setIsWithdrawing(false)
  console.log(data)

  ///// verified withdrwal
  if (data.status == true){
    createWithdrawal()
    alert("withdrwal went through!")
  } else{
    alert("withdrawal didnt fo through!")
  }
  
 }



  /// withdrawal history
  const getWithdrawals = async () => {
   
<<<<<<< HEAD
    const response = await fetch(`https://gamkrib-backend.up.railway.app/withdrawal-list/${user.user.pk}`,{
=======
    const response = await fetch(`https://web-production-e7a3.up.railway.app/withdrawal-list/${user.user.pk}`,{
>>>>>>> c020432 (added new backend links)
      method: "GET",
      
      headers:{
        "Content-Type": "application/json",
      }
    })
  
    const data = await response.json()
    console.log(data)
    setWithdrawalList(data)
  
    let withdrawalTotal = 0;
      for (var i = 0; i < data.length; i++) {
             withdrawalTotal = withdrawalTotal + parseFloat(data[i].amount);
           }
     //console.log(amount_total)
     setWithdrawalTotal(withdrawalTotal)

     
  
  }

  const home = ()=>{
    history.push('/')
  }

  const remain = ()=>{
    history.push('/dashboard')
  }

  const close = ()=>{
    setOpen(false)
  }



 

      useEffect(() => {

        getListedProperties()
        getBookedProperties()
        ListBanks()
        Receipient()
        getWithdrawals()

        
        
       
      }, [])


     


	return (
        <div className='wrapper'>
          {user.user.is_landlord===false? <Redirect to ="/profile"/>:null}
             

<nav class="main-header navbar navbar-expand navbar-white navbar-light">
    
    <ul class="navbar-nav">
    <li class="nav-item">
    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
    <a onClick={home}  class="nav-link">Home</a>
    </li>
    
    </ul>
    
    <ul class="navbar-nav ml-auto">
    
 
    
   
    
    
    <li class="nav-item">
    
    <strong class="logout" onClick={logoutUser}>Logout </strong> 
   
    </li>
    
    </ul>
    </nav>


    <aside class="main-sidebar sidebar-dark-primary elevation-4">
    
    <a onClick={home} class="brand-link">
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
    {user.user.ID_card}
    </p>
    </a>
    </li>

    <li class="nav-item">
    <a class="nav-link">
    <p>
    {user.user.location}
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
    <h1 class="m-0">Landlord's Dashboard</h1>
    </div>
    <div class="col-sm-6">
    <ol class="breadcrumb float-sm-right">
    <li class="breadcrumb-item"><p onClick={home} >Home</p></li>
    <li class="breadcrumb-item active">Landlord's</li>
    </ol>
    </div>
    </div>
    </div>
    </div>

    


    <section class="content">
    <div class="container-fluid">
    
    <div class="row">
    <div class="col-lg-3 col-6">
    
    <div class="small-box bg-info">
    <div class="inner">
    <h3>GHS {totalEarned}</h3>
    <p>Total Earnings</p>
    </div>
    <div class="icon">
    <i class="ion ion-bag"></i>
    </div>
    <a href="#" class="small-box-footer"><i class="fas "></i></a>
    </div>
    </div>
    
    <div class="col-lg-3 col-6">
    
    <div class="small-box bg-success">
    <div class="inner">
    <h3>GHS {withdrawalTotal}<sup ></sup></h3>
    <p>Total Withdrawals</p>
    </div>
    <div class="icon">
    <i class="ion ion-stats-bars"></i>
    </div>
    <a class="small-box-footer" onClick={handleShowWithdrawalHistory}>Withdrawal History <i class="fas fa-arrow-circle-right"></i></a>
    </div>
    </div>
    
    <div class="col-lg-3 col-6">
    
    <div class="small-box bg-warning">
    <div class="inner">
    <h3>GHS {totalEarned-withdrawalTotal}</h3>
    <p>Balance</p>
    </div>
    <div class="icon">
    <i class="ion ion-person-add"></i>
    </div>
    <a class="small-box-footer" onClick={handleShow_Withdraw}>Request Withdrawal <i class="fas fa-arrow-circle-right"></i></a>
    </div>
    </div>
    
   
    
    </div>
    
    
    <div class="row">
    
    <section class="col-lg-7 connectedSortable">
    
    
    {listed?
    open?
    <Alert onClose={close} severity="success">
			  <AlertTitle>Yay!!</AlertTitle>
			  Your property has been listed- <strong>Stay Safe.</strong>
			</Alert>
      :null
      
      :null}
    
    
    
    
    <div class="card">
    <div class="card-header">
    <h3 class="card-title">
    <i class="ion ion-clipboard mr-1"></i>
    List a Property
    </h3>
    
    </div>
    
    <div class="card-body">
    <ul class="todo-list" data-widget="todo-list">
    
    
    <form onSubmit={ListProperty}>
    <div >
    <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Multiple files input example</Form.Label>
        <Form.Control
        type="file"
        name = "image"
        files={image}
        onChange={(e) => setImage(e.target.files[0])}
        multiple />

<Button variant="primary" onClick={uploadImage}>
{isLoading ?
  <Spinner
  as="span"
  animation="border"
  size="sm"
  role="status"
  aria-hidden="true"
/>
: null}

            Upload
          </Button></Form.Group><br/>
      
    <input type="text" name="location" placeholder="location" class="form-control" value = {location}
            onChange={(e) => setLocation(e.target.value )}/><br/>
    <input type="text" name="numberOfPersons" placeholder="number of persons" class="form-control" value = {numberOfPersons}
            onChange={(e) => setNumberOfPersons(e.target.value )}/><br/>
    <input type="text" name="description" placeholder="description" class="form-control" value = {description}
            onChange={(e) => setDescription(e.target.value )}/><br/>
    <input type="text" name="price" placeholder="price" class="form-control" value = {price}
            onChange={(e) => setPrice(e.target.value )}/><br/>
    <Button type="submit">
    {isSubmitting ?
  <Spinner
  as="span"
  animation="border"
  size="sm"
  role="status"
  aria-hidden="true"
/>
: null}
      
      List Property</Button>
    </div>
    
    </form>
    
    
    
    </ul>
    </div>
    
    
    </div>


    <div class="card">
    <div class="card-header">
    <h3 class="card-title">
    <i class="ion ion-clipboard mr-1"></i>
    Listed Properties
    </h3>
    
    </div>
    
    <div class="card-body">
    <ul class="todo-list" data-widget="todo-list">
    
    
    <div class="row">
<div class="col-12">
<div class="card">
<div class="card-header">

<div class="card-tools">
<div class="input-group input-group-sm" >

<div class="input-group-append">



</div>
</div>
</div>
</div>

<div class="card-body table-responsive p-0 table-header-fixed ">
{myListing && myListing.map((list, index)=>(
		<React.Fragment key={index}>
<table class="table table-head-fixed text-nowrap">
<thead>
<tr>
<th>ID</th>
<th>Price</th>
<th>Location</th>
<th>Number Of Persons</th>

</tr>
</thead>
<tbody>
<tr>
<td>{list.id}</td>
<td>{list.price}</td>
<td>{list.location}</td>
<td>{list.number_of_persons}</td>

</tr>
</tbody>
</table>
</React.Fragment>
))}
</div>

</div>

</div>
</div>
    
    
    
    </ul>
    </div>
    
    
    </div>

    
    
    </section>
    
    
    <section class="col-lg-5 connectedSortable">
    
   
    
    
    <div class="card bg-gradient-info">
    <div class="card-header border-0">
    <h3 class="card-title">
    <i class="fas fa-th mr-1"></i>
    On-Going Bookings
    </h3>
    <div class="card-tools">
    <button type="button" class="btn bg-info btn-sm" data-card-widget="collapse">
    <i class="fas fa-minus"></i>
    </button>
    <button type="button" class="btn bg-info btn-sm" data-card-widget="remove">
    <i class="fas fa-times"></i>
    </button>
    </div>
    </div>
    <div class="card-body table-responsive p-0 table-header-fixed ">
    {myBookings && myBookings.map((booking, index)=>(
		<React.Fragment key={index}><table class=" table table-head text-nowrap">
            
            <thead>
            {booking.checked_in === false ?
                <tr>
                    <th>ID</th>
                    <th>Price</th>
                    <th>Location</th>
                    
                    <th>Status</th>

                </tr>
                : null}
            </thead>

            <tbody>
            {booking.checked_in === false ?
                <tr>
                    <td>{booking.id}</td>
                    <td>{booking.price}</td>
                    <td>{booking.location}</td>
                    <td>Awaiting</td>
                    

                </tr>

            : null}
            </tbody>

        </table>
</React.Fragment>
))}
    </div>
    
    <div class="card-footer bg-transparent">
    <div class="row">
    <div class="col-4 text-center">
    
    </div>
    
    <div class="col-4 text-center">
   
    </div>
    
    <div class="col-4 text-center">
 
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    
    <div class="card bg-gradient-success">
    <div class="card-header border-0">
    <h3 class="card-title">
    <i class="far fa-calendar-alt"></i>
   Successful Bookings
    </h3>
    
    <div class="card-tools">
    
    
    <button type="button" class="btn btn-success btn-sm" data-card-widget="collapse">
    <i class="fas fa-minus"></i>
    </button>
    <button type="button" class="btn btn-success btn-sm" data-card-widget="remove">
    <i class="fas fa-times"></i>
    </button>
    </div>
    
    </div>
    
    <div class="card-body pt-0">
    <div class="card-body table-responsive p-0 table-header-fixed ">
    {myBookings && myBookings.map((booking, index)=>(
		<React.Fragment key={index}><table class=" table table-head text-nowrap">
            <thead>
            {booking.checked_in === true ?
                <tr>
                    <th>ID</th>
                    <th>Price</th>
                    <th>Location</th>
                    
                    <th>Status</th>

                </tr>
            : null}
            </thead>

            <tbody>
            {booking.checked_in === true ?
                <tr>
                    <td>{booking.id}</td>
                    <td>{booking.price}</td>
                    <td>{booking.location}</td>
                    
                   <td>Booked</td>

                  
                    

                </tr>
                 : null}
            </tbody>

        </table>
</React.Fragment>
))}
    </div>
    
    <div id="calendar" ></div>
    </div>
    
    </div>
    
    </section>
    
    </div>
    
    </div>
    </section>

    <Modal show={showWhithdrawalHistory} onHide={handleWithdrawalHistoryClose}>
        <Modal.Header closeButton>
          <Modal.Title>Withdrawal History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {withdrawalList && withdrawalList.map((withdrawal, index) => (
        <React.Fragment key={index}>
          <hr/>
          <h4>Amount: <span><p>GHs {withdrawal.amount}</p></span></h4>
          <h3/>
          </React.Fragment>
        ))}
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>


    <Modal show={show_withdraw} onHide={handleWithdrawClose}>
        <Modal.Header closeButton>
          <Modal.Title>Initiate Withdrawal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Amount GHS</Form.Label>
              <Form.Control
                type="number"
                name = "withdrawFunds"
                value = {withdrawalAmount}
                onChange={(e) => setWithdrawalAmount(e.target.value)}
                
              />
              
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              
            </Form.Group>
            <Button variant="primary" onClick={initiateTransfer}>
            {isWithdrawing ?
  <Spinner
  as="span"
  animation="border"
  size="sm"
  role="status"
  aria-hidden="true"
/>
: null}
            Withdraw
          </Button>
          </Form>
        </Modal.Body>
        
         
      </Modal>
    
    </div>    


    </div>
        


		)
}
export default DashboardPage