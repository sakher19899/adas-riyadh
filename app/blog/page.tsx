import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import BackToTop from "@/components/back-to-top"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Radar, Car, Key, Wrench } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  alternates: { canonical: `https://adas-center.com/blog` },
  title: "المدونة التقنية | مركز فحص وبرمجة السيارات المتقدم",
  description: "اقرأ أحدث المقالات التقنية حول ADAS وصيانة السيارات ونصائح مفيدة من خبرائنا",
  keywords: "مدونة تقنية, ADAS, صيانة السيارات, نصائح السيارات, تقنيات حديثة",
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "ما هو نظام ADAS وكيف يعمل؟",
      excerpt: "تعرف على نظام مساعدة السائق المتقدم ADAS وأهميته في السيارات الحديثة وكيفية عمله",
      content: "نظام ADAS هو اختصار لـ Advanced Driver Assistance Systems...",
      author: "م. أحمد التقني",
      date: "2024-01-15",
      category: "ADAS",
      readTime: "5 دقائق",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["ADAS", "تقنية", "سلامة"],
      icon: Radar,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "أهمية وزن رادار ADAS بعد الحوادث",
      excerpt: "لماذا يجب إعادة وزن رادار ADAS بعد الحوادث أو إصلاح الهيكل؟ وما هي المخاطر؟",
      content: "بعد أي حادث أو إصلاح في مقدمة السيارة...",
      author: "م. فهد الخبير",
      date: "2024-01-12",
      category: "صيانة",
      readTime: "7 دقائق",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["وزن", "حوادث", "سلامة"],
      icon: Wrench,
      color: "from-red-500 to-pink-500",
    },
    {
      id: 3,
      title: "كيفية اختيار مركز فحص السيارات المناسب",
      excerpt: "نصائح مهمة لاختيار أفضل مركز فحص للسيارات وما يجب البحث عنه",
      content: "عند البحث عن مركز فحص موثوق للسيارة...",
      author: "م. خالد المختص",
      date: "2024-01-10",
      category: "نصائح",
      readTime: "4 دقائق",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["فحص", "نصائح", "اختيار"],
      icon: Car,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "تطور تقنيات المفاتيح الذكية في السيارات",
      excerpt: "رحلة تطور مفاتيح السيارات من التقليدية إلى الذكية والمستقبل القادم",
      content: "شهدت تقنيات مفاتيح السيارات تطوراً كبيراً...",
      author: "م. سعد التقني",
      date: "2024-01-08",
      category: "تقنية",
      readTime: "6 دقائق",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["مفاتيح", "تقنية", "تطور"],
      icon: Key,
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: 5,
      title: "علامات تحتاج فيها سيارتك لفحص الكمبيوتر",
      excerpt: "تعرف على العلامات التي تدل على ضرورة فحص كمبيوتر السيارة فوراً",
      content: "هناك عدة علامات تشير إلى ضرورة فحص كمبيوتر السيارة...",
      author: "م. ناصر الفني",
      date: "2024-01-05",
      category: "تشخيص",
      readTime: "5 دقائق",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["تشخيص", "كمبيوتر", "أعطال"],
      icon: Wrench,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 6,
      title: "نصائح للحفاظ على نظام ADAS في سيارتك",
      excerpt: "كيفية الحفاظ على نظام ADAS ليعمل بكفاءة عالية وما يجب تجنبه",
      content: "للحفاظ على نظام ADAS في أفضل حالاته...",
      author: "م. محمد الخبير",
      date: "2024-01-03",
      category: "صيانة",
      readTime: "4 دقائق",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["صيانة", "ADAS", "نصائح"],
      icon: Radar,
      color: "from-teal-500 to-blue-500",
    },
  ]

  const categories = [
    { name: "الكل", count: blogPosts.length },
    { name: "ADAS", count: 2 },
    { name: "صيانة", count: 2 },
    { name: "تقنية", count: 1 },
    { name: "نصائح", count: 1 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white mb-6 text-lg px-6 py-2">
              المدونة التقنية
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              مقالات تقنية متخصصة
              <span className="block text-2xl md:text-3xl text-cyan-300 mt-2">في عالم السيارات الحديثة</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              اكتشف أحدث التقنيات والنصائح المفيدة من خبرائنا في مجال فحص وصيانة السيارات
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-gradient-to-r from-blue-500 to-cyan-500" : ""}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">المقال المميز</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  width={500}
                  height={300}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={`bg-gradient-to-r ${blogPosts[0].color} text-white border-0`}>
                    {blogPosts[0].category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 space-x-reverse text-sm text-slate-600 mb-4">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">{blogPosts[0].title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPosts[0].tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 w-fit">
                  اقرأ المقال كاملاً
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">أحدث المقالات</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm group"
              >
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`bg-gradient-to-r ${post.color} text-white border-0`}>{post.category}</Badge>
                  </div>
                  <div
                    className={`absolute bottom-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r ${post.color} flex items-center justify-center`}
                  >
                    <post.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center space-x-4 space-x-reverse text-xs text-slate-600 mb-2">
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</CardDescription>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 space-x-reverse text-sm text-slate-600">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700">
                      اقرأ المزيد
                      <ArrowLeft className="w-3 h-3 mr-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}
