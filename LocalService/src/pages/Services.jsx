import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await api.get(`services/${location.search}`);
        setServices(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [location.search]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="relative">
            <div className="inline-block h-12 w-12 sm:h-16 sm:w-16 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
            <div className="absolute inset-0 h-12 w-12 sm:h-16 sm:w-16 animate-ping rounded-full border-4 border-indigo-300 opacity-20"></div>
          </div>
          <p className="mt-4 sm:mt-6 text-gray-600 font-medium text-base sm:text-lg">
            Loading amazing services...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Oops!</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition text-sm sm:text-base"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-indigo-100 text-indigo-700 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Our Services
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-3 sm:mb-4 px-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Available Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Discover our range of premium services tailored to meet your needs
            </p>
            <div className="mt-4 sm:mt-6 flex justify-center">
              <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
            </div>
          </div>

          {/* Services Grid */}
          {services.length === 0 ? (
            <div className="text-center py-12 sm:py-20 px-4">
              <div className="inline-block mb-4 sm:mb-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-2 sm:mb-3">
                No Services Available
              </h3>
              <p className="text-base sm:text-lg text-gray-500">
                Check back soon for exciting new offerings!
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg p-5 sm:p-6 md:p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background Gradient Decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>

                  {/* Icon */}
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                    {/* Badge */}
                    <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-md">
                      Popular
                    </span>
                  </div>

                  {/* Service Details */}
                  <div className="relative flex-1 flex flex-col">
                    {/* Title - Fixed Height */}
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-indigo-600 transition-colors duration-300 min-h-[3.5rem] sm:min-h-[4rem] line-clamp-2">
                      {service.name}
                    </h2>

                    {/* Description - Fixed Height */}
                    <div className="min-h-[4.5rem] sm:min-h-[5rem] mb-4 sm:mb-6">
                      {service.description ? (
                        <p className="text-sm sm:text-base text-gray-600 line-clamp-3 leading-relaxed">
                          {service.description}
                        </p>
                      ) : (
                        <p className="text-sm sm:text-base text-gray-400 italic">
                          Professional service available
                        </p>
                      )}
                    </div>

                    {/* Features List - Fixed Height */}
                    <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 min-h-[4.5rem] sm:min-h-[5rem]">
                      <div className="flex items-center text-xs sm:text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-green-500 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="truncate">Professional Service</span>
                      </div>
                      <div className="flex items-center text-xs sm:text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-green-500 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="truncate">Quality Guaranteed</span>
                      </div>
                      {service.duration && (
                        <div className="flex items-center text-xs sm:text-sm text-gray-600">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-indigo-500 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="truncate">{service.duration} minutes</span>
                        </div>
                      )}
                    </div>

                    {/* Pricing - Always at Bottom */}
                    <div className="border-t border-gray-100 pt-4 sm:pt-6 mt-auto">
                      <div className="flex items-end justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm text-gray-500 mb-1">
                            Starting from
                          </p>
                          <div className="flex items-baseline flex-wrap">
                            <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                              ₹{service.base_price}
                            </span>
                            <span className="text-xs sm:text-sm text-gray-400 ml-1 sm:ml-2">
                              /session
                            </span>
                          </div>
                        </div>

                        {/* Book Button */}
                        <button
                          onClick={() => navigate(`/book/${service.id}`)}
                          className="flex-shrink-0 px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg sm:rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-1"
                        >
                          <span className="hidden sm:inline text-sm">Book</span>
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-200 rounded-2xl sm:rounded-3xl transition-colors duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;