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
      </>

    )
  }
  
  export default HomePage