import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key-for-build')

export async function POST(request: NextRequest) {
  try {
    console.log('Newsletter API called')
    
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not set')
      return NextResponse.json(
        { 
          error: 'Email service is not configured. Please contact support.',
          details: 'Missing API key configuration'
        },
        { status: 503 }
      )
    }
    
    // Parse the form data from the request
    const body = await request.json()
    const { email } = body
    console.log('Email received:', email)

    // Validate required fields
    if (!email) {
      console.log('No email provided')
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Prepare email content
    const emailContent = `
Nieuwe nieuwsbrief inschrijving van breaz-it.be

Email: ${email}

---
Dit bericht werd verzonden via de nieuwsbrief inschrijving op breaz-it.be
Verzonden op: ${new Date().toLocaleString('nl-BE', { 
  timeZone: 'Europe/Brussels',
  dateStyle: 'full',
  timeStyle: 'short'
})}
    `.trim()

    // Send email using Resend
    console.log('Attempting to send email to:', 'siemon@breaz-it.be')
    const data = await resend.emails.send({
      from: 'Breaz Website <onboarding@resend.dev>', // You'll need to update this with your verified domain
      to: ['siemon@breaz-it.be'],
      replyTo: email,
      subject: `📧 Nieuwe nieuwsbrief inschrijving: ${email}`,
      text: emailContent,
    })
    console.log('Email sent successfully:', data)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Je bent succesvol ingeschreven voor onze nieuwsbrief!'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending newsletter subscription:', error)
    
    return NextResponse.json(
      { 
        error: 'Er is een fout opgetreden bij het inschrijven voor de nieuwsbrief. Probeer het later opnieuw.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
