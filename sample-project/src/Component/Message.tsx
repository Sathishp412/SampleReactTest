interface Props {
  text: String;
}

function Message(props: Props) {
  //const name = "Sathish";
  //if (name) return <h1> Hi {name}</h1>;
  return <h1>{props.text}</h1>;
}

export default Message;
