import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="flex items-center justify-center py-20 px-6">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-xl text-center">
          <h1 className="text-4xl font-bold mb-6">
            Welcome to Growth Platform 🚀
          </h1>

          <p className="text-gray-600 mb-8">
            Complete tasks, earn rewards, and grow your balance.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition">
            Start Earning
          </button>
        </div>
      </section>
    </main>
  );
}