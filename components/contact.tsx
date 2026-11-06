"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, MessageCircle, Send, Headphones } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carType: "",
    service: "",
    message: "",
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message
    const message = `
مرحباً، أريد طلب خدمة:

الاسم: ${formData.name}
الجوال: ${formData.phone}
نوع السيارة: ${formData.carType}
الخدمة المطلوبة: ${formData.service}
تفاصيل إضافية: ${formData.message}
    `.trim()

    const whatsappUrl = `https://wa.me/966500849798?text=${encodeURIComponent(message)}`
    const opened = window.open(whatsappUrl, "_blank")
    if (opened) {
      toast({
        title: "تم فتح واتساب",
        description: "اضغط إرسال داخل واتساب لإتمام طلبك.",
      })
    } else {
      window.location.href = whatsappUrl
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "واتساب فوري",
      description: "للحصول على رد سريع",
      value: "0500849798",
      action: () => window.open("https://wa.me/966500849798", "_blank"),
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Phone,
      title: "اتصال مباشر",
      description: "للاستفسارات العاجلة",
      value: "0500849798",
      action: () => window.open("tel:0500849798", "_blank"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Headphones,
      title: "دعم العملاء",
      description: "خدمة 24/7",
      value: "متاح دائماً",
      action: () => window.open("https://wa.me/966500849798", "_blank"),
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-slate-100 via-white to-blue-50">
      <div className="container-enhanced">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="heading-primary mb-6">
            تواصل معنا الآن
            <span className="block text-2xl md:text-4xl text-gradient mt-2">نحن هنا لخدمتكم</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            نحن هنا لخدمتكم على مدار الساعة. تواصلوا معنا لأي استفسار أو لحجز موعد فوري
          </p>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <Card className="card-enhanced shadow-2xl animate-slide-in-right">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-glow-blue">
                <Send className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold text-slate-800">نموذج التواصل السريع</CardTitle>
              <p className="text-slate-600 text-lg">املأ النموذج وسنتواصل معك فوراً عبر واتساب</p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700 font-semibold text-base">
                      الاسم الكريم *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="اسمك الكريم"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="input-enhanced text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-700 font-semibold text-base">
                      رقم الجوال *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="05xxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="input-enhanced text-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="carType" className="text-slate-700 font-semibold text-base">
                    نوع وموديل السيارة
                  </Label>
                  <Input
                    id="carType"
                    type="text"
                    placeholder="مثال: تويوتا كامري 2020"
                    value={formData.carType}
                    onChange={(e) => handleInputChange("carType", e.target.value)}
                    className="input-enhanced text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-slate-700 font-semibold text-base">
                    الخدمة المطلوبة *
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)} required>
                    <SelectTrigger className="input-enhanced text-lg">
                      <SelectValue placeholder="اختر الخدمة المطلوبة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="adas">وزن ومعايرة رادار ADAS</SelectItem>
                      <SelectItem value="inspection">فحص شامل للسيارة</SelectItem>
                      <SelectItem value="unlock">فتح سيارة مقفلة</SelectItem>
                      <SelectItem value="programming">برمجة مفاتيح</SelectItem>
                      <SelectItem value="computer">فحص كمبيوتر</SelectItem>
                      <SelectItem value="diagnosis">كشف أعطال</SelectItem>
                      <SelectItem value="sensors">برمجة حساسات</SelectItem>
                      <SelectItem value="maintenance">صيانة إلكترونية</SelectItem>
                      <SelectItem value="other">خدمة أخرى</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700 font-semibold text-base">
                    تفاصيل إضافية
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="اكتب تفاصيل المشكلة أو أي معلومات إضافية..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    className="input-enhanced text-lg"
                  />
                </div>

                <Button type="submit" className="w-full btn-primary">
                  <Send className="w-5 h-5 ml-2" />
                  إرسال عبر واتساب
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Enhanced Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            {contactMethods.map((method, index) => (
              <Card key={index} className="card-enhanced shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex items-center space-x-6 space-x-reverse">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r ${method.color} text-white shadow-md`}
                  >
                    <method.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-slate-800">{method.title}</CardTitle>
                    <p className="text-slate-600">{method.description}</p>
                    <Button variant="link" className="text-blue-500 hover:text-blue-700 p-0" onClick={method.action}>
                      {method.value}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
