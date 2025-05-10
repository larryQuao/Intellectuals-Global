import React, { useState } from 'react';

const universityLevels = [
  { value: '', label: 'Select Level', disabled: true },
  { value: '100', label: 'Level 100' },
  { value: '200', label: 'Level 200' },
  // Add more levels if needed
];

const programsOfStudy = [
  { value: '', label: 'Select Programme', disabled: true },
  { value: 'BSc IT', label: 'BSc Information Technology' },
  { value: 'BSc Computer Science', label: 'BSc Computer Science' },
  { value: 'BSc Computer Engineering', label: 'BSc Computer Engineering' },
  { value: 'BSc Mobile Computing', label: 'BSc Mobile Computing' },
  { value: 'BSc Database Management', label: 'BSc Database Management' },
  { value: 'BSc Information System', label: 'BSc Information Systems' }, // Corrected typo
  { value: 'Diploma IT', label: 'Diploma in Information Technology' },
  { value: 'Diploma Computer Science', label: 'Diploma in Computer Science' },
  // Add more diploma or other programs as needed
];

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbznB8lkGadp9yzVYqwztYi--Q5Eux1kyFAM-GWnP7is_xP_MaS8tSn_h9szITEKDBYO/exec"

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    universityLevel: '',
    programOfStudy: '',  
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch(WEB_APP_URL, {
        method: 'POST',
        mode: 'cors', // Handles cross-origin requests
        cache: 'no-cache',
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded', // Use if Apps Script expects this
          'Content-Type': 'application/json', // Use if Apps Script expects JSON (like the example I gave)
        },
        // redirect: 'follow', // Usually not needed, Apps Script handles its redirects
        
        // If sending as JSON (ensure your Apps Script's doPost parses JSON):
        body: JSON.stringify(formData),
        
        // If you were to send as x-www-form-urlencoded:
        // body: new URLSearchParams(formData).toString(),
      });

      // Google Apps Script Web Apps often return a 302 redirect on successful POST
      // which fetch API treats as an opaque redirect if mode is 'no-cors', or follows if 'cors'.
      // The actual content/status might not be directly readable as JSON in all cases
      // without more complex handling or specific Apps Script configurations.

      // For a simple check, we assume if it doesn't throw an error and completes, it's a success.
      // If your Apps Script explicitly returns JSON like {"status": "success"}, then you can parse it:
      
      // Attempt to parse JSON response, but be ready for it not to be JSON
      let result;
      try {
        result = await response.json(); // Try to parse if Apps Script returns JSON
      } catch {
        // If it's not JSON (e.g., simple text or HTML from redirect page), we might not have a 'status'
        // We can check response.ok for basic success (status 200-299)
        if (response.ok) {
          result = { status: "success", message: "Form submitted. The Google Sheet should be updated." };
        } else {
          result = { status: "error", message: `Submission failed with status: ${response.status}` };
        }
      }

      if (result.status === "success") {
        setSubmitMessage('Thank you for registering! We will be in touch shortly.');
        setFormData({ // Reset form
          fullName: '', email: '', phone: '', universityLevel: '', programOfStudy: '', message: '',
        });
      } else {
        setSubmitMessage(`An error occurred: ${result.message || 'Please try again.'}`);
      }

    } catch (error) {
      console.error('Error submitting form to Google Apps Script:', error);
      setSubmitMessage('An error occurred while submitting your application. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-secondary text-text-default font-montserrat py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight text-baltic-900 sm:text-4xl lg:text-5xl">
            Register for Assistance
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-baltic-700">
            Fill out the form below to apply for our teaching assistance program. We're excited to help you achieve your academic goals!
          </p>
        </div>

        <div className="mt-10 sm:mt-12 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-baltic-900">
                Full Name <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text" name="fullName" id="fullName" autoComplete="name" required
                  value={formData.fullName} onChange={handleChange}
                  className="block w-full rounded-md border-0 py-2 px-3 text-baltic-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-baltic-900">
                Email Address <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="email" name="email" id="email" autoComplete="email" required
                  value={formData.email} onChange={handleChange}
                  className="block w-full rounded-md border-0 py-2 px-3 text-baltic-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            {/* Phone Number - Now Required */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-baltic-900">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="tel" name="phone" id="phone" autoComplete="tel" required // Added required
                  value={formData.phone} onChange={handleChange}
                  className="block w-full rounded-md border-0 py-2 px-3 text-baltic-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* University Level - New Dropdown */}
            <div>
              <label htmlFor="universityLevel" className="block text-sm font-medium leading-6 text-baltic-900">
                University Level <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <select
                  id="universityLevel"
                  name="universityLevel"
                  required
                  value={formData.universityLevel}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-2.5 px-3 text-baltic-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                >
                  {universityLevels.map(level => (
                    <option key={level.value} value={level.value} disabled={level.disabled}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Programme of Study - New Dropdown */}
            <div>
              <label htmlFor="programOfStudy" className="block text-sm font-medium leading-6 text-baltic-900">
                Programme of Study <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <select
                  id="programOfStudy"
                  name="programOfStudy"
                  required
                  value={formData.programOfStudy}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-2.5 px-3 text-baltic-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                >
                  {programsOfStudy.map(program => (
                    <option key={program.value} value={program.value} disabled={program.disabled}>
                      {program.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message (Optional) */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium leading-6 text-baltic-900">
                Message (Optional)
              </label>
              <div className="mt-2">
                <textarea
                  name="message" id="message" rows={4}
                  value={formData.message} onChange={handleChange}
                  className="block w-full rounded-md border-0 py-2 px-3 text-baltic-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full justify-center rounded-md bg-violet-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
          {submitMessage && (
            <p className={`mt-6 text-center text-sm ${submitMessage.includes('error') ? 'text-red-600' : 'text-green-600'}`}>
              {submitMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;