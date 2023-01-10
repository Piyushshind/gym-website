import React from "react";
import { Carousel, Button } from "antd";
import style from './hero.module.css'



function Hero() {
  const items = [
    {
      key: "1",
      title: "Fitness",
      content: "",
    },
    {
      key: "2",
      title: "Yoga",
      content: " ",
    },
    {
      key: "3",
      title: "Wellness",
      content: "",
    },   {
      key: "4",
      title: "Wellness",
      content: "",
    },
  ];
  function ClickonLearn(){
    alert('Clicked from About Learn More')
  }

  return (
      <div id="hero" className={style.heroBlock}>
      <Carousel Button >
        {items.map((item) => {
          return (
            <div key={item.key} className={style.containerFluid}>
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <img src={item.img} alt="" />
                {/* <img style={{width:'600px'}} src={img1} alt="" /> */}
                <div className={style.btnHolder}>
                  <Button onClick={ClickonLearn} type="primary" size="large">
                    JOIN US
                  </Button>
                 
                  <Button size="large"><i className="fas fa-desktop"></i> Watch a Demo</Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Hero;
