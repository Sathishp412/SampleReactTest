function Message() {
  const name = "Sathish";
  if (name) return <h1> Hi {name}</h1>;
  return <h1> Hello world</h1>;
}

export default Message;
