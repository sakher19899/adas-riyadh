import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "فحص ووزن ADAS في الرياض | مركز فحص السيارات المتقدم",
  description:
    "فحص شامل، برمجة مفاتيح، فتح سيارات، وزن رادار ADAS – أكثر من فرع في صناعية الصيانة. اتصل الآن: 0500849798",
  keywords:
    "فحص ADAS الرياض, وزن رادار ADAS, مركز فحص سيارات متقدم, برمجة مفاتيح ذكية, فتح سيارات مقفلة, كشف أعطال سيارات, فحص كمبيوتر متنقل, صيانة إلكترونيات السيارات, برمجة حساسات",
  authors: [{ name: "مركز فحص وبرمجة السيارات المتقدم" }],
  creator: "مركز فحص وبرمجة السيارات المتقدم",
  publisher: "مركز فحص وبرمجة السيارات المتقدم",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://adas-center.com",
    title: "فحص ووزن ADAS في الرياض | مركز فحص السيارات المتقدم",
    description: "فحص شامل، برمجة مفاتيح، فتح سيارات، وزن رادار ADAS – أكثر من فرع في صناعية الصيانة",
    siteName: "مركز فحص وبرمجة السيارات المتقدم",
  },
  twitter: {
    card: "summary_large_image",
    title: "فحص ووزن ADAS في الرياض | مركز فحص السيارات المتقدم",
    description: "فحص شامل، برمجة مفاتيح، فتح سيارات، وزن رادار ADAS – أكثر من فرع في صناعية الصيانة",
  },
  alternates: {
    canonical: "https://adas-center.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={cairo.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
