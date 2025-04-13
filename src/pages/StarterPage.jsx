import React from 'react';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle';
import StarterSection from '../components/StarterSection';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
function StarterPage() {
  return (
    <>
    <TopBar />
    <Navbar />
    <PageTitle />
    <StarterSection />
    <Footer />
    </>
  );
}

export default StarterPage;
