import React, { useLayoutEffect, useRef } from 'react';
import Announcement from './Announcement';
import TopBar from './TopBar';
import NavBar from './NavBar';

function SiteHeader() {
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const setHeaderHeight = () => {
      const height = headerRef.current?.offsetHeight || 0;
      document.documentElement.style.setProperty('--header-height', `${height}px`);
    };

    setHeaderHeight();
    window.addEventListener('resize', setHeaderHeight);

    return () => {
      window.removeEventListener('resize', setHeaderHeight);
    };
  }, []);

  return (
    <div ref={headerRef} className="header-stack fixed-header">
      <Announcement />
      <TopBar />
      <NavBar />
    </div>
  );
}

export default SiteHeader;