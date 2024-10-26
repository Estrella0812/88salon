import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-repeat w-full h-lvh">
      <div className="container max-w-5xl mx-auto px-3">
        <div className="image-center text-white text-center text-base lg:text-lg">
          <div>
            <img
              className="mb-24 lg:mb-8 scale-150 lg:scale-100"
              src="/image/logo.jpg"
            ></img>
            <Link className="border p-4 rounded-full" href="/menu/signature">
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
