"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Phone, Clock } from "lucide-react"

export default function Branches() {
  const branches = [
    {
      name: "صناعية الخليج",
      address: "الرياض - صناعية الخليج",
      phone: "0500849798",
      hours: "8:00 ص - 11:00 م",
      mapUrl: "https://maps.google.com/?q=الرياض+صناعية+الخليج",
      featured: true,
    },
    {
      name: "صناعية أم الحمام",
      address: "الرياض - صناعية أم الحمام",
      phone: "0500849798",
      hours: "8:00 ص - 11:00 م",
      mapUrl: "https://maps.google.com/?q=الرياض+صناعية+أم+الحمام",
      featured: false,
    },
    {
      name: "صناعية الشمال (حي القيروان)",
      address: "الرياض - حي القيروان",
      phone: "0500849798",
      hours: "8:00 ص - 11:00 م",
      mapUrl: "https://maps.google.com/?q=الرياض+حي+القيروان",
      featured: false,
    },
    {
      name: "صناعية العروبة",
      address: "الرياض - صناعية العروبة",
      phone: "0500849798",
      hours: "8:00 ص - 11:00 م",
      mapUrl: "https://maps.google.com/?q=الرياض+صناعية+العروبة",
      featured: false,
    },
    {
      name: "صناعية العاصمة",
      address: "الرياض - صناعية العاصمة",
      phone: "0500849798",
      hours: "8:00 ص - 11:00 م",
      mapUrl: "https://maps.google.com/?q=الرياض+صناعية+العاصمة",
      featured: false,
    },
    {
      name: "صناعية النسيم",
      address: "الرياض - صناعية النسيم",
      phone: "0500849798",
      hours: "8:00 ص - 11:00 م",
      mapUrl: "https://maps.google.com/?q=الرياض+صناعية+النسيم",
      featured: false,
    },
    {
      name: "صناعية الدائري",
      address: "الرياض - صناعية الدائري",
      phone: "0500849798",
      hours: "8:00 ص - 11:00 م",
      mapUrl: "https://maps.google.com/?q=الرياض+صناعية+الدائري",
      featured: false,
    },
  ]

  return (
    <section id="branches" className="py-20 bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">فروعنا في الرياض</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            لدينا أكثر من فرع في أشهر الصناعيات في الرياض لخدمتكم في أي وقت ومن أي مكان
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main Branch */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-0 shadow-2xl">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold">الفرع الرئيسي</CardTitle>
              <p className="text-blue-100">أحد أبرز الفروع في صناعية الصيانة</p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center justify-center space-x-2 space-x-reverse">
                  <MapPin className="w-5 h-5 text-blue-200" />
                  <span>صناعية الخليج - الرياض</span>
                </div>
                <div className="flex items-center justify-center space-x-2 space-x-reverse">
                  <Phone className="w-5 h-5 text-blue-200" />
                  <span>0500849798</span>
                </div>
                <div className="flex items-center justify-center space-x-2 space-x-reverse">
                  <Clock className="w-5 h-5 text-blue-200" />
                  <span>8:00 ص - 11:00 م</span>
                </div>
              </div>
              <Button
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => window.open(branches[0].mapUrl, "_blank")}
              >
                <Navigation className="w-4 h-4 ml-2" />
                عرض على الخريطة
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Other Branches */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.slice(1).map((branch, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-slate-800">{branch.name}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 space-x-reverse text-slate-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{branch.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse text-slate-600">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{branch.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{branch.hours}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => window.open(branch.mapUrl, "_blank")}
                  >
                    <Navigation className="w-4 h-4 ml-1" />
                    خريطة
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                    onClick={() => window.open(`tel:${branch.phone}`, "_blank")}
                  >
                    <Phone className="w-4 h-4 ml-1" />
                    اتصال
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Find Nearest Branch */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">اعثر على أقرب فرع إليك</h3>
            <p className="text-lg mb-6 text-slate-300">
              نحن متواجدون في جميع أنحاء الرياض لخدمتكم بأفضل جودة وأسرع وقت
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
              onClick={() => window.open("https://maps.google.com/?q=مركز+فحص+سيارات+الرياض", "_blank")}
            >
              <Navigation className="w-5 h-5 ml-2" />
              تحديد أقرب فرع
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
