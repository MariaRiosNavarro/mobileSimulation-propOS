import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui;
  }

  :root{
    --primary-color:#FFA41B;
    --hover-color: #f86f03; 
    --secondary-color:#525FE1;
    /* Apps */
    --appBg-color:#ffcb7d;
    --bg-color:#ffeacc;
    --detail-color:#848dea;
    --nav-color:#3a3a3a;
  }


`;
