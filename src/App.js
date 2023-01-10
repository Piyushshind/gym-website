import "./App.css";
import { Layout} from "antd";
import AppHeader from "./component/Appheader";
import Home from "./component/home";
import About from "./component/About";
import Training from "./component/Training";
const { Header, Content, Footer } = Layout;


function App() {
  return (
    <Layout className="mainLayout">
      <Header>
      <AppHeader/>
      </Header>
      <Content>
        <Home/>
        <About/>
        <Training/>
      </Content>
    </Layout>
  );
}

export default App;
