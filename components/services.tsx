"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Radar, Car, Key, Wrench, Smartphone, Settings, CheckCircle, Clock, Star, MapPin, Eye } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Radar,
      title: "وزن ومعايرة رادار ADAS",
      description:
        "خدمة متخصصة لوزن ومعايرة أنظمة ADAS المتقدمة ونقطة العمياء بأحدث الأجهزة والتقنيات العالمية المعتمدة",
      features: ["معايرة رادار دقيقة 100%", "وزن نقطة العمياء", "أجهزة حديثة معتمدة", "فنيين مختصين", "تقرير مفصل"],
      color: "from-blue-500 to-cyan-500",
      badge: "الأكثر طلباً",
      price: "من 300 ريال",
      rating: 4.9,
    },
    {
      icon: MapPin,
      title: "ورشة متنقلة ADAS",
      description: "خدمة ورشة متنقلة لوزن رادار ADAS ونقطة العمياء في موقعك - نأتي إليك أينما كنت في الرياض",
      features: ["خدمة في الموقع", "ورشة متنقلة مجهزة", "وزن ADAS متنقل", "نقطة عمياء متنقلة", "توفير الوقت والجهد"],
      color: "from-green-500 to-emerald-500",
      badge: "ورشة متنقلة",
      price: "من 400 ريال",
      rating: 4.8,
    },
    {
      icon: Eye,
      title: "معايرة نقطة العمياء",
      description: "خدمة متخصصة في معايرة وضبط نقطة العمياء (Blind Spot) المرتبطة بنظام الرادار لضمان السلامة القصوى",
      features: ["معايرة نقطة العمياء", "ضبط حساسات الرادار", "اختبار دقة النظام", "ضمان السلامة", "تقرير فني مفصل"],
      color: "from-orange-500 to-red-500",
      badge: "نقطة العمياء",
      price: "من 250 ريال",
      rating: 4.9,
    },
    {
      icon: Wrench,
      title: "فحص شامل للسيارات",
      description: "فحص كامل ومفصل للسيارات الجديدة والمستعملة مع تقرير شامل عن حالة السيارة وتوصيات الصيانة",
      features: ["فحص ما قبل الشراء", "تقرير مفصل 50+ نقطة", "فحص إلكتروني", "فحص ميكانيكي", "توصيات مجانية"],
      color: "from-purple-500 to-pink-500",
      badge: "شامل ومفصل",
      price: "من 150 ريال",
      rating: 4.8,
    },
    {
      icon: Car,
      title: "فتح السيارات المقفلة",
      description: "فتح جميع أنواع السيارات والأبواب بدون ضرر وبأسرع وقت ممكن باستخدام أدوات احترافية متطورة",
      features: ["بدون ضرر نهائياً", "جميع أنواع السيارات", "خدمة سريعة", "متوفر 24/7", "فنيين خبراء"],
      color: "from-teal-500 to-blue-500",
      badge: "طوارئ 24/7",
      price: "من 100 ريال",
      rating: 5.0,
    },
    {
      icon: Key,
      title: "برمجة المفاتيح الذكية",
      description: "برمجة المفاتيح العادية والذكية لجميع أنواع السيارات الحديثة مع ضمان العمل لمدة سنة كاملة",
      features: ["مفاتيح ذكية متطورة", "مفاتيح عادية", "برمجة فورية", "جميع الماركات", "ضمان سنة كاملة"],
      color: "from-indigo-500 to-purple-500",
      badge: "تقنية متقدمة",
      price: "من 200 ريال",
      rating: 4.9,
    },
    {
      icon: Smartphone,
      title: "فحص كمبيوتر السيارة",
      description: "قراءة وتشخيص أعطال كمبيوتر السيارة وحل المشاكل الإلكترونية بأحدث أجهزة التشخيص العالمية",
      features: ["قراءة جميع الأعطال", "تشخيص دقيق ومتقدم", "حلول سريعة وفعالة", "أجهزة متطورة", "مسح الأعطال"],
      color: "from-cyan-500 to-teal-500",
      badge: "تشخيص دقيق",
      price: "من 80 ريال",
      rating: 4.7,
    },
    {
      icon: Settings,
      title: "برمجة الحساسات",
      description: "برمجة وإعادة تعيين جميع أنواع حساسات السيارة الحديثة مع الاختبار الشامل وضمان العمل",
      features: ["جميع أنواع الحساسات", "برمجة دقيقة ومتقنة", "إعادة تعيين كاملة", "اختبار شامل", "ضمان العمل"],
      color: "from-rose-500 to-pink-500",
      badge: "حساسات متقدمة",
      price: "من 150 ريال",
      rating: 4.8,
    },
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container-enhanced">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in">
          <Badge className="badge-primary text-lg px-6 py-2 mb-6">خدماتنا المتخصصة</Badge>
          <h2 className="heading-primary mb-6">
            خدمات ADAS احترافية متكاملة
            <span className="block text-2xl md:text-4xl text-gradient mt-2">ورشة متنقلة ونقطة العمياء</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            نقدم مجموعة شاملة من الخدمات المتخصصة في وزن رادار ADAS ونقطة العمياء مع ورشة متنقلة تأتي إليك
          </p>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="card-enhanced hover-lift group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4 relative">
                {/* Enhanced Badge */}
                <div className="absolute -top-2 -right-2 z-10">
                  <Badge className={`bg-gradient-to-r ${service.color} text-white border-0 shadow-lg`}>
                    {service.badge}
                  </Badge>
                </div>

                {/* Enhanced Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl animate-glow`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center items-center mt-3 space-x-1 space-x-reverse">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(service.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-slate-600 mr-2">{service.rating}</span>
                  </div>
                </div>

                <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-center">
                <CardDescription className="text-slate-600 mb-6 leading-relaxed text-base">
                  {service.description}
                </CardDescription>

                {/* Enhanced Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3 space-x-reverse text-sm text-slate-700 group-hover:text-slate-800 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="border-t border-slate-200 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 space-x-reverse text-sm text-slate-600">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>خدمة سريعة</span>
                    </div>
                    <div className="text-lg font-bold text-green-600">{service.price}</div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      className="flex-1 btn-secondary"
                      onClick={() =>
                        window.open(`https://wa.me/966500849798?text=${encodeURIComponent(`أريد حجز موعد لخدمة: ${service.title}`)}`, "_blank")
                      }
                    >
                      احجز الآن
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 hover-scale bg-transparent"
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

        {/* Enhanced Call to Action */}
        <div className="text-center animate-fade-in">
          <div className="glass rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500 opacity-90"></div>
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800&text=Professional+Service')] bg-cover bg-center opacity-10"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                وزن ADAS دقيق ونقطة عمياء آمنة
                <span className="block text-xl md:text-2xl mt-2 opacity-90">ورشة متنقلة في أي مكان بالرياض!</span>
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                خدمة عملاء متاحة يوميًا من 8 صباحًا إلى 11 مساءً مع ضمان الجودة والاحترافية
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-slate-100 px-10 py-4 text-lg font-semibold shadow-2xl hover-lift"
                  onClick={() => window.open("tel:0500849798", "_blank")}
                >
                  اتصل الآن: 0500849798
                </Button>
                <Button
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 text-lg font-semibold hover-lift bg-transparent"
                  onClick={() => window.open("https://wa.me/966500849798", "_blank")}
                >
                  واتساب فوري
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
