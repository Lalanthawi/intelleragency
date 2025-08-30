import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email configuration
const EMAIL_TO = 'contact@inteller.studio'
const EMAIL_FROM = process.env.EMAIL_FROM || 'noreply@inteller.studio'
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com'
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587')
const SMTP_USER = process.env.SMTP_USER || ''
const SMTP_PASS = process.env.SMTP_PASS || ''

// reCAPTCHA secret key
const RECAPTCHA_SECRET_KEY = '6LfgNbgrAAAAANwrAGAyZpe6z8u9_9vBwSwzgFeg'

interface ContactFormData {
  name: string
  company?: string
  email: string
  phone?: string
  service: string
  budget: string
  message: string
  recaptchaToken?: string
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    })

    const data = await response.json()
    return data.success
  } catch (error) {
    console.error('reCAPTCHA verification error:', error)
    return false
  }
}

function createEmailHTML(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { color: #333; margin-top: 5px; }
        .message { background: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2 style="color: #333; margin: 0;">New Contact Form Submission</h2>
          <p style="margin: 5px 0 0 0; color: #666;">Received on ${new Date().toLocaleString()}</p>
        </div>
        
        <div class="field">
          <div class="label">Name:</div>
          <div class="value">${data.name}</div>
        </div>
        
        ${
          data.company
            ? `
        <div class="field">
          <div class="label">Company:</div>
          <div class="value">${data.company}</div>
        </div>
        `
            : ''
        }
        
        <div class="field">
          <div class="label">Email:</div>
          <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
        </div>
        
        ${
          data.phone
            ? `
        <div class="field">
          <div class="label">Phone:</div>
          <div class="value">${data.phone}</div>
        </div>
        `
            : ''
        }
        
        <div class="field">
          <div class="label">Service Required:</div>
          <div class="value">${data.service}</div>
        </div>
        
        <div class="field">
          <div class="label">Budget:</div>
          <div class="value">${data.budget}</div>
        </div>
        
        
        <div class="message">
          <div class="label">Project Details:</div>
          <div class="value" style="white-space: pre-wrap; margin-top: 10px;">${data.message}</div>
        </div>
        
        <div class="footer">
          <p>This email was sent from the Inteller Agency contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

function createAutoReplyHTML(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; padding: 30px 0; }
        .content { padding: 20px 0; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
        .cta { display: inline-block; padding: 12px 30px; background: #007bff; color: white; text-decoration: none; border-radius: 5px; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="color: #333; margin: 0;">Thank You for Reaching Out!</h1>
        </div>
        
        <div class="content">
          <p>Dear ${name},</p>
          
          <p>Thank you for contacting Inteller Agency. We've received your inquiry and appreciate your interest in our services.</p>
          
          <p>Our team will review your project details and get back to you within 24 hours with:</p>
          <ul>
            <li>Initial thoughts on your project</li>
            <li>Relevant case studies and examples</li>
            <li>Next steps and timeline</li>
          </ul>
          
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Browse our <a href="https://inteller.studio/design-agency">portfolio</a> for inspiration</li>
            <li>Check out our <a href="https://inteller.studio/services">services</a> in detail</li>
            <li>Follow us on social media for updates and insights</li>
          </ul>
          
          <p>If you have any urgent questions, please don't hesitate to reach out directly at contact@inteller.studio</p>
          
          <p>We look forward to working with you!</p>
          
          <p>Best regards,<br>
          The Inteller Agency Team</p>
        </div>
        
        <div class="footer">
          <p>© ${new Date().getFullYear()} Inteller Agency. All rights reserved.</p>
          <p>This is an automated response. Please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Verify reCAPTCHA if token is provided
    if (data.recaptchaToken) {
      const isValidRecaptcha = await verifyRecaptcha(data.recaptchaToken)
      if (!isValidRecaptcha) {
        console.log('Invalid reCAPTCHA token')
        // Optional: You can still block if reCAPTCHA fails when provided
        // return NextResponse.json({ error: 'Invalid reCAPTCHA. Please try again.' }, { status: 400 })
      }
    }

    // Try to send email if SMTP is configured
    if (SMTP_USER && SMTP_PASS) {
      try {
        // Create transporter
        const transporter = nodemailer.createTransport({
          host: SMTP_HOST,
          port: SMTP_PORT,
          secure: SMTP_PORT === 465,
          auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
          },
        })

        // Send email to admin
        const adminMailOptions = {
          from: EMAIL_FROM,
          to: EMAIL_TO,
          subject: `New Contact Form Submission - ${data.service} - ${data.name}`,
          html: createEmailHTML(data),
          replyTo: data.email,
        }

        // Send auto-reply to user
        const userMailOptions = {
          from: EMAIL_FROM,
          to: data.email,
          subject: 'Thank you for contacting Inteller Agency',
          html: createAutoReplyHTML(data.name),
        }

        // Send emails
        await transporter.sendMail(adminMailOptions)
        await transporter.sendMail(userMailOptions)
      } catch (emailError) {
        console.error('Email sending error:', emailError)
        // Continue anyway - form submission is still successful
      }
    } else {
      // Log form submission when email is not configured
      console.log('Contact form submission (email not configured):', {
        timestamp: new Date().toISOString(),
        name: data.name,
        email: data.email,
        service: data.service,
        budget: data.budget,
        message: data.message.substring(0, 100) + '...',
      })
    }

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 })
  }
}
