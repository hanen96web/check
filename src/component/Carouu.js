import React from "react";
import { Carousel } from "react-bootstrap";

const Carouu = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "50vh" }}
            className="d-block w-100"
            src="https://i.skyrock.net/1061/26631061/pics/2621342298_small_1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "50vh" }}
            className="d-block w-100"
            src="https://www.woopets.fr/assets/ckeditor/2021/may/all/11174/originale/chatonsroux4portee.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "50vh" }}
            className="d-block w-100"
            src="https://upload.chatsdumonde.com/img_global/24-adopter-un-chat/_big-1088_7288-choisir-un-chat-race-sexe-age-caractere.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carouu;
