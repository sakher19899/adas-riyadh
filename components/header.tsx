"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-xl border-b border-slate-200"
          : "bg-slate-900/98 backdrop-blur-md shadow-2xl border-b border-slate-700/50"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-18 sm:h-20 lg:h-22">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 space-x-reverse flex-shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">A</span>
            </div>
            <div className="hidden sm:block">
              <h1
                className={`text-base sm:text-lg lg:text-xl font-bold transition-colors leading-tight ${
                  isScrolled ? "text-slate-800" : "text-white"
                }`}
              >
                مركز فحص وبرمجة السيارات
              </h1>
              <p
                className={`text-sm lg:text-base transition-colors ${isScrolled ? "text-slate-600" : "text-slate-300"}`}
              >
                المتقدم - الرياض
              </p>
            </div>
            {/* Mobile Logo Text */}
            <div className="block sm:hidden">
              <h1 className={`text-sm font-bold transition-colors ${isScrolled ? "text-slate-800" : "text-white"}`}>
                مركز فحص السيارات المتقدم
              </h1>
              <p className={`text-xs transition-colors ${isScrolled ? "text-slate-600" : "text-slate-300"}`}>الرياض</p>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 space-x-reverse">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-base xl:text-lg font-semibold transition-all duration-200 hover:scale-105 relative group ${
                isScrolled ? "text-slate-700 hover:text-blue-600" : "text-white hover:text-cyan-300"
              }`}
            >
              الرئيسية
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`text-base xl:text-lg font-semibold transition-all duration-200 hover:scale-105 relative group ${
                isScrolled ? "text-slate-700 hover:text-blue-600" : "text-white hover:text-cyan-300"
              }`}
            >
              الخدمات
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-base xl:text-lg font-semibold transition-all duration-200 hover:scale-105 relative group ${
                isScrolled ? "text-slate-700 hover:text-blue-600" : "text-white hover:text-cyan-300"
              }`}
            >
              من نحن
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("branches")}
              className={`text-base xl:text-lg font-semibold transition-all duration-200 hover:scale-105 relative group ${
                isScrolled ? "text-slate-700 hover:text-blue-600" : "text-white hover:text-cyan-300"
              }`}
            >
              الفروع
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-base xl:text-lg font-semibold transition-all duration-200 hover:scale-105 relative group ${
                isScrolled ? "text-slate-700 hover:text-blue-600" : "text-white hover:text-cyan-300"
              }`}
            >
              تواصل معنا
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Enhanced Contact Info - Desktop Only */}
          <div className="hidden xl:flex items-center space-x-6 space-x-reverse flex-shrink-0">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className={`p-2 rounded-full ${isScrolled ? "bg-green-100" : "bg-green-500/20"}`}>
                <Phone className="w-4 h-4 text-green-500" />
              </div>
              <div>
                <span className={`font-bold text-sm transition-colors ${isScrolled ? "text-slate-700" : "text-white"}`}>
                  0500849798
                </span>
                <p className={`text-xs transition-colors ${isScrolled ? "text-slate-600" : "text-slate-300"}`}>
                  اتصل الآن
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className={`p-2 rounded-full ${isScrolled ? "bg-blue-100" : "bg-blue-500/20"}`}>
                <MapPin className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <span className={`font-bold text-sm transition-colors ${isScrolled ? "text-slate-700" : "text-white"}`}>
                  7 فروع
                </span>
                <p className={`text-xs transition-colors ${isScrolled ? "text-slate-600" : "text-slate-300"}`}>
                  في الرياض
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Mobile/Tablet Menu Button */}
          <div className="flex items-center space-x-3 space-x-reverse lg:hidden">
            {/* Quick Call Button - Mobile */}
            <Button
              variant="ghost"
              size="sm"
              className={`p-3 transition-all duration-200 rounded-full ${
                isScrolled ? "text-green-600 hover:bg-green-50" : "text-green-400 hover:bg-white/10"
              }`}
              onClick={() => window.open("tel:0500849798", "_blank")}
            >
              <Phone className="w-5 h-5" />
            </Button>

            {/* Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className={`p-3 transition-all duration-200 rounded-full ${
                isScrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`lg:hidden border-t shadow-2xl transition-all duration-300 ${
              isScrolled
                ? "bg-white/98 backdrop-blur-md border-slate-200"
                : "bg-slate-900/98 backdrop-blur-md border-slate-700/50"
            }`}
          >
            <nav className="flex flex-col py-6">
              <button
                onClick={() => scrollToSection("home")}
                className={`px-6 py-4 text-right font-semibold transition-all duration-200 hover:translate-x-2 border-r-4 border-transparent hover:border-blue-500 ${
                  isScrolled
                    ? "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white hover:text-cyan-300 hover:bg-white/10"
                }`}
              >
                الرئيسية
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={`px-6 py-4 text-right font-semibold transition-all duration-200 hover:translate-x-2 border-r-4 border-transparent hover:border-blue-500 ${
                  isScrolled
                    ? "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white hover:text-cyan-300 hover:bg-white/10"
                }`}
              >
                الخدمات
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`px-6 py-4 text-right font-semibold transition-all duration-200 hover:translate-x-2 border-r-4 border-transparent hover:border-blue-500 ${
                  isScrolled
                    ? "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white hover:text-cyan-300 hover:bg-white/10"
                }`}
              >
                من نحن
              </button>
              <button
                onClick={() => scrollToSection("branches")}
                className={`px-6 py-4 text-right font-semibold transition-all duration-200 hover:translate-x-2 border-r-4 border-transparent hover:border-blue-500 ${
                  isScrolled
                    ? "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white hover:text-cyan-300 hover:bg-white/10"
                }`}
              >
                الفروع
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`px-6 py-4 text-right font-semibold transition-all duration-200 hover:translate-x-2 border-r-4 border-transparent hover:border-blue-500 ${
                  isScrolled
                    ? "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white hover:text-cyan-300 hover:bg-white/10"
                }`}
              >
                تواصل معنا
              </button>

              {/* Enhanced Mobile Contact Info */}
              <div
                className={`mx-6 mt-6 pt-6 border-t flex flex-col space-y-4 ${
                  isScrolled ? "border-slate-200" : "border-slate-700"
                }`}
              >
                <div className="flex items-center justify-center space-x-4 space-x-reverse">
                  <div className={`p-3 rounded-full ${isScrolled ? "bg-green-100" : "bg-green-500/20"}`}>
                    <Phone className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="text-center">
                    <span className={`font-bold text-lg ${isScrolled ? "text-slate-700" : "text-white"}`}>
                      0500849798
                    </span>
                    <p className={`text-sm ${isScrolled ? "text-slate-600" : "text-slate-300"}`}>متاح 24/7</p>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4 space-x-reverse">
                  <div className={`p-3 rounded-full ${isScrolled ? "bg-blue-100" : "bg-blue-500/20"}`}>
                    <MapPin className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="text-center">
                    <span className={`font-bold text-lg ${isScrolled ? "text-slate-700" : "text-white"}`}>
                      7 فروع في الرياض
                    </span>
                    <p className={`text-sm ${isScrolled ? "text-slate-600" : "text-slate-300"}`}>في أشهر الصناعيات</p>
                  </div>
                </div>

                {/* Enhanced Quick Action Buttons */}
                <div className="flex space-x-3 space-x-reverse pt-4">
                  <Button
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3"
                    onClick={() => {
                      window.open("https://wa.me/966500849798", "_blank")
                      setIsMenuOpen(false)
                    }}
                  >
                    واتساب فوري
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className={`flex-1 font-semibold py-3 ${
                      isScrolled
                        ? "border-slate-300 text-slate-700 hover:bg-slate-50"
                        : "border-white/30 text-white hover:bg-white/10"
                    }`}
                    onClick={() => {
                      window.open("tel:0500849798", "_blank")
                      setIsMenuOpen(false)
                    }}
                  >
                    اتصال مباشر
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
