import type { Metadata } from "next"
import GalleryClientPage from "./GalleryClientPage"

export const metadata: Metadata = {
  alternates: { canonical: `https://adas-center.com/gallery` },
  title: "معرض الصور | مركز فحص وبرمجة السيارات المتقدم",
  description: "شاهد معرض صور مركزنا والمعدات المتطورة والخدمات المقدمة في فحص السيارات ووزن ADAS",
  keywords: "معرض صور, مركز فحص السيارات, معدات ADAS, ورشة السيارات",
}

export default function GalleryPage() {
  return <GalleryClientPage />
}
