import styled from 'styled-components';

export const Container = styled.div`
  background-color:#039CF5;
  min-height:100vh;

  .logo{
    width:90px;
    margin:20px;
  }

  .back{
    position:absolute;
    left:120px;
    top:30px;
    background:#2054FA;
    padding:5px;
    border-radius:10px;

    img{
      width:50px;
    }
  }

  .background-waves{
    width:100%;
    position:absolute;
    bottom:0;
    left:0;
    z-index:0;   
    /* min-height:50%; */
    max-height:55vh; 
    min-height:45vh; 
    object-fit:cover;
  }

  @media (max-width:550px){
    .logo{
      width:60px;
      
    }
  }
`;
