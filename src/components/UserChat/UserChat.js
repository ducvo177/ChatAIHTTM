import React from "react";
import { useState } from "react";
import styled from "styled-components";
import aiImage from "../../assets/images/chatai.jpg";
const StyledTitle = styled.h1`
  color: black;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  font-family: "Courier New", Courier, monospace;
  animation: fadeIn 4s;
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
const StyledImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: 20px 225px;
`;
const ChatBox = styled.div`
  height: 800px;
  width: 600px;
  border-radius: 10px;
  background-color: white;
  animation: fadeIn 4s;
`;
const ChatContent = styled.div`
  height: 490px;
  width: 600px;
  box-sizing: border-box;
  overflow: scroll;
`;
const AIContent = styled.div`
  height: 50px;
  max-width: 300px;
  background-color: #bababa;
  color: #ffffff;
  border-radius: 10px;
  margin: 0 20px;
`;

const GuestContent= styled.div`
 height: 50px;
  max-width: 300px;
  background-color: #2374E1;
  color: #ffffff;
  border-radius: 10px;
  margin: 0 20px;
  
`
const ChatText = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  line-height: 50px;
  margin: 0 30px;
`;
const AIImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;
const AIMessage = styled.div`
  display: flex;
  padding: 30px 30px;
`;
const GuestMessage = styled.div`
  display: flex;
  padding: 30px 30px;
  justify-content:flex-end;
`
const UserChat = (props) => {
  const [newchat,setNewChat]=useState("");
  const [chatlist,setChatList]=useState([{"ai":"Hello"},{"guest":"Who are you?"},{"guest":":D"}])
  console.log(props.name);
  return (
    <StyledBackground>
      <ChatBox>
        <StyledImage src={aiImage} />
        <StyledTitle>User Chat</StyledTitle>
        <ChatContent>
          {chatlist.map((item)=>{
            return(
            Object.keys(item)[0]==="ai" ? (
              <AIMessage>
              <AIImage src={aiImage} />
              <AIContent>
                <ChatText>{Object.values(item)[0]}</ChatText>
              </AIContent>
            </AIMessage>
            ):(<GuestMessage>
              <GuestContent>
                  <ChatText>{Object.values(item)[0]}</ChatText>
                </GuestContent>
              </GuestMessage>
            )
            )
          })}
            </ChatContent>
      </ChatBox>
    </StyledBackground>
  );
};

export default UserChat;
