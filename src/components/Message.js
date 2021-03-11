import React from "react";

function Message(props) {
  let fromMe;
  if (props.side === "left") {
    fromMe = props.fromMe ? "from-me" : "";
  } else {
    fromMe = props.fromMe ? "" : "from-me";
  }

  return (
    <div className={`message ${fromMe}`}>
      <div className="message-body">{props.message}</div>
    </div>
  );
}

Message.defaultProps = {
  message: "",
  fromMe: false,
};

export default Message;
