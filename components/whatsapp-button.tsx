"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const handleWhatsAppClick = () => {
    const message = "مرحباً، أريد الاستفسار عن خدماتكم"
    const whatsappUrl = `https://wa.me/966500849798?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"
      }`}
    >
      <button
        onClick={handleWhatsAppClick}
        className="group bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-6 h-6" />

        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          تواصل عبر واتساب
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
        </div>
      </button>

      {/* Ripple Effect */}
      <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></div>
    </div>
  )
}
