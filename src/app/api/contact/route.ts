import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key-for-build')

export async function POST(request: NextRequest) {
  try {
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    // Parse the form data from the request
    const body = await request.json()
    const { name, email, company, phone, message, services, timeline, budget, subject } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields' },
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
    const isStartProjectForm = services || timeline || budget
    
    let emailContent = `
${isStartProjectForm ? 'Nieuwe project aanvraag' : 'Nieuw contactformulier bericht'} van breaz-it.be

Van: ${name}
Email: ${email}
${company ? `Bedrijf: ${company}` : ''}
${phone ? `Telefoonnummer: ${phone}` : ''}
`

    // Add project-specific fields if present
    if (services && services.length > 0) {
      emailContent += `\nGeselecteerde diensten:\n${services.map((s: string) => `  - ${s}`).join('\n')}\n`
    }
    
    if (timeline) {
      emailContent += `\nTijdlijn: ${timeline}\n`
    }
    
    if (budget) {
      emailContent += `Budget: ${budget}\n`
    }

    if (message) {
      emailContent += `\nBericht:\n${message}\n`
    }

    emailContent += `
---
Dit bericht werd verzonden via ${isStartProjectForm ? 'het "Start je project" formulier' : 'het contactformulier'} op breaz-it.be
Verzonden op: ${new Date().toLocaleString('nl-BE', { 
  timeZone: 'Europe/Brussels',
  dateStyle: 'full',
  timeStyle: 'short'
})}
    `.trim()

    // Send email using Resend
    const emailSubject = subject 
      ? subject 
      : isStartProjectForm 
        ? `🚀 Nieuwe project aanvraag: ${name}${company ? ` - ${company}` : ''}`
        : `Nieuw contactformulier: ${name}${company ? ` - ${company}` : ''}`
    
    const data = await resend.emails.send({
      from: 'Breaz Website <onboarding@resend.dev>', // You'll need to update this with your verified domain
      to: ['siemon@breaz-it.be'],
      replyTo: email,
      subject: emailSubject,
      text: emailContent,
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email verzonden'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    
    return NextResponse.json(
      { 
        error: 'Er is een fout opgetreden bij het verzenden van het bericht. Probeer het later opnieuw of neem direct contact met ons op.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

