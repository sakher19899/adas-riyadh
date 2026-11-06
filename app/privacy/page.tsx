import type { Metadata } from "next"
import PrivacyClientPage from "./PrivacyClientPage"

export const metadata: Metadata = {
  title: "سياسة الخصوصية | مركز فحص وبرمجة السيارات المتقدم",
  description: "اطلع على سياسة الخصوصية وحماية البيانات في مركز فحص وبرمجة السيارات المتقدم",
  keywords: "سياسة الخصوصية, حماية البيانات, الأمان, الخصوصية",
}

export default function PrivacyPage() {
  return <PrivacyClientPage />
}
