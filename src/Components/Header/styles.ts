import styled from "styled-components";

export const Container = styled.header`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: #039cf5;

  span {
    display: flex;
  }

  .thumbnail{
    display:flex;
    justify-content:space-between;
    width:100%;
  }

  .login{
    width:200px;
    height:30px;
    align-self:center;
    margin-right:30px;
    border-radius:8px;
    border:none;
    background:#2054FA;
    color:#fff;
    font-weight:500;
  }

  .button-search {
    background-color: #ada100;
    border: none;
    padding: 8px 5px 5px;
    border-radius: 10px;
    margin-left: 10px;
    width:40px;
    height:40px;

    img {
      width: 70%;
    }
  }

  .logo {
    width: 140px;
    margin: 10px 20px;
  }
  .search {
    display: flex;
    align-items: center;
    color: #fff;
    cursor: pointer;
  }

  .cart {
    width: 40px;
    margin-left: 30px;
    cursor: pointer;
  }

  .search-input {
    position: absolute;
    width: 50%;
    min-width:200px;
    padding: 20px;
    display: flex;
    justify-content: center;
    right: 25%;

    transition: all 0.6s;

    form {
      width: 100%;
      display: flex;
      justify-content: center;

      input {
        width: 70%;
        border: none;
        border-radius: 5px 0 0 5px;
        padding-left: 15px;
      }

      button {
        margin: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }

  .profile{
    border-radius:50%;
    width:50px;
    align-self:center;
    margin-right:20px;
  }

  @media (max-width:800px){
    .items{
      display:none;
    }
  }

  @media (max-width:500px){
    .search-input {
      width:70%;
      right:15%;

      input{
        width:100%;
      }
    }
  }

  @media (min-width:800px){
    .thumbnail{
      .navbutton{
        display:none;
      }
    }
  }
`;

export const SubHeader = styled.div<{left:boolean}>`
  display: flex;
  justify-content: space-around;
  height: 50px;
  align-items: center;
  /* overflow-x:auto; */
  max-width: 100%;
  transition:margin 1s;

  p {
    margin: 0 20px;
    white-space: nowrap;
  }

  div {
    display: flex;
    margin: 0 20px;

    img {
      width: 40px;
    }
  }

  .items {
    display: none;
    .search {
      display: flex;
      align-items: center;
      color: #fff;
      cursor: pointer;
    }

    .cart {
      width: 40px;
      margin-left: 30px;
    }

    .button-search {
      background-color: #ada100;
      border: none;
      padding: 8px 5px 5px;
      border-radius: 10px;
      margin-left: 10px;

      img {
        width: 70%;
      }
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background: #039cf5;
    border-top: 3px solid #027de0;
    border-right: 3px solid #027de0;
    z-index:1000000000;

    position: absolute;
    top: 90px;
    height: calc(100vh - 90px);
    left: -00px;
    margin-left:${props => props.left === true ? -500 : 0}px;

    .items {
      display: flex;
      flex-direction: column;
      align-items:flex-start;
      margin-left:20px;

      .search {
        display: flex;
        align-items: center;
        color: #fff;
        cursor: pointer;
        font-size:20px;
      }

      .cart {
        width: 60px;
        margin:15px 0px;
        display: block;
      }

      .button-search {
        background-color: #ada100;
        border: none;
        padding: 8px 5px 5px;
        border-radius: 10px;
        margin-left: 10px;

        img {
          width: 70%;
          display: inline;
          background: transparent;
        }
      }
    }

    div {
      margin: 5px 0 0px;
      background: #039cf5;
    }

    p {
      margin: 0 20px 20px;
    }

    img {
      display: none;
      background: #039cf5;
    }
  }

  @media (max-width:500px){
    width:100%;
  }
`;
