import { Button } from "antd";
import { Carousel } from "antd";
import Atom from '../Atom/Atom'
import { Data,Data2,Data3 } from "../Atom/Atom";
import { useRecoilState } from "recoil";
// import Link from "antd/es/typography/Link";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import { useState } from "react";

const items = [
  {
    key: "1",
    title: "Fitness",
    content:
      "Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition, moderate-vigorous physical exercise, and sufficient rest along with a formal recovery plan.",
  },
  {
    key: "2",
    title: "Wellness",
    content:
      "If you want something you've never had, you must be willing to do something you've never done.Once you are exercising regularly, the hardest thing is to stop it.” “If you don't make time for exercise, you'll probably have to make time for illness.",
  },
  {
    key: "3",
    title: "Yoga",
    content:
      "Two general theories exist on the origins of yoga. The linear model holds that yoga originated in the Vedic period, as reflected in the Vedic textual corpus, and influenced Buddhism; according to author Edward Fitzpatrick Crangle, this model is mainly supported by Hindu scholars. According to the synthesis model, yoga is a synthesis of non-Vedic and Vedic elements; this model is favoured in Western scholarship.",
  },
];

function AppHero() {
  // const ref = useRef()
  const [show, setShow] = useState(false);
  const [data, setData] = useRecoilState(Data);
  const [sub, setSub] = useRecoilState(Data2);
  const [sub1, setSub2] = useRecoilState(Data3);

  function Logout() {
    setData(false);
    setSub(false);
    setSub2(false);
}
  return (
    <div id="hero" className="heroBlock">
      <Carousel autoplay  >
        {items.map((item) => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h1>{item.title}</h1>
                <h5>{item.content}</h5>
                <div className="btnHolder">
                 {/* <Link to='/SignUp'><Button type="primary" danger>
                    Join Us
                  </Button></Link>  */}
                  {sub1 ? (
                      <>
                        {" "}
                        <Link className="linkbtn" to="/Activity1">
                          <span>GO TO ACTIVITY</span>{" "}
                        </Link>{" "}
                        <Button type="primary" danger className="joilogin " onClick={() => Logout()}>
                          LOG OUT
                        </Button>{" "}
                      </>
                    ) : (
                      <>
                        {sub ? (
                          <>
                            <Link className="linkbtn" to="/activity">
                              <span>GO TO ACTIVITY</span>
                            </Link>{" "}
                            <Button type="primary" danger
                              className="joilogin "
                              onClick={() => Logout()}
                            >
                              LOG OUT
                            </Button>{" "}
                          </>
                        ) : (
                          <>
                            {data ? (
                              <>
                                <Link to="/AppPricing">
                                  <Button type="primary" danger className="/">
                                    GET STARTED
                                  </Button>
                                </Link>{" "}
                                <Button type="primary" danger
                                  className="joibus "
                                  onClick={() => Logout()}
                                >
                                  LOG OUT
                                </Button>{" "}
                              </>
                            ) : (
                              <>
                                {show ? (
                                  <>
                                    <Link to="/SignUp">
                                      {" "}
                                      <Button type="primary" danger className="joibus">
                                        REGISTRATION
                                      </Button>
                                    </Link>
                                    <Link to="/Login">
                                      {" "}
                                      <Button type="primary" danger className="joinus">LOGIN</Button>
                                    </Link>
                                  </>
                                ) : (
                                  <Button type="primary" danger
                                    onClick={() => setShow(true)}
                                    className="joinus"
                                  >
                                    JOIN US
                                  </Button>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;
