import { Helmet } from 'react-helmet';
import PageWrapper from './PageWrapper';

import Mai from '../assets/images/mai.gif';
import styled from 'styled-components';

const Sakurajima = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>Juice WRLD</title>
    </Helmet>
    <h1>Juice WRLD!!!</h1>
    <MaiGifImg draggable={false} src={Mai} />
    <p>
      Looks like that you are also a person who likes <b>Juice WRLD!!!!!</b>.
    </p>
    <h2>Why do I like his music?</h2>
    <p>
      I mean why not like his music?
      
    </p>
  </PageWrapper>
);

const MaiGifImg = styled.img`
  border-radius: 10px;
  max-width: 100%;
`;

export default Sakurajima;
