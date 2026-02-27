import './globals.css'
import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import Footer from '@/components/layouts/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import Script from "next/script"

const onest = Onest({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Nbe Soro - Développeur Back-end Python",
  description: "Soro Nbe, développeur back-end Python Django avec 4 ans d'expérience, passionné par la création de solutions logicielles innovantes et fiables. Mentor expérimenté aidant les étudiants et les débutants à réussir dans le développement.",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://nbesoro.com/",
  },
  icons: {
    icon: "/assets/logos/logo_2.svg",
  },
  openGraph: {
    locale: "fr_FR",
    type: "website",
    url: "https://nbesoro.com/",
    title: "Nbe Soro - Développeur Back-end Python",
    description: "Soro Nbe, développeur back-end Python Django avec 4 ans d'expérience, passionné par la création de solutions logicielles innovantes et fiables. Mentor expérimenté aidant les étudiants et les débutants à réussir dans le développement.",
    siteName: "Nbe Soro",
    images: ["/assets/images/portrait.png"],
  },
  twitter: {
    card: "summary",
    title: "Nbe Soro - Développeur Back-end Python",
    description: "Soro Nbe, développeur back-end Python Django avec 4 ans d'expérience, passionné par la création de solutions logicielles innovantes et fiables. Mentor expérimenté aidant les étudiants et les débutants à réussir dans le développement.",
    images: ["/assets/images/portrait.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Nbe soro",
  "url": "https://nbesoro.com",
  "image": "https://nbesoro.com/_next/image?url=%2Fassets%2Fnbesoro%2Fsoro.png&w=3840&q=75",
  "sameAs": [
    "https://www.youtube.com/@nbesoro",
    "https://linkedin.com/in/nbe-soro",
    "https://www.facebook.com/ibrahim.soro.507",
    "https://github.com/nbesoro",
    "https://nbesoro.com"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Abidjan, Côte d'Ivoire",
    "addressRegion": "CI",
    "postalCode": "99326",
    "email": "bonjour@nbesoro.com",
    "streetAddress": "Deux plateaux dokui",
    "addressCountry": "Côte d'Ivoire",
  },
  "birthPlace": "Touih, San-Pédro",
  "birthDate": "1994-03-04",
  "gender": "male",
  "nationality": "Ivorian",
  "telephone": "+225 07 48278174",
  "Description": "Avec 4 ans d'expérience en développement back-end Python Django, je suis passionné par la création de solutions logicielles innovantes et fiables. En plus de mes compétences en développement, je suis également un mentor expérimenté, aidant les étudiants et les débutants à acquérir les compétences nécessaires pour réussir dans le monde du développement.",
  "disambiguatingDescription": "Co-founder of Nis Consulting",
  "jobTitle": "Développeur back-end python django",
  "worksFor": {
    "@type": "Organization",
    "name": "NIS Consulting"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZHCL7C92QL" />
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZHCL7C92QL');
          `}
        </Script>
      </head>
      <body className={onest.className}>
        <main className='overflow-hidden'>{children}</main>
        <Footer />
        <ScrollToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
