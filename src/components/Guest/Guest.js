import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledTitle = styled.h1`
  color: white;
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  margin: 50px 0;
  font-family: "Courier New", Courier, monospace;
`;
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
const StyledInput = styled.input`
  height: 44px;
  width: 400px;
  text-align: center;
  border-radius: 10px;
  font-size: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
const StyledButton = styled.button`
  width: 168px;
  height: 44px;
  color: white;
  border-radius: 5px;
  margin: 40px;
  opacity: 0.8;
  transition: 0.3s;
  background-color: #026f02;
  border: none;

  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    opacity: 1;
  }
`;

const Guest = () => {
 
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  return (
    <StyledBackground>
      <div>
        <StyledTitle>AI CHATBOT</StyledTitle>
        <div>
          <StyledInput placeholder="Enter your name" onChange={handleChange} />
          <Link to="/chat">
            <StyledButton >Next</StyledButton>
          </Link>
        </div>
      </div>
    </StyledBackground>
  );
};

export default Guest;
