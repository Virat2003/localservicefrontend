import { Search, UserCheck, CalendarCheck } from "lucide-react";
import Footer from "../components/Footer";

const HowItWorks = () => {
  return (
    <>
      <div className="min-h-screen bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-5xl font-bold text-gray-900 mb-12">
            How It Works
          </h1>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Step 1 */}
            <div className="bg-indigo-50 p-10 rounded-2xl shadow-md">
              <Search className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">1. Search Service</h3>
              <p className="text-gray-600">
                Browse available services and find what you need.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-purple-50 p-10 rounded-2xl shadow-md">
              <UserCheck className="w-12 h-12 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">2. Choose Provider</h3>
              <p className="text-gray-600">
                Select a verified professional for your service.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-green-50 p-10 rounded-2xl shadow-md">
              <CalendarCheck className="w-12 h-12 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">3. Book & Relax</h3>
              <p className="text-gray-600">
                Confirm booking and let the expert handle everything.
              </p>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default HowItWorks;
