import React from "react";
import styled from "styled-components";

const MainContainer = styled.main`
  position: relative;
  display: grid;
  place-items: center;
`;

const WiseWord = styled.div`
  position: relative;
  display: grid;
  place-items: center;
`;

const QuotesBackground = styled.div`
  position: absolute;
  width: 493px;
  height: 96px;
  top: 562px;
  background-image: url(../img/quotes.png);
  background-repeat: no-repeat;
`;

const WiseText = styled.div`
  position: absolute;
  width: 375px;
  height: 85px;
  top: 549px;
`;

const TitleText = styled.span`
  font-family: "GmarketSansBold";
  display: inline;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
`;

const DescriptionText = styled.span`
  font-family: "GmarketSansMedium";
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
`;
const ProgrammingSection = styled.div`
  position: absolute;
  height: 57px;
  top: 736px;
`;
const TimeSection = styled.div`
  position: absolute;
  height: 57px;
  top: 820px;
`;

const TimePlaceholder = styled.input`
  width: 228px;
  height: 57px;
  top: 820px;
  border-radius: 7px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  font-family: "GmarketSansMedium";
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;

  &::placeholder {
    width: 94px;
    height: 24px;
    top: 820px;
    font-family: "GmarketSansMedium";
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: rgba(186, 188, 190, 1);
  }
`;
const Placeholder = styled.input`
  width: 228px;
  height: 57px;
  box-sizing: border-box;
  top: 736px;
  border: 1px solid #ffffff;
  border-radius: 7px;
  background: rgba(255, 255, 255, 1);
  left: 100px;
  font-family: "GmarketSansMedium";
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;

  &::placeholder {
    width: 148px;
    height: 24px;
    top: 753px;
    left: 100px;
    font-family: "GmarketSansMedium";
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: rgba(186, 188, 190, 1);
  }
`;

const TimeRegularText = styled.span`
  width: 205px;
  height: 24px;
  top: 837px;
  left: 1012px;
  margin: 17px 22px 0 11px;
  font-family: "GmarketSansMedium";
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
`;
const RegularText = styled.span`
  width: 205px;
  height: 24px;
  top: 837px;
  left: 1012px;
  margin: 17px 22px 0 11px;
  font-family: "GmarketSansMedium";
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
`;

const ClickHand = styled.div`
  position: absolute;
  height: 57px;
  top: 992px;
`;

const ClickHandText = styled.div`
  display: inline-block;
  box-sizing: border-box;
  top: 992px;
  padding: 21px 49px 21px 49px;
  gap: 10px;
  border-radius: 56px;
  background: rgba(252, 238, 33, 1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;
const ClickHandTextP = styled.p`
  height: 24px;
  top: 1013px;
  font-family: "GmarketSansMedium";
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  color: rgba(91, 35, 134, 1);
  cursor: pointer;
`;
const ClickImage = styled.img`
  width: 41px;
  height: 53px;
  top: 1006px;
  transform: rotate(19.08deg);
  height: 72px;
  color: rgba(252, 238, 33, 1);
`;

const MainFront = ({ onCalculateDateClick }) => {
  const handleClick = () => {
    const job = document.querySelector("input[placeholder='프로그래밍']").value;
    const time = document.querySelector("input[placeholder='5시간']").value;
    onCalculateDateClick(job, time);
  };

  return (
    <>
      <MainContainer>
        <WiseWord>
          <QuotesBackground />
          <WiseText>
            <TitleText>1만 시간의 법칙</TitleText>
            <DescriptionText>
              은 <br />
              어떤 분야의 전문가가 되기 위해서는
              <br />
              최소한 1만 시간의 훈련이 필요하다는 법칙이다.
            </DescriptionText>
          </WiseText>
        </WiseWord>
        <ProgrammingSection>
          <RegularText>나는</RegularText>
          <Placeholder placeholder="프로그래밍" />
          <RegularText>전문가가 될 것이다.</RegularText>
        </ProgrammingSection>

        <TimeSection>
          <TimeRegularText>그래서 앞으로 매일 하루에</TimeRegularText>
          <TimePlaceholder placeholder="5시간" />
          <TimeRegularText>시간씩 훈련할 것이다.</TimeRegularText>
        </TimeSection>

        <ClickHand>
          <ClickHandText>
            <ClickHandTextP onClick={handleClick}>
              <p>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</p>
            </ClickHandTextP>
          </ClickHandText>
          <ClickImage src="./img/click.png" alt="Click" />
        </ClickHand>
      </MainContainer>
    </>
  );
};

export default MainFront;
