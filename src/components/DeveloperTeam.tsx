import { useContext } from "react";
import Box from "./BoxContext";
const DeveloperTeam: React.FC = () => {
  const context = useContext(Box);

  if (!context) {
    return <div>context는 undefined 일 수 있습니다.</div>;
  }

  return (
    <div>
      <p>User: {context.title}</p>
      <p>Age: {context.year}</p>
    </div>
  );
};
export default DeveloperTeam;
