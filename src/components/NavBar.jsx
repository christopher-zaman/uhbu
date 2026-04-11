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
      // { type: 'link', label: 'Exomind', href: 'https://exomindthevillages.com/', external: true },

      { type: 'link', key: 'weightloss', label: 'Weight Loss', href: '/weight-loss' },
      { type: 'link', key: 'membership', label: 'Membership', href: '/membership' },
     // Special Services as a drop down
{
  type: 'dropdown',
  key: 'dropdown1',
  title: 'Services',
  href: '/special-services',
  items: [
    { type: 'link', label: 'Exomind', href: 'https://exomindthevillages.com/', external: true },
    // { label: 'Membership', href: '/membership' },

    // Women's Bladder Control
    { label: 'Bladder Control Treatment', href: '/special-services#bladder-control-treatment' },
    // { label: 'Bladder Control Therapy Near Me', href: '/special-services#bladder-control-therapy-near-me' },
    // { label: 'Women’s Bladder Control', href: '/special-services#womens-bladder-control' },
    // { label: 'Urinary Incontinence Treatment', href: '/special-services#urinary-incontinence-treatment' },
    // { label: 'Urinary Incontinence Clinic', href: '/special-services#urinary-incontinence-clinic' },
    // { label: 'Urinary Incontinence Therapy Near Me', href: '/special-services#urinary-incontinence-therapy-near-me' },
    // { label: 'Bladder Leakage Treatment', href: '/special-services#bladder-leakage-treatment' },
    // { label: 'Non-Surgical Bladder Control Treatment', href: '/special-services#non-surgical-bladder-control-treatment' },

    // Women's Hormones
    { label: 'Women’s Hormone Therapy', href: '/special-services#womens-hormone-therapy' },
    // { label: 'Women’s Hormone Therapy Near Me', href: '/special-services#womens-hormone-therapy-near-me' },
    // { label: 'Hormone Replacement Therapy for Women', href: '/special-services#hormone-replacement-therapy-for-women' },
    { label: 'Bioidentical Hormone Therapy', href: '/special-services#bioidentical-hormone-therapy' },
    // { label: 'Bioidentical Hormone Replacement Therapy', href: '/special-services#bioidentical-hormone-replacement-therapy' },
    { label: 'Hormone Therapy for Menopause', href: '/special-services#menopause-hormone-therapy' },
    // { label: 'Menopause Hormone Therapy Clinic', href: '/special-services#menopause-hormone-therapy-clinic' },
    // { label: 'Women’s Wellness Hormone Therapy', href: '/special-services#womens-wellness-hormone-therapy' },
    // { label: 'Female Hormone Treatment Near Me', href: '/special-services#female-hormone-treatment-near-me' },

    // BHRT
    { label: 'BHRT', href: '/special-services#bhrt' },
    // { label: 'BHRT Near Me', href: '/special-services#bhrt-near-me' },
    // { label: 'BHRT Clinic', href: '/special-services#bhrt-clinic' },
    // { label: 'BHRT for Women', href: '/special-services#bhrt-for-women' },
    { label: 'Testosterone BHRT Therapy', href: '/special-services#testosterone-bhrt-therapy' },
    // { label: 'Male Hormone Replacement Therapy', href: '/special-services#male-hormone-replacement-therapy' },

    // Peptides
    { label: 'Peptide Therapy', href: '/special-services#peptide-therapy' },
    // { label: 'Peptide Therapy Near Me', href: '/special-services#peptide-therapy-near-me' },
    // { label: 'Peptide Therapy Clinic', href: '/special-services#peptide-therapy-clinic' },
    // { label: 'Peptide Injections', href: '/special-services#peptide-injections' },
    // { label: 'Peptide Injections Near Me', href: '/special-services#peptide-injections-near-me' },
    // { label: 'Anti-Aging Peptide Therapy', href: '/special-services#anti-aging-peptide-therapy' },
    // { label: 'Peptide Therapy for Women', href: '/special-services#peptide-therapy-for-women' },
    // { label: 'Peptide Therapy for Men', href: '/special-services#peptide-therapy-for-men' },
    // { label: 'Peptide Clinic Near Me', href: '/special-services#peptide-clinic-near-me' },
    // { label: 'Peptide Treatment for Muscle Recovery', href: '/special-services#peptide-treatment-muscle-recovery' },

    // Exomind
    { label: 'Exomind Clinic', href: '/special-services#exomind-clinic' },
    // { label: 'Exomind Therapy', href: '/special-services#exomind-therapy' },
    // { label: 'Exomind Treatment Near Me', href: '/special-services#exomind-treatment-near-me' },
    // { label: 'Brain Health Clinic', href: '/special-services#brain-health-clinic' },

    // Men's Health / ED
    { label: 'Erectile Dysfunction Clinic', href: '/special-services#erectile-dysfunction-clinic' },
    // { label: 'Erectile Dysfunction Clinic Near Me', href: '/special-services#erectile-dysfunction-clinic-near-me' },
    // { label: 'Erectile Dysfunction Treatment', href: '/special-services#erectile-dysfunction-treatment' },
    // { label: 'ED Clinic', href: '/special-services#ed-clinic' },
    // { label: 'ED Clinic Near Me', href: '/special-services#ed-clinic-near-me' },
    // { label: 'ED Treatment', href: '/special-services#ed-treatment' },
    // { label: 'Men’s Health ED Clinic', href: '/special-services#mens-health-ed-clinic' },
    // { label: 'Men’s Health ED Treatment', href: '/special-services#mens-health-ed-treatment' },
    // { label: 'Non-Surgical Erectile Dysfunction Treatment', href: '/special-services#non-surgical-erectile-dysfunction-treatment' },
    // { label: 'Testosterone Therapy for ED', href: '/special-services#testosterone-therapy-ed' },
    // { label: 'ED Clinic Direct Primary Care', href: '/special-services#ed-clinic-direct-primary-care' },

    // Vaginal Rejuvenation
    { label: 'Vaginal Rejuvenation', href: '/special-services#vaginal-rejuvenation' },
    // { label: 'Vaginal Rejuvenation Near Me', href: '/special-services#vaginal-rejuvenation-near-me' },
    // { label: 'Vaginal Rejuvenation Clinic', href: '/special-services#vaginal-rejuvenation-clinic' },
    // { label: 'Non-Surgical Vaginal Rejuvenation', href: '/special-services#non-surgical-vaginal-rejuvenation' },
    // { label: 'Laser Vaginal Rejuvenation', href: '/special-services#laser-vaginal-rejuvenation' },
    // { label: 'Vaginal Tightening Therapy', href: '/special-services#vaginal-tightening-therapy' },
    // { label: 'Vaginal Tightening Treatment Near Me', href: '/special-services#vaginal-tightening-treatment-near-me' },
  ]
},

      
      // Special Services
      // {
      //   type: 'link',
      //   key: 'specialservices',
      //   label: 'Services',
      //   href: '/special-services',
      // },

      // Hormone Therapy
      {
        type: 'link',
        key: 'hormonetherapy',
        label: 'Hormone Therapy',
        href: '/hormone-replacement-therapy',
      },
      // Peptide Therapy
      {
        type: 'link',
        key: 'peptidetherapy',
        label: 'Peptide Therapy',
        href: '/peptide-therapy',
        
      },
      // Sexual Wellness
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
      // Primary Care
      {
        type: 'dropdown',
        key: 'dropdown5',
        title: 'Primary Care',
        href: 'primary-care',
        items: [
          { label: 'Membership', href: 'membership'},
          { label: 'Women\'s Health', href: 'womens-health' },
          { label: 'Men\'s Health', href: 'mens-health' },
          { label: 'Telemedicine', href: 'telemedicine' },
          { label: 'Hair Restoration', href: 'hair-restoration' },
          { label: 'Mental Health', href: 'mental-health' },
          { label: 'Mental Wellness', href: 'mental-wellness' },
        ],
      },
      // Regenerative Therapy
      {
        type: 'link',
        key: 'regenerativetherapy',
        label: 'Regenerative Therapy',
        href: '/regenerative-therapy',
        
      },
       
      // Aesthetics
      // {
      //   type: 'dropdown',
      //   key: 'dropdown6',
      //   title: 'Aesthetics',
      //   items: [
      //     { label: '✨ Vampire Facial & Vampire Face Lift®', href: 'vampire-facial' },
      //     { label: '✨ SkinPen Microneedling', href: 'skin-pen' },
      //     { label: '✨ Toskani Peptide Cocktails', href: 'toskani' },
      //     { label: '✨ Neurotoxins for Fine Lines & Wrinkle Relaxation', href: 'neurotoxin' },
      //     { label: '✨ Dermal Fillers', href: 'dermal-filler' },
      //     { label: '✨ ALMA FemiLift for Facial Resurfacing', href: 'alma-femi-lift' },
      //   ],
      // },
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
          { label: '🪷 Spa Services', href: 'spa-services' }
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
  const text = item.label || item.title;
  return (
    <li key={index}>
      {item.external ? (
        <a href={item.href} target="_blank" rel="noopener noreferrer" className={item.active ? 'active' : ''}>
          {text}
        </a>
      ) : (
        <Link to={item.href} className={item.active ? 'active' : ''}>
          {text}
        </Link>
      )}
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
