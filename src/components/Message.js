import React from "react";

function Message(props) {
  let from;
  if (props.side === "left" && props.from === "L") {
    from = "from-me";
  } else if (props.side === "right" && props.from === "R") {
    from = "from-me";
  } else {
    from = "";
  }

  return (
    <div className={`message ${from}`}>
      <div className="message-body">{props.message}</div>
    </div>
  );
}

export default Message;
