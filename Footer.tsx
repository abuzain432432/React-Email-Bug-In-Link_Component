import {
  Body,
  Container,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Column,
  Text,
  Head,
} from '@react-email/components';
import Footer from '@/components/emails/ui/Footer';
import { object, string, z } from 'zod';
import { baseUrl } from '@/components/emails/constants';
import EmailApp from '@/components/emails/ui/EmailApp';
export const welcomePropsSchema = object({
  name: string().nonempty(),
});
export type WelcomePropsSchemaType = z.infer<
  typeof welcomePropsSchema
>;

export const Welcome = ({ name }: WelcomePropsSchemaType) => (
  <EmailApp>
    <Html>
      <Head />
      <Preview>Welcome to the muuve family</Preview>
      <Body
        style={{ ...main }}
        className='relative p-0 m-0 box-border '
      >
        <Container className='max-w-full  w-full '>
          <Section
            style={{
              backgroundImage: `url(${baseUrl}/emails/hero.png)`,
              backgroundSize: 'cover',
            }}
            className='bg-black/50 w-full max-w-full '
          >
            <Section className='max-w-[1200px]  z-50 w-[90%] pt-8 sm:pt-12 lg:pt-16 lg:pb-20 sm:pb-16  pb-12  '>
              <Img
                className='lg:h-[45px]  sm:h-[40px] h-[30px]'
                src={`${baseUrl}/emails/logo.png`}
              />
            </Section>
            <Section className='max-w-[1200px] relative z-10 w-[90%]  lg:pb-48 sm:pb-40 pb-20 '>
              <Heading className='text-yellowDark drop-shadow-lg lg:text-left font-semibold text-2xl sm:text-3xl xl:text-4xl leading-[1.1] my-0'>
                Get Ready!
              </Heading>
              <Heading className='text-yellowDark  drop-shadow-lg text-wrap  font-semibold text-2xl sm:text-3xl xl:text-4xl leading-[1.1] my-0'>
                Exciting Launch Coming <br className='sm:hidden' />
                Soon
              </Heading>
            </Section>
          </Section>
          <Section className='bg-white pt-12 lg:pt-20 pb-10 lg:pb-16'>
            <Section className='max-w-[1200px] w-[90%]'>
              <Heading className='m-0 mb-5 xl:mb-7 text-2xl lg:text-3xl font-bold'>
                Dear {name}
              </Heading>
              <Text className='lg:text-lg text-sm m-0  xl:mb-6 mb-5'>
                We have some thrilling news to share with you! At
                MUUVE, we&apos;ve been working behind the scenes on
                something very special, and we&apos;re excited to
                announce that we will soon be launching
              </Text>
              <Text className='lg:text-lg text-sm m-0  '>
                The first all in one platfrom uilt with tenants,
                agents and landlords in mind.
              </Text>
            </Section>
          </Section>
          <Section>
            <Section className='max-w-[1200px] w-[90%]'>
              <Heading className='m-0 mb-5 xl:mb-7 text-2xl lg:text-3xl font-bold'>
                Do everything in one place.
              </Heading>
            </Section>
            <Section className={' w-full pb-6  mx-auto'}>
              <Row className='lg:border-spacing-4 border-spacing-2'>
                <Column
                  colSpan={1}
                  style={{
                    boxSizing: 'border-box',
                  }}
                  className='bg-grayLight md:mb-0  mb-4 md:table-cell block md:w-[33%] xl:p-6 xl:py-14 md:py-0 py-8 px-4  rounded-2xl'
                >
                  <Img
                    className='xl:w-[150px] mx-auto h-auto md:w-[120px] w-[80px]'
                    src={`${baseUrl}/emails/pc.png`}
                    width={400}
                    height={400}
                  />
                  <Text className=' lg:mt-8 md:mt-11 mb-3 w-full xl:py-3 py-2 xl:text-lg text-sm px-1  text-center font-semibold text-black rounded-lg bg-yellowDark'>
                    1. List your property online
                  </Text>
                  <Text className='lg:text-lg text-sm my-0 xl:px-4'>
                    Unlock the potential of your property by listing
                    it for rent on our platform
                  </Text>
                </Column>
                <Column
                  colSpan={1}
                  style={{
                    boxSizing: 'border-box',
                  }}
                  className='bg-grayLight  md:mb-0 mb-4  md:table-cell block md:w-[33%]  xl:p-6 xl:py-14 md:py-0 py-8  xl:pt-10 px-4  rounded-2xl'
                >
                  <Img
                    className='xl:w-[150px] mx-auto md:w-[140px] h-auto  w-[90px]'
                    src={`${baseUrl}/emails/home.png`}
                    width={400}
                    height={400}
                  />
                  <Text className='mt-4 xl:mt-8 mb-3 w-full xl:py-3 py-2 xl:text-lg text-sm px-1 text-center font-semibold text-black rounded-lg bg-yellowDark'>
                    2. Search for rental property
                  </Text>
                  <Text className='lg:text-lg text-sm  my-0 xl:px-4'>
                    Search for a rental and directly contact listed
                    homeowners on the platform.
                  </Text>
                </Column>
                <Column
                  colSpan={1}
                  style={{
                    boxSizing: 'border-box',
                  }}
                  className='bg-grayLight  md:mb-0 mb-4 md:table-cell block md:w-[33%] xl:p-6 md:pt-8 pt-9 xl:pt-20 xl:py-14 md:py-2 py-6 px-4   rounded-2xl'
                >
                  <Img
                    className='xl:w-[130px] mx-auto h-auto  md:w-[120px] w-[70px]'
                    src={`${baseUrl}/emails/mobile.png`}
                    width={400}
                    height={400}
                  />
                  <Text className=' xl:mt-8 lg:mt-8 xl:mb-5 mb-3 w-full xl:py-3 py-2 xl:text-lg text-sm text-center font-semibold text-black rounded-lg bg-yellowDark'>
                    3. Apply on our platform
                  </Text>
                  <Text className='lg:text-lg text-sm  my-0 xl:px-4'>
                    Reduce paperwork by applying on our online
                    platform, where you can also apply for a loan that
                    covers your entire rental deposit
                  </Text>
                </Column>
              </Row>
            </Section>
          </Section>
          <Section className='max-w-[1150px] mx-auto lg:mt-4 lg:mb-20 mb-12 w-[90%]'>
            <Heading className='m-0 mb-3 xl:mb-7 text-2xl lg:text-3xl font-bold'>
              Stay on the look out!
            </Heading>
            <Text className='lg:text-lg text-base m-0  '>
              We can&apos;t wait for you to experience what we ha e
              prepared for you
            </Text>
          </Section>
          <Footer />
        </Container>
      </Body>
    </Html>
  </EmailApp>
);

Welcome.PreviewProps = {
  name: 'DJZ-TLX',
};

export default Welcome;

const main = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  '@media (min-width: 768px)': {
    zoom: '100%',
  },
  '@media (max-width: 767px)': {
    zoom: '50%',
  },
  '@media (max-width: 640px)': {
    zoom: '40%',
  },
} as React.CSSProperties;
