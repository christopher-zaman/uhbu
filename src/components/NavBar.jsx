import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({});

  const toggleDropdown = (key) => {
    setDropdownStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    document.body.classList.toggle('mobile-nav-active', mobileNavActive);
  }, [mobileNavActive]);


    // Navigation configuration array 
    const navItems = [
      // Home
      // { type: 'link', label: 'Home', href: '/', active: true },
      { type: 'link', label: 'Exomind', href: 'https://exomindthevillages.com/'},
      
      // Weight Loss
      {
        type: 'dropdown',
        key: 'dropdown1',
        title: 'Weight Loss',
        href: '/weight-loss',
        items: [
          
          { label: '💊 Contrave', href: 'contrave' },
          { label: '🌿 Calocurb', href: 'calocurb' },
          
          
          
          
        ],
      },
      // Hormone Therapy
      {
        type: 'dropdown',
        key: 'dropdown2',
        title: 'Hormone Therapy',
        href: '/hormone-replacement-therapy',
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
          
          { label: '💉 CJC-1295 / Ipamorelin', href: 'CJC-1295-Ipamorelin' },
          { label: '💉 BPC-157', href: 'BPC-157' },
          
          { label: '💉 AOD-9604', href: 'aod-9604' },
          
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
          { label: 'Sexual Wellness For him ', href: '/sexual-wellness-for-him' },
          { label: 'Duo', href: '/duo' },
        ],
      },
      // Primary Care
      {
        type: 'dropdown',
        key: 'dropdown5',
        title: 'Primary Care',
        href: 'primary-care',
        items: [
          { label: 'Women\'s Health', href: 'womens-health' },
          { label: 'Men\'s Health', href: 'mens-health' },
          { label: 'Telemedicine', href: 'telemedicine' },
          { label: 'Hair Restoration', href: 'hair-restoration' },
          { label: 'Mental Health', href: 'mental-health' },
          { label: 'Mental Wellness', href: 'mental-wellness' },
        ],
      },
      // Aesthetics
      {
        type: 'dropdown',
        key: 'dropdown6',
        title: 'Aesthetics',
        items: [
          { label: '✨ Vampire Facial & Vampire Face Lift®', href: 'vampire-facial' },
          { label: '✨ SkinPen Microneedling', href: 'skin-pen' },
          { label: '✨ Toskani Peptide Cocktails', href: 'toskani' },
          { label: '✨ Neurotoxins for Fine Lines & Wrinkle Relaxation', href: 'neurotoxin' },
          { label: '✨ Dermal Fillers', href: 'dermal-filler' },
          { label: '✨ ALMA FemiLift for Facial Resurfacing', href: 'alma-femi-lift' },
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
          { label: '💉 Vitamin Injections', href: 'vitamin-injections' },
          { label: '💧 Vitamin Infusions', href: 'vitamin-infusions' },
        ],
      },
      // About Us
      {
        type: 'dropdown',
        key: 'dropdown9',
        title: 'About Us',
        items: [
          { label: 'Meet Us', href: 'meet-us' },
          { label: 'Our Practice', href: 'our-practice' },
          { label: 'Careers', href: 'careers' },
          { label: 'Enrollment', href: 'https://app.elationemr.com/book/UltimateHealthDPC', external: true },
          { label: 'Contact Us', href: 'contact' },
          { label: 'Blog', href: 'blog' },
          { label: 'Media', href: 'media' },
          { label: 'Payment Plans', href: 'payment-plans' },
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
                    <Link to={item.href} className={item.active ? 'active' : ''}>
                      {item.label}
                    </Link>
                  </li>
                );
              } else if (item.type === 'dropdown') {
                return (
                  <li key={item.key} className="dropdown">
                    <a
                      href={item.href || '#'}
                      onClick={(e) => {
                        if (window.innerWidth < 1200) {
                          e.preventDefault();
                          toggleDropdown(item.key);
                        }
                      }}
                    >
                      {item.title} <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul className={dropdownStates[item.key] ? 'dropdown-active' : ''}>
                      {item.items.map((dropdownItem, idx) => (
                        <li key={idx}>
                          {dropdownItem.external ? (
                            <a
                              href={dropdownItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {dropdownItem.label}
                            </a>
                          ) : (
                            <Link to={dropdownItem.href.startsWith('/') ? dropdownItem.href : `/${dropdownItem.href}`}>
                              {dropdownItem.label}
                            </Link>
                          )}
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
