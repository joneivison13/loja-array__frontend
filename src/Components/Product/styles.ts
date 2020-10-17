import styled from 'styled-components';

export const Container = styled.div`
  background:#fff;
  width:100%;
  transition:all .3s;
  cursor:pointer;
  border-radius:10px;
  
  img.productimage{
    padding:5%;
    margin:0 auto;
    width:90%;
    min-width:90%;
    max-width:90%;
    height:270px;
    object-fit:cover;
  }

  .titleproduct{
    padding:0 5%;
    font-weight:500;
    min-height:3em;
    max-height:4.5em;
    text-transform:capitalize;
  }

  .priceproduct {
    color:#E83434;
    font-size:15px;
    padding:0 5%;
    span{
      font-size:30px;
    }
  }

  .cart{
    width:35px;
    float:right;
    margin:0 5% 15px;
    cursor:pointer;
  }

  &:hover{
    margin-top:-15px;
    margin-bottom:15px;
  }

`;
