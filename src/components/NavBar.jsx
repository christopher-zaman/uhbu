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
  // Sexual Wellness 
  const navItems = [
    { type: 'link', label: 'Home', href: '#top-bar', active: true },
    {
      type: 'dropdown',
      key: 'dropdown1',
      title: 'Sexual Wellness',
      items: [
        { label: 'Sexual Wellness Treatments', href: '/sexual-wellness-treatments' },
        { label: 'O Shot', href: '/o-shot' },
        { label: 'P Shot', href: '/p-shot' },
        { label: 'Duo', href: '/duo' },
      ],
    },
    // Weight Loss
    {
      type: 'dropdown',
      key: 'dropdown2',
      title: 'Weight Loss',
      items: [
        { label: 'Dropdown 1', href: '#' },
        { label: 'Dropdown 2', href: '#' },
        { label: 'Dropdown 3', href: '#' },
        { label: 'Dropdown 4', href: '#' },
      ],
    },
    // Services
    {
      type: 'dropdown',
      key: 'dropdown3',
      title: 'Services',
      items: [
        { label: 'Dropdown 1', href: '#' },
        { label: 'Dropdown 2', href: '#' },
        { label: 'Dropdown 3', href: '#' },
        { label: 'Dropdown 4', href: '#' },
      ],
    },
    // Cosmetic Injectables
    {
      type: 'dropdown',
      key: 'dropdown4',
      title: 'Cosmetic Injectables',
      items: [
        { label: 'Dropdown 1', href: '#' },
        { label: 'Dropdown 2', href: '#' },
        { label: 'Dropdown 3', href: '#' },
        { label: 'Dropdown 4', href: '#' },
      ],
    },
    // IV Hydration
    {
      type: 'dropdown',
      key: 'dropdown5',
      title: 'IV Hydration',
      items: [
        { label: 'Dropdown 1', href: '#' },
        { label: 'Dropdown 2', href: '#' },
        { label: 'Dropdown 3', href: '#' },
        { label: 'Dropdown 4', href: '#' },
      ],
    },
    // About Us
    {
      type: 'dropdown',
      key: 'dropdown6',
      title: 'About Us',
      items: [
        { label: 'Dropdown 1', href: '#' },
        { label: 'Dropdown 2', href: '#' },
        { label: 'Dropdown 3', href: '#' },
        { label: 'Dropdown 4', href: '#' },
      ],
    },
    { type: 'link', label: 'Gallery', href: '#gallery' },
    { type: 'link', label: 'Team', href: '#team' },
    { type: 'link', label: 'Pricing', href: '#pricing' },
    { type: 'link', label: 'About', href: '#about' },
    { type: 'link', label: 'Contact', href: '#contact' },
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
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleDropdown(item.key);
                      }}
                    >
                      <span>{item.title}</span>{' '}
                      <i className="bi bi-chevron-down toggle-dropdown" />
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
