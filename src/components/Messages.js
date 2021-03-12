import React from "react";
import Message from "./Message";
import translate from "translate-google-api";

function Messages(props) {
  console.log(props.messages);
  // Loop through all the messages in the state and create a Message component

  const messages = props.messages.map((message) => (
    //const result = translate(message, { to: props.lang });
    <Message
      key={message.id}
      message={message.message}
      from={message.from}
      side={props.side}
    />
  ));

  return <div className="messages">{messages}</div>;
}

Messages.defaultProps = {
  messages: [],
};

export default Messages;
