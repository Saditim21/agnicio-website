# Company Email Setup Guide

Perfect! This is the cleanest approach. Once you get access to the company email (info@agnicio.com), here's the simple 5-minute setup:

## Step 1: EmailJS Account Setup
1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up using the **company email: info@agnicio.com**
3. Verify the company email address

## Step 2: Connect Email Service
1. In EmailJS dashboard → "Email Services"
2. Click "Add New Service"
3. Choose company email provider (Gmail, Outlook, etc.)
4. Connect the info@agnicio.com account
5. Copy the **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Create template with this content:
```
Subject: New Contact Form - {{from_name}}

New message from your website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from Agnicio website contact form
```
3. Copy the **Template ID**

## Step 4: Get Public Key
1. Go to "Account" section
2. Copy your **Public Key**

## Step 5: Update Code
In `/src/pages/Contact.tsx`, replace:
```typescript
'service_XXXXXXX'    → Your Service ID
'template_XXXXXXX'   → Your Template ID  
'YOUR_PUBLIC_KEY'    → Your Public Key
```

## That's it!
- ✅ Form sends emails directly to info@agnicio.com
- ✅ Professional email formatting
- ✅ No third-party dependencies
- ✅ Free tier: 200 emails/month
- ✅ Company controls everything

The contact form is already built and ready - just needs these 3 values!