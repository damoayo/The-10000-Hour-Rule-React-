import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import MainFront from "./components/MainFront";
import { createGlobalStyle } from "styled-components";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetJob, setTargetJob] = useState("");
  const [time, setTime] = useState("");
  const [calculateDate, setCalculateDate] = useState("0");

  const GlobalStyle = createGlobalStyle`
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
body {
  width: 100%;
  height: 1917px;
  text-align: center;
  background-color: rgba(91, 35, 134, 1);
}
a {
  text-decoration: none;
}
`;

  console.log(calculateDate, targetJob, time);
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleCalculateDate = (job, time) => {
    setTargetJob(job);
    setTime(time);
    setCalculateDate(10000 / parseInt(time));
  };

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main
        targetJob={targetJob}
        calculateDate={calculateDate}
        onGoButtonClick={handleModalToggle}
      />
      <MainFront onCalculateDateClick={handleCalculateDate} />
      <Footer />
      {isModalOpen && <Modal onClose={handleModalToggle} />}
    </div>
  );
}

export default App;
