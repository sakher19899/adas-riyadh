"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import BackToTop from "@/components/back-to-top"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, User, Car } from "lucide-react"
import Image from "next/image"

export default function TestimonialsClientPage() {
  const testimonials = [
    {
      name: "أحمد محمد العلي",
      service: "وزن رادار ADAS",
      rating: 5,
      comment: "خدمة ممتازة وسريعة! تم وزن رادار سيارتي بدقة عالية والفنيين محترفين جداً. أنصح بالتعامل معهم.",
      car: "BMW X5 2022",
      date: "منذ أسبوع",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "فهد بن سعد",
      service: "فحص شامل للسيارة",
      rating: 5,
      comment: "فحص دقيق ومفصل قبل شراء السيارة. التقرير كان شامل وساعدني في اتخاذ القرار الصحيح. شكراً لكم.",
      car: "Toyota Camry 2020",
      date: "منذ 3 أيام",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "خالد الراشد",
      service: "فتح سيارة مقفلة",
      rating: 5,
      comment: "استجابة سريعة جداً! وصلوا في خلال 15 دقيقة وفتحوا السيارة بدون أي ضرر. خدمة طوارئ ممتازة.",
      car: "Mercedes C-Class",
      date: "منذ يومين",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "محمد الغامدي",
      service: "برمجة مفتاح ذكي",
      rating: 5,
      comment: "برمجة سريعة ومضمونة. المفتاح يعمل بشكل مثالي والسعر معقول جداً. سأعود إليهم مرة أخرى بالتأكيد.",
      car: "Lexus ES 2021",
      date: "منذ 5 أيام",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "عبدالله القحطاني",
      service: "فحص كمبيوتر السيارة",
      rating: 5,
      comment: "تشخيص دقيق للمشكلة وحل سريع. الفنيين خبراء في التعامل مع الأنظمة الإلكترونية الحديثة.",
      car: "Audi A6 2019",
      date: "منذ أسبوعين",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "سعد المطيري",
      service: "صيانة إلكترونية",
      rating: 5,
      comment: "خدمة احترافية من الألف إلى الياء. حلوا مشكلة معقدة في النظام الإلكتروني بكفاءة عالية.",
      car: "Range Rover 2020",
      date: "منذ 4 أيام",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "ناصر الدوسري",
      service: "برمجة حساسات",
      rating: 5,
      comment: "عمل متقن ونتائج ممتازة. الحساسات تعمل بشكل مثالي الآن والخدمة كانت سريعة ومضمونة.",
      car: "Genesis G90",
      date: "منذ 6 أيام",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "راشد العتيبي",
      service: "فحص شامل + وزن ADAS",
      rating: 5,
      comment: "خدمة شاملة ومتميزة. فحصوا السيارة بالكامل ووزنوا نظام ADAS بدقة. فريق محترف ومتعاون.",
      car: "Volvo XC90 2021",
      date: "منذ 10 أيام",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "عبدالرحمن الشهري",
      service: "فتح بدي السيارة",
      rating: 5,
      comment: "حلوا مشكلة قفل البدي بسرعة وبدون أي ضرر. خدمة ممتازة وأسعار معقولة. أنصح بهم بقوة.",
      car: "Hyundai Sonata",
      date: "منذ أسبوع",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const stats = [
    { number: "1000+", label: "عميل راضي" },
    { number: "4.9/5", label: "تقييم العملاء" },
    { number: "98%", label: "نسبة الرضا" },
    { number: "24/7", label: "دعم العملاء" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white mb-6 text-lg px-6 py-2">
              آراء العملاء
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ماذا يقول عملاؤنا
              <span className="block text-2xl md:text-3xl text-cyan-300 mt-2">عن خدماتنا المتميزة</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              نفتخر بثقة عملائنا وتقييماتهم الإيجابية التي تحفزنا على تقديم أفضل الخدمات
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">تقييمات العملاء</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">اقرأ تجارب عملائنا الحقيقية مع خدماتنا المتخصصة</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-slate-700 text-center mb-6 leading-relaxed italic">"{testimonial.comment}"</p>

                  {/* Customer Info */}
                  <div className="border-t border-slate-200 pt-4">
                    <div className="flex items-center space-x-3 space-x-reverse mb-3">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                        <p className="text-sm text-slate-600">{testimonial.date}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 space-x-reverse text-sm">
                        <Car className="w-4 h-4 text-blue-500" />
                        <span className="text-slate-600">{testimonial.car}</span>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse text-sm">
                        <User className="w-4 h-4 text-green-500" />
                        <span className="text-slate-600">{testimonial.service}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">انضم إلى عملائنا الراضين</h2>
          <p className="text-xl mb-8 opacity-90">احجز موعدك الآن واكتشف لماذا يثق بنا آلاف العملاء</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors"
              onClick={() => window.open("https://wa.me/966500849798", "_blank")}
            >
              احجز موعدك الآن
            </button>
            <button
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors"
              onClick={() => window.open("tel:0500849798", "_blank")}
            >
              اتصل للاستفسار
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
