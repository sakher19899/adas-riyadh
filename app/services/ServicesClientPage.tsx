"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import BackToTop from "@/components/back-to-top"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Radar, Car, Key, Wrench, Smartphone, Settings, Shield, CheckCircle, Clock, Award } from "lucide-react"
import Image from "next/image"

export default function ServicesClientPage() {
  const services = [
    {
      icon: Radar,
      title: "وزن ومعايرة رادار ADAS",
      description: "خدمة متخصصة لوزن ومعايرة أنظمة ADAS المتقدمة بأحدث الأجهزة والتقنيات العالمية",
      features: ["معايرة دقيقة 100%", "أجهزة حديثة معتمدة", "فنيين مختصين", "ضمان الجودة", "تقرير مفصل"],
      price: "ابتداءً من 300 ريال",
      duration: "30-60 دقيقة",
      image: "/adas-calibration.png",
      color: "from-blue-500 to-cyan-500",
      badge: "الأكثر طلباً",
    },
    {
      icon: Wrench,
      title: "فحص شامل للسيارات",
      description: "فحص كامل ومفصل للسيارات الجديدة والمستعملة مع تقرير شامل عن حالة السيارة",
      features: ["فحص ما قبل الشراء", "تقرير مفصل 50+ نقطة", "فحص إلكتروني", "فحص ميكانيكي", "توصيات الصيانة"],
      price: "ابتداءً من 150 ريال",
      duration: "45-90 دقيقة",
      image: "/car-inspection-tools.png",
      color: "from-green-500 to-emerald-500",
      badge: "شامل",
    },
    {
      icon: Car,
      title: "فتح السيارات المقفلة",
      description: "فتح جميع أنواع السيارات والأبواب بدون ضرر وبأسرع وقت ممكن باستخدام أدوات احترافية",
      features: ["بدون ضرر نهائياً", "جميع أنواع السيارات", "خدمة سريعة", "متوفر 24/7", "فنيين خبراء"],
      price: "ابتداءً من 100 ريال",
      duration: "5-15 دقيقة",
      image: "/placeholder-zt3y0.png",
      color: "from-purple-500 to-pink-500",
      badge: "طوارئ 24/7",
    },
    {
      icon: Key,
      title: "برمجة المفاتيح الذكية",
      description: "برمجة المفاتيح العادية والذكية لجميع أنواع السيارات الحديثة مع الضمان",
      features: ["مفاتيح ذكية", "مفاتيح عادية", "برمجة فورية", "جميع الماركات", "ضمان سنة"],
      price: "ابتداءً من 200 ريال",
      duration: "15-30 دقيقة",
      image: "/smart-car-key-programming.png",
      color: "from-orange-500 to-red-500",
      badge: "تقنية متقدمة",
    },
    {
      icon: Smartphone,
      title: "فحص كمبيوتر السيارة",
      description: "قراءة وتشخيص أعطال كمبيوتر السيارة وحل المشاكل الإلكترونية بأحدث الأجهزة",
      features: ["قراءة جميع الأعطال", "تشخيص دقيق", "حلول سريعة", "أجهزة متطورة", "مسح الأعطال"],
      price: "ابتداءً من 80 ريال",
      duration: "20-40 دقيقة",
      image: "/placeholder-7srvs.png",
      color: "from-teal-500 to-blue-500",
      badge: "تشخيص دقيق",
    },
    {
      icon: Settings,
      title: "برمجة الحساسات",
      description: "برمجة وإعادة تعيين جميع أنواع حساسات السيارة الحديثة مع الاختبار الشامل",
      features: ["جميع أنواع الحساسات", "برمجة دقيقة", "إعادة تعيين", "اختبار شامل", "ضمان العمل"],
      price: "ابتداءً من 120 ريال",
      duration: "25-45 دقيقة",
      image: "/placeholder.svg?height=300&width=400",
      color: "from-cyan-500 to-teal-500",
      badge: "حساسات متقدمة",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white mb-6 text-lg px-6 py-2">
              خدماتنا المتخصصة
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              خدمات احترافية متكاملة
              <span className="block text-2xl md:text-3xl text-cyan-300 mt-2">لجميع أنواع السيارات الحديثة</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              نقدم مجموعة شاملة من الخدمات المتخصصة في فحص وصيانة السيارات مع التركيز على أنظمة ADAS المتقدمة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                onClick={() => window.open("https://wa.me/966500849798", "_blank")}
              >
                احجز موعدك الآن
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                onClick={() => window.open("tel:0500849798", "_blank")}
              >
                اتصل للاستفسار
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm"
              >
                <div className="relative">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`bg-gradient-to-r ${service.color} text-white border-0`}>{service.badge}</Badge>
                  </div>
                  <div
                    className={`absolute bottom-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-800 mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">{service.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">المميزات:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price and Duration */}
                    <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-slate-600">{service.duration}</span>
                      </div>
                      <div className="text-lg font-bold text-green-600">{service.price}</div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button
                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                        onClick={() =>
                          window.open(`https://wa.me/966500849798?text=أريد حجز موعد لخدمة: ${service.title}`, "_blank")
                        }
                      >
                        احجز الآن
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 bg-transparent"
                        onClick={() => window.open("tel:0500849798", "_blank")}
                      >
                        استفسار
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">لماذا تختار خدماتنا؟</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              نحن نقدم أفضل الخدمات المتخصصة مع ضمان الجودة والاحترافية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">خبرة وجودة</h3>
              <p className="text-slate-300">
                سنوات من الخبرة في مجال فحص وصيانة السيارات الحديثة مع أعلى معايير الجودة
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">أحدث التقنيات</h3>
              <p className="text-slate-300">
                نستخدم أحدث الأجهزة والتقنيات العالمية في جميع خدماتنا لضمان أفضل النتائج
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">ضمان شامل</h3>
              <p className="text-slate-300">نقدم ضمان على جميع خدماتنا مع متابعة ما بعد الخدمة لضمان رضا العملاء</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}
