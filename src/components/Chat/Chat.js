import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import aiImage from "../../assets/images/chatai.jpg";
import baseUrl from "../../utils/baseUrl";
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
const StyledInput = styled.input`
  margin: 10px 0 10px 30px;
  height: 50px;
  width: 430px;
  text-align: center;
  border-radius: 10px;
  font-size: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  color: white;
  border-radius: 10px;
  margin: 10px;
  opacity: 0.8;
  transition: 0.3s;
  background-color: #2374e1;
  border: none;

  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    opacity: 1;
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

const GuestContent = styled.div`
  height: 50px;
  max-width: 300px;
  background-color: #2374e1;
  color: #ffffff;
  border-radius: 10px;
  margin: 0 20px;
`;
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
  justify-content: flex-end;
`;
const Chat = () => {
  const [newchat, setNewChat] = useState("");
  const [chatlist, setChatList] = useState([
    { ai: "Hello" },
    { guest: "Who are you?" },
    { guest: ":D" },
  ]);
  const handleChange = (e) => {
    setNewChat(e.target.value);
  };
  // const handleClick=()=>{
  //   var chat={"guest":newchat}
  //   setChatList([...chatlist,chat]);
  //   setNewChat("");
  //   console.log(chatlist);
  // }
  const handleClick = async () => {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newchat }),
      crossDomain: true,
    });
    const data = await response.json();
    var chat = { guest: newchat };
    var chat2 = { ai: data.fulfillmentText };
    setChatList([...chatlist, chat, chat2]);
    setNewChat("");
  };
  // useEffect(() => {
  //   console.log(chatlist);
  //  },[chatlist]);
  return (
    <StyledBackground>
      <ChatBox>
        <StyledImage src={aiImage} />
        <StyledTitle>CHATBOT</StyledTitle>
        <ChatContent>
          {chatlist.map((item) => {
            return Object.keys(item)[0] === "ai" ? (
              <AIMessage>
                <AIImage src={aiImage} />
                <AIContent>
                  <ChatText>{Object.values(item)[0]}</ChatText>
                </AIContent>
              </AIMessage>
            ) : (
              <GuestMessage>
                <GuestContent>
                  <ChatText>{Object.values(item)[0]}</ChatText>
                </GuestContent>
              </GuestMessage>
            );
          })}
        </ChatContent>

        <div>
          <StyledInput
            placeholder="Enter Message"
            onChange={handleChange}
            value={newchat}
          />
          <StyledButton onClick={handleClick}>Send</StyledButton>
        </div>
      </ChatBox>
    </StyledBackground>
  );
};

export default Chat;
