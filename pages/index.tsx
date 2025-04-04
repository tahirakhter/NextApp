// pages/index.tsx
"use client"; // This marks the file as a client component

import Link from "next/link"; // Import Link from next/link

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Welcome to the Todo App</h1>

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg text-center">
        <Link href="/todo">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg w-full">
            Go to Todo List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
