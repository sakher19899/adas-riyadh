import type { Metadata } from "next"
import TermsPageClient from "./TermsPageClient"

export const metadata: Metadata = {
  alternates: { canonical: `https://adas-center.com/terms` },
  title: "شروط الخدمة | مركز فحص وبرمجة السيارات المتقدم",
  description: "اطلع على شروط وأحكام الخدمة في مركز فحص وبرمجة السيارات المتقدم",
  keywords: "شروط الخدمة, أحكام الاستخدام, قوانين الخدمة",
}

export default function TermsPage() {
  return <TermsPageClient />
}
