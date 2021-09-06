import styled from "styled-components";

const Mail = () => {
    return(
        <Container>
            <CardWrapper>
            <br></br>
            <CardTitle><strong>Awesome meetup and event</strong></CardTitle>
            <CardTitle>25 January 2019</CardTitle>
            <CardTitle>Hello, JavaScript and Node.js Ninjas!</CardTitle>
            <CardTitle>Get ready for our montly meetup JakartaJS! This will be our fifth meetup of 2018!</CardTitle>
            <CardTitle>The meetup format will contain some short stories and technical talks.</CardTitle>
            <CardTitle>If you have a short announcement you'd like to share with the audience, you many do so during open mic announcments.</CardTitle><br></br>
            <CardTitle>Remember to bring a photo ID to get through building security.</CardTitle>
            <CardTitle> ..........</CardTitle>
            <CardTitle>See you there!</CardTitle>
            <CardTitle>Best, Hengki, Giovanni, Sofian, Riza, Agung, The JakartaJS Organizers</CardTitle>
            </CardWrapper>
        </Container>
    );
}
const CardWrapper = styled.div`
    /* background-color: #15CFFB; */
    height: 30em;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 5px rgb(233,233,233);
`;

const CardTitle = styled.p`
    display: flex;
    flex-direction: row;
    margin-left: 20px;
`;
const Container = styled.div`
    margin-left: 40px;
    margin-right: 50px;
`;
export default Mail;