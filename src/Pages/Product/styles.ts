import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 4px solid #007cc5;
  /* background-color:#aaa; */
  height: calc(100vh - 148px);
  padding: 20px;
  /* position:relative; */
  .info {
    h3 {
      font-size: 25px;
      font-weight: 500;
    }

    .price {
      color: #e83434;
      font-size: 20px;
      margin-top: 20px;

      span {
        font-size: 35px;
      }
    }

    .cep {
      width: 70%;
      margin: 70px auto 0;
      border:2px solid #aaa;
      padding:15px;
      border-radius:10px;

      form {
        margin: 0 auto;
        width: calc(70% + 40px);
        display: flex;
        align-items: center;
        input {
          width: 70%;
          font-size: 19px;
          padding: 2px 6px;
          border-radius: 5px 0 0 5px;
          border: 2px solid #aaa;
          border-right: none;
        }

        button {
          background: #ada100;
          border: none;
          padding: 5px;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          margin-left: -3px;

          img {
            width: 70%;
          }
        }
      }
    }

    .finaly {
      display: flex;
      justify-content: space-between;
      position:absolute;
      bottom:30px;
      right:50px;
      width:calc(50% - 50px);
      .pay {
        width: 75%;
        font-size: 30px;
        padding: 20px;
        background: #26bb0e;
        border: none;
        border-radius: 10px;
        color: #fff;
      }

      .cart {
        background-color: #ada100;
        border: none;
        border-radius: 10px;

        img {
          width: 70%;
        }
      }
    }
  }

  .container-caroussel{
    width:70%;
    
    .caroussel{
      display:flex;
      align-items:center;
      img{
        width:90%;
      }
    }

    .images{
      display:flex;
      justify-content:space-between;
      margin-top:10px;
      img{
        border:2px solid #aaa;
        padding:5px;
        border-radius:10px;
      }
    }
  }
`;
