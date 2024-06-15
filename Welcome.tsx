import React from 'react';
import {
  Heading,
  Link,
  Row,
  Section,
  Column,
  Text,
} from '@react-email/components';
import Facebook from '@/components/emails/ui/Facebook';
import Twitter from '@/components/emails/ui/Twitter';
import Linkedin from '@/components/emails/ui/Linkedin';
import Instagram from '@/components/emails/ui/Instagram';

export default function Footer() {
  return (
    <Section className='max-w-full bg-yellowDark lg:py-24 py-10 w-full'>
      <Section className='max-w-[1150px] mx-auto w-[90%]'>
        <Heading className='m-0 mb-2 xl:mb-4 text-2xl lg:text-3xl font-bold'>
          Stay Tuned
        </Heading>
        <Text className='lg:text-lg text-sm m-0  '>
          To ensure you don&apos;t miss out on the launch, follow us
          on social media and keep an eye on your inbox for more
          updates and sneak peeks. We&apos;re incredibly excited to
          share this journey with you and can&apos;t wait for you to
          see what we&apos;ve been working on.
        </Text>
        <Text className='lg:text-lg text-sm m-0 mt-3 mb-2 '>
          Thank you for being a part of the MUUVE community
        </Text>
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
      <Section className='max-w-[1150px]  lg:mt-5 mt-4 mx-auto w-[90%]'>
        <Row>
          <Column style={{ verticalAlign: 'top' }}>
            <Text className='xl:text-lg text-sm m-0 !leading-[1.2] '>
              Get in contact with us at
              <Link
                href='mailto:info@muuve.co.za'
                className='px-1 text-black font-bold inline-block'
              >
                info@muuve.co.za
              </Link>
              and
              <br />
              chat to us on
              <Link
                href='tel:+270100133482'
                className='px-1 text-black font-bold inline-block'
              >
                +27 010 013 3482
              </Link>
            </Text>
          </Column>
          <Column className=''>
            <Text className='xl:text-lg text-sm !leading-[1.1] font-bold  m-0 lg:text-end'>
              Visit Us
            </Text>
            <Text className='xl:text-lg text-sm !leading-[1.1]  m-0  lg:text-end'>
              Maxwell Office Park
            </Text>
            <Text className='xl:text-lg text-sm !leading-[1.1] m-0 lg:text-end'>
              Magwa Cres Midrand
            </Text>
          </Column>
        </Row>
      </Section>
    </Section>
  );
}
