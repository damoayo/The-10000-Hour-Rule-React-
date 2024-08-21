import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: relative;
  display: grid;
  place-items: center;
`;

const HoursLaw = styled.div`
  position: relative;
  display: grid;
  place-items: center;
`;

const TitleImage = styled.img`
  position: absolute;
  text-align: center;
  height: 112px;
  top: 194px;
`;

const ClockImage = styled.img`
  position: absolute;
  text-align: center;
  height: 265px;
  top: 120px;
`;

const SubTitle = styled.h2`
  position: absolute;
  width: 486px;
  height: 40px;
  top: 431px;
  font-family: 'tvN Enjoystories';
  font-size: 36px;
  font-weight: 700;
  line-height: 39.6px;
  text-align: center;
  color: rgba(245, 223, 77, 1);
`;

const Header = () => (
  <HeaderContainer>
    <HoursLaw>
      <TitleImage src="./img/title.png" alt="Title" />
      <ClockImage src="./img/clock.png" alt="Clock" />
    </HoursLaw>
    <SubTitle>"연습은 어제의 당신보다 당신을 더 낫게 만든다."</SubTitle>
  </HeaderContainer>
);

export default Header;

