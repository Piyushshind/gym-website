import "./App.css";
import { Layout} from "antd";
import AppHeader from './components/common/header'
import AppFooter from "./components/common/footer";
import About from "./components/home/about";
import Training from "./components/home/about";
import AppHome from './views/home'
const { Header, Content, Footer } = Layout;


function App() {
  return (
    <Layout className="mainLayout">
      <Header>
      <AppHeader/>
      </Header>
      <Content>
        <AppHome/>
        {/* <About/> */}
        <Training/>
      </Content>
      <Footer>
        <AppFooter/>
      </Footer>
    </Layout>
  );
}

export default App;
