import { useEffect, useState } from "react";
import api from "../api/axios";
import Footer from "../components/Footer";
import axios from "axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await api.get("bookings/my/");
        setBookings(res.data);
      } catch (err) {
        setError("Failed to load bookings");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const filteredBookings = bookings.filter((booking) => {
    if (filter === "all") return true;
    return booking.status.toLowerCase() === filter;
  });

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "confirmed":
        return "bg-green-100 text-green-700 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "completed":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "cancelled":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case "confirmed":
        return (
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "pending":
        return (
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "completed":
        return (
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "cancelled":
        return (
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="inline-block h-12 w-12 sm:h-16 sm:w-16 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
          <p className="mt-4 text-gray-600 font-medium text-base sm:text-lg">Loading bookings...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Error Loading Bookings</h2>
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

  const handleCancel = async (bookingId) => {
    console.log("Calling API for:", bookingId);

    try {
      const res = await api.patch(`bookings/cancel/${bookingId}/`);
      console.log("Response:", res);

      setBookings((prev) =>
        prev.map((b) =>
          b.id === bookingId ? { ...b, status: "cancelled" } : b
        )
      );
    } catch (err) {
      console.error("Cancel error:", err);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg sm:rounded-xl mr-3 sm:mr-4 shadow-lg">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">My Bookings</h1>
                <p className="text-sm sm:text-base text-gray-600 mt-1">Manage and track your service bookings</p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md border border-gray-100">
                <div className="text-xl sm:text-2xl font-bold text-indigo-600">{bookings.length}</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-0.5">Total Bookings</div>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md border border-gray-100">
                <div className="text-xl sm:text-2xl font-bold text-yellow-600">
                  {bookings.filter((b) => b.status.toLowerCase() === "pending").length}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-0.5">Pending</div>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md border border-gray-100">
                <div className="text-xl sm:text-2xl font-bold text-green-600">
                  {bookings.filter((b) => b.status.toLowerCase() === "confirmed").length}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-0.5">Confirmed</div>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md border border-gray-100">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">
                  {bookings.filter((b) => b.status.toLowerCase() === "completed").length}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-0.5">Completed</div>
              </div>
            </div>
          </div>

          {/* Filter Tabs - Scrollable on Mobile */}
          <div className="mb-4 sm:mb-6 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md p-1.5 sm:p-2 inline-flex gap-1 sm:gap-2 min-w-max sm:min-w-0">
              {["all", "pending", "confirmed", "completed", "cancelled"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-3 py-1.5 sm:px-6 sm:py-2 rounded-lg sm:rounded-xl font-medium capitalize transition-all text-sm sm:text-base whitespace-nowrap ${
                    filter === status
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Bookings List */}
          {filteredBookings.length === 0 ? (
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-8 sm:p-12 md:p-16 text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-2 sm:mb-3">No Bookings Found</h3>
              <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-6">
                {filter === "all"
                  ? "You haven't made any bookings yet"
                  : `No ${filter} bookings found`}
              </p>
              <button
                onClick={() => (window.location.href = "/services")}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all text-sm sm:text-base"
              >
                Browse Services
              </button>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {filteredBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="flex flex-col gap-4">
                      {/* Service Info Section */}
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2 line-clamp-2">
                            Service: {booking.service?.name}
                          </h3>
                          {booking.service_name && (
                            <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3 line-clamp-2">{booking.service_name}</p>
                          )}

                          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
                            <div className="flex items-center text-gray-600">
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span className="font-medium">Date:</span>
                              <span className="ml-1 sm:ml-2 truncate">{formatDate(booking.booking_date)}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Status & Actions Section */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-gray-100">
                        <span
                          className={`inline-flex items-center justify-center sm:justify-start px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm border ${getStatusColor(
                            booking.status
                          )}`}
                        >
                          {getStatusIcon(booking.status)}
                          <span className="ml-1.5 sm:ml-2 capitalize">{booking.status}</span>
                        </span>

                        <div className="flex gap-2">
                          {booking.status.toLowerCase() === "pending" && (
                            <button
                              onClick={() => {
                                console.log("Cancel clicked:", booking.id);
                                handleCancel(booking.id);
                              }}
                              className="flex-1 sm:flex-none px-4 py-2 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition text-xs sm:text-sm"
                            >
                              Cancel Booking
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
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

export default MyBookings;