import styled from 'styled-components';
import NavigationBar from './component/NavigationBar';
import CardProfile from './component/cardProfile';
import Title from './component/title';
import Mail from './component/mail';
import Members from './component/members';
import CardMeetup from './component/cardMeetup';

function App() {
  return (
    <div>
      <NavigationBar/><br></br>
      <CardProfile/>
      <Title name="Next Meetup"/>
      <Mail/>
      <Title name="About Meetup"/>
      <Wrapper>
      <p> Come and meet other developers interested in JavaScript and it's libarary in the Greater Jakarta area.</p>
      <p> Twitter: @JakartaJS and we use the hastag #JakartJS</p>
      </Wrapper>
      <Title name="Members" see="See all" href="#"/>
      <Members/>
      <Title name="Past Meetup" see="See all" href="#"/>
      <MeetupWarapper>
      <CardMeetup tanggal="17 November 2017" hastag="#39 Jakarta JS April Meetup with Kumparan" went="139"/>
      <CardMeetup tanggal="27 Oktober 2017" hastag="#38 Jakarta JS April Meetup with BliBli" went="113"/>
      <CardMeetup tanggal="27 September 2017" hastag="#39 Jakarta JS April Meetup with Hactiv8" went="35"/>
      </MeetupWarapper>
      <br></br>
      <hr style={{borderWidth:3, width:"95%"}}></hr>
      <p style={{textAlign:'center'}}>Copyraight Hactiv8 2018</p>
    </div>
  )
}
const MeetupWarapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Wrapper = styled.div`
    margin-left: 65px;
    margin-right: 70px;
`;
export default App;
