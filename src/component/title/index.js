import styled from "styled-components";

function Title (props){
    return(
        <Container>
            <Wrapper>
            <Titles>{props.name}</Titles>
            <SeeAll href={props.href}>{props.see}</SeeAll>
            </Wrapper>
        </Container>
    );
}

const SeeAll = styled.a`
    margin-left: auto;
    text-decoration: none;
    :hover{
        color: grey;
    }
`;

const Titles = styled.div`
    font-size: 18px;
    font-weight: bold;
`;
const Container = styled.div`
    margin-left: 50px;
    margin-right: 50px;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 20px;
    align-items:center;
`;
export default Title;