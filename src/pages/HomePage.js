
import React, {useContext, useState, useEffect} from 'react'
import AuthContext from '../context/AuthContext'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Toast from 'react-bootstrap/Toast';

import { GoLocation} from 'react-icons/go';

import { ImPriceTags} from 'react-icons/im';
import {BsFillPeopleFill} from 'react-icons/bs'


const HomePage = () => {
	let {user, logoutUser} = useContext(AuthContext)

	const [listings, setListings] = useState("")
  const [location, setLocation] = useState("")
  console.log(location)



	const getListings = async () => {
        
        const response = await fetch("https://gamkrib-backend.up.railway.app/listings/",
        {
          method: 'GET',
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          
        
        }
        )
        const data = await response.json()
        
        setListings(data)
        
    
        //console.log(data)
    
      }


      const getListingsFilter = async () => {
        
        const response = await fetch(`https://gamkrib-backend.up.railway.app/listings/?location=${location}`,
        {
          method: 'GET',
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          
        
        }
        )
        const data = await response.json()
        
        setListings(data)
        
    
        console.log(data)
    
      }

	  useEffect(() => {
		getListings()
    //getListingsFilter()
	  }, [])





	return (
		<div class="wrapper">
      
			<Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">Gamkrib</Navbar.Brand>
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {user? <><Nav.Link><Link className='links' to={"/profile"}>Profile</Link></Nav.Link><br />

            <Nav.Link><Link className='links' onClick={logoutUser}>Logout</Link></Nav.Link></> :
            
            <><Nav.Link><Link className='links' to={"/login"}>Sign in</Link></Nav.Link><Nav.Link><Link className='links' to={"/register"}>Register</Link></Nav.Link></>
            }
           
            
            
          </Nav>
          
          
          
        </Navbar.Collapse>
        <div class="scrollmenu .sticky">
  <a id = "KNUST" onMouseOver={(e) => setLocation(e.target.id)} onClick={getListingsFilter}>KNUST</a>
  <a id = "UG" onMouseOver={(e) => setLocation(e.target.id)} onClick={getListingsFilter}>UG</a>
  <a id = "ASHESI" onMouseOver={(e) => setLocation(e.target.id)} onClick={getListingsFilter}>ASHESI</a>
  <a id = "UCC" onMouseOver={(e) => setLocation(e.target.id)} onClick={getListingsFilter}>UCC</a>
  <a id = "UDS" onMouseOver={(e) => setLocation(e.target.id)} onClick={getListingsFilter}>UDS</a>
  <a id = "UEW" onMouseOver={(e) => setLocation(e.target.id)} onClick={getListingsFilter}>UEW</a>
  <a id = "UPSA" onMouseOver={(e) => setLocation(e.target.id)} onClick={getListingsFilter}>UPSA</a>
  <a id = "GIMPA" onMouseOver={(e) => setLocation(e.target.id)} onClick={getListingsFilter}>GIMPA</a>
  <a id = "WISCONSIN" onMouseOver={(e) => setLocation(e.target.id)} onClick={getListingsFilter}>WISCONSIN</a>
  <a id = "ATU" onMouseOver={(e) => setLocation(e.target.id)} onClick={getListingsFilter}>ATU</a>
  <a id = "KTU" onMouseOver={(e) => setLocation(e.target.id)} onClick={getListingsFilter}>KTU</a>
  
 
</div>
      </Container><br/>
      
      
    </Navbar>

    

  
            
<br/><br/>



<div class="hey">
	{listings && listings.map((listing, index)=>(
		<React.Fragment key = {index}>
			
			
			<div className='property-card'>
      <Link to={`/property-detail/${listing.id}`}>
			<img className='property-image' src={`${listing.image}`} width="305px" height="315px"/>
					<span><GoLocation /> {listing.location}</span><p><BsFillPeopleFill/> {listing.number_of_persons} in a room</p><strong><ImPriceTags /> GHS {listing.price}</strong>
          </Link>	
			</div>
		</React.Fragment>
		))}
			
			
			
			
			
			
			
		
			
			
			
			
			</div>

        </div>
	  

		)
}
export default HomePage