import { IcLeftArrow, IcRightArrow } from "common/icons";
import React, { useState } from "react";
import {
  StyledContainerWrapper,
  StyledItemWrapper,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledSliderWrapper,
  StyledWorksPageWrapper,
  StyledLeftArrowWrapper,
  StyledRightArrowWrapper,
} from "./styles";

function Works() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];
  return (
    <StyledWorksPageWrapper id='works'>
      <StyledSliderWrapper currentSlider={currentSlider}>
        {data.map((item) => (
          <StyledContainerWrapper key={item.id}>
            <StyledItemWrapper>
              <StyledLeftWrapper>
                <div>
                  <div>
                    <img src={item.icon} alt='' />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <span>Projects</span>
                </div>
              </StyledLeftWrapper>
              <StyledRightWrapper>
                <img src={item.img} alt='' />
              </StyledRightWrapper>
            </StyledItemWrapper>
          </StyledContainerWrapper>
        ))}
      </StyledSliderWrapper>
      <StyledLeftArrowWrapper
        onClick={() => {
          if (currentSlider > 0) setCurrentSlider(currentSlider - 1);
        }}
      >
        <IcLeftArrow isDisabled={currentSlider === 0} />
      </StyledLeftArrowWrapper>
      <StyledRightArrowWrapper
        onClick={() => {
          if (currentSlider < data.length - 1)
            setCurrentSlider(currentSlider + 1);
        }}
      >
        <IcRightArrow isDisabled={currentSlider === data.length - 1} />
      </StyledRightArrowWrapper>
    </StyledWorksPageWrapper>
  );
}

export default Works;
