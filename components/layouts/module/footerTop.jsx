import React from "react";
import styled from "styled-components";

export default function FooterTop() {
  return (
    <StyledFooterTop>
      <StyledContainer className="container py-4">
        <div className="row justify-content-between">
            <div className="col-md-3">
                <StyledFooterLogo>DINK <sup>	&#174;</sup></StyledFooterLogo>
                <p>5070 Wing Way</p>
                <p>Paso Robles CA <sub>9344</sub>6</p>
                <p>United State of America</p>
                <div>
                    <StyledSocialIcon href="#"><i className="fa fa-facebook" aria-hidden="true"></i></StyledSocialIcon>
                    <StyledInsta href="#"><i className="fa fa-instagram" aria-hidden="true"></i></StyledInsta>
                    <StyledYoutube href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></StyledYoutube>
                </div>
            </div>
            <div className="col-md-3">
              <h3>Sitemap</h3>
              <div className="d-flex flex-column">
                <a href="#">Home</a>
                <a href="#" className="my-1">Pickleballs</a>
                <a href="#">Custom Paddles</a>
                <a href="#" className="my-1">About Us</a>
                <a href="#">Mission</a>
              </div>
            </div>
            <div className="col-md-3">
              <h3>Policies</h3>
              <div className="d-flex flex-column">
                <a href="#">Shipping Policies</a>
                <a href="#" className="my-1">Return  Policies</a>
                <a href="#">Privacy Policies</a>
                <a href="#" className="my-1">Terms of service</a>
                <a href="#">Contact Us</a>
              </div>
            </div>   

        </div>
      </StyledContainer>
    </StyledFooterTop>
  );
}

const StyledFooterLogo = styled.h2`
    color: #FA807E;
    font-size: 2.5rem;
    font-family: serif;
    font-weight: 600;
`
const StyledFooterTop = styled.div`
  border-top: 3px solid #DBE8E5;
    background-color: #EFF4F3;
`
const StyledContainer = styled.div`
  max-width: 960px;
`
const StyledSocialIcon = styled.a`
    padding: 5px 12px;
    background-color: #EFF4F3;
    border-radius: 6px;
    margin-right: 10px;
    box-shadow: 2px 2px 5px #ccd4d2;
`
const StyledInsta = styled(StyledSocialIcon)`
  &:hover i{
    background: -webkit-radial-gradient(33% 100% circle, #FED373 4%, #F15245 30%, #D92E7F 62%, #9B36B7 85%, #515ECF);
    background: radial-gradient(circle at 33% 100%, #FED373 4%, #F15245 30%, #D92E7F 62%, #9B36B7 85%, #515ECF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
`
const StyledYoutube = styled(StyledSocialIcon)`
  &:hover{
    color:#A5232A;
  }
`
