import styled from 'styled-components';
import React from 'react'

const Login = () => {
 

  return (
    
      <Container>
        <Content>
        <CTA>
          <CTAImage1 src='Images/cta-logo-one.svg'/>
          <SignUp>GET ALL THERE</SignUp>
          <Description>Get Acess to All content of Disney+ Hotstar VIP in the Subscription. 
          The price of Disney+ Hotstar VIP will be increased  by $1 from 20 July 2022 onwards.</Description>
          <CTAImage2 src='Images/cta-logo-two.png'/>
        </CTA>
          <BackgroundImage/>
        </Content>
      </Container>
    
  )
}
const Container = styled.section`
overflow: hidden;
display:flex;
flex-direction:column;
text-align:center;
height:100vh;
`;

const Content = styled.div`
margin-bottom:100vw;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:80px 40px;
height:100%;`;

const BackgroundImage = styled.div`
height:100%;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
background-image:url("/Images/login-background.jpg");
position:absolute;
top:0;
right:0;
left:0;
z-index:-1;

`;
const CTA = styled.div`

max-width:650px;
width:100%;
display:flex;
flex-direction:column;
`;
const CTAImage1 = styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:block;
width:100%;
transition:opacity 0.2s;
`;
const SignUp = styled.a`
font-weight:bold;
color:#f9f9f9;
background-color:#0063e5;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
font-size:18px;
padding:16.5px 0;
border:1px solid transparent;
border-radius:4px;
:hover{
  background-color:#0483ee;
}
`;
const Description = styled.p`
color:hsla(0, 0%, 95.3%, 1 );
font-size:12px;
margin:0 0 24px;
line-height:1.5;
letter-spacing:1.7px;
`;
const CTAImage2 = styled.img`
max-width:600px;
margin-bottom:20px;
display:inline-block;
vertical-align:bottom;
width:100%;


`;






export default Login;
