"use client"
import { useState } from "react"
import type React from "react"
import { Open_Sans, Space_Grotesk } from "next/font/google" // Import both fonts

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea" // Import Textarea for the contact form
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Star,
  Users,
  Clock,
  Car,
  Plane,
  Route,
  Award,
  Shield,
  UserCheck,
  ArrowRight,
  CheckCircle,
  Menu,
  Calendar,
  ClockIcon,
  User,
  Smartphone,
  MailIcon,
  MessageSquareText,
  PhoneIcon as Whatsapp,
} from "lucide-react"
import Image from "next/image"

// Initialize Open Sans font for general text
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-open-sans", // Define a CSS variable for the font
})

// Initialize Space Grotesk font for the main heading
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"], // Strong visual weight
  variable: "--font-space-grotesk", // Define a CSS variable for the font
})

export default function MSUExpressHomepage() {
  const [bookingData, setBookingData] = useState({
    startDestination: "",
    endDestination: "",
    startDateTime: "",
    endDateTime: "",
    phone: "", // Moved to first row
    name: "",
    email: "",
    otherInformation: "", // New field
    agreeToTerms: false,
  })
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    question: "",
    city: "",
    phone: "",
    agreeToCollect: false,
  })
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleBookingChange = (field: string, value: string | boolean) => {
    setBookingData((prev) => ({ ...prev, [field]: value }))
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking submitted:", bookingData)
    // Add actual booking logic here
  }

  const handleContactFormChange = (field: string, value: string | boolean) => {
    setContactFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", contactFormData)
    // Add actual contact form submission logic here
  }

  const navItems = ["HOME", "ABOUT", "GET A CAB", "REVIEWS", "OUR NEWS", "CONTACTS"]

  return (
    <div className={`${openSans.variable} ${spaceGrotesk.variable} font-sans`}>
      {/* Hero Section */}
      <section className="relative h-[100vh] md:h-[110vh] bg-cover bg-center overflow-hidden flex items-center justify-center">
        {/* Background Image with Darker Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1628947733273-cdae71c9bfd3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Updated image URL
            alt="Woman on phone with yellow taxi"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Integrated Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-50 container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 rounded-xl shadow-lg">
              <span className="text-sm font-bold tracking-wider">MSU</span>
            </div>
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-xl font-bold text-sm shadow-lg">
              TAXI
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`} // Anchor links
                className={`relative text-white hover:text-yellow-400 font-medium transition-all duration-300 group text-base ${
                  item === "HOME" ? "text-yellow-400" : "" // Highlight HOME
                }`}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300 ${
                    item === "HOME" ? "w-full" : ""
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:text-yellow-400">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-900 text-white border-gray-800">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(/\s/g, "-")}`} // Anchor links
                      className="text-white hover:text-yellow-400 font-medium transition-colors duration-300 text-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex items-center space-x-3 text-white">
                      <Phone className="w-4 h-4" />
                      <span className="font-semibold">+1 517-885-8129</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white mt-2">
                      <Whatsapp className="w-4 h-4 text-green-500" />
                      <span className="font-semibold">+1 517-885-8129</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Phone Numbers (Only one +1 517-885-8129) */}
          <div className="hidden md:flex items-center space-x-6 text-white">
            <div className="flex items-center space-x-2">
              <Whatsapp className="w-4 h-4 text-green-500" />
              <span className="font-semibold">+1 517-885-8129</span>
            </div>
          </div>
        </nav>

        {/* Centered Hero Content */}
        <div className="relative z-40 container mx-auto px-4 flex flex-col items-center justify-center flex-grow text-center pt-20 pb-10 md:pt-0 md:pb-0">
          {/* Removed Top Tagline */}
          {/* <div className="mb-4 md:mb-6">
            <p className="text-yellow-400 text-lg md:text-xl font-bold uppercase drop-shadow-md">
              YOU'RE IN SAFE HANDS
            </p>
            <p className="text-yellow-400 text-lg md:text-xl font-bold uppercase drop-shadow-md">
              YOU CAN SEND SMS ALSO
            </p>
          </div> */}

          {/* Main Heading */}
          <h1
            className={`${spaceGrotesk.className} text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-2 drop-shadow-lg whitespace-nowrap`}
          >
            Order Taxi Online
          </h1>
          <p
            className={`${openSans.className} text-base sm:text-lg md:text-xl text-gray-300 font-light drop-shadow-md mb-10 md:mb-12`}
          >
            Calls between 11:00pm to 04:00am EST will not be entertained.
          </p>

          {/* Booking Form - Directly on page */}
          <form
            onSubmit={handleBookingSubmit}
            className="w-full max-w-6xl bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-lg shadow-xl space-y-6"
          >
            {/* First Row - 5 Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Start Destination"
                  value={bookingData.startDestination}
                  onChange={(e) => handleBookingChange("startDestination", e.target.value)}
                  className="h-14 text-lg border border-gray-300 rounded-md focus:border-yellow-400 transition-all duration-300 pl-10 bg-white w-full"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="End Destination"
                  value={bookingData.endDestination}
                  onChange={(e) => handleBookingChange("endDestination", e.target.value)}
                  className="h-14 text-lg border border-gray-300 rounded-md focus:border-yellow-400 transition-all duration-300 pl-10 bg-white w-full"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="date"
                  placeholder="Start Time and Date"
                  value={bookingData.startDateTime}
                  onChange={(e) => handleBookingChange("startDateTime", e.target.value)}
                  className="h-14 text-lg border border-gray-300 rounded-md focus:border-yellow-400 transition-all duration-300 pl-10 bg-white w-full"
                />
              </div>
              <div className="relative">
                <ClockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="time"
                  placeholder="End Time and Date"
                  value={bookingData.endDateTime}
                  onChange={(e) => handleBookingChange("endDateTime", e.target.value)}
                  className="h-14 text-lg border border-gray-300 rounded-md focus:border-yellow-400 transition-all duration-300 pl-10 bg-white w-full"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Your Phone"
                  type="tel"
                  value={bookingData.phone}
                  onChange={(e) => handleBookingChange("phone", e.target.value)}
                  className="h-14 text-lg border border-gray-300 rounded-md focus:border-yellow-400 transition-all duration-300 pl-10 bg-white w-full"
                />
              </div>
            </div>

            {/* Second Row - 3 Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Your Name"
                  value={bookingData.name}
                  onChange={(e) => handleBookingChange("name", e.target.value)}
                  className="h-14 text-lg border border-gray-300 rounded-md focus:border-yellow-400 transition-all duration-300 pl-10 bg-white w-full"
                />
              </div>
              <div className="relative">
                <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Your Email"
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => handleBookingChange("email", e.target.value)}
                  className="h-14 text-lg border border-gray-300 rounded-md focus:border-yellow-400 transition-all duration-300 pl-10 bg-white w-full"
                />
              </div>
              <div className="relative">
                <MessageSquareText className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Other information"
                  value={bookingData.otherInformation}
                  onChange={(e) => handleBookingChange("otherInformation", e.target.value)}
                  className="h-14 text-lg border border-gray-300 rounded-md focus:border-yellow-400 transition-all duration-300 pl-10 bg-white w-full"
                />
              </div>
            </div>

            {/* Cancellation Policy */}
            <p className="text-sm text-gray-700 text-center mt-4">
              Cancellations must be made within 12 hours of the original booking. Otherwise, full charges will apply.
            </p>

            {/* Checkbox */}
            <div className="flex items-center space-x-2 justify-center">
              <Checkbox
                id="terms"
                checked={bookingData.agreeToTerms}
                onCheckedChange={(checked) => handleBookingChange("agreeToTerms", checked as boolean)}
                className="mt-1 border-gray-400 data-[state=checked]:bg-yellow-500 data-[state=checked]:text-black"
              />
              <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                I agree that my submitted data is being collected and stored.
              </label>
            </div>

            {/* CTA Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-4 rounded-md text-lg shadow-md hover:shadow-lg transform hover:scale-[1.01] transition-all duration-300"
            >
              Book Now!
            </Button>
          </form>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="get-a-cab" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-700 mb-4">Our Services</Badge>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">WHAT WE OFFER</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide a wide range of transportation services to meet all your travel needs. From airport transfers
              to long-distance journeys, we ensure comfort, reliability, and exceptional service every time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MapPin,
                title: "Address Pickup",
                description: "Convenient pickup from any address with precise location tracking and timely arrival.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Plane,
                title: "Airport Transfer",
                description: "Reliable airport transportation with flight monitoring and meet & greet service.",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Route,
                title: "Long Distance",
                description: "Comfortable long-distance travel with experienced drivers and luxury vehicles.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Car,
                title: "Taxi Tours",
                description: "Guided city tours and sightseeing with knowledgeable local drivers.",
                color: "from-orange-500 to-orange-600",
              },
            ].map((service, index) => (
              <Card
                key={service.title}
                className="group hover:shadow-xl transition-all duration-500 border border-gray-200 bg-white rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-2"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button
                      variant="outline"
                      className="rounded-full border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-white bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-700 mb-4">Why Choose Us</Badge>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Our Benefits</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                icon: Award,
                title: "Luxurious Fleet",
                description: "Premium vehicles maintained to the highest standards for your comfort and safety.",
                gradient: "from-yellow-400 to-yellow-500",
              },
              {
                icon: Shield,
                title: "Exceptional Service",
                description: "Dedicated to providing outstanding customer service that exceeds expectations.",
                gradient: "from-blue-400 to-blue-500",
              },
              {
                icon: Clock,
                title: "24hrs Turnaround Service",
                description: "Round-the-clock availability ensuring you can book our services anytime, anywhere.",
                gradient: "from-green-400 to-green-500",
              },
              {
                icon: UserCheck,
                title: "Professional Drivers",
                description: "Experienced, licensed, and courteous drivers committed to your safety and comfort.",
                gradient: "from-purple-400 to-purple-500",
              },
            ].map((benefit, index) => (
              <div key={benefit.title} className="flex items-start space-x-6 group">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Removed blur-2xl and shadow-2xl for a cleaner look, and border */}
              <Image
                src="https://msuexpress.com/wp-content/uploads/revslider/slider-7/Lincon_Navigator-removebg-preview-2.png"
                alt="Luxury Black SUV"
                width={700}
                height={500}
                className="relative z-10 w-full h-auto rounded-3xl hover:scale-105 transition-transform duration-500 object-contain"
              />
            </div>
            <div className="space-y-6">
              <Badge className="bg-yellow-100 text-yellow-700">About MSU Express</Badge>
              <h2 className="text-5xl font-bold text-gray-800 leading-tight">
                About <span className="text-yellow-500">us</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  At MSU Express, we're more than just a taxi service – we're your trusted partner in luxury
                  transportation. With a passion for delivering unparalleled experiences and an unwavering commitment to
                  excellence, we've established ourselves as the premier choice for discerning travelers.
                </p>
                <p>
                  Our fleet of meticulously maintained vehicles, combined with our team of professional drivers, ensures
                  that every journey with us is safe, comfortable, and memorable. Whether you need airport transfers,
                  corporate transportation, or special event services, we're here to exceed your expectations.
                </p>
                <p>
                  Experience the difference that comes with choosing a service that values your time, comfort, and
                  satisfaction above all else. Welcome to MSU Express – where luxury meets reliability.
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Read More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Trusted by 10,000+ customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "$",
                title: "COST-EFFECTIVE AND TRANSPARENT",
                description:
                  "Our transparent pricing model ensures you know exactly what you're paying for, with no hidden fees or surprise charges. We offer competitive rates without compromising on quality or service.",
                gradient: "from-gray-900 to-gray-800",
              },
              {
                icon: Users,
                title: "CUSTOMIZED JOURNEYS, CUSTOMIZED EXPERIENCES",
                description:
                  "Every journey is unique, and so are our services. We tailor each experience to meet your specific needs, preferences, and schedule, ensuring a personalized travel experience every time.",
                gradient: "from-gray-800 to-gray-900",
              },
            ].map((card, index) => (
              <Card
                key={card.title}
                className={`bg-gradient-to-br ${card.gradient} text-white border border-gray-700 rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:scale-105`}
              >
                <CardContent className="p-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    {typeof card.icon === "string" ? (
                      <span className="text-3xl font-bold text-black">{card.icon}</span>
                    ) : (
                      <card.icon className="w-10 h-10 text-black" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 leading-tight">{card.title}</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">{card.description}</p>
                  <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section id="our-news" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-700 mb-4">Stay Updated</Badge>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Latest News</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Top 5 Reasons to Choose a Taxi Service for Your Next Business Trip",
                description:
                  "Discover why professional taxi services are the smart choice for business travelers seeking reliability and comfort.",
                image: "business travel luxury car",
              },
              {
                title: "How to Book the Perfect Airport Transfer for Your Vacation",
                description:
                  "Learn the essential tips for booking reliable airport transfers that ensure a stress-free start to your vacation.",
                image: "airport transfer service",
              },
              {
                title: "Exploring the Best Luxury Difference: Premium vs Standard Taxi Services",
                description:
                  "Understanding the key differences between premium and standard taxi services to make the right choice.",
                image: "luxury vs standard taxi comparison",
              },
            ].map((article, index) => (
              <Card
                key={article.title}
                className="group hover:shadow-xl transition-all duration-500 border border-gray-200 bg-white rounded-2xl overflow-hidden transform hover:-translate-y-2"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-2xl overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=250&width=400&query=${article.image}`}
                    alt={article.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-yellow-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{article.description}</p>
                  <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section
        id="reviews"
        className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 mb-8">Customer Review</Badge>
            <h2 className="text-5xl font-bold text-white mb-6">What Our Clients Say</h2>
          </div>

          {/* Horizontal Scroll for Testimonials */}
          <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 scrollbar-hide">
            {[
              {
                name: "Sarah Johnson",
                title: "Business Executive",
                quote:
                  "Outstanding service from start to finish! The driver was professional, the car was immaculate, and they arrived exactly on time. I'll definitely be using MSU Express for all my future transportation needs.",
                initials: "SJ",
              },
              {
                name: "Michael Chen",
                title: "Travel Blogger",
                quote:
                  "MSU Express made my trip incredibly smooth. The booking process was easy, and the ride was comfortable and luxurious. Highly recommend for anyone looking for premium transport.",
                initials: "MC",
              },
              {
                name: "Emily Rodriguez",
                title: "Event Planner",
                quote:
                  "Their attention to detail and punctuality are unmatched. MSU Express is my go-to for all corporate events, ensuring my clients always arrive in style and on schedule.",
                initials: "ER",
              },
            ].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 snap-center">
                <Card className="bg-gray-800/70 border border-gray-700 rounded-2xl p-8 h-full flex flex-col justify-between shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mx-0.5" />
                      ))}
                    </div>
                    <blockquote className="text-lg font-light mb-6 leading-relaxed italic text-gray-200">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-black font-bold text-lg">{testimonial.initials}</span>
                      </div>
                      <div className="text-left">
                        <cite className="text-lg font-semibold not-italic text-white">{testimonial.name}</cite>
                        <p className="text-gray-400 text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Have a Questions Section (Contact Form) */}
      <section id="contacts" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-700 mb-4">Get In Touch</Badge>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Have a Question?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              If you have any comments, suggestions or questions, please do not hesitate to contact us. Our high-quality
              office staff will help you and answer all your questions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-200">
            <form onSubmit={handleContactFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    placeholder="Your Name"
                    value={contactFormData.name}
                    onChange={(e) => handleContactFormChange("name", e.target.value)}
                    className="h-12 border border-gray-300 rounded-lg focus:border-yellow-400 transition-all duration-300 text-base pl-10 shadow-sm"
                  />
                </div>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    placeholder="Your Email"
                    type="email"
                    value={contactFormData.email}
                    onChange={(e) => handleContactFormChange("email", e.target.value)}
                    className="h-12 border border-gray-300 rounded-lg focus:border-yellow-400 transition-all duration-300 text-base pl-10 shadow-sm"
                  />
                </div>
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Your City"
                  value={contactFormData.city}
                  onChange={(e) => handleContactFormChange("city", e.target.value)}
                  className="h-12 border border-gray-300 rounded-lg focus:border-yellow-400 transition-all duration-300 text-base pl-10 shadow-sm"
                />
              </div>

              <div className="relative">
                <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Your Phone Number"
                  type="tel"
                  value={contactFormData.phone}
                  onChange={(e) => handleContactFormChange("phone", e.target.value)}
                  className="h-12 border border-gray-300 rounded-lg focus:border-yellow-400 transition-all duration-300 text-base pl-10 shadow-sm"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-4 text-gray-400" size={20} />
                <Textarea
                  placeholder="Your Questions"
                  value={contactFormData.question}
                  onChange={(e) => handleContactFormChange("question", e.target.value)}
                  className="min-h-[120px] border border-gray-300 rounded-lg focus:border-yellow-400 transition-all duration-300 text-base p-3 pl-10 shadow-sm"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="contact-terms"
                  checked={contactFormData.agreeToCollect}
                  onCheckedChange={(checked) => handleContactFormChange("agreeToCollect", checked as boolean)}
                  className="mt-1"
                />
                <label htmlFor="contact-terms" className="text-base text-gray-600 leading-relaxed">
                  I agree that my submitted data is being collected and stored.
                </label>
              </div>

              {/* Send Request Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-4 rounded-lg text-lg shadow-md hover:shadow-lg transform hover:scale-[1.01] transition-all duration-300"
              >
                SEND REQUEST
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section (Existing) */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "OUR ADDRESS",
                info: "Lansing, Lansing MI, United States, Michigan",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Phone,
                title: "OUR PHONES",
                info: "+1 517-885-8129",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Mail,
                title: "OUR MAIL",
                info: "msuexpress2@gmail.com",
                color: "from-purple-500 to-purple-600",
              },
            ].map((contact, index) => (
              <Card
                key={contact.title}
                className="text-center group hover:shadow-xl transition-all duration-500 border border-gray-200 bg-white rounded-2xl transform hover:-translate-y-2"
              >
                <CardContent className="p-10">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <contact.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                    {contact.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{contact.info}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-4 py-2 rounded-xl shadow-lg">
                  <span className="text-sm font-bold tracking-wider">MSU</span>
                </div>
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-xl font-bold text-sm shadow-lg">
                  TAXI
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                At MSU Express, we're more than just a taxi service – we're your trusted partner in luxury
                transportation. With a passion for delivering unparalleled experiences and an unwavering commitment to
                excellence.
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Useful Links</h3>
              <ul className="space-y-3">
                {["Home", "Get a cab", "Our News", "About", "Reviews", "Contacts"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s/g, "-")}`} // Anchor links
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: "msuexpress2@gmail.com" },
                  { icon: Phone, text: "+1 517-885-8129" },
                  { icon: MapPin, text: "Lansing MI, United States, Michigan" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/30 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-yellow-400" />
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex space-x-4 mt-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-500 transition-colors duration-300 cursor-pointer">
                  <Facebook className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:from-pink-400 hover:to-purple-500 transition-all duration-300 cursor-pointer">
                  <Instagram className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6">Subscribe to Us</h3>
              <p className="text-gray-400 mb-6">Subscribe to Our Newsletter!</p>
              <div className="space-y-4">
                <Input
                  placeholder="Your email"
                  className="bg-gray-800/50 border-gray-700 text-white rounded-xl h-12 focus:border-yellow-400 transition-all duration-300"
                />
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Subscribe
                </Button>
              </div>
              <p className="text-gray-400 text-sm mt-6 mb-4">We accept all major Credit Cards</p>
              <div className="flex space-x-2">
                {[
                  { name: "VISA", bg: "bg-blue-600" },
                  { name: "MC", bg: "bg-red-600" },
                  { name: "AMEX", bg: "bg-blue-500" },
                  { name: "DISC", bg: "bg-orange-500" },
                ].map((card) => (
                  <div
                    key={card.name}
                    className={`w-12 h-8 ${card.bg} rounded-lg text-xs flex items-center justify-center text-white font-bold hover:scale-105 transition-transform duration-300 cursor-pointer`}
                  >
                    {card.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">MSU Express © 2025. All Rights Reserved. Design and Developed by Marketome</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
