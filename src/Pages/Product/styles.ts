import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 4px solid #007cc5;
  height: calc(100vh - 148px);
  padding: 20px;
  .info {
    h3 {
      font-size: 32px;
      font-weight: 500;
      text-transform:capitalize;
    }
    p{
      font-size:20px;
      font-weight:normal;
    }

    .price {
      color: #e83434;
      font-size: 20px;
      margin-top: 35px;

      span {
        font-size: 35px;
      }
    }

    .finaly {
      display: flex;
      flex-direction:column;
      justify-content: space-between;
      position:absolute;
      top:400px;
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
        width:75%;
        height:75px;
        display:flex;
        justify-content:center;
        align-items:center;
        color: #fff;
        font-size: 140%;
        padding: 20px;
        margin-top:20px;

        img {
          width: 40px;
          margin-right:20px;
        }
      }
    }
  }

  .container-caroussel{
    width:65%;   
    margin:0 auto;
    max-width:550px; 
    .caroussel{
      img{
        width:100%;
        height:390px;
        object-fit:fill;
        border:2px solid #aaa;
        padding:20px;
        border-radius:10px;
        margin-right:auto;
      }
    }
  }

  .back{
    position:absolute;
    left:20px;
    top:180px;
    background:#039cf5;
    padding:5px;
    border-radius:10px;

    img{
      width:50px;
    }
  }

  @media (max-width:1000px){
    display:flex;
    flex-direction:column;
    z-index:-1000;

    .info .finaly {
      top:800px;
      width:100%;
      left:auto;
      right:0;
      button{
      margin:0 auto;
        max-width:90%;
        width:100% !important;
      }
    }
  }

  @media (max-width:550px){
    .back{
      top:20px;
      background:#2054FA;
    }
    .container-caroussel{
      width:90%;
      margin:0;
    }
  }
`;