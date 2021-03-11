import React, { useState } from "react";
import "../App.css";
import { Container, Form, Button, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Messages from "./Messages";

function Chat(props) {
  const [input, setInput] = useState("");
  const [lang, setLang] = useState("");

  const handleSubmit = (event) => {
    // use props.addMessage() to push the new message to the array
    event.preventDefault();
    event.target.reset();
  };

  return (
    <Container>
      <Form.Control size="sm" as="select" onChange={setLang}>
        <option>Select a Language</option>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="ja">Japanese</option>
        <option value="pt">Portuguese</option>
        <option value="ru">Russian</option>
        <option value="es">Spanish</option>
      </Form.Control>
      <br />
      <Messages messages={props.messages} side={props.side} lang={lang} />
      <br />
      <Form.Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="message..."
              required="true"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Form>
        </Col>
        <Col xs="auto">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Form.Row>
    </Container>
  );
}

export default Chat;
