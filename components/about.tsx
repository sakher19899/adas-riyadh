import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Award, Users, Shield, Target, Zap, MapPin, Eye, Radar } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Radar,
      title: "خبرة ADAS متقدمة",
      description: "أكثر من 10 سنوات من الخبرة في مجال وزن رادار ADAS ونقطة العمياء",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "ورشة متنقلة",
      description: "خدمة ورشة متنقلة مجهزة بأحدث المعدات تأتي إليك في أي مكان",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Eye,
      title: "نقطة العمياء",
      description: "متخصصون في معايرة نقطة العمياء المرتبطة بنظام الرادار",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Shield,
      title: "ضمان الجودة",
      description: "ضمان شامل على جميع خدمات ADAS والرادار مع متابعة ما بعد الخدمة",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const stats = [
    { number: "1000+", label: "عميل راضي", icon: Users, color: "text-blue-500" },
    { number: "50+", label: "نوع سيارة", icon: Target, color: "text-green-500" },
    { number: "7", label: "فروع في الرياض", icon: Award, color: "text-purple-500" },
    { number: "24/7", label: "ورشة متنقلة", icon: Zap, color: "text-orange-500" },
  ]

  const achievements = [
    "أجهزة وزن ADAS حديثة ومتطورة معتمدة عالمياً",
    "فنيين مدربين على أنظمة الرادار ونقطة العمياء",
    "ورشة متنقلة مجهزة بالكامل لخدمات ADAS",
    "خدمة عملاء متميزة ودعم فني متواصل",
    "مواقع متعددة في الرياض لسهولة الوصول",
    "ضمان شامل على جميع خدمات الرادار والمعايرة",
    "تقارير مفصلة وشفافية كاملة في العمل",
    "استخدام قطع غيار أصلية ومعتمدة فقط",
  ]

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Professional+Workshop')] bg-cover bg-center opacity-5"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container-enhanced relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in">
          <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white mb-6 text-lg px-6 py-2">من نحن</Badge>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            مركز ADAS المتقدم
            <span className="block text-3xl md:text-5xl bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent mt-2">
              ورشة متنقلة ونقطة عمياء
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed">
            نحن مركز متخصص في وزن ومعايرة رادار ADAS ونقطة العمياء مع خدمة ورشة متنقلة. نقدم خدمات احترافية عالية الجودة
            مع فريق من الفنيين المدربين على أحدث تقنيات ADAS. لدينا أكثر من فرع في أشهر الصناعيات في الرياض بالإضافة إلى
            ورشة متنقلة تأتي إليك أينما كنت.
          </p>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-fade-in">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="glass-dark rounded-3xl p-8 mb-4 hover:bg-white/20 transition-all duration-300 hover-lift">
                <stat.icon
                  className={`w-12 h-12 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform`}
                />
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <p className="text-slate-300 font-medium text-lg">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 animate-fade-in">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass-dark border-white/20 hover:bg-white/20 transition-all duration-500 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Why Choose Us */}
        <div className="glass-dark rounded-3xl p-12 backdrop-blur-sm border border-white/10 mb-20 animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">لماذا تختارنا لخدمات ADAS؟</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 space-x-reverse group hover:bg-white/10 p-4 rounded-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="w-7 h-7 text-green-400 mt-1 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-white font-medium text-lg leading-relaxed group-hover:text-cyan-300 transition-colors">
                    {achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Payment Methods */}
        <div className="text-center animate-fade-in">
          <div className="glass-dark rounded-3xl p-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-gradient">طرق الدفع المتاحة</h3>
            <div className="flex justify-center items-center space-x-12 space-x-reverse">
              <div className="flex items-center space-x-3 space-x-reverse group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow-green">
                  <span className="text-white text-xl font-bold">₹</span>
                </div>
                <div>
                  <span className="text-white font-semibold text-lg">نقداً</span>
                  <p className="text-slate-300 text-sm">دفع مباشر</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow-blue">
                  <span className="text-white text-xl font-bold">↗</span>
                </div>
                <div>
                  <span className="text-white font-semibold text-lg">تحويل بنكي</span>
                  <p className="text-slate-300 text-sm">آمن وسريع</p>
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-sm mt-6 italic">حسب رغبة العميل وراحته</p>
          </div>
        </div>
      </div>
    </section>
  )
}
