import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Contact from "@/components/contact"
import FAQ from "@/components/faq"
import Branches from "@/components/branches"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import BackToTop from "@/components/back-to-top"

export const metadata: Metadata = {
  title: "فحص ووزن ADAS في الرياض | مركز فحص السيارات المتقدم",
  description:
    "فحص شامل، برمجة مفاتيح، فتح سيارات، وزن رادار ADAS – أكثر من فرع في صناعية الصيانة. اتصل الآن: 0500849798",
  keywords: "فحص ADAS الرياض, وزن رادار ADAS, مركز فحص سيارات متقدم, برمجة مفاتيح ذكية, فتح سيارات مقفلة",
  openGraph: {
    title: "فحص ووزن ADAS في الرياض | مركز فحص السيارات المتقدم",
    description: "فحص شامل، برمجة مفاتيح، فتح سيارات، وزن رادار ADAS – أكثر من فرع في صناعية الصيانة",
    type: "website",
    locale: "ar_SA",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://adas-center.com",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Branches />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}
