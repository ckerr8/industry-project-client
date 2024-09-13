import { Hero } from '../../components/Hero/Hero';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../../styles/global.scss'

function HomePage() {

    return (
      <>
      <HelmetProvider>
        <Helmet>
          <title>Find Your Perfect Match</title>
        </Helmet>
        </HelmetProvider>     
       <Hero />
 <img className="static-image" src="../../src/assets/images/telus-1.png"></img>
 <img className="static-image" src="../../src/assets/images/telus-2.png"></img>
 <img className="static-image" src="../../src/assets/images/telus-3.png"></img>
 <img className="static-image" src="../../src/assets/images/telus-4.png"></img>
 <img className="static-image" src="../../src/assets/images/telus-5.png"></img>
      </>
    )
  }
  
  export default HomePage