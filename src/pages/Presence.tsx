import { Helmet } from 'react-helmet';
import PageWrapper from './PageWrapper';

const Presence = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>Presence</title>
    </Helmet>
    <h1>👀 Presence</h1>
    <p>
      You may have noticed that while I'm doing something like listening to Spotify, programming in
      VSCode or playing a game, it'll appear in the bottom left of my site. This is thanks to an
      open-source project Phineas created called{' '}
      <a target="_blank" rel="noreferrer" href={'https://github.com/phineas/lanyard'}>
        Lanyard
      </a>
    </p>
  </PageWrapper>
);

export default Presence;
