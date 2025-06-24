import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    company: '',
    location: '',
    suppliesRequired: '',
    mobile: '',
    howDidYouHear: '',
    comments: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 ">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-medium text-[#05468D] mb-8">Let's Get In Touch</h2>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  maxLength={100}
                  className="w-full px-0 py-2 border-0 border-b-2 border-gray-900 bg-transparent focus:border-gray-900 focus:ring-0 focus:outline-none text-gray-900"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  maxLength={100}
                  className="w-full px-0 py-2 border-0 border-b-2 border-gray-900 bg-transparent focus:border-gray-900 focus:ring-0 focus:outline-none text-gray-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  maxLength={250}
                  className="w-full px-0 py-2 border-0 border-b-2 border-gray-900 bg-transparent focus:border-gray-900 focus:ring-0 focus:outline-none text-gray-900"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  maxLength={250}
                  className="w-full px-0 py-2 border-0 border-b-2 border-gray-900 bg-transparent focus:border-gray-900 focus:ring-0 focus:outline-none text-gray-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  maxLength={100}
                  className="w-full px-0 py-2 border-0 border-b-2 border-gray-900 bg-transparent focus:border-gray-900 focus:ring-0 focus:outline-none text-gray-900"
                />
              </div>

              {/* Supplies Required */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Supplies required in *
                </label>
                <select
                  name="suppliesRequired"
                  value={formData.suppliesRequired}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-2 border-0 border-b-2 border-gray-900 bg-transparent focus:border-gray-900 focus:ring-0 focus:outline-none text-gray-900 appearance-none"
                >
                  <option value="">-</option>
                  <option value="Government Sector">Government Sector</option>
                  <option value="Private Sector">Private Sector</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  maxLength={250}
                  className="w-full px-0 py-2 border-0 border-b-2 border-gray-900 bg-transparent focus:border-gray-900 focus:ring-0 focus:outline-none text-gray-900"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile *
                </label>
                <input
                  type="number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-2 border-0 border-b-2 border-gray-900 bg-transparent focus:border-gray-900 focus:ring-0 focus:outline-none text-gray-900"
                />
              </div>
            </div>

            {/* How did you hear about us */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How did you hear about us? *
              </label>
              <textarea
                name="howDidYouHear"
                value={formData.howDidYouHear}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-0 py-2 border-0 border-b-2 border-gray-900 bg-transparent focus:border-gray-900 focus:ring-0 focus:outline-none text-gray-900 resize-none"
              />
            </div>

            {/* Comments */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Comments / Questions
              </label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-0 py-2 border-0 border-b-2 border-gray-900 bg-transparent focus:border-gray-900 focus:ring-0 focus:outline-none text-gray-900 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                className="bg-[#05468D]  text-white font-medium py-3 px-8  focus:outline-none  rounded-2xl"
              >
                Submit
              </button>
            </div>

            {/* Thank you message */}
            {submitted && (
              <div className="text-right">
                <p className="text-lg text-black font-light">Thanks for submitting!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}