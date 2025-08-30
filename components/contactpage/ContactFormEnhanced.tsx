'use client'
import React, { useState, useRef, useCallback } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import RevealWrapper from '../animation/RevealWrapper'

const ContactFormEnhanced = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)

  const services = [
    'Branding & Identity',
    'Graphic & Visual Design',
    'Digital Marketing',
    'Website & App Development',
    'Video Production',
    'Content Creation',
    'Social Media Management',
    'SEO Services',
    'PPC Advertising',
    'E-Commerce Solutions',
    'Consulting & Strategy',
    'Other',
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.service) newErrors.service = 'Please select a service'
    if (!formData.budget.trim()) newErrors.budget = 'Please enter your budget range'
    if (!formData.message.trim()) newErrors.message = 'Project details are required'
    // Make reCAPTCHA optional for now while debugging
    // if (!recaptchaToken) newErrors.recaptcha = 'Please complete the reCAPTCHA'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleRecaptchaChange = useCallback(
    (token: string | null) => {
      console.log('ReCAPTCHA token:', token)
      setRecaptchaToken(token)
      if (token && errors.recaptcha) {
        setErrors((prev) => ({ ...prev, recaptcha: '' }))
      }
    },
    [errors.recaptcha],
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        // Reset form
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          message: '',
        })
        recaptchaRef.current?.reset()
        setRecaptchaToken(null)

        // Show success message
        alert("Thank you for your inquiry! We'll get back to you within 24 hours.")
      } else {
        alert(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Failed to send message. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        <RevealWrapper
          as="form"
          onSubmit={handleSubmit}
          className="reveal-me mx-auto grid max-w-[800px] grid-cols-1 gap-[30px] md:grid-cols-2">
          {/* Name Field */}
          <div className="md:col-span-full">
            <label
              htmlFor="name"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
              required
            />
            {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
          </div>

          {/* Company Field */}
          <div className="md:col-span-1">
            <label
              htmlFor="company"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company"
              className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
            />
          </div>

          {/* Email Field */}
          <div className="md:col-span-1">
            <label
              htmlFor="email"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
              required
            />
            {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
          </div>

          {/* Service Type */}
          <div className="relative">
            <label
              htmlFor="service"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Service Type*
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="mt-3 w-full appearance-none text-ellipsis border bg-backgroundBody px-5 py-4 indent-px text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
              required>
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <span className="absolute right-5 top-1/2 translate-y-1/3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="inline dark:hidden">
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeOpacity="0.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                className="hidden dark:inline"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M6 9L12 15L18 9"
                  stroke="white"
                  strokeOpacity="0.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {errors.service && <p className="mt-2 text-sm text-red-500">{errors.service}</p>}
          </div>

          {/* Budget Range */}
          <div>
            <label
              htmlFor="budget"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Project Budget*
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="$10k - $25k"
              className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
              required
            />
            {errors.budget && <p className="mt-2 text-sm text-red-500">{errors.budget}</p>}
          </div>

          {/* Message Field */}
          <div className="md:col-span-full">
            <label
              htmlFor="message"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Project Brief*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project goals and timeline"
              className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
              required></textarea>
            {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
          </div>

          {/* reCAPTCHA - Temporarily hidden while debugging */}
          {/* <div className="md:col-span-full flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LfgNbgrAAAAAFKv-0vpYlCCINdptWAM_YdmrPjR"
              onChange={handleRecaptchaChange}
              onExpired={() => setRecaptchaToken(null)}
              onErrored={() => {
                console.error('ReCAPTCHA error')
                setRecaptchaToken(null)
              }}
            />
          </div>
          {errors.recaptcha && <p className="text-center text-sm text-red-500 md:col-span-full">{errors.recaptcha}</p>} */}

          {/* Submit Button */}
          <div className="col-span-full sm:mt-14 md:mx-auto">
            <button
              type="submit"
              disabled={loading}
              className="rv-button rv-button-primary block w-full disabled:cursor-not-allowed disabled:opacity-50 md:inline-block md:w-auto">
              <div className="rv-button-top">
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">{loading ? 'Sending...' : 'Send Message'}</span>
              </div>
            </button>
          </div>

          {/* Privacy Notice */}
          <div className="col-span-full mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>
              By submitting this form, you agree to our{' '}
              <a href="/policy" className="text-primary hover:underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms" className="text-primary hover:underline">
                Terms of Service
              </a>
              .
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ContactFormEnhanced
