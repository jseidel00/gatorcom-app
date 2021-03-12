import "./App.css";
import React, { useState, useEffect } from "react";
import Chat from "./components/Chat";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {}, [messages]);

  const sendHandlerL = (message) => {
    const messageObject = {
      message,
    };
    messageObject.from = "L";
    addMessage(messageObject);
  };

  const sendHandlerR = (message) => {
    const messageObject = {
      message,
    };
    messageObject.from = "R";
    addMessage(messageObject);
  };

  const addMessage = (message) => {
    const newMessages = [];
    messages.forEach((element) => {
      newMessages.push(element);
    });
    newMessages.push(message);
    setMessages(newMessages);
  };

  return (
    <div className="bg">
      <div className="App">
        <header className="App-header">GatorCom</header>
        <Row>
          <Col>
            <Chat messages={messages} onSend={sendHandlerL} side="left" />
          </Col>
          <Col>
            <Chat messages={messages} onSend={sendHandlerR} side="right" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
