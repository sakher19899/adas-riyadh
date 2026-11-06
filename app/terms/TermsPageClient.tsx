"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import BackToTop from "@/components/back-to-top"
import { FileText, CheckCircle, AlertCircle, Scale, Users, Shield } from "lucide-react"

export default function TermsPageClient() {
  const termsSections = [
    {
      icon: FileText,
      title: "قبول الشروط",
      content:
        "باستخدام خدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام خدماتنا.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: CheckCircle,
      title: "الخدمات المقدمة",
      content:
        "نقدم خدمات فحص وصيانة السيارات، وزن رادار ADAS، برمجة المفاتيح، فتح السيارات المقفلة، وخدمات أخرى متعلقة بالسيارات. جميع الخدمات تخضع للشروط المذكورة هنا.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Scale,
      title: "المسؤوليات والالتزامات",
      content:
        "نلتزم بتقديم خدمات عالية الجودة وفقاً للمعايير المهنية. العميل مسؤول عن تقديم معلومات صحيحة ودقيقة عن السيارة والخدمة المطلوبة.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: AlertCircle,
      title: "إخلاء المسؤولية",
      content:
        "نحن غير مسؤولين عن أي أضرار غير مباشرة أو تبعية قد تنتج عن استخدام خدماتنا. مسؤوليتنا محدودة بقيمة الخدمة المقدمة فقط.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      title: "حقوق العملاء",
      content:
        "للعملاء الحق في الحصول على خدمة عالية الجودة، معاملة عادلة ومحترمة، شفافية في الأسعار والخدمات، ضمان على الخدمات المقدمة حسب الاتفاق.",
      color: "from-teal-500 to-blue-500",
    },
    {
      icon: Shield,
      title: "تعديل الشروط",
      content:
        "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إشعار العملاء بأي تغييرات مهمة. استمرار استخدام خدماتنا يعني قبول الشروط المحدثة.",
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              شروط الخدمة
              <span className="block text-2xl md:text-3xl text-cyan-300 mt-2">والأحكام العامة</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              تعرف على شروط وأحكام استخدام خدماتنا لضمان تجربة آمنة ومرضية للجميع
            </p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {termsSections.map((section, index) => (
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

          {/* Additional Terms */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">معلومات إضافية مهمة</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3">الدفع والأسعار</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• الأسعار قابلة للتغيير دون إشعار مسبق</li>
                    <li>• الدفع مطلوب عند تقديم الخدمة</li>
                    <li>• نقبل الدفع نقداً أو تحويل بنكي</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">الضمان</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• ضمان على جميع الخدمات حسب النوع</li>
                    <li>• الضمان لا يشمل سوء الاستخدام</li>
                    <li>• يجب الإبلاغ عن المشاكل فوراً</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">لديك استفسار حول الشروط؟</h2>
          <p className="text-xl mb-8 opacity-90">فريق خدمة العملاء جاهز للإجابة على جميع استفساراتك</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors"
              onClick={() => window.open("https://wa.me/966500849798", "_blank")}
            >
              تواصل عبر واتساب
            </button>
            <button
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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
