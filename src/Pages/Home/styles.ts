import styled from "styled-components";

export const Container = styled.div`
  background: #e2e2e2;
  min-height: 100vh;

  .products{
    margin:-100px 30px 0;
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    grid-gap:30px;
  }

  .bg {
    width: 100%;
    max-width: 100%;
    height: 70vh;
    object-fit: cover;
    object-position: top;
  }

  @media (max-width:830px){
    .bg{
      object-fit:contain;
    }
  }

  @media (max-width:1140px){
    .products{
      display:grid;
      grid-template-columns:1fr 1fr 1fr;
      margin-top:-200px;
    }
  }

  @media (max-width:800px){
    .products{
      display:grid;
      grid-template-columns:1fr 1fr;
      margin-top:-350px;
    }
  }

  @media (max-width:540px){
    .products{
      display:grid;
      grid-template-columns:1fr;
      margin-top:-440px;
    }
  }
`;
