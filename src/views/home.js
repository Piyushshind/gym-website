import React from 'react';

import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppFeature from '../components/home/feature';
import AppPricing from '../components/home/pricing';

function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppAbout/>
      <AppFeature/>
      {/* <AppWorks/> */}
      {/* <AppFaq/> */}
      <AppPricing/>
      {/* <AppContact/> */}
    </div>
  );
}

export default AppHome;