import styled from "styled-components";
import Ace from '../cardProfile/ace.jpg';

const Members = () => {
    return(
        <Container>
            <Card>
                <Avatar src={Ace}/>
                <TitleWrap>
                <p><strong>Organizers</strong></p>
                <Title>
                <p style={{marginRight: 30}}> Andhy Wiranata</p>
                <p> 4 Other.</p>
                </Title>
                </TitleWrap>
            </Card>
        </Container>
    );

}
const Title = styled.div`
    flex-direction: row;
    display: flex;
`;
const TitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
`;

const Container = styled.div`
    margin-left: 50px;
    margin-right: 50px;
`;
const Card = styled.div`
    display: flex;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 5px rgb(233,233,233);
`;
const Avatar = styled.img`
    width: 100px;
    height: 100px;
    padding: 30px;
    border-radius: 50%;
`;
export default Members;