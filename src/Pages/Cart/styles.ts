import styled from "styled-components";

export const Container = styled.div`
  background-color: #039cf5;
  min-height: calc(100vh - (93px + 50px));

  .action {
    padding: 25px 0;
    width: 100%;
    display: flex;
    justify-content: space-around;

    button {
      font-size: 25px;
      border: none;
      padding: 12px;
      width: 45%;
      border-radius: 10px;
      color: #fff;

      &:first-child {
        background-color: #26bb0e;
      }
      &:last-child {
        background-color: #ada100;
      }
    }
  }

  .divider {
    color: #6bc3f6;
    background-color: #6bc3f6;
    height: 10px;
    border: none;
  }

  .products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
    padding:25px;

    .product_cart{
      display:flex;
      flex-direction:column;

      border:4px solid #6BC3F6;
      padding:10px;
      border-radius:15px;

      .info{
        display:flex;

        img{
          width:155px;
          height:155px;
          object-fit:cover;
          margin:0 20px 20px;
        }

        .details{
          text-transform:capitalize;
          color:#fff;

          h1, h5, h4{
            font-weight:550;
          }
        }
      }

      .qtd{
        display:flex;
        align-items:center;
        color:#fff;

        &{
          font-weight:550;
        }

        button{
          margin:0 20px;
          border:none;
          border-radius:5px;

          &:first-child{
            background-color:#990000;
          }

          &:last-child{
            background-color:#26bb0e;
          }
        }

        p{
          background-color:#2054FA;
          padding:3px 8px;
          border-radius:6px;
        }
      }

      .finality-product{
        margin-top:15px;
        padding:10px;
        font-size:20px;
        color:#fff;
        background-color:#26bb0e;
        border:none;
        border-radius:10px;
      }
    }
  }

  .loading {
    position: absolute;
    right: auto;
    left: calc(50% - 160px);
    bottom: calc(50% - 75px);
    display: flex;
    flex-direction: column;
    color:#fff;
    text-align:center;
    h1, h3{
      font-weight:500;
    }
    img {
      width: 150px;
    }
  }

  @media (max-width:1300px){
    .products{
      grid-template-columns:1fr 1fr;
    }
  }

  @media (max-width: 800px) {
    height: calc(100vh - 93px);

    .products{
      grid-template-columns:1fr;
    }
  }
`;
