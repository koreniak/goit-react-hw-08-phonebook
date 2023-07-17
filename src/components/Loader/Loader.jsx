import { Audio } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return <LoaderContainer>
    <Audio
      height="80"
      width="80"
      radius="9"
      color="#191970"
      ariaLabel="loading"
      wrapperStyle={{
        margin: '0 auto',
      }}
    />
  </LoaderContainer>
};

export default Loader;