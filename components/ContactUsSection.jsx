'use client'
import React, { useState, useEffect } from 'react'
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiBriefcase,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from 'react-icons/fi'

function ContactUsSection() {
  const [result, setResult] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult('Sending....')
    const formData = new FormData(event.target)
    formData.append('access_key', 'f82167d7-ab01-4fed-b8e1-18f57e913158')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()
      if (data.success) {
        setResult('Form Submitted Successfully')
        event.target.reset()
      } else {
        setResult('Error submitting form. Please try again.')
      }
    } catch {
      setResult('Error submitting form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // clear result after 3 seconds
  useEffect(() => {
    if (result) {
      setTimeout(() => {
        setResult('')
      }, 3000)
    }
  }, [result])

  return (
    <div className="relative isolate bg-gradient-to-br from-gray-50 via-white to-gray-50 px-4 sm:px-6 py-12 sm:py-16 lg:px-8 lg:py-24">
      {/* Decorative Background Elements */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-400 to-pink-400 opacity-20 sm:left-[calc(50%-13rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Header Section */}
      <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
          Get in <span className="text-red-600">Touch</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Have a question or want to work together? We&apos;d love to hear from
          you. Send us a message and we&apos;ll respond as soon as possible.
        </p>
      </div>

      {/* Form Container */}
      <div className="mx-auto max-w-3xl">
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-900/10 p-6 sm:p-8 lg:p-10 border border-gray-100">
          <form onSubmit={onSubmit} className="space-y-6 sm:space-y-8">
            {/* Name Fields */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* First Name */}
              <div className="group">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  First Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-gray-400 group-focus-within:text-red-600 transition-colors" />
                  </div>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    required
                    placeholder="John"
                    className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="group">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Last Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-gray-400 group-focus-within:text-red-600 transition-colors" />
                  </div>
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    required
                    placeholder="Doe"
                    className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="group">
              <label
                htmlFor="company"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Company
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiBriefcase className="h-5 w-5 text-gray-400 group-focus-within:text-red-600 transition-colors" />
                </div>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Your Company Name"
                  className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                />
              </div>
            </div>

            {/* Email */}
            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-gray-400 group-focus-within:text-red-600 transition-colors" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="john.doe@example.com"
                  className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="group">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiPhone className="h-5 w-5 text-gray-400 group-focus-within:text-red-600 transition-colors" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="phone"
                  autoComplete="phone"
                  required
                  placeholder="01234567890"
                  className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                />
              </div>
            </div>
            {/* Message */}
            <div className="group">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Message
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <FiMessageSquare className="h-5 w-5 text-gray-400 group-focus-within:text-red-600 transition-colors" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your project or inquiry..."
                  className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md resize-none"
                />
              </div>
            </div>

            {/* Privacy Policy Checkbox */}
            <div className="flex items-start gap-3">
              <div className="flex items-center h-5">
                <input
                  id="agree-to-policies"
                  name="agree-to-policies"
                  type="checkbox"
                  required
                  className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-2 focus:ring-red-600 focus:ring-offset-0 cursor-pointer checked:bg-red-600"
                />
              </div>
              <label
                htmlFor="agree-to-policies"
                className="text-sm text-gray-600 leading-relaxed"
              >
                By submitting this form, you agree to our{' '}
                <a
                  href="#"
                  className="font-semibold text-red-600 hover:text-red-700 underline transition-colors"
                >
                  privacy policy
                </a>{' '}
                and{' '}
                <a
                  href="#"
                  className="font-semibold text-red-600 hover:text-red-700 underline transition-colors"
                >
                  terms of service
                </a>
                .
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Result Message for 3 second  */}
              {result && (
                <div
                  className={`mt-4 flex items-center gap-2 p-4 rounded-lg  ${
                    result.includes('Successfully')
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : result.includes('Error')
                      ? 'bg-red-50 text-red-800 border border-red-200'
                      : 'bg-blue-50 text-blue-800 border border-blue-200'
                  }`}
                >
                  {result.includes('Successfully') ? (
                    <FiCheckCircle className="h-5 w-5 shrink-0" />
                  ) : result.includes('Error') ? (
                    <FiAlertCircle className="h-5 w-5 shrink-0" />
                  ) : (
                    <svg
                      className="animate-spin h-5 w-5 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
                  <p className="text-sm font-medium">{result}</p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUsSection
