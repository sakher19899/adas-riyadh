"use client"

import { MapPin, Phone, MessageCircle, Clock } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "الخدمات", href: "#services" },
    { name: "من نحن", href: "#about" },
    { name: "الفروع", href: "#branches" },
    { name: "تواصل معنا", href: "#contact" },
  ]

  const services = [
    "وزن ومعايرة رادار ADAS",
    "فحص شامل للسيارات",
    "فتح السيارات المقفلة",
    "برمجة المفاتيح الذكية",
    "فحص كمبيوتر السيارة",
    "كشف الأعطال",
    "برمجة الحساسات",
    "صيانة إلكترونية",
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">مركز فحص وبرمجة</h3>
                <p className="text-slate-300 text-sm">السيارات المتقدم</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              مركز متخصص في فحص وصيانة السيارات الحديثة مع التركيز على أنظمة ADAS المتقدمة. نقدم خدمات احترافية عالية
              الجودة في جميع أنحاء الرياض.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <button
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                onClick={() => window.open("https://wa.me/966500849798", "_blank")}
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <button
                className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                onClick={() => window.open("tel:0500849798", "_blank")}
              >
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">خدماتنا</h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service, index) => (
                <li key={index} className="text-slate-300 text-sm flex items-center space-x-2 space-x-reverse">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">رقم التواصل</p>
                  <p className="text-slate-300 text-sm">0500849798</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">المواقع</p>
                  <p className="text-slate-300 text-sm">فروع متعددة في الرياض</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse">
                <Clock className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">ساعات العمل</p>
                  <p className="text-slate-300 text-sm">8:00 ص - 11:00 م يومياً</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse">
                <MessageCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">واتساب</p>
                  <p className="text-slate-300 text-sm">متاح 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-300 text-sm mb-4 md:mb-0">
              <p>© {currentYear} مركز فحص وبرمجة السيارات المتقدم. جميع الحقوق محفوظة.</p>
            </div>
            <div className="text-slate-400 text-sm">
              <p>
                برعاية{" "}
                <a
                  href="https://www.host-ksa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  sakhr
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
