import React from 'react';
import NavBar from '../components/NavBar';
import PageTitle from '../components/PageTitle';
import StarterSection from '../components/StarterSection';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import SectionTitle from '../components/SectionTitle';
function StarterPage() {
  return (
    <>
    <TopBar />
    <NavBar />
    <PageTitle />
    <SectionTitle
      title = "This is the title"
     />
    <StarterSection />
    <Footer />
    </>
  );
}

export default StarterPage;
