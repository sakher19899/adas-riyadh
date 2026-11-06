"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "ما هو نظام ADAS ولماذا يجب فحصه؟",
      answer:
        "ADAS هو نظام متقدم لمساعدة السائق يشمل الكاميرات والرادارات والحساسات. يحتاج وزن دقيق بعد الصدمات أو الإصلاحات لضمان عمله بشكل صحيح وآمن.",
    },
    {
      question: "هل تفتحون السيارات بدون ضرر؟",
      answer: "نعم، نحن متخصصون في فتح جميع أنواع السيارات بدون خدش أو ضرر باستخدام أدوات احترافية وتقنيات متقدمة.",
    },
    {
      question: "هل تقدمون الخدمة في الموقع؟",
      answer:
        "بعض الخدمات مثل فتح السيارات وفحص الكمبيوتر متوفرة ميدانياً، والخدمات المتقدمة مثل وزن ADAS تتم داخل الورشة المجهزة.",
    },
    {
      question: "كم يستغرق وزن رادار ADAS؟",
      answer: "عادة يستغرق وزن ومعايرة رادار ADAS من 30 دقيقة إلى ساعة حسب نوع السيارة ونظام ADAS المستخدم.",
    },
    {
      question: "هل تدعمون جميع أنواع السيارات؟",
      answer: "نعم، نحن نخدم أكثر من 50 نوع وماركة سيارة مختلفة بما في ذلك السيارات الحديثة والكلاسيكية.",
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer: "نقبل الدفع نقداً أو عن طريق التحويل البنكي حسب رغبة العميل وراحته.",
    },
    {
      question: "هل تقدمون ضمان على الخدمات؟",
      answer: "نعم، نقدم ضمان على جميع خدماتنا مع متابعة ما بعد الخدمة لضمان رضا العملاء.",
    },
    {
      question: "كيف يمكنني حجز موعد؟",
      answer: "يمكنك الاتصال بنا على 0500849798 أو التواصل عبر واتساب لحجز موعد في أي من فروعنا.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">الأسئلة الشائعة</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">إجابات على أكثر الأسئلة شيوعاً حول خدماتنا المتخصصة</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-right hover:bg-slate-50 transition-colors duration-200"
                    onClick={() => toggleItem(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-800 text-right">{faq.question}</h3>
                      </div>
                      <div className="flex-shrink-0 mr-4">
                        {openItems.includes(index) ? (
                          <ChevronUp className="w-5 h-5 text-slate-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-600" />
                        )}
                      </div>
                    </div>
                  </button>

                  {openItems.includes(index) && (
                    <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-200">
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 mr-11">
                        <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">لديك سؤال آخر؟</h3>
            <p className="text-lg mb-6 text-slate-300">لا تتردد في التواصل معنا للحصول على إجابة فورية</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open("https://wa.me/966500849798", "_blank")}
              >
                تواصل عبر واتساب
              </button>
              <button
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open("tel:0500849798", "_blank")}
              >
                اتصل الآن
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
