import { useMemo } from 'react';
import { Tooltip } from 'react-tippy';
import PageWrapper from './PageWrapper';

const BIRTH = new Date('2008-03-13T10:15:00Z');
const YEAR_MILLIS = 31556952000;

const Home = () => {
  const age = useMemo(() => Math.floor((Date.now() - BIRTH.getTime()) / YEAR_MILLIS), []);

  return (
    <PageWrapper forceReadableWidth>
      <h1>What I Do</h1>
      <p>
        Avyansh Ralph.{' '}
        <Tooltip arrow title={'13th March 2008'}>
          {age}
        </Tooltip>{' '}
        y/o developer, graphic designer and a student.
      </p>
      <p>
        I love to design many web applications and vectors in my free time! My biggest project was{' '}
        <a href="https://infinid.in" target="norel noopen">
          Infinid
        </a>
        .
      </p>
      <p>
       I have made many projects including Branding a start up to making a rebrand for a Gaming clan.
      </p>

      <p>
        In my free time I usually like remaking the ui of my website by taking out elements from different website and making it on my own.
      </p>

      <h2>Apps I use</h2>

      <p>
        For graphic desiging I use all Adobe Apps like Photoshop, Illustrator, InDesign, etc whereas or video editing I use Adobe Premiere Pro.
      For Coding and editing, I mainly use Visual Studio Code, Sublime Text or WebStorm.</p>

      <h3>About Flyte</h3>
      <p>
        Flyte is a metaverse where people can hire graphic designers, developers, and other services to create and share their own content. It is still in progress and will be out till late 2023.
      </p>
    </PageWrapper>
  );
};

export default Home;
