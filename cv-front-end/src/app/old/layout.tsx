import Footer from '@/components/layouts-old/Footer'

export default function OldLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
