import React, { useState } from "react";

const universityLevels = [
  { value: "", label: "Select Level", disabled: true },
  { value: "100", label: "Level 100" },
  { value: "200", label: "Level 200" },
  // Add more levels if needed
];

const programsOfStudy = [
  { value: "", label: "Select Programme", disabled: true },
  { value: "BSc IT", label: "BSc Information Technology" },
  { value: "BSc Computer Science", label: "BSc Computer Science" },
  { value: "BSc Computer Engineering", label: "BSc Computer Engineering" },
  { value: "BSc Mobile Computing", label: "BSc Mobile Computing" },
  { value: "BSc Database Management", label: "BSc Database Management" },
  { value: "BSc Information System", label: "BSc Information Systems" }, // Corrected typo
  { value: "Diploma IT", label: "Diploma in Information Technology" },
  { value: "Diploma Computer Science", label: "Diploma in Computer Science" },
  // Add more diploma or other programs as needed
];

const SHEETDB_API_URL =
  "https://sheetdb.io/api/v1/75prkbqhstxet";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    universityLevel: "",
    programOfStudy: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Log the data being sent for debugging
    console.log("Submitting to SheetDB:", formData);
    console.log("SheetDB API URL:", SHEETDB_API_URL);

    if (SHEETDB_API_URL === "YOUR_SHEETDB_API_ENDPOINT_URL" || !SHEETDB_API_URL) {
        setSubmitMessage('Configuration error: SheetDB API URL not set. Please contact support.');
        setIsSubmitting(false);
        console.error("SheetDB API URL is not set!");
        return;
    }
    
    try {
      const payload = { ...formData }; 

      const response = await fetch(SHEETDB_API_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload) 
      });

      if (response.ok) { 
        // SheetDB might return { "created": 1 } or similar for success
        const result = await response.json().catch(() => ({})); // Catch if response is not JSON but still ok (e.g. 204 No Content)
        console.log("SheetDB response:", result);
        setSubmitMessage('Thank you for registering! Your data has been submitted successfully.');
        setFormData({ // Reset form
          fullName: '', email: '', phone: '', universityLevel: '', programOfStudy: '', message: '',
        });
      } else {
        // Try to parse error from SheetDB if available
        let errorMsg = `Submission failed with status: ${response.status} ${response.statusText}`;
        try {
          const errorResult = await response.json();
          errorMsg = `Submission failed: ${errorResult.error || errorResult.message || response.statusText}`;
        } catch {
          // If error response is not JSON, use the status text
          errorMsg = `Submission failed with status: ${response.status} ${response.statusText}`;
        }
        setSubmitMessage(errorMsg);
        console.error("SheetDB error response:", await response.text()); // Log raw error text
      }
    } catch (error) {
      console.error('Error submitting form to SheetDB:', error);
      setSubmitMessage('An error occurred while submitting your application. Please check your internet connection and try again.');
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
            Fill out the form below to apply for our teaching assistance
            program. We're excited to help you achieve your academic goals!
          </p>
        </div>

        <div className="mt-10 sm:mt-12 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium leading-6 text-baltic-900"
              >
                Full Name <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  autoComplete="name"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-2 px-3 text-baltic-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-baltic-900"
              >
                Email Address <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-2 px-3 text-baltic-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Phone Number - Now Required */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-baltic-900"
              >
                Phone Number <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  required // Added required
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-2 px-3 text-baltic-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* University Level - New Dropdown */}
            <div>
              <label
                htmlFor="universityLevel"
                className="block text-sm font-medium leading-6 text-baltic-900"
              >
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
                  {universityLevels.map((level) => (
                    <option
                      key={level.value}
                      value={level.value}
                      disabled={level.disabled}
                    >
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Programme of Study - New Dropdown */}
            <div>
              <label
                htmlFor="programOfStudy"
                className="block text-sm font-medium leading-6 text-baltic-900"
              >
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
                  {programsOfStudy.map((program) => (
                    <option
                      key={program.value}
                      value={program.value}
                      disabled={program.disabled}
                    >
                      {program.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message (Optional) */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-baltic-900"
              >
                Message (Optional)
              </label>
              <div className="mt-2">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
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
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
          {submitMessage && (
            <p
              className={`mt-6 text-center text-sm ${
                submitMessage.includes("error")
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              {submitMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
