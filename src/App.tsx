import React from "react";
import Box from "./components/BoxContext";
import DeveloperTeam from "./components/DeveloperTeam";

const App: React.FC = () => {
  const Docs = { title: "2023년 연말정산", year: 2023 };

  return (
    <Box.Provider value={Docs}>
      <DeveloperTeam />
    </Box.Provider>
  );
};

export default App;
