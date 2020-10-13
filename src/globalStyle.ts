import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    font-family: 'Roboto', sans-serif;
    outline:none;
  }

  body, #root, html{
    min-height:100vh;
  }

  .label-float{
  position: relative;
  padding-top: 13px;
}

  .label-float input{
    border: 0;
    border-bottom: 2px solid lightgrey;
    outline: none;
    min-width: 180px;
    font-size: 16px;
    transition: all .3s ease-out;
    -webkit-transition: all .3s ease-out;
    -moz-transition: all .3s ease-out;
    -webkit-appearance:none;
    border-radius:0;
    background:transparent;
    color:#fff;
  }

  .label-float input:focus{
    border-bottom: 2px solid #FFF;
  }

  .label-float input::placeholder{
    color:transparent;
  }

  .label-float label{
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 13px;
    transition: all .3s ease-out;
    color:#fff;
    -webkit-transition: all .3s ease-out;
    -moz-transition: all .3s ease-out;
  }

  .label-float input:focus + label,
  .label-float input:not(:placeholder-shown) + label{
    font-size: 13px;
    margin-top: 0;
    color: #fff;
  }

  button{
    cursor:pointer;
  }
`;

export default GlobalStyle;
