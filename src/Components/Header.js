import styled from 'styled-components';
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
// import {useHistory} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// useNavigate is latest used for Browser's History
//Dispatch allows action to our store.js
//Selector will allow us to retrieve from store.js
import {auth,provider} from '../firebase';
import {selectUserName,
   selectUserPhoto,
   setUserLoginDetails }
    from '../features/user/userSlice';


const Header = (props) => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = () => {
    auth
    .signInWithPopup(provider)
    .then((result) => {
      setUser(result.user);
      
    }).catch((error) => {
      alert(error.message);
    });
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email:user.email,
        photo:user.photoURL

    })
    );
  };
  


  return (
    <Nav>
        <Logo>
            <img src='/Images/logo.svg' alt='Disney+'/>
        </Logo>
        {
          //If user not login show login button if user login than show photo
          !userName ? 
          (<Login onClick={handleAuth}>Login</Login>) : (
          <>
        <NavMenu>
          <a href='/home'>
            <img src='/Images/home-icon.svg' alt='HOME'/>
            <span>HOME</span>
          </a>
          <a >
            <img src='/Images/search-icon.svg' alt='SEARCH'/>
            <span>SEARCH</span>
          </a>
          <a>
            <img src='/Images/watchlist-icon.svg' alt='WATCHLIST'/>
            <span>WATCHLIST</span>
          </a>
          <a>
            <img src='/Images/original-icon.svg' alt='ORIGINAL'/>
            <span>ORIGINAL</span>
          </a>
          <a>
            <img src='/Images/movie-icon.svg' alt='MOVIE'/>
            <span>MOVIES</span>
          </a>
          <a>
            <img src='/Images/series-icon.svg' alt='SERIES'/>
            <span>SERIES</span>
          </a>
        </NavMenu>
        <UserImg src = {userPhoto} alt = {userName} />
        </>
        )
        };

        {/* <Login onClick={handleAuth} >LOGIN</Login> */}
    </Nav>
  );
};
const Nav = styled.nav`
position:fixed;
top:0;
left:0;
right:0;
height:70px;
background-color:#090b13;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 36px;
letter-spacing:16px;
z-index:3;
`;
const Logo = styled.a`
padding:0;
width:80px;
margin-top:4px;
max-height:70px;
font-size:0;
display:inline-block;
img{
    display:block;
    width:100%;
}
`;
const NavMenu = styled.div`
align-items:center;
display:flex;
flex-flow:row nowwrap;
height:100%;
justify-content:flex-end;
margin:0;
padding:0;
position:relative;
margin-right:auto;
margin-left:25px;
@media(max-width:768px){
  display:none;
}
a{
  display:flex;
  align-items:center;
  padding:0 12px;
  
  img{
    height:20px;
    min-width:20px;
    width:20px;
    z-index:auto;
  }
  span{
    color:rgb(249,249,249);
    font-size:13px;
    letter-spacing:1.42px;
    line-height:1.08px;
    padding:2px 0px;
    white-space:nowwrap;
    position:relative;
  
  &:before{
    background-color:rgb(249,249,249);
    border-radius:0px 0px 4px 4px;
    bottom:-6px;
    content:"";
    height:2px;
    left:0px;
    opacity:0;
    position:absolute;
    right:0;
    transform-origin:left center;
    transform:scaleX(0);
    transition:all 300ms cubic-bezier(0.25, 0.46,0.45, 0.94 );
    visiblity:hidden;
    width:auto;


  }
  }
  :hover{
    span:before{
      transform:scaleX(1);
      visiblity:visible;
      opacity:1 !important;

    }
  }
}

`;
const Login = styled.a`
background-color:rgb(0, 0, 0, 0.6);
padding:8px  16px;
text-transform:uppercase;
letter-spacing:1.5px;
border:1px solid #f9f9f9;
border-radius:4px;
transition:all 0.2s ease 0s;

&:hover{
background-color:#f9f9f9;
color:#000;

}



`;
const UserImg = styled.img`
height:100%;`;

export default Header;