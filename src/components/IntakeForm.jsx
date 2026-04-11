import React, { useEffect, useMemo, useState } from 'react';
import Divider from './Divider';

const tabs = [
  { id: 'patient', label: 'Patient Intake Form Packet' },
  { id: 'history', label: 'History' },
  { id: 'consent', label: 'Consent' },
  { id: 'release', label: 'Release' },
];

const historyConditions = [
  'ADD/ADHD',
  'Chronic Fatigue Syndrome',
  'Gout',
  'Radiation Treatment',
  'Adenoids Removed',
  'Headaches',
  'Chronic Sinus Problems',
  'Circulatory Problems',
  'AIDS/HIV Positive',
  'Rapid Weight Gain/loss',
  'Rheumatic Fever',
  'Alcoholism',
  'Heart Attack',
  'Heart Disease',
  'Rheumatic Heart Disease',
];

const emptyHistory = historyConditions.reduce((acc, item) => {
  acc[item] = '';
  return acc;
}, {});

const initialIntakeFormData = {
  firstName: '',
  middleName: '',
  lastName: '',
  preferredName: '',
  sex: '',
  ssn: '',
  dobMonth: '',
  dobDay: '',
  dobYear: '',
  primaryPhone: '',
  cellPhone: '',
  email: '',

  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',

  emergencyFirstName: '',
  emergencyLastName: '',
  emergencyPhone: '',
  emergencyRelationship: '',

  occupation: '',
  position: '',
  employmentType: '',
  employerName: '',
  workPhone: '',

  workAddress1: '',
  workAddress2: '',
  workCity: '',
  workState: '',
  workZip: '',

  hasInsurance: '',

  currentPhysicianName: '',
  currentPhysicianPhone: '',
  lastVisitMonth: '',
  lastVisitDay: '',
  lastVisitYear: '',
  history: { ...emptyHistory },

  consentPatientFirstName: '',
  consentPatientLastName: '',
  signatureName: '',
  consentAccepted: false,

  releaseAccepted: false,
  releaseNotes: '',
};

function IntakeForm() {
  const [activeTab, setActiveTab] = useState('patient');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const [formData, setFormData] = useState(() => {
  const saved = sessionStorage.getItem('intake_form_draft');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return initialIntakeFormData;
    }
  }
  return initialIntakeFormData;
});

// save the draft every time the user types
useEffect(() => {
  sessionStorage.setItem('intake_form_draft', JSON.stringify(formData));
}, [formData]);

  const tabIndex = useMemo(
    () => tabs.findIndex((tab) => tab.id === activeTab),
    [activeTab]
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleHistoryChange = (condition, value) => {
    setFormData((prev) => ({
      ...prev,
      history: {
        ...prev.history,
        [condition]: value,
      },
    }));
  };

  const nextTab = () => {
  if (tabIndex < tabs.length - 1) {
    setActiveTab(tabs[tabIndex + 1].id);
  }
};

const prevTab = () => {
  if (tabIndex > 0) {
    setActiveTab(tabs[tabIndex - 1].id);
  }
};

const goToTab = (tabId) => {
  setActiveTab(tabId);
};
  

  const formatDob = () => {
    const { dobMonth, dobDay, dobYear } = formData;
    if (!dobMonth || !dobDay || !dobYear) return '';
    return `${dobYear}-${String(dobMonth).padStart(2, '0')}-${String(dobDay).padStart(2, '0')}`;
  };

  const formatLastVisit = () => {
    const { lastVisitMonth, lastVisitDay, lastVisitYear } = formData;
    if (!lastVisitMonth || !lastVisitDay || !lastVisitYear) return '';
    return `${lastVisitYear}-${String(lastVisitMonth).padStart(2, '0')}-${String(lastVisitDay).padStart(2, '0')}`;
  };

  const handleSubmit = async () => {
  setIsSubmitting(true);

    try {
      const payload = {
        source: 'intake-form',
        patientInformation: {
          firstName: formData.firstName,
          middleName: formData.middleName,
          lastName: formData.lastName,
          preferredName: formData.preferredName,
          sex: formData.sex,
          ssn: formData.ssn,
          dob: formatDob(),
          primaryPhone: formData.primaryPhone,
          cellPhone: formData.cellPhone,
          email: formData.email,
          address1: formData.address1,
          address2: formData.address2,
          city: formData.city,
          state: formData.state,
          zip: formData.zip,
        },
        emergencyContact: {
          firstName: formData.emergencyFirstName,
          lastName: formData.emergencyLastName,
          phone: formData.emergencyPhone,
          relationship: formData.emergencyRelationship,
        },
        employment: {
          occupation: formData.occupation,
          position: formData.position,
          employmentType: formData.employmentType,
          employerName: formData.employerName,
          workPhone: formData.workPhone,
          workAddress1: formData.workAddress1,
          workAddress2: formData.workAddress2,
          workCity: formData.workCity,
          workState: formData.workState,
          workZip: formData.workZip,
        },
        insurance: {
          hasInsurance: formData.hasInsurance,
        },
        history: {
          currentPhysicianName: formData.currentPhysicianName,
          currentPhysicianPhone: formData.currentPhysicianPhone,
          lastVisit: formatLastVisit(),
          conditions: formData.history,
        },
        consent: {
          patientFirstName: formData.consentPatientFirstName,
          patientLastName: formData.consentPatientLastName,
          signatureName: formData.signatureName,
          accepted: formData.consentAccepted,
        },
        release: {
          accepted: formData.releaseAccepted,
          notes: formData.releaseNotes,
        },

        // flattened values for simpler admin display/search if you want them later
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.primaryPhone || formData.cellPhone,
        preferredContactMethod: formData.cellPhone ? 'phone' : 'email',
        interestType: 'intake',
        message: `Intake submission from ${formData.firstName} ${formData.lastName}`.trim(),
      };

      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const text = await response.text();

      let result = null;
      try {
        result = JSON.parse(text);
      } catch {
        throw new Error(`API returned non-JSON: ${text.slice(0, 160)}`);
      }

      if (!response.ok) {
        throw new Error(result?.error || 'Something went wrong.');
      }

      setStatus({
        type: 'success',
        message: 'Thank you. Your intake form was submitted successfully.',
      });

setFormData(initialIntakeFormData);
sessionStorage.removeItem('intake_form_draft');

      setActiveTab('patient');
    } catch (error) {
      setStatus({
        type: 'danger',
        message: error.message || 'There was a problem submitting the intake form.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderYesNoGroup = (label, value, onChange, required = false) => (
    <div className="mb-4">
      <label className="form-label fw-semibold">
        {label} {required ? <span className="text-danger">*</span> : null}
      </label>
      <div className="d-flex gap-2 flex-wrap">
        <button
          type="button"
          className={`btn btn-sm ${value === 'Yes' ? 'btn-dark' : 'btn-outline-secondary'}`}
          onClick={() => onChange('Yes')}
        >
          Yes
        </button>
        <button
          type="button"
          className={`btn btn-sm ${value === 'No' ? 'btn-dark' : 'btn-outline-secondary'}`}
          onClick={() => onChange('No')}
        >
          No
        </button>
      </div>
    </div>
  );

  return (
    <section className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Patient Intake Form Packet</h2>
        <Divider />
        <p>Please complete each tab below and move through the packet step by step.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-0">
                {/* Tabs */}
                <div className="border-bottom bg-light p-3">
                  <div className="d-flex flex-wrap gap-2">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => goToTab(tab.id)}
                        className={`btn btn-sm ${
                          activeTab === tab.id ? 'btn-dark' : 'btn-outline-secondary'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="p-4 p-lg-5">
                  {status.message ? (
                    <div className={`alert alert-${status.type}`} role="alert">
                      {status.message}
                    </div>
                  ) : null}

                  {/* PATIENT TAB */}
                  {activeTab === 'patient' && (
                    <>
                      <h3 className="mb-4">Patient Information</h3>

                      <div className="row gy-4">
                        <div className="col-md-3">
                          <label className="form-label fw-semibold">
                            Patient First Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            className="form-control"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="col-md-3">
                          <label className="form-label fw-semibold">Patient Middle Name</label>
                          <input
                            type="text"
                            name="middleName"
                            className="form-control"
                            placeholder="Middle Name"
                            value={formData.middleName}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-3">
                          <label className="form-label fw-semibold">
                            Patient Last Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="col-md-3">
                          <label className="form-label fw-semibold">Patient Preferred Name</label>
                          <input
                            type="text"
                            name="preferredName"
                            className="form-control"
                            placeholder="Preferred Name"
                            value={formData.preferredName}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-3">
                          <label className="form-label fw-semibold">Sex</label>
                          <div className="d-flex gap-2 flex-wrap">
                            {['Male', 'Female', 'Other'].map((option) => (
                              <button
                                key={option}
                                type="button"
                                className={`btn btn-sm ${
                                  formData.sex === option ? 'btn-dark' : 'btn-outline-secondary'
                                }`}
                                onClick={() =>
                                  setFormData((prev) => ({ ...prev, sex: option }))
                                }
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="col-md-3">
                          <label className="form-label fw-semibold">Social Security Number</label>
                          <input
                            type="text"
                            name="ssn"
                            className="form-control"
                            placeholder="-- --"
                            value={formData.ssn}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label fw-semibold">Date of Birth</label>
                          <div className="row g-2">
                            <div className="col-md-4">
                              <select
                                name="dobMonth"
                                className="form-select"
                                value={formData.dobMonth}
                                onChange={handleChange}
                              >
                                <option value="">Month</option>
                                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                  <option key={month} value={month}>
                                    {month}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-md-4">
                              <select
                                name="dobDay"
                                className="form-select"
                                value={formData.dobDay}
                                onChange={handleChange}
                              >
                                <option value="">Day</option>
                                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                                  <option key={day} value={day}>
                                    {day}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-md-4">
                              <select
                                name="dobYear"
                                className="form-select"
                                value={formData.dobYear}
                                onChange={handleChange}
                              >
                                <option value="">Year</option>
                                {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                                  <option key={year} value={year}>
                                    {year}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <label className="form-label fw-semibold">Primary Phone</label>
                          <input
                            type="tel"
                            name="primaryPhone"
                            className="form-control"
                            placeholder="(000) 000-0000"
                            value={formData.primaryPhone}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label fw-semibold">Cell Phone</label>
                          <input
                            type="tel"
                            name="cellPhone"
                            className="form-control"
                            placeholder="(000) 000-0000"
                            value={formData.cellPhone}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label fw-semibold">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="@"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-2">
                          <label className="form-label fw-semibold">Address</label>
                          <input
                            type="text"
                            name="address1"
                            className="form-control"
                            placeholder="address"
                            value={formData.address1}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-2">
                          <label className="form-label fw-semibold">Address 2</label>
                          <input
                            type="text"
                            name="address2"
                            className="form-control"
                            placeholder="address 2"
                            value={formData.address2}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-2">
                          <label className="form-label fw-semibold">City</label>
                          <input
                            type="text"
                            name="city"
                            className="form-control"
                            placeholder="city"
                            value={formData.city}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-2">
                          <label className="form-label fw-semibold">State</label>
                          <input
                            type="text"
                            name="state"
                            className="form-control"
                            placeholder="state"
                            value={formData.state}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-2">
                          <label className="form-label fw-semibold">Zip</label>
                          <input
                            type="text"
                            name="zip"
                            className="form-control"
                            placeholder="zip"
                            value={formData.zip}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-3">
                          <label className="form-label fw-semibold">
                            Emergency Contact First Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="emergencyFirstName"
                            className="form-control"
                            placeholder="Emergency Contact First Name"
                            value={formData.emergencyFirstName}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-3">
                          <label className="form-label fw-semibold">
                            Emergency Contact Last Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="emergencyLastName"
                            className="form-control"
                            placeholder="Emergency Contact Last Name"
                            value={formData.emergencyLastName}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-3">
                          <label className="form-label fw-semibold">
                            Emergency Contact Phone <span className="text-danger">*</span>
                          </label>
                          <input
                            type="tel"
                            name="emergencyPhone"
                            className="form-control"
                            placeholder="Emergency Contact Phone"
                            value={formData.emergencyPhone}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-3">
                          <label className="form-label fw-semibold">
                            Emergency Contact Relationship <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="emergencyRelationship"
                            className="form-control"
                            placeholder="Emergency Contact Relationship"
                            value={formData.emergencyRelationship}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-2">
                          <label className="form-label fw-semibold">Occupation</label>
                          <input
                            type="text"
                            name="occupation"
                            className="form-control"
                            value={formData.occupation}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-2">
                          <label className="form-label fw-semibold">Position</label>
                          <input
                            type="text"
                            name="position"
                            className="form-control"
                            value={formData.position}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-2">
                          <label className="form-label fw-semibold">Employment Type</label>
                          <select
                            name="employmentType"
                            className="form-select"
                            value={formData.employmentType}
                            onChange={handleChange}
                          >
                            <option value="">Select</option>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Self-Employed">Self-Employed</option>
                            <option value="Unemployed">Unemployed</option>
                          </select>
                        </div>

                        <div className="col-md-3">
                          <label className="form-label fw-semibold">Employer Name</label>
                          <input
                            type="text"
                            name="employerName"
                            className="form-control"
                            placeholder="Full Name"
                            value={formData.employerName}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-3">
                          <label className="form-label fw-semibold">Work Phone</label>
                          <input
                            type="tel"
                            name="workPhone"
                            className="form-control"
                            value={formData.workPhone}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-2">
                          <label className="form-label fw-semibold">Work Address</label>
                          <input
                            type="text"
                            name="workAddress1"
                            className="form-control"
                            placeholder="address"
                            value={formData.workAddress1}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-2">
                          <label className="form-label fw-semibold">Address 2</label>
                          <input
                            type="text"
                            name="workAddress2"
                            className="form-control"
                            placeholder="address 2"
                            value={formData.workAddress2}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-2">
                          <label className="form-label fw-semibold">City</label>
                          <input
                            type="text"
                            name="workCity"
                            className="form-control"
                            placeholder="city"
                            value={formData.workCity}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-2">
                          <label className="form-label fw-semibold">State</label>
                          <input
                            type="text"
                            name="workState"
                            className="form-control"
                            placeholder="state"
                            value={formData.workState}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-2">
                          <label className="form-label fw-semibold">Zip</label>
                          <input
                            type="text"
                            name="workZip"
                            className="form-control"
                            placeholder="zip"
                            value={formData.workZip}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-12">
                          {renderYesNoGroup(
                            'Do you have insurance?',
                            formData.hasInsurance,
                            (value) =>
                              setFormData((prev) => ({ ...prev, hasInsurance: value })),
                            true
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  {/* HISTORY TAB */}
                  {activeTab === 'history' && (
                    <>
                      <h3 className="mb-4">History</h3>

                      <div className="row gy-4">
                        <div className="col-md-4">
                          <label className="form-label fw-semibold">Name of Current Physician</label>
                          <input
                            type="text"
                            name="currentPhysicianName"
                            className="form-control"
                            placeholder="Name of Physician"
                            value={formData.currentPhysicianName}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label fw-semibold">Phone</label>
                          <input
                            type="tel"
                            name="currentPhysicianPhone"
                            className="form-control"
                            placeholder="Phone"
                            value={formData.currentPhysicianPhone}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label fw-semibold">Date of Last Visit</label>
                          <div className="row g-2">
                            <div className="col-md-4">
                              <select
                                name="lastVisitMonth"
                                className="form-select"
                                value={formData.lastVisitMonth}
                                onChange={handleChange}
                              >
                                <option value="">Month</option>
                                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                  <option key={month} value={month}>
                                    {month}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-md-4">
                              <select
                                name="lastVisitDay"
                                className="form-select"
                                value={formData.lastVisitDay}
                                onChange={handleChange}
                              >
                                <option value="">Day</option>
                                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                                  <option key={day} value={day}>
                                    {day}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-md-4">
                              <select
                                name="lastVisitYear"
                                className="form-select"
                                value={formData.lastVisitYear}
                                onChange={handleChange}
                              >
                                <option value="">Year</option>
                                {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                                  <option key={year} value={year}>
                                    {year}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5">
                        <h3 className="mb-4">Have You Had:</h3>
                        <div className="row gy-4">
                          {historyConditions.map((condition) => (
                            <div className="col-lg-4 col-md-6" key={condition}>
                              <div className="border rounded p-3 h-100">
                                <div className="fw-semibold mb-3">{condition}</div>
                                <div className="d-flex gap-2">
                                  <button
                                    type="button"
                                    className={`btn btn-sm ${
                                      formData.history[condition] === 'Yes'
                                        ? 'btn-dark'
                                        : 'btn-outline-secondary'
                                    }`}
                                    onClick={() => handleHistoryChange(condition, 'Yes')}
                                  >
                                    Yes
                                  </button>
                                  <button
                                    type="button"
                                    className={`btn btn-sm ${
                                      formData.history[condition] === 'No'
                                        ? 'btn-dark'
                                        : 'btn-outline-secondary'
                                    }`}
                                    onClick={() => handleHistoryChange(condition, 'No')}
                                  >
                                    No
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* CONSENT TAB */}
                  {activeTab === 'consent' && (
                    <>
                      <h3 className="mb-4">Consent</h3>

                      <div className="mb-4 p-3 bg-light rounded">
                        <p className="mb-0">
                          I, <em>[firstName] [lastName]</em>, do hereby agree and give my consent
                          to the physician to furnish medical care and treatment considered
                          necessary and proper in diagnosing or treating my physical and mental
                          condition.
                        </p>
                      </div>

                      <div className="row gy-4">
                        <div className="col-md-6">
                          <label className="form-label fw-semibold">
                            Patient First Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="consentPatientFirstName"
                            className="form-control"
                            placeholder="First Name"
                            value={formData.consentPatientFirstName}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label fw-semibold">
                            Patient Last Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="consentPatientLastName"
                            className="form-control"
                            placeholder="Last Name"
                            value={formData.consentPatientLastName}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-12">
                          <label className="form-label fw-semibold">Signature</label>
                          <input
                            type="text"
                            name="signatureName"
                            className="form-control"
                            placeholder="Type full name as signature"
                            value={formData.signatureName}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-12">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="consentAccepted"
                              name="consentAccepted"
                              checked={formData.consentAccepted}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="consentAccepted">
                              I agree and give my consent to receive treatment.
                            </label>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* RELEASE TAB */}
                  {activeTab === 'release' && (
                    <>
                      <h3 className="mb-4">Release</h3>

                      <div className="row gy-4">
                        <div className="col-12">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="releaseAccepted"
                              name="releaseAccepted"
                              checked={formData.releaseAccepted}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="releaseAccepted">
                              I authorize the release of information as needed for treatment,
                              payment, and healthcare operations.
                            </label>
                          </div>
                        </div>

                        <div className="col-12">
                          <label className="form-label fw-semibold">Notes</label>
                          <textarea
                            className="form-control"
                            name="releaseNotes"
                            rows="5"
                            placeholder="Optional notes"
                            value={formData.releaseNotes}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Bottom Navigation */}
                  <div className="d-flex justify-content-between align-items-center border-top mt-5 pt-4">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={prevTab}
                      disabled={tabIndex === 0}
                    >
                      Previous Tab
                    </button>

                    <div className="d-flex gap-2">
                      {tabIndex < tabs.length - 1 ? (
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={nextTab}
                        >
                          Next Form
                        </button>
                      ) : (
                        <button
                        type="button"
                        className="btn btn-dark"
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                        >
                        {isSubmitting ? 'Submitting...' : 'Submit Intake Form'}
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntakeForm;