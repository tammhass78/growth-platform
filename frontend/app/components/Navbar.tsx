export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">
        Growth Platform
      </h1>

      <div className="flex items-center gap-4">
        <button className="bg-white text-black px-4 py-2 rounded-lg">
          Login
        </button>

        <button className="bg-blue-500 px-4 py-2 rounded-lg">
          Register
        </button>
      </div>
    </nav>
  );
}