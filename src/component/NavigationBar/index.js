import styled from 'styled-components';


function NavigationBar() {
  return (
     <Nav>
       <Container>
       <Logo a href="#">Qtemu</Logo>
       <Section style={{marginRight: 70}} href="#">Create Meetup</Section>
       <Section href="#">Explore</Section>
       <Section style={{marginLeft: "auto"}} href="#">Login</Section>
       </Container>
    </Nav>
  );
}

const Nav = styled.div`
    background-color: #15CFFB;
    height: 50px;
    position: absolute;
    justify-content: center;
    width: 100%;
    box-shadow: 0px 3px rgb(233,233,233);
`;
const Container = styled.div`
    margin-left: 40px;
    margin-right: 40px;
    display:flex;
    flex-direction: row;
    align-items:center;
`;

const Logo = styled.div`
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
    margin-right: 5em;
`;
const Section = styled.a`
    font-size: 18px;
    cursor: pointer;
    text-decoration: none;
    :visited{
      border-radius: 5px;
      color: black;
      background-color: blue;
    }
    :active{
      border-radius: 5px;
      color:white;
    }
    :hover{
      color: grey;
    }
`;
export default NavigationBar;
