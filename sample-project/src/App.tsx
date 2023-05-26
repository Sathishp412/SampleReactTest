import Message from "./Component/Message";

import Header from "./Component/header";
import Footer from "./Component/footer";
import Menu from "./Component/menu";
import Content from "./Component/content";
import ListGroup from "./Component/listGroup";
function App() {
  return (
    // <Message />
    <div>
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
