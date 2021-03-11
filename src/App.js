import "./App.css";
import React, { useState, useEffect } from "react";
import Chat from "./components/Chat";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {}, [messages]);

  const addMessage = (message) => {
    setMessages({ message });
  };

  return (
    <div className="bg">
      <div className="App">
        <header className="App-header">GatorCom</header>
        <Row>
          <Col>
            <Chat messages={messages} addMessage={addMessage} side="left" />
          </Col>
          <Col>
            <Chat messages={messages} addMessage={addMessage} side="" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
