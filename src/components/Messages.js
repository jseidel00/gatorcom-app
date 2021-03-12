import React from "react";
import Message from "./Message";
import translate from "translate-google-api";

function Messages(props) {
  console.log(props.messages);
  // Loop through all the messages in the state and create a Message component

  const messages = props.messages.map((message, i) => {
    //const result = translate(message.message, { to: props.lang });
    return (
      <Message
        key={i}
        message={message.message}
        from={message.from}
        side={props.side}
      />
    );
  });

  return <div className="messages">{messages}</div>;
}

Messages.defaultProps = {
  messages: [],
};

export default Messages;
