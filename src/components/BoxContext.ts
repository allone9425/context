import { createContext } from "react";

interface BoxContextType {
  title: string;
  year: number;
}

const Box = createContext<BoxContextType | undefined>(undefined);

export default Box;
