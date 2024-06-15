# React Email Package Issue with Links in Gmail

## Description

This repository demonstrates an issue with the `Link` component from
the `react-email` package. Specifically, links in the footer of an
email template are not working correctly when viewed in the Gmail
client. Instead of redirecting to the intended URL, the links take the
user to a different, unexpected URL.

## Expected Behavior

Clicking on social media links in the footer of the email should
redirect to the specified URLs. For example, a Facebook link should
take the user to a specific Facebook profile page, not to an unrelated
or random URL.

## Actual Behavior

When clicking on social media links in the footer of the email in
Gmail, the user is redirected to a different, unexpected URL. This
issue is not observed in the development environment preview in the
browser.

## Steps to Reproduce

1. **Set up a project with React Email**:

   - Initialize a new project using React or Next.js.
   - Install the `react-email` package.

2. **Create an email template**:

   - Add the following template code to your project:

   ```jsx
   import React from 'react';
   import {
     Html,
     Head,
     Body,
     Container,
     Section,
     Row,
     Column,
     Link,
   } from '@react-email/components';
   import {
     Facebook,
     Instagram,
     Twitter,
     Linkedin,
   } from '@react-email/icons';

   const EmailTemplate = () => (
     <Html>
       <Head />
       <Body>
         <Container>
           <Section>
             <Text>Hello, this is a test email.</Text>
           </Section>
           <Section>
             <Row className='w-fit justify-start mt-0 mx-0 border-spacing-3'>
               <Column>
                 <Link
                   target='_blank'
                   href='https://www.facebook.com/profile.php?id=61557838825422'
                 >
                   <Facebook />
                 </Link>
               </Column>
               <Column>
                 <Link
                   target='_blank'
                   href='https://www.instagram.com/muuve.co.za/'
                 >
                   <Instagram />
                 </Link>
               </Column>
               <Column>
                 <Link
                   target='_blank'
                   href='https://twitter.com/MuuveGroup'
                 >
                   <Twitter />
                 </Link>
               </Column>
               <Column>
                 <Link
                   target='_blank'
                   href='https://www.linkedin.com/company/muuve-group/'
                 >
                   <Linkedin />
                 </Link>
               </Column>
             </Row>
           </Section>
         </Container>
       </Body>
     </Html>
   );

   export default EmailTemplate;
   ```

3. **Send the email**:

   - Use the `react-email` package to send the email to your email
     address.
   - Open the email in the Gmail client.

4. **Test the links**:
   - Click on any of the social media links in the footer.
   - Observe that the link does not direct to the intended URL.

## Environment

- **React version**
- **Next.js version (if applicable)**
- **react-email version**
- **Browser**: Tested in the Gmail client

## Additional Information

This issue does not occur in the development environment preview in
the browser. It appears to be specific to the Gmail client. It is
unclear whether other email clients exhibit the same behavior.

## Possible Solutions

- Ensure that the `Link` component is used correctly and that the href
  attributes are correctly specified.
- Check if Gmail modifies the links in the email content and if there
  are any settings or workarounds to prevent this behavior.
