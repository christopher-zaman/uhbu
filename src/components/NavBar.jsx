import React, { useState, useEffect } from 'react';

function NavBar() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  // Use an object to track which dropdowns are open
  const [dropdownStates, setDropdownStates] = useState({});

  const toggleDropdown = (key) => {
    setDropdownStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // When mobile nav is active, add the class to the body (as we did before)
  useEffect(() => {
    if (mobileNavActive) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  }, [mobileNavActive]);

  // Navigation configuration array 
  const navItems = [
    // Home
    { type: 'link', label: 'Home', href: '/', active: true },
    
    // Weight Loss
    {
      type: 'dropdown',
      key: 'dropdown1',
      title: 'Weight Loss',
      href: '/weight-loss',
      items: [
        { label: '💉 Semaglutide', href: 'semaglutide' },
        { label: '💉 Tirzepatide', href: 'tirzepatide' },
        { label: '💊 Contrave', href: 'contrave' },
        { label: '🌿 Calocurb', href: 'calocurb' },
        { label: '💉 Retatrutide', href: 'retatrutide' },
        { label: '💊 Low Dose Naltrexone', href: 'low-dose-naltrexone' },
        { label: '💉 Sermorelin', href: 'sermorelin' },
        { label: '💊 Phentermine', href: 'phentermine' },
      ],
    },
    // Hormone Therapy
    {
      type: 'dropdown',
      key: 'dropdown2',
      title: 'Hormone Therapy',
      href: '/hormone-replacement-therapy', // ← this makes the main link clickable
      items: [
        { label: '🌸 Peri-menopause', href: 'peri-menopause' },
        { label: '🌸 Estrogen', href: 'estrogen' },
        { label: '🌙 Progesterone', href: 'progesterone' },
        { label: '💪 Testosterone', href: 'testosterone' },
      ],
    },
    // Peptide Therapy
    {
      type: 'dropdown',
      key: 'dropdown3',
      title: 'Peptide Therapy',
      href: '/peptide-therapy',
      items: [
        { label: '💉 Sermorelin', href: 'sermorelin' },
        { label: '💉 CJC-1295 / Ipamorelin', href: 'CJC-1295-Ipamorelin' },
        { label: '💉 BPC-157', href: 'BPC-157' },
        { label: '💉 PT-141 (Bremelanotide)', href: 'pt-141-bremelonotide' },
        { label: '💉 AOD-9604', href: 'aod-9604' },
        { label: '💉 Tesamorelin', href: 'tesamorelin' },
      ],
    },
    // Sexual Wellness
    {
      type: 'dropdown',
      key: 'dropdown4',
      title: 'Sexual Wellness',
      items: [
        { label: 'Sexual Wellness Treatments', href: '/sexual-wellness-treatments' },
        { label: 'Sexual Wellness For her', href: '/sexual-wellness-for-her' },
        { label: 'Sexual Wellness For him ', href: '/p-shot' },
        { label: 'Duo', href: '/duo' },
      ],
    },
    // Primary Care
    {
      type: 'dropdown',
      key: 'dropdown5',
      title: 'Primary Care',
      items: [
        { label: 'Women\'s Health', href: '#' },
        { label: 'Men\'s Health', href: '#' },
        { label: 'Telemedicine', href: '#' },
        { label: 'House calls', href: '#' },
        { label: '24 hour health care', href: '#' },
        { label: 'Mental Health', href: '#' },
      ],
    },
    // Aesthetics
    {
      type: 'dropdown',
      key: 'dropdown6',
      title: 'Aesthetics',
      items: [
        { label: '✨ Vampire Facial & Vampire Face Lift®', href: '#' },
        { label: '✨ SkinPen Microneedling', href: '#' },
        { label: '✨ Toskani Peptide Cocktails', href: '#' },
        { label: '✨ Neurotoxins for Fine Lines & Wrinkle Relaxation', href: '#' },
        { label: '✨ Dermal Fillers', href: '#' },
        { label: '✨ ALMA FemiLift for Facial Resurfacing', href: '#' },
      ],
    },
    // // Cosmetic Injectables
    // {
    //   type: 'dropdown',
    //   key: 'dropdown7',
    //   title: 'Cosmetic Injectables',
    //   items: [
    //     { label: 'Dropdown 1', href: '#' },
    //     { label: 'Dropdown 2', href: '#' },
    //     { label: 'Dropdown 3', href: '#' },
    //     { label: 'Dropdown 4', href: '#' },
    //   ],
    // },
    // Vitamin Therapy
    {
      type: 'dropdown',
      key: 'dropdown8',
      title: 'Vitamin Therapy',
      items: [
        { label: '💉 Vitamin Injections', href: '#' },
        { label: '💧 Vitamin Infusions', href: '#' },
      ],
    },
    // About Us
    {
      type: 'dropdown',
      key: 'dropdown9',
      title: 'About Us',
      items: [
        { label: 'Meet Us', href: '#' },
        { label: 'Our Practice', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Enrollment', href: '#' },
      ],
    },
    // { type: 'link', label: 'Gallery', href: '#gallery' },
    // { type: 'link', label: 'Team', href: '#team' },
    // { type: 'link', label: 'Pricing', href: '#pricing' },
    // { type: 'link', label: 'About', href: '#about' },
    // { type: 'link', label: 'Contact', href: '#contact' },
  ];

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <nav id="navmenu" className="navmenu">
          <ul>
            {navItems.map((item, index) => {
              if (item.type === 'link') {
                return (
                  <li key={index}>
                    <a href={item.href} className={item.active ? 'active' : ''}>
                      {item.label}
                    </a>
                  </li>
                );
              } else if (item.type === 'dropdown') {
                return (
                  <li key={item.key} className="dropdown">
                    <a
                      href={item.href || '#'}
                      onClick={(e) => {
                        if (window.innerWidth < 1200) {
                          e.preventDefault(); // prevent link navigation on mobile
                          toggleDropdown(item.key); // open dropdown
                        }
                        // On desktop, link will work normally
                      }}
                    >
                      {item.title} <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul className={dropdownStates[item.key] ? 'dropdown-active' : ''}>
                      {item.items.map((dropdownItem, idx) => (
                        <li key={idx}>
                          <a href={dropdownItem.href}>{dropdownItem.label}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return null;
            })}
          </ul>
          <i
            className={`mobile-nav-toggle d-xl-none bi ${mobileNavActive ? 'bi-x' : 'bi-list'}`}
            onClick={() => setMobileNavActive((prev) => !prev)}
          />
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
