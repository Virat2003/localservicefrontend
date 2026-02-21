import { useState } from "react";
import {
  Search,
  MapPin,
  Star,
  Clock,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Home as HomeIcon,
  Wrench,
  Droplet,
  Zap as Electric,
  Paintbrush,
  Wind,
  Scissors,
  Car,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const services = [
    { icon: HomeIcon, name: "Home Cleaning", color: "bg-blue-500" },
    { icon: Wrench, name: "Plumbing", color: "bg-orange-500" },
    { icon: Electric, name: "Electrician", color: "bg-yellow-500" },
    { icon: Paintbrush, name: "Painting", color: "bg-purple-500" },
    { icon: Wind, name: "AC Repair", color: "bg-cyan-500" },
    { icon: Scissors, name: "Salon & Spa", color: "bg-pink-500" },
    { icon: Car, name: "Car Wash", color: "bg-green-500" },
    { icon: Droplet, name: "Pest Control", color: "bg-red-500" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Verified Professionals",
      description: "All service providers are background-checked and verified",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Book services anytime, anywhere at your convenience",
    },
    {
      icon: Zap,
      title: "Instant Booking",
      description: "Get your service confirmed within minutes",
    },
    {
      icon: Star,
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee or your money back",
    },
  ];



  const handleSearch = (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams();

    if (searchQuery) queryParams.append("search", searchQuery);
    if (location) queryParams.append("location", location);

    window.location.href = `/services?${queryParams.toString()}`;
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <HomeIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ServiceHub
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/services" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                Services
              </Link>

              <Link to={`/how-it-works`} className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                How It Works
              </Link>
              <Link to={`/about`} className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                About
              </Link>

              <Link to={"/register"}>
                <button className="px-5 py-2 text-indigo-600 font-semibold hover:bg-indigo-50 rounded-lg transition-colors">
                  Sign In
                </button>
              </Link>
              <Link to={'/services'}>
                <button className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:scale-105">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <Link to="/services" className="block py-2 text-gray-700 hover:text-indigo-600 font-medium">
                Services
              </Link>
              <a href="#how-it-works" className="block py-2 text-gray-700 hover:text-indigo-600 font-medium">
                How It Works
              </a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-indigo-600 font-medium">
                About
              </a>
              <button className="w-full py-2 text-indigo-600 font-semibold hover:bg-indigo-50 rounded-lg">
                Sign In
              </button>
              <button className="w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20 -mr-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 -ml-48"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Book Local Services
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                in Minutes
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with verified professionals for all your home service needs.
              From cleaning to repairs, we've got you covered.
            </p>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-3 flex flex-col md:flex-row gap-3">
              <div className="flex-1 flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-xl">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="What service do you need?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
              <div className="flex-1 flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-xl">
                <MapPin className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Popular Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Services</h2>
            <p className="text-xl text-gray-600">Choose from our wide range of professional services</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-indigo-500 hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{service.name}</h3>
                <p className="text-sm text-gray-500">Starting at $25</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to={"/services"}>
              <button className="px-8 py-3 text-indigo-600 font-semibold border-2 border-indigo-600 rounded-xl hover:bg-indigo-50 transition-colors inline-flex items-center gap-2">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>


      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">We make booking local services simple and reliable</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join thousands of satisfied customers and book your first service today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={`/services`}>
              <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:shadow-2xl transition-all transform hover:scale-105">
                Book a Service Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;