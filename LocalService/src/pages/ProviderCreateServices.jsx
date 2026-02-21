import React from "react";

const ProviderCreateServices = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4">Add New Service</h2>

        <form onSubmit={handleCreateService} className="space-y-4">
          <input
            type="text"
            placeholder="Service Name"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="number"
            placeholder="Base Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg"
          >
            Add Service
          </button>

          {message && <p className="text-sm mt-2">{message}</p>}
        </form>
      </div>
    </>
  );
};

export default ProviderCreateServices;
