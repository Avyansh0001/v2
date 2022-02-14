import PageWrapper from './PageWrapper';
import Co from '../components/Co';
import styled from 'styled-components';
import HivenAppIcon from '../assets/images/hiven-app-icon.png';
import GigglAppIcon from '../assets/images/hiven-app-icon.png';
import HonkAppIcon from '../assets/images/hiven-app-icon.png';
import Repo from '../components/Repo';
import { Helmet } from 'react-helmet';

const Where = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Where</title>
      </Helmet>
      <h1>Where I've Done It</h1>
      <h3>Companies</h3>
      <CoWrapper>
        <Co
          url="#"
          name="Flyte"
          iconReference={HivenAppIcon}
          tagline="Consumer social"
          role={'Founder & Developer'}
          what={'Metaverse'}
          acquired
        />
        <Co
          url="#"
          name="Airdown"
          iconReference={GigglAppIcon}
          tagline="Consumer social"
          role={'Co-founder & Developer'}
          what={'Helper'}
        />
        <Co
          url="#"
          name="Airchat"
          iconReference={HonkAppIcon}
          tagline="Consumer social"
          role={'Founder & Backend Engineer'}
          what={'Social Networking'}
        />
      </CoWrapper>

      <h3>Open-source Projects</h3>
      <Repo
        name={'Calculator'}
        url={'https://github.com/Avyansh0001'}
        primaryLanguage={'Elixir'}
        description="Random Project"
      />
      <Repo
        name={'Shell'}
        url={'https://github.com/Avyansh0001'}
        primaryLanguage={'Rust'}
        description="Made a shell editor basically for computers running Windows 10 and having WSL integration."
      />
      <Repo
        name={'Flyte'}
        url={'https://github.com/Avyansh0001'}
        primaryLanguage={'HTML'}
        description="A metaverse coming in late 2023"
      />
      <Repo
        name={'avyanshralph.xyz'}
        url={'https://github.com/Avyansh0001/v2'}
        primaryLanguage={'TypeScript'}
        description="This very website"
      />
      
    </PageWrapper>
  );
};

const CoWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem 2rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export default Where;
