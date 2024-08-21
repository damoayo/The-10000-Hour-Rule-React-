import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: relative;
  display: grid;
  place-items: center;
`;

const LogoContainer = styled.div`
  top: 1689px;
  position: absolute;
  height: 25px;
`;

const LogoImage = styled.img`
  width: 125px;
  height: 25px;
  margin-bottom: 20px;
`;

const LogoText = styled.p`
  top: 1734px;
  height: 34px;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-weight: 400;
  line-height: 17.38px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
`;

const Footer = () => (
  <FooterContainer>
    <LogoContainer>
      <LogoImage src="./img/logo.png" alt="Logo" />
      <LogoText>
        ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.
        수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
      </LogoText>
    </LogoContainer>
  </FooterContainer>
);

export default Footer;

