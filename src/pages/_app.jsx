// pages/_app.jsx
import '../styles/globals.css'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'
import { DefaultSeo } from 'next-seo'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <DefaultSeo
        title="Barbie&apos;s Beach Rentals | Luxury Vacation Homes"
        description="Experience the magic of Barbie&apos;s Beach Rentals. Luxury beachfront properties with pink paradise vibes, perfect for your dream vacation. Book your stay today!"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://barbiesbeachrentals.com/',
          site_name: "Barbie&apos;s Beach Rentals",
          images: [
            {
              url: '/images/og-image.jpg',
              width: 1200,
              height: 630,
              alt: "Barbie&apos;s Beach Rentals - Luxury Vacation Homes",
            },
          ],
        }}
        twitter={{
          handle: '@barbiebeachrentals',
          site: '@barbiebeachrentals',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'theme-color',
            content: '#EC4899'
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
          }
        ]}
      />
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-131VLK569T" />
    </>
  )
}