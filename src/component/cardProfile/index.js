  import styled from 'styled-components';
  import Ace from './ace.jpg'

  function CardProfile (){
    return(
        <Container>
          <Cards>
            <PhotoProfile src={Ace}/>
            <div style={{flexDirection:'column'}}>
            <table style={{marginLeft:50}}>
              <tr>
                <th style={{marginBottom:20}}><strong>Hactiv8 Meetup</strong></th>
              </tr>
              <tr>
                <td>Location</td>
                <td>Jakarta</td>
              </tr>
              <tr>
                <td>Members</td>
                <td>1,078</td>
              </tr>
              <tr>
                <td>Organize</td>
                <td>Muhammad Gilang Fauzi</td>
              </tr>
            </table>
            <Button>Join Us</Button>
            </div>
          </Cards>
        </Container>
    );
  }

  const InfoProfile = styled.div`
      margin-left: 4em;
      margin-bottom: 10px;
  `;
  const Cards = styled.div`
      width: 200px;
      background-color: "#FFFFFF";
      width: 100% ;
      height: 15em;
      border-radius: 10px;
      margin-top: 3em;
      box-shadow: 1px 1px 5px 5px rgb(233,233,233);
      display: flex;
      align-items: center;

  `;
  const PhotoProfile = styled.img`
      width:200px;
      height: 200px;
      margin-left: 10px;
  `;
  const Container = styled.div`
      margin-left: 40px;
      margin-right: 40px;
  `; 

  const Button = styled.button`
      margin-left: 50px;
      margin-top: 20px;
      padding: 10px;
      width: 10em;
      font-weight: bold;
      cursor: pointer;
      background-image: linear-gradient(to right, #1FA2FF 0%, #12D8FA  51%, #1FA2FF  100%);
      text-transform: uppercase;
      transition: 0.5s;
      background-size: 200% auto;
      color: white;            
      box-shadow: 0 0 20px #eee;
      border-radius: 10px;
      display: block;  
      border: none;
      :hover {
      background-position: right center;
      color: #fff;
      text-decoration: none;
   }
`;
   
  
  export default CardProfile;