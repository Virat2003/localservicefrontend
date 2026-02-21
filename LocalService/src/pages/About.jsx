import { Users, ShieldCheck, Award, Target } from "lucide-react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About ServiceHub
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ServiceHub connects customers with trusted local professionals.
              We make booking home services simple, reliable, and fast.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our goal is to simplify the way people book local services.
                Whether it's plumbing, electrician, cleaning, or tutoring —
                we ensure customers get verified professionals quickly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Target className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Connecting Trust & Convenience
              </h3>
              <p className="text-gray-600">
                We focus on transparency, trust, and smooth booking experience.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <ShieldCheck className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Verified Providers</h3>
              <p className="text-gray-600">
                All professionals are verified and quality-checked.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <Users className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Customer First</h3>
              <p className="text-gray-600">
                Customer satisfaction is our highest priority.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <Award className="w-10 h-10 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                We ensure high-quality service every time.
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
