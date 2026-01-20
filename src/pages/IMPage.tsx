import Navbar from "../components/UI/Navbar";

const IMPage = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">IM Page</h1>
        <p className="text-lg text-gray-600">
          Velkommen til IM-siden.
        </p>
      </div>
    </div>
  );
};

export default IMPage;
