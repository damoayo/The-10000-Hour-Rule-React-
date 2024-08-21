import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: rgba(255, 255, 255, 1);
  width: 800px;
  height: 800px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  position: relative;
  animation: slidefade 0.35s linear;
`;

const ModalTitle = styled.h2`
  position: absolute;
  top: 76px;
  left: 202px;
  font-family: 'tvN Enjoystories';
  font-size: 96px;
  font-weight: 700;
  line-height: 105.6px;
  text-align: center;
`;

const ModalText = styled.p`
  position: absolute;
  top: 186px;
  left: 284px;
  font-family: 'tvN Enjoystories';
  font-size: 36px;
  font-weight: 700;
  line-height: 39.6px;
  text-align: center;
  color: rgba(91, 35, 134, 1);
`;

const ModalImage = styled.img`
  position: absolute;
  top: 255px;
  left: 184px;
  width: 433px;
  height: 337px;
  padding: 4px 1.04px 0px 2px;
`;

const ModalButton = styled.button`
  position: absolute;
  top: 666px;
  left: 146px;
  padding: 21px 49px;
  border-radius: 56px;
  background-color: rgba(252, 238, 33, 1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  font-family: 'GmarketSansBold';
  font-size: 24px;
  font-weight: 700;
  color: rgba(91, 35, 134, 1);
  cursor: pointer;
`;

const Modal = ({ onClose }) => (
  <ModalContainer>
    <ModalContent>
      <ModalTitle>화이팅!!♥♥♥</ModalTitle>
      <ModalText>당신의 꿈을 응원합니다!</ModalText>
      <ModalImage src="./img/licat.png" alt="라이언캣" />
      <ModalButton onClick={onClose}>
        종료하고 진짜 훈련하러 가기 GO!GO!
      </ModalButton>
    </ModalContent>
  </ModalContainer>
);

export default Modal;
