import React, { useState, useEffect } from "react";
import "../App.css";
import {
  Container,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Messages from "./Messages";

function Chat(props) {
  const [input, setInput] = useState("");
  const [lang, setLang] = useState("");

  useEffect(() => {
    setInput("");
  }, [props.messages]);

  const handleSubmit = (event) => {
    props.onSend(input);
    setInput("");
    event.preventDefault();
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
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <FormControl
            as="textarea"
            rows={2}
            placeholder="message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <InputGroup.Append>
            <Button variant="primary outline-secondary" type="submit">
              Send
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </Container>
  );
}

export default Chat;
