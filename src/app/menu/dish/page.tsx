import Link from "next/link";

export default function Dish() {
  return (
    <section className="bg-repeat w-full mb-40 ">
      <div className="container max-w-5xl mx-auto px-8 lg:px-3 pt-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 text-white">
          <div className="col-span-1 text-xl">
            <div className="text-center text-4xl font-semibold mb-16 lg:mb-14 text-yellow-400">
              RAW DISH
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>육회</div>
                <div>$18.88</div>
              </div>
              <div className="text-sm text-yellow-200">K-Beef Tartare</div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>새우장</div>
                <div>$20.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Soy Marinated Raw Shrimp
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div className="flex">
                  양념게장{" "}
                  <img src="/image/r_peper2.png" className="ml-1 w-8"></img>
                </div>
                <div>$25.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Spicy Marinated Raw Crab
              </div>
              <hr className="my-3"></hr>
            </div>
          </div>
          <div className="col-span-1 text-xl">
            <div className="text-center text-4xl font-semibold mb-16 lg:mb-14 text-yellow-400">
              STIR FRIED DISH
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>닭오돌뼈볶음 (간장/매콤)</div>
                <div>$18.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Stir Fried Chicken Cartilage (Soy/Spicy)
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>흑후추우삼겹</div>
                <div>$18.88</div>
              </div>
              <div className="text-sm text-yellow-200">
                Stir Fried Beef Loin
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>우삼겹숙주볶음</div>
                <div>$19.88</div>
              </div>
              <div className="text-sm text-yellow-200">
                Stir Fried Beef with Bean Sprouts
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>닭똥집볶음</div>
                <div>$23.88</div>
              </div>
              <div className="text-sm text-yellow-200">
                Stir Fried Chicken Gizzards
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div className="flex">
                  불곱창볶음{" "}
                  <img src="/image/r_peper2.png" className="ml-1 w-8"></img>
                </div>
                <div>$24.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Spicy Stir Fried Beef Intestine
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div className="flex">
                  불막창볶음{" "}
                  <img src="/image/r_peper2.png" className="ml-1 w-8"></img>
                </div>
                <div>$25.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Spicy Stir Fried Pork Entrails (Mak Chang)
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div className="flex">
                  제육볶음{" "}
                  <img src="/image/r_peper1.png" className="ml-1 w-8"></img>
                </div>
                <div>$25.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Spicy Stir Fried Pork
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div className="flex">
                  즉석매콤닭발{" "}
                  <img src="/image/r_peper2.png" className="ml-1 w-8"></img>
                  <img src="/image/pot.png" className="ml-1 w-6"></img>
                </div>
                <div>$32.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Stir Fried Chicken Feet on Stove
              </div>
              <div className="flex justify-between mx-6 text-sm">
                <div>Add Rice ball or Fried rice</div>
                <div>$5.88</div>
              </div>
              <hr className="my-3"></hr>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
