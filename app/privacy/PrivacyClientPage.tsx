"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import BackToTop from "@/components/back-to-top"
import { Shield, FileText, Lock, Eye, UserCheck, AlertTriangle } from "lucide-react"

export default function PrivacyClientPage() {
  const privacySections = [
    {
      icon: Shield,
      title: "التزامنا بالخصوصية",
      content:
        "نحن في مركز فحص وبرمجة السيارات المتقدم نلتزم بحماية خصوصية عملائنا وأمان بياناتهم الشخصية. هذه السياسة توضح كيفية جمع واستخدام وحماية المعلومات التي نحصل عليها منك.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileText,
      title: "المعلومات التي نجمعها",
      content:
        "نجمع المعلومات التالية: الاسم الكامل، رقم الهاتف، عنوان البريد الإلكتروني، نوع وموديل السيارة، تفاصيل الخدمة المطلوبة. نجمع هذه المعلومات فقط عند تقديم الخدمة أو التواصل معنا.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Lock,
      title: "كيف نحمي بياناتك",
      content:
        "نستخدم أحدث تقنيات الأمان لحماية بياناتك الشخصية. جميع المعلومات محفوظة في خوادم آمنة ومشفرة. لا نشارك بياناتك مع أي طرف ثالث دون موافقتك الصريحة.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Eye,
      title: "استخدام المعلومات",
      content:
        "نستخدم معلوماتك الشخصية لتقديم الخدمات المطلوبة، التواصل معك، تحسين خدماتنا، إرسال تحديثات مهمة حول خدماتنا. لا نستخدم معلوماتك لأغراض تسويقية دون موافقتك.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: UserCheck,
      title: "حقوقك",
      content:
        "لك الحق في الوصول إلى بياناتك الشخصية، تعديل أو حذف معلوماتك، سحب الموافقة في أي وقت، تقديم شكوى إذا كنت تعتقد أن حقوقك في الخصوصية قد انتهكت.",
      color: "from-teal-500 to-blue-500",
    },
    {
      icon: AlertTriangle,
      title: "تحديث السياسة",
      content:
        "قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سنقوم بإشعارك بأي تغييرات مهمة عبر وسائل التواصل المتاحة. ننصحك بمراجعة هذه الصفحة بانتظام للاطلاع على أي تحديثات.",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              سياسة الخصوصية
              <span className="block text-2xl md:text-3xl text-cyan-300 mt-2">وحماية البيانات</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              نحن ملتزمون بحماية خصوصيتك وأمان بياناتك الشخصية وفقاً لأعلى المعايير
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {privacySections.map((section, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">{section.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">لديك أسئلة حول الخصوصية؟</h2>
          <p className="text-xl mb-8 opacity-90">تواصل معنا للحصول على إجابات واضحة حول سياسة الخصوصية</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors"
              onClick={() => window.open("https://wa.me/966500849798", "_blank")}
            >
              تواصل عبر واتساب
            </button>
            <button
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              onClick={() => window.open("tel:0500849798", "_blank")}
            >
              اتصل بنا
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}
