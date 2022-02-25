import { createGlobalStyle } from "styled-components";
import colors from "./color-palette.json";

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.white};
  }
`;
