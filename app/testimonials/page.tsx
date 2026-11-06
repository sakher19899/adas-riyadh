import type { Metadata } from "next"
import TestimonialsClientPage from "./TestimonialsClientPage"

export const metadata: Metadata = {
  title: "آراء العملاء | مركز فحص وبرمجة السيارات المتقدم",
  description: "اقرأ تقييمات وآراء عملائنا حول خدماتنا المتميزة في فحص السيارات ووزن ADAS وبرمجة المفاتيح",
  keywords: "آراء العملاء, تقييمات, شهادات العملاء, خدمة متميزة",
}

export default function TestimonialsPage() {
  return <TestimonialsClientPage />
}
