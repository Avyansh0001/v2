import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';

const Etc = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>/etc</title>
    </Helmet>
    <h1>/etc</h1>
    <h2>Thanks</h2>
    <p>
    Thanks for visiting my website, I hope you liked this website
    </p>
    <h2>Contact</h2>
    <p>
      You can contact me through {' '}
      <a href={'https://twitter.com/avyanshralph'}>Twitter</a> 
    </p>
    <p>
     You can also send me an email on any of these mentioned below{' '}
      <a href="mailto:me@avyanshralph.xyz">me@avyanshralph.xyz</a>
<br></br>
         <a href="mailto:dev@avyanshralph.xyz">dev@avyanshralph.xyz</a>
    </p>
    <h2>Other</h2>
    <ul>
      <li>
        <Link to={'/presence'}>/presence</Link>
      </li>
      <li>
        <a href={'https://p.avyanshralph.xyz'}>p.avyanshralph.xyz</a>
        
        <li>
        <a href={'https://phineas.io'}>Code from Phin</a>
      </li>
      </li>
      
     
    </ul>
  </PageWrapper>
);

export default Etc;
