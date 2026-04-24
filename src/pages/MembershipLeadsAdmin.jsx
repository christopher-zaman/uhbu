import React, { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';
import SEO from '../components/SEO';
import { usePageSEO } from '../hooks/usePageSEO';

function MembershipLeadsAdmin() {
  const seo = usePageSEO();
  const [pinInput, setPinInput] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pinError, setPinError] = useState('');
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('');

  const [intakeItems, setIntakeItems] = useState([]);

  const expectedPin = import.meta.env.VITE_MEMBERSHIP_ADMIN_PIN;



// This saves the 'unlocked' state (to not have to log in again and again like over and over)
//   useEffect(() => {
//     const saved = sessionStorage.getItem('membership_admin_unlocked');
//     if (saved === 'true') {
//       setIsUnlocked(true);
//     }
//   }, []);



  useEffect(() => {
    if (!isUnlocked) return;

    async function loadLeads() {
      setStatus('Loading...');
      try {
        const response = await fetch('/api/membership-leads-list', {
        // complements the "saves the 'unlocked' state" effect block above    
        //   headers: {
        //     'x-admin-pin': pinInput || sessionStorage.getItem('membership_admin_pin') || '',
        //   },
        headers: {
        'x-admin-pin': pinInput,
        },
        });

        const text = await response.text();

        let result = null;
        try {
          result = JSON.parse(text);
        } catch {
          throw new Error(`API returned non-JSON: ${text.slice(0, 160)}`);
        }

        if (!response.ok) {
          throw new Error(result?.error || 'Failed to load membership leads.');
        }

        setItems(result.items || []);

// 🔽 SAFE intake fetch (won't break membership)
try {
  const intakeResponse = await fetch('/api/intake-submissions', {
    headers: {
      'x-admin-pin': pinInput,
    },
  });

  const intakeText = await intakeResponse.text();

  let intakeResult = null;
  try {
    intakeResult = JSON.parse(intakeText);
  } catch {
    throw new Error(`Non-JSON intake response: ${intakeText.slice(0, 120)}`);
  }

  if (!intakeResponse.ok) {
    throw new Error(intakeResult?.error || 'Failed to load intake submissions.');
  }

  console.log('intake items from api:', intakeResult.items);
  setIntakeItems(intakeResult.items || []);
} catch (err) {
  console.error('Intake load failed:', err.message);
}

setStatus('');
      } catch (error) {
        setStatus(error.message || 'Failed to load membership leads.');
      }
    }

    loadLeads();
  }, [isUnlocked, pinInput]);


  const handleUnlock = (e) => {
    e.preventDefault();

    // Completments the above "saves the 'unlocked' state" effect block
    // if (pinInput === expectedPin) {
    //   setIsUnlocked(true);
    //   setPinError('');
    //   sessionStorage.setItem('membership_admin_unlocked', 'true');
    //   sessionStorage.setItem('membership_admin_pin', pinInput);
    // } else {
    //   setPinError('Incorrect PIN.');
    // }
    if (pinInput === expectedPin) {
    setIsUnlocked(true);
    setPinError('');
    } else {
    setPinError('Incorrect PIN.');
    }
  };
// Complements above effect block
//   const handleLock = () => {
//     setIsUnlocked(false);
//     setPinInput('');
//     setItems([]);
//     setStatus('');
//     setPinError('');
//     sessionStorage.removeItem('membership_admin_unlocked');
//     sessionStorage.removeItem('membership_admin_pin');
//   };

const handleLock = () => {
  setIsUnlocked(false);
  setPinInput('');
  setItems([]);
  setIntakeItems([]);
  setStatus('');
  setPinError('');
};
  return (
    <>
      <SEO {...seo} />
      <Announcement />
      <TopBar />
      <NavBar />

      <section className="section bg-pink">
        <div className="container">
          {/* <div className="section-title" data-aos="fade-up">
            <h2>Membership Leads Admin</h2>
            <p>Internal access only.</p>
          </div> */}

          {!isUnlocked ? (
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="card shadow-sm border-0">
                  <div className="card-body p-4">
                    <h4 className="mb-3">Enter Admin PIN</h4>

                    <form onSubmit={handleUnlock}>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter PIN"
                          value={pinInput}
                          onChange={(e) => setPinInput(e.target.value)}
                          required
                        />
                      </div>

                      {pinError ? (
                        <div className="alert alert-danger py-2">{pinError}</div>
                      ) : null}

                      <button type="submit" className="btn btn-dark w-100">
                        Unlock
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              

              {status ? (
                <div className="alert alert-info">{status}</div>
              ) : items.length === 0 ? (
                <div className="alert alert-warning">No leads found.</div>
              ) : (
                
                <div className="table-responsive white-transparent-bg">
                <hr className="my-5" />
                
                <h4 className="mb-3">Membership Leads</h4>
                  <table className="table table-bordered table-striped align-middle">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Preferred Contact</th>
                        <th>Interested For</th>
                        <th>Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr key={item._id}>
                          <td>
                            {item.createdAt ? new Date(item.createdAt).toLocaleString() : ''}
                          </td>
                          <td>{`${item.firstName || ''} ${item.lastName || ''}`.trim()}</td>
                          <td>{item.email || ''}</td>
                          <td>{item.phone || ''}</td>
                          <td>{item.preferredContactMethod || ''}</td>
                          <td>{item.interestType || ''}</td>
                          <td style={{ minWidth: '250px' }}>{item.message || ''}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
            )}
    {/*  */}
    <hr className="my-5" />

<h4 className="mb-3">Intake Submissions</h4>
<p className="small text-muted">Intake count: {intakeItems.length}</p>
{intakeItems.length === 0 ? (
  <div className="alert alert-warning">No intake submissions found.</div>
) : (
  <div className="table-responsive">
    <table className="table table-bordered table-striped align-middle">
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Sex</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Preferred Contact</th>
          <th>Interested For</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {intakeItems.map((item) => (
          <tr key={item._id}>
            <td>
              {item.createdAt
                ? new Date(item.createdAt).toLocaleString()
                : ''}
            </td>
            <td>{`${item.firstName || ''} ${item.lastName || ''}`.trim()}</td>
            <td>{item.patientInformation?.sex || ''}</td>
            <td>{item.email || ''}</td>
            <td>{item.phone || ''}</td>
            <td>{item.preferredContactMethod || ''}</td>
            <td>{item.interestType || ''}</td>
            <td style={{ minWidth: '250px' }}>{item.message || ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}


            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default MembershipLeadsAdmin;