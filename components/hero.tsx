"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Car, Radar, Key, Star, Award, MapPin, Eye } from "lucide-react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "وزن ومعايرة رادار ADAS",
      subtitle: "وزن دقيق للرادار ونقطة العمياء - ورشة متنقلة!",
      icon: Radar,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "فتح السيارات المقفلة",
      subtitle: "سيارتك مقفلة؟ نفتحها بدون ضرر وفي دقائق!",
      icon: Car,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "برمجة المفاتيح الذكية",
      subtitle: "فقدت مفتاحك؟ نبرمج لك مفتاح جديد فورًا!",
      icon: Key,
      color: "from-purple-600 to-pink-500",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Modern+Car+Technology')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>

        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-48 h-48 bg-green-500/20 rounded-full blur-xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/4 right-1/4 w-20 h-20 bg-purple-500/20 rounded-full blur-lg animate-float"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
      </div>

      <div className="container-enhanced relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Enhanced Main Content */}
          <div className="mb-12 animate-fade-in">
            {/* Floating Icon */}
            <div
              className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r ${slides[currentSlide].color} mb-8 animate-float shadow-glow-blue`}
            >
              {slides[currentSlide].icon &&
                React.createElement(slides[currentSlide].icon, { className: "w-12 h-12 text-white" })}
            </div>

            {/* Enhanced Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="block animate-slide-in-right">مركز فحص وبرمجة</span>
              <span className="block text-3xl md:text-5xl lg:text-6xl bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent animate-slide-in-left mt-2">
                السيارات المتقدم ADAS
              </span>
            </h1>

            {/* Enhanced Subtitle Section */}
            <div className="h-24 mb-8 animate-scale-in">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-cyan-300 font-bold mb-3 animate-fade-in">
                {slides[currentSlide].title}
              </h2>
              <p className="text-lg md:text-xl text-slate-300 animate-fade-in leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex justify-center items-center space-x-8 space-x-reverse mb-8 animate-fade-in">
              <div className="flex items-center space-x-2 space-x-reverse text-yellow-400">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-white font-semibold">4.9/5</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse text-green-400">
                <Award className="w-6 h-6" />
                <span className="text-white font-semibold">1000+ عميل راضي</span>
              </div>
            </div>
          </div>

          {/* Enhanced Services Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-in">
            <div className="glass-dark rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover-lift group">
              <Radar className="w-10 h-10 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-white text-sm font-semibold">وزن ADAS</p>
              <p className="text-slate-300 text-xs mt-1">رادار ونقطة عمياء</p>
            </div>
            <div className="glass-dark rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover-lift group">
              <MapPin className="w-10 h-10 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-white text-sm font-semibold">ورشة متنقلة</p>
              <p className="text-slate-300 text-xs mt-1">نأتي إليك</p>
            </div>
            <div className="glass-dark rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover-lift group">
              <Key className="w-10 h-10 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-white text-sm font-semibold">برمجة المفاتيح</p>
              <p className="text-slate-300 text-xs mt-1">ذكية وعادية</p>
            </div>
            <div className="glass-dark rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover-lift group">
              <Eye className="w-10 h-10 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-white text-sm font-semibold">نقطة العمياء</p>
              <p className="text-slate-300 text-xs mt-1">معايرة دقيقة</p>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in">
            <Button
              size="lg"
              className="btn-secondary text-lg px-10 py-4 shadow-glow-green"
              onClick={() => window.open("https://wa.me/966500849798", "_blank")}
            >
              <MessageCircle className="w-6 h-6 ml-3" />
              تواصل عبر واتساب
            </Button>

            <Button
              size="lg"
              className="btn-outline border-white text-white hover:bg-white hover:text-slate-900 text-lg px-10 py-4"
              onClick={() => window.open("tel:0500849798", "_blank")}
            >
              <Phone className="w-6 h-6 ml-3" />
              اتصل الآن: 0500849798
            </Button>
          </div>

          {/* Enhanced Slide Indicators */}
          <div className="flex justify-center space-x-3 space-x-reverse mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-cyan-400 scale-125 shadow-glow-blue" : "bg-white/30 hover:bg-white/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          {/* Enhanced Features Banner */}
          <div className="glass-dark rounded-2xl p-6 max-w-4xl mx-auto animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-400 mb-1">7</div>
                <p className="text-white text-sm">فروع في الرياض</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
                <p className="text-white text-sm">ورشة متنقلة</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">15</div>
                <p className="text-white text-sm">دقيقة متوسط الوصول</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-2 h-4 bg-gradient-to-b from-white to-transparent rounded-full animate-pulse"></div>
        </div>
        <p className="text-white/70 text-xs mt-2 text-center">اسحب للأسفل</p>
      </div>
    </section>
  )
}
