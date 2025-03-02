import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from './action/userAction';
import { Link, useNavigate } from 'react-router-dom';

export default function Header(){ 
const{user,isAuth} = useSelector(state=>state.userState)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleOut=()=>{
    dispatch(logOut)
    localStorage.removeItem('token')
    localStorage.removeItem('userProfile')
  }
    return(
        <>
         <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand  className='text-light'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav >
           <Nav.Link  className='text-light'>Home</Nav.Link>
            <Nav.Link  className='text-light'>contact</Nav.Link>
            {isAuth?
            (
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"  className='text-dark'>{user.name}</NavDropdown.Item>
              <NavDropdown.Item   className='text-dark' onClick={()=>navigate('/home')}>profile</NavDropdown.Item>
             
              <NavDropdown.Item onClick={handleOut}>logOut</NavDropdown.Item>
             
            </NavDropdown>): <Link to={'/login'}>Login</Link> }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}