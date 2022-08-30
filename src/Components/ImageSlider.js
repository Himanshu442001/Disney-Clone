import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  Slider from 'react-slick'; 
//  npm install react-slick 
// npm install slick-carousel   do install these dependencies later 

const ImageSlider = (props) => {
  let settings = {
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true,

  }




  return (
       
      <Carousel {...settings}>
       <Wrap>
        <a>
          <img src="/Images/slider-badging.jpg" alt=""></img>
        </a>
       </Wrap>
       <Wrap>
        <a>
          <img src="/Images/slider-badag.jpg" alt=""></img>
        </a>
       </Wrap>
       <Wrap>
        <a>
          <img src="/Images/slider-scales.jpg" alt=""></img>
        </a>
       </Wrap>
      </Carousel>
    
  );
}

const Carousel = styled(Slider)`
margin-top:20px;
& > button{
  opacity:0;
  height:100%;
  width:5vw;
  z-index:1;

  &:hover{
    opacity:1;
    transition :opacity 0.2s ease 0s;

  }
} 
ul li button{
  &:before{
    font-size:10px;
    color:rgb(150,158,171)
     
  }
}
li.slick-active button:before{
  color:white;
}
.slick-list{
  overflow:initial;
}
.slick-prev{
  left:-75px;
}
.slick-nex{
  right:-75px; 
}
`;
const Wrap = styled.div`
`;
export default ImageSlider;
