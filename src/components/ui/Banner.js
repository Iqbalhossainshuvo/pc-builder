import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-300 via-green-300 to-blue-400 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Build Your Dream PC
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">
          Choose the best components and create your custom PC.
        </p>
        <Link href="/PC-Builder">
          <p className="inline-block px-6 py-3 bg-yellow-400 text-white rounded-lg hover:bg-blue-400 hover:text-white transition-colors duration-300">
          Build Your Pc
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
