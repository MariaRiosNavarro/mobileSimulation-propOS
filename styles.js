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
    background-color: var(--bg-color)
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

  //ConfirmAlertBibliothek Styles to Style delete ALert

  #react-confirm-alert{
    margin: 0;
    padding: 0;
  }

  .react-confirm-alert-overlay {
    margin:0;
    padding: 0;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(2px);

  .react-confirm-alert{
    margin: 0;
    padding: 0;
    width: 20rem;
    background-color: transparent;
    border: 1px solid orange;
    border-radius: 8px;
  }

  .react-confirm-alert-body{
    margin: 0;
    padding: 0;
    width: 20rem;
    background-color: transparent;
  }

  .react-confirm-alert-body:last-child{
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 0;
    color: red;
    font-weight: bolder;
    text-align: center;

  }

  .react-confirm-alert-button-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding:0;
    
  }

  .react-confirm-alert-button-group button:first-child{
    margin-top: 1rem;
    background-color: red;
    border: none;
    border-radius: 8px;
    padding: 1rem;
    width: 17rem;
    color: black;
    font-weight: bolder;
  }

  .react-confirm-alert-button-group button:first-child:hover{
    background-color: darkred;
  }
  .react-confirm-alert-button-group button:last-child{
    margin-top: 1rem;
    background-color: var(--primary-color);
    border: none;
    border-radius: 8px;
    padding: 1rem;
    width: 17rem;
    color: black;
    font-weight: bolder;
  }
  .react-confirm-alert-button-group button:last-child:hover {
    background-color: green;
  }








}

`;
