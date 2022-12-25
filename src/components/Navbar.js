import styled from 'styled-components';
import logo from '../images/logo.png';


const Nav = styled.nav`
    height: 80px;
    -webkit-box-shadow: 0px 2px 15px 5px rgba(0,0,0,0.32); 
    box-shadow: 0px 2px 15px 5px rgba(0,0,0,0.32);
    display: flex;
    align-items:center ;
`

const Logo = styled.img`
    height: 70px;
    margin-left: 40px;

    @media (max-width: 991px) {
      height: 60px;
      margin-left: 20px;
    }
`

const AddButton = styled.button`
    background-color: var(--red);
    border: none;
    height: 100%;
    margin-left: auto;
    padding: 0px 20px;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    transition: all 1s ease;

    &:hover {
        /* background: -moz-linear-gradient(273deg, rgba(234,26,39,1) 0%, rgba(244,139,27,1) 100%);
        background: -webkit-linear-gradient(273deg, rgba(234,26,39,1) 0%, rgba(244,139,27,1) 100%);
        background: linear-gradient(273deg, rgba(234,26,39,1) 0%, rgba(244,139,27,1) 100%); */
        /* background: linear-gradient(273deg, rgba(234,26,39,1) 0%, rgba(244,139,27,1) 100%); */

    }
`

function Navbar() {
  return (
    <Nav>
      <Logo src={logo}/>
      <AddButton><a className='link-style' href="#join">Join the waitlist</a></AddButton>
    </Nav>
  );
}

export default Navbar;
