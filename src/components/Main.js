import React from "react";
import styled from "styled-components";

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

const DaySection = styled.div`
  position: absolute;
  height: 72px;
  top: 1205px;
`;

const ForYou1 = styled.div`
  gap: 12px;
`;
const ForYou2 = styled.div`
  margin-top: 17px;
`;

const LargeText = styled.span`
  font-family: "GmarketSansBold";
  font-size: 72px;
  font-weight: 700;
  line-height: 72px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
`;

const MainContainer = styled.main`
  position: relative;
  display: grid;
  place-items: center;
`;

const GoButtonDiv = styled.div`
  position: absolute;
  height: 57px;
  top: 1493px;
`;

const GoButton = styled.button`
  margin-right: 18px;
  padding: 21px 49px;
  gap: 10px;
  border-radius: 56px;
  background: rgba(252, 238, 33, 1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  font-family: "GmarketSansBold";
  font-size: 24px;
  font-weight: 700;
  color: rgba(91, 35, 134, 1);
  cursor: pointer;
`;
const SharingButton = styled.button`
  top: 1493px;
  width: Hug (200px) px;
  padding: 21px 49px 21px 49px;
  gap: 10px;
  border-radius: 56px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;
const Sharing = styled.span`
  font-family: "GmarketSansBold";
  font-size: 24px;
  font-weight: 700;
  color: rgba(91, 35, 134, 1);
`;

const Main = ({ onGoButtonClick,targetJob,calculateDate }) => (
  <MainContainer>
    <DaySection>
      <ForYou1>
        <RegularText>당신은</RegularText>
        <LargeText>{targetJob}</LargeText>
        <RegularText>전문가가 되기 위해서</RegularText>
      </ForYou1>
      <ForYou2>
        <RegularText>대략</RegularText>
        <LargeText>{calculateDate}</LargeText>
        <RegularText>일 이상 훈련하셔야 합니다!</RegularText>
      </ForYou2>
    </DaySection>
    <GoButtonDiv>
      <GoButton onClick={onGoButtonClick}>훈련하러 가기 GO!GO!</GoButton>
      <SharingButton>
        <Sharing>공유하기</Sharing>
      </SharingButton>
    </GoButtonDiv>
  </MainContainer>
);

export default Main;
