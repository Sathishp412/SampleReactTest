import Message from "./Component/Message";

import Header from "./Component/header";
import Footer from "./Component/footer";
import Menu from "./Component/menu";
import Content from "./Component/content";
import ListGroup from "./Component/listGroup";
import ColorChange from "./Component/colorChange";
function App() {
  return (
    <div>
      <Message text="Hi Sathish"></Message>
      <Header />
      <span>
        <Menu />
        <Content />
      </span>
      <Footer />
    </div>
  );
}

export default App;
