import styled from "styled-components";

export const Container = styled.div`
  width: 65%;
  background: #0067a4;
  margin: auto;
  border-radius: 10px;
  z-index: 10;
  position: absolute;
  left: 0;
  right: 0;
  top:10%;
  bottom:10%;
  height:80%;

  max-height:600px;

  h1 {
    color: #fff;
    text-align: center;
    padding-top: 20px;
    font-weight: normal;
    font-size: 3em;
  }

  form {
    width: 70%;
    margin: 50px auto 0;

    .label-float {
      width: 100%;
      margin: 0 auto;
    }

    .label-float input {
      width: 100%;
      margin-bottom: 35px;
    }

    button[type="submit"] {
      background-color: #2f95d0;
      width: calc(100% - 200px);
      padding: 20px;
      color: #fff;
      border: none;
      border-radius: 10px;
      font-size: 2em;
      margin: 35px 100px 40px;
      min-width:calc(80px + 2em);
    }
  }

  .actions{
    display:flex;
    justify-content:space-around;
    small{
      color:#fff;
      font-size:1em;
      margin-bottom:30px;
      cursor:pointer;
    }
  }

  @media(max-width:730px){
    background-color:transparent;
    width:80%;

    .actions small{
      background:#0067a4;
      padding:10px 15px;
      border-radius:10px;
       & + small{
         margin-left:20px;
       }
    }
    button[type='submit']{
      width:100% !important;
      margin:20px 0px !important;
    }
  }

  @media(max-width:500px){
    width:90%;

    form {
      width:100% !important;
    }

    form .label-float{
      width:90% !important;
    }

    h1{
      font-size:35px;
    }
  }
`;
