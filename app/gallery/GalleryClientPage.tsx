"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import BackToTop from "@/components/back-to-top"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function GalleryClientPage() {
  const galleryCategories = [
    {
      title: "معدات وزن ADAS",
      description: "أحدث أجهزة وزن ومعايرة رادار ADAS",
      images: [
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "جهاز وزن ADAS متطور",
          title: "جهاز وزن ADAS الألماني",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "هدف معايرة الرادار",
          title: "أهداف معايرة الرادار",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "كمبيوتر تشخيص ADAS",
          title: "كمبيوتر تشخيص ADAS",
        },
      ],
    },
    {
      title: "ورشة العمل",
      description: "مساحات العمل المجهزة بأحدث المعدات",
      images: [
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "ورشة العمل الرئيسية",
          title: "ورشة العمل الرئيسية",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "منطقة رفع السيارات",
          title: "منطقة رفع السيارات",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "منطقة الأدوات",
          title: "منطقة الأدوات المنظمة",
        },
      ],
    },
    {
      title: "أجهزة التشخيص",
      description: "معدات التشخيص والفحص المتطورة",
      images: [
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "جهاز تشخيص OBD",
          title: "جهاز تشخيص OBD متطور",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "جهاز الذبذبات",
          title: "جهاز قياس الذبذبات",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "أجهزة القياس الكهربائية",
          title: "أجهزة القياس الكهربائية",
        },
      ],
    },
    {
      title: "خدمات المفاتيح",
      description: "معدات برمجة وصناعة المفاتيح",
      images: [
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "جهاز برمجة المفاتيح",
          title: "جهاز برمجة المفاتيح",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "جهاز قطع المفاتيح",
          title: "جهاز قطع المفاتيح",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "مجموعة المفاتيح الذكية",
          title: "مجموعة المفاتيح الذكية",
        },
      ],
    },
    {
      title: "العمل الميداني",
      description: "خدماتنا في المواقع المختلفة",
      images: [
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "سيارة الخدمة المتنقلة",
          title: "سيارة الخدمة المتنقلة",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "خدمة فتح السيارات",
          title: "خدمة فتح السيارات الطارئة",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "التشخيص الميداني",
          title: "خدمة التشخيص الميداني",
        },
      ],
    },
    {
      title: "شهادات الجودة",
      description: "شهادات الاعتماد والجودة",
      images: [
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "شهادات الاعتماد",
          title: "شهادات الاعتماد الدولية",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "شهادة ISO",
          title: "شهادة الجودة ISO",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "شهادات التدريب",
          title: "شهادات تدريب الفنيين",
        },
      ],
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
              معرض الصور
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              شاهد مركزنا ومعداتنا
              <span className="block text-2xl md:text-3xl text-cyan-300 mt-2">المتطورة والحديثة</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              تجول في معرض صورنا لتتعرف على مرافقنا المتطورة والمعدات الحديثة التي نستخدمها في خدماتنا
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {galleryCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">{category.title}</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">{category.description}</p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                        <p className="text-slate-300 text-sm">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">هل أعجبك ما رأيت؟</h2>
          <p className="text-xl mb-8 opacity-90">تعال وزرنا في أي من فروعنا لتشاهد معداتنا المتطورة بنفسك</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors"
              onClick={() => window.open("https://wa.me/966500849798", "_blank")}
            >
              احجز زيارة
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
