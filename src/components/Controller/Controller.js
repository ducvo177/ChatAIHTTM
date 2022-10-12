import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledTitle = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin:100px 0 ;
  font-family: "Courier New", Courier, monospace;
`;
const StyledAt= styled.h3`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  margin: 50px 0;
  font-family: "Courier New", Courier, monospace;
`
const StyledBackground = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 300% 300%;
  background-image: linear-gradient(
    -45deg,
    rgba(59, 173, 227, 1) 0%,
    rgba(87, 111, 230, 1) 25%,
    rgba(152, 68, 183, 1) 51%,
    rgba(255, 53, 127, 1) 100%
  );
  animation: AnimateBG 20s ease infinite;
  @keyframes AnimateBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
const StyledButton = styled.button`
  width: 168px;
  height: 44px;
  color: white;
  border-radius: 5px;
  margin: 0 0 0 200px;
  opacity: 0.8;
  transition: 0.3s;
  background-color: #2374E1;
  border: none;

  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    opacity: 1;
  }
`;
const StyledName= styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
  line-height:44px;
  background-color:#D9D9D9;
  color:black;
  border-radius:5px;
  padding: 0 50px;
  width: 340px;
  box-sizing: border-box;
  font-family: "Courier New", Courier, monospace;
`
const StyledBox= styled.div`
display: flex;
margin: 20px 0;
`
const Controller = () => {
  const [namelist,setNamelist]=useState(["Nguyen Van A","Tran Thi Hoai B","Hoang Tuan C"]);
  return (
    <StyledBackground>
      <div>
        <StyledTitle>ChatBot Controller</StyledTitle>
        <StyledAt>ChatBot:</StyledAt>
        {namelist.map((item,index)=>{
            return(
                <StyledBox>
                <StyledName>{item}</StyledName>
                 <Link to="/user" name={item}>
                   <StyledButton  >Watch</StyledButton>
                 </Link>
               </StyledBox>
            )
          })}
     
      </div>
    </StyledBackground>
  );
};

export default Controller;
