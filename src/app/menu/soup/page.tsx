import Link from "next/link";

export default function Soup() {
  return (
    <section className="bg-repeat w-full mb-40">
      <div className="container max-w-5xl mx-auto px-8 lg:px-3 pt-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 text-white">
          <div className="col-span-1 text-xl">
            <div className="text-center text-4xl font-semibold mb-16 lg:mb-14 text-yellow-400">
              SOUP
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div className="flex">
                  알탕<img src="/image/r_peper1.png" className="ml-1 w-6"></img>
                </div>
                <div>$20.88</div>
              </div>
              <div className="text-sm text-yellow-200">Spicy Fish Roe Soup</div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div className="flex">
                  오뎅탕
                  <img src="/image/pot.png" className="ml-1 w-6"></img>
                </div>
                <div>$24.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Fish Cake Soup on Stove
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-4">
              <div className="flex justify-between">
                <div className="flex">
                  부대찌개
                  <img src="/image/r_peper1.png" className="ml-1 w-6"></img>
                  <img src="/image/pot.png" className="ml-1 w-6"></img>
                </div>
                <div>$33.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Army Soup on Stove
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-4">
              <div className="flex justify-between">
                <div>모츠나베</div>
                <div>$38.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">Motsu Nabe</div>
              <hr className="my-3"></hr>
            </div>
          </div>
          <div className="col-span-1 text-xl">
            <div className="text-center text-4xl font-semibold mb-16 lg:mb-14 text-yellow-400">
              NOODLE
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div className="flex">
                  김치말이국수{" "}
                  <img src="/image/r_peper1.png" className="ml-1 w-6"></img>
                </div>
                <div>$18.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Cold Noodle with Kimchi Broth
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>크림우동</div>
                <div>$21.88</div>
              </div>
              <div className="text-sm text-yellow-200">Cream Udon</div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div className="flex">
                  크림마라우동{" "}
                  <img src="/image/r_peper1.png" className="ml-1 w-6"></img>
                </div>
                <div>$22.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Cream Mala Udon
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>로제파스타</div>
                <div>$23.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">Rose Pasta</div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div className="flex">
                  로제마라파스타{" "}
                  <img src="/image/r_peper1.png" className="ml-1 w-6"></img>
                </div>
                <div>$24.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Rose Mala Pasta
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>왕갈비크림파스타</div>
                <div>$28.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Cream Pasta w/Bone-in Beef Rib
              </div>
              <hr className="my-3"></hr>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
