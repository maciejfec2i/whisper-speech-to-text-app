import { useState } from "react";
import "./App.css";
import MainContainer from "./components/containers/MainContainer";
import ContentContainer from "./components/containers/ContentContainer";

function App() {
  return (
    <>
      <MainContainer>
        <ContentContainer>
          <input type="file" accept="video/mp4, audio/mp3, audio/wav" />
        </ContentContainer>
      </MainContainer>
    </>
  );
}

export default App;
