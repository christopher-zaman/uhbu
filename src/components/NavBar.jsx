import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({});

  const toggleDropdown = (key) => {
    setDropdownStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const closeMobileNav = () => {
    setMobileNavActive(false);
    setDropdownStates({});
  };

  useEffect(() => {
    document.body.classList.toggle('mobile-nav-active', mobileNavActive);

    return () => {
      document.body.classList.remove('mobile-nav-active');
    };
  }, [mobileNavActive]);

  const navItems = [
    { type: 'link', key: 'weightloss', label: 'Weight Loss', href: '/weight-loss' },
    { type: 'link', key: 'membership', label: 'Membership', href: '/membership' },
    {
      type: 'dropdown',
      key: 'dropdown1',
      title: 'Services',
      href: '/special-services',
      items: [
        { type: 'link', label: 'Bladder Control Support for Women', href: '/special-services#bladder-control-support' },
        { type: 'link', label: 'Women’s Hormone Therapy', href: '/special-services#womens-hormone-therapy' },
        { type: 'link', label: 'BHRT and Hormone Optimization', href: '/special-services#bhrt-hormone-optimization' },
        { type: 'link', label: 'Peptide Therapy', href: '/special-services#peptide-therapy' },
        { type: 'link', label: 'Brain Health and Mental Wellness Support', href: '/special-services#brain-health-wellness' },
        { type: 'link', label: 'Men’s Sexual Health and ED Support', href: '/special-services#mens-sexual-health' },
        { type: 'link', label: 'Women’s Intimate Wellness', href: '/special-services#womens-intimate-wellness' },
        { type: 'link', label: 'Membership', href: '/membership' },
      ]
    },
    {
      type: 'link',
      key: 'hormonetherapy',
      label: 'Hormone Therapy',
      href: '/hormone-replacement-therapy',
    },
    {
      type: 'link',
      key: 'peptidetherapy',
      label: 'Peptide Therapy',
      href: '/peptide-therapy',
    },
    {
      type: 'dropdown',
      key: 'dropdown4',
      title: 'Sexual Wellness',
      href: '/sexual-wellness-treatments',
      items: [
        { label: 'Sexual Wellness Treatments', href: '/sexual-wellness-treatments' },
        { label: 'Sexual Wellness For her', href: '/sexual-wellness-for-her' },
        { label: 'Sexual Wellness For him ', href: '/sexual-wellness-for-him' },
        { label: 'Duo', href: '/duo' },
      ],
    },
    {
      type: 'dropdown',
      key: 'dropdown5',
      title: 'Primary Care',
      href: '/primary-care',
      items: [
        { label: 'Membership', href: '/membership' },
        { label: "Women's Health", href: '/womens-health' },
        { label: "Men's Health", href: '/mens-health' },
        { label: 'Telemedicine', href: '/telemedicine' },
        { label: 'Hair Restoration', href: '/hair-restoration' },
        { label: 'Mental Health', href: '/mental-health' },
        { label: 'Mental Wellness', href: '/mental-wellness' },
      ],
    },
    {
      type: 'link',
      key: 'regenerativetherapy',
      label: 'Regenerative Therapy',
      href: '/regenerative-therapy',
    },
    {
      type: 'dropdown',
      key: 'dropdown8',
      title: 'Vitamin Therapy',
      items: [
        { label: '💉 Vitamin Injections', href: '/vitamin-injections' },
        { label: '💧 Vitamin Infusions', href: '/vitamin-infusions' },
        { label: '🪷 Spa Services', href: '/spa-services' }
      ],
    },
    {
      type: 'dropdown',
      key: 'dropdown9',
      title: 'About Us',
      items: [
        { label: 'Meet Us', href: '/meet-us' },
        { label: 'Our Practice', href: '/our-practice' },
        { label: 'Careers', href: '/careers' },
        { label: 'Enrollment', href: 'https://app.elationemr.com/book/UltimateHealthDPC', external: true },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Blog', href: '/blog' },
        { label: 'Media', href: '/media' },
        { label: 'Payment Plans', href: '/payment-plans' },
        { label: 'Employers', href: '/employers' },
      ],
    },
  ];

  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <nav id="navmenu" className="navmenu">
          <ul>
            {navItems.map((item, index) => {
              if (item.type === 'link') {
                const text = item.label || item.title;

                return (
                  <li key={index}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={item.active ? 'active' : ''}
                        onClick={closeMobileNav}
                      >
                        {text}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className={item.active ? 'active' : ''}
                        onClick={closeMobileNav}
                      >
                        {text}
                      </Link>
                    )}
                  </li>
                );
              }

              if (item.type === 'dropdown') {
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
                              onClick={closeMobileNav}
                            >
                              {dropdownItem.label}
                            </a>
                          ) : (
                            <Link
                              to={dropdownItem.href.startsWith('/') ? dropdownItem.href : `/${dropdownItem.href}`}
                              onClick={closeMobileNav}
                            >
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