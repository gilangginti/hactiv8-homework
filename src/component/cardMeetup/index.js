import styled from "styled-components";

const CardMeetup = (props) => {
    return(
        <Container>
            <Card>
                <Title style={{paddingTop: 15}}>{props.tanggal}</Title>
                <hr style={{margin: 20}}></hr>
                <Title>{props.hastag}</Title>
                <Title><strong>{props.went}</strong> went.</Title>
                <Button>View</Button>
            </Card>
        </Container>
    );
}
const Button = styled.button`
      margin-left: 20px;
      margin-top: 20px;
      padding: 10px;
      width: 6em;
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

const Container = styled.div`
    margin-left: 50px;
    margin-right: 50px;
`;
const Card = styled.div`
    box-shadow: 1px 1px 5px 5px rgb(233,233,233);
    height: 13em;
    width: 22em;
    border-radius: 10px;
`;
const Title = styled.p`
    font-size: 15px;
    margin-left: 20px;
    font-weight: 500    ;
`;
export default CardMeetup;