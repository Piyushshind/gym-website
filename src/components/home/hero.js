import { Button } from "antd";
import { Carousel } from "antd";

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
      "active pursuit of activities, choices and lifestyles that lead to a state of holistic health.",
  },
  {
    key: "3",
    title: "Yoga",
    content:
      "Two general theories exist on the origins of yoga. The linear model holds that yoga originated in the Vedic period, as reflected in the Vedic textual corpus, and influenced Buddhism; according to author Edward Fitzpatrick Crangle, this model is mainly supported by Hindu scholars. According to the synthesis model, yoga is a synthesis of non-Vedic and Vedic elements; this model is favoured in Western scholarship.",
  },
];

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel autoplay>
        {items.map((item) => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h2>{item.title}</h2>
                <h4>{item.content}</h4>
                <div className="btnHolder">
                  <Button type="primary" danger>
                    Join Us
                  </Button>
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
