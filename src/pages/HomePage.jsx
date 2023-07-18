import styled from '@emotion/styled';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  margin: 78px auto;
`;

const HomePageTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.12;
  color: #191970;
  margin-left: 4px;
  margin-bottom: 8px;
  text-align: center;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <HomePageTitle>This is a Phonebook. Register or Log in to your account and create your contact book.</HomePageTitle>
    </HomePageContainer>
  )
};

export default HomePage;
