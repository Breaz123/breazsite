import { Section } from '@/components/ui/section'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

/**
 * Form Example
 * Demonstrates Input, Textarea, Select, Switch, and other form components
 */
export default function FormExample() {
  return (
    <Section variant="default" padding="xl">
      <div className="max-w-2xl mx-auto">
        <Card variant="elevated" padding="lg">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <CardTitle>Contact Form</CardTitle>
              <Badge variant="success">New</Badge>
            </div>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <Input 
                  id="name"
                  placeholder="John Doe" 
                  inputSize="default"
                />
              </div>
              
              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="john@example.com" 
                  inputSize="default"
                />
              </div>
              
              {/* Subject Select */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Select>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="sales">Sales Question</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Message Textarea */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="Tell us more about your inquiry..." 
                  textareaSize="default"
                  rows={5}
                />
              </div>
              
              {/* Newsletter Switch */}
              <div className="flex items-center space-x-3">
                <Switch id="newsletter" />
                <label htmlFor="newsletter" className="text-sm font-medium cursor-pointer">
                  Subscribe to our newsletter
                </label>
              </div>
            </form>
          </CardContent>
          
          <CardFooter className="flex justify-between gap-4">
            <Button variant="outline" className="flex-1">
              Cancel
            </Button>
            <Button variant="primary" className="flex-1">
              Send Message
            </Button>
          </CardFooter>
        </Card>
        
        {/* Additional Examples */}
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <Card variant="bordered" padding="default">
            <h3 className="font-semibold mb-3">Input Variants</h3>
            <div className="space-y-3">
              <Input placeholder="Default input" />
              <Input variant="error" placeholder="Error state" />
              <Input variant="success" placeholder="Success state" />
              <Input inputSize="sm" placeholder="Small size" />
              <Input inputSize="lg" placeholder="Large size" />
            </div>
          </Card>
          
          <Card variant="bordered" padding="default">
            <h3 className="font-semibold mb-3">Badge Variants</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="destructive">Error</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge size="sm">Small</Badge>
              <Badge size="default">Default</Badge>
              <Badge size="lg">Large</Badge>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  )
}

