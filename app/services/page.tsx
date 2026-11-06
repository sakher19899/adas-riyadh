import type { Metadata } from "next"
import ServicesClientPage from "./ServicesClientPage"

export const metadata: Metadata = {
  alternates: { canonical: `https://adas-center.com/services` },
  title: "خدماتنا المتخصصة | مركز فحص وبرمجة السيارات المتقدم",
  description: "تعرف على جميع خدماتنا المتخصصة في فحص السيارات ووزن رادار ADAS وبرمجة المفاتيح وفتح السيارات في الرياض",
  keywords: "خدمات فحص السيارات, وزن ADAS, برمجة مفاتيح, فتح سيارات, فحص كمبيوتر",
}

export default function ServicesPage() {
  return <ServicesClientPage />
}
