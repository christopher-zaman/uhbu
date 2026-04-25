import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    document.body.classList.toggle('uh-menu-open', isOpen);

    return () => {
      document.body.classList.remove('uh-menu-open');
    };
  }, [isOpen]);

  const navItems = [
    { type: 'link', label: 'Weight Loss', href: '/weight-loss' },
    { type: 'link', label: 'Membership', href: '/membership' },
    {
      type: 'dropdown',
      title: 'Services',
      items: [
        { label: 'Bladder Control Support for Women', href: '/special-services#bladder-control-support' },
        { label: 'Women’s Hormone Therapy', href: '/special-services#womens-hormone-therapy' },
        { label: 'BHRT and Hormone Optimization', href: '/special-services#bhrt-hormone-optimization' },
        { label: 'Peptide Therapy', href: '/special-services#peptide-therapy' },
        { label: 'Brain Health and Mental Wellness Support', href: '/special-services#brain-health-wellness' },
        { label: 'Men’s Sexual Health and ED Support', href: '/special-services#mens-sexual-health' },
        { label: 'Women’s Intimate Wellness', href: '/special-services#womens-intimate-wellness' },
        { label: 'Membership', href: '/membership' },
      ],
    },
    { type: 'link', label: 'Hormone Therapy', href: '/hormone-replacement-therapy' },
    { type: 'link', label: 'Peptide Therapy', href: '/peptide-therapy' },
    {
      type: 'dropdown',
      title: 'Sexual Wellness',
      items: [
        { label: 'Sexual Wellness Treatments', href: '/sexual-wellness-treatments' },
        { label: 'Sexual Wellness For Her', href: '/sexual-wellness-for-her' },
        { label: 'Sexual Wellness For Him', href: '/sexual-wellness-for-him' },
        { label: 'Duo', href: '/duo' },
      ],
    },
    {
      type: 'dropdown',
      title: 'Primary Care',
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
    { type: 'link', label: 'Regenerative Therapy', href: '/regenerative-therapy' },
    {
      type: 'dropdown',
      title: 'Vitamin Therapy',
      items: [
        { label: '💉 Vitamin Injections', href: '/vitamin-injections' },
        { label: '💧 Vitamin Infusions', href: '/vitamin-infusions' },
        { label: '🪷 Spa Services', href: '/spa-services' },
      ],
    },
    {
      type: 'dropdown',
      title: 'About Us',
      items: [
        { label: 'Meet Us', href: '/meet-us' },
        { label: 'Our Practice', href: '/our-practice' },
        { label: 'Careers', href: '/careers' },
        {
          label: 'Enrollment',
          href: 'https://app.elationemr.com/book/UltimateHealthDPC',
          external: true,
        },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Blog', href: '/blog' },
        { label: 'Media', href: '/media' },
        { label: 'Payment Plans', href: '/payment-plans' },
        { label: 'Employers', href: '/employers' },
      ],
    },
  ];

  const renderLink = (item, className = 'uh-nav-link') => {
    if (item.external) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          onClick={closeMenu}
        >
          {item.label}
        </a>
      );
    }

    return (
      <Link to={item.href} className={className} onClick={closeMenu}>
        {item.label}
      </Link>
    );
  };

  return (
    <header className="uh-navbar">
      <div className="uh-navbar-inner">
        <button
          type="button"
          className="uh-nav-toggle"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
        >
          <i className="bi bi-list" />
        </button>

        <nav className={`uh-nav-panel ${isOpen ? 'uh-open' : ''}`}>
          <div className="uh-nav-panel-header">
            <span className="uh-menu-title">Menu</span>

            <button
              type="button"
              className="uh-nav-close"
              onClick={closeMenu}
              aria-label="Close navigation menu"
            >
              <i className="bi bi-x-lg" />
            </button>
          </div>

          <ul className="uh-nav-list">
            {navItems.map((item, index) => {
              if (item.type === 'link') {
                return <li key={index}>{renderLink(item)}</li>;
              }

              const isDropdownOpen = openDropdown === item.title;

              return (
                <li key={index} className="uh-dropdown">
                  <button
                    type="button"
                    className="uh-dropdown-toggle"
                    onClick={() =>
                      setOpenDropdown(isDropdownOpen ? null : item.title)
                    }
                  >
                    <span>{item.title}</span>
                    <i
                      className={`bi ${
                        isDropdownOpen ? 'bi-chevron-up' : 'bi-chevron-down'
                      }`}
                    />
                  </button>

                  {isDropdownOpen && (
                    <ul className="uh-dropdown-menu">
                      {item.items.map((child, childIndex) => (
                        <li key={childIndex}>
                          {renderLink(child, 'uh-dropdown-link')}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {isOpen && <button className="uh-nav-backdrop" onClick={closeMenu} />}
      </div>
    </header>
  );
}

export default NavBar;