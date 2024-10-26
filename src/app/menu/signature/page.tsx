import Link from "next/link";

export default function Signature() {
  return (
    <section className="bg-repeat w-full mb-40 ">
      <div className="container max-w-5xl mx-auto px-8 lg:px-3 pt-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 text-white">
          <div className="col-span-1 text-xl">
            <div className="text-center text-4xl font-semibold mb-16 lg:mb-14 text-yellow-400">
              88 SIGNATURE
            </div>
            <div className="my-6 ">
              <div className="flex justify-between">
                <div className="flex">
                  88 마라짬뽕{" "}
                  <img src="/image/r_peper2.png" className="ml-1 w-8"></img>
                </div>
                <div>$24.88</div>
              </div>
              <div className="text-sm text-yellow-200">
                88 Spicy Mala Seafood Soup
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6 ">
              <div className="flex justify-between">
                <div className="flex">
                  88 볶음짬뽕{" "}
                  <img src="/image/r_peper2.png" className="ml-1 w-8"></img>
                </div>
                <div>$24.88</div>
              </div>
              <div className="text-sm text-yellow-200">
                88 Spicy Stir Fried Seafood Noodle
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div className="flex">88 나가사키짬뽕 </div>
                <div>$24.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                88 Nagasaki Seafood Soup
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div className="flex">88 우설구이 </div>
                <div>$25.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                88 Grilled Beef Tongue
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div className="flex">
                  88 해장파스타{" "}
                  <img src="/image/r_peper1.png" className="ml-1 w-6"></img>
                  <img src="/image/pot.png" className="ml-1 w-6"></img>
                </div>
                <div>$30.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                88 Seafood Pasta Soup on Stove
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div className="flex">
                  88 화산마라탕{" "}
                  <img src="/image/r_peper2.png" className="ml-1 w-8"></img>
                  <img src="/image/pot.png" className="ml-1 w-6"></img>
                </div>
                <div>$38.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                88 Volcano Malatang
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div className="flex">
                  88 낙곱새
                  <img src="/image/r_peper1.png" className="ml-1 w-6"></img>
                  <img src="/image/pot.png" className="ml-1 w-6"></img>
                </div>
                <div>$38.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                88 Signature Spicy Seafood Stew
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-4">
              <div className="flex justify-between">
                <div className="flex">
                  88 곱창전골{" "}
                  <img src="/image/r_peper1.png" className="ml-1 w-6"></img>
                  <img src="/image/pot.png" className="ml-1 w-6"></img>
                </div>
                <div>$38.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                88 Beef Intestine Soup on Stove
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>88 육회문어한판</div>
                <div>$38.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                88 K-Beef Tartare & Sliced Octopus
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div className="flex">
                  88 모듬수육
                  <img src="/image/pot.png" className="ml-1 w-6"></img>
                </div>
                <div>$38.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                88 Assorted Steamed Beef & Pork
              </div>
              <div className="flex justify-between mx-4 text-sm">
                <div>Add Beef Tendon</div>
                <div>$8.88</div>
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between text-sm">
                <div className="flex">공기밥 추가 Add Bowl of Rice</div>
                <div>$2.88</div>
              </div>
            </div>
          </div>
          <div className="col-span-1 text-xl">
            <div className="flex justify-center text-5xl font-semibold my-16 lg:my-0 text-white-400">
              $88.
              <div className="text-2xl mr-3">88</div>
              COMBO
            </div>
            <div className="text-center my-6 text-base">
              <p className="text-yellow-400 font-bold text-2xl my-3">COMBO 1</p>
              <div>
                <p>소주1병 or 맥주피쳐</p>
                <p>스노우치즈감자튀김 or 타코야키</p>
                <p>새우장</p>
                <p>88 화산마라탕</p>
              </div>
              <div className="text-yellow-200 mt-3">
                <p>1 Soju or Draft Pitcher</p>
                <p>Snow Cheese Fries or Takoyaki</p>
                <p>Soy Marinated Raw Shrimp</p>
                <p>88 Volcano Malatang</p>
              </div>
            </div>
            <div className="text-center my-6 text-base">
              <p className="text-yellow-400 font-bold text-2xl my-3">COMBO 2</p>
              <div>
                <p>소주1병 or 맥주피쳐</p>
                <p>콘치즈 or 타코야키</p>
                <p>흑후추우삼겹</p>
                <p>88 낙곱새</p>
              </div>
              <div className="text-yellow-200 mt-3">
                <p>1 Soju or Draft Pitcher</p>
                <p>Corn Cheese or Takoyaki</p>
                <p>Stir Fried Beef Loin</p>
                <p>88 Signature Spicy Seafood Stew</p>
              </div>
            </div>
            <div className="text-center mt-6 text-base mb-12">
              <p className="text-yellow-400 font-bold text-2xl my-3">COMBO 3</p>
              <div>
                <p>소주1병 or 맥주피쳐</p>
                <p>타코와사비</p>
                <p>닭오돌뼈볶음</p>
                <p>88 모듬수육</p>
              </div>
              <div className="text-yellow-200 mt-3">
                <p>1 Soju or Draft Pitcher</p>
                <p>Tako Wasabi</p>
                <p>Stir Fried Chicken Cartilage</p>
                <p>88 Assorted Steamed Beef & Pork</p>
              </div>
            </div>
            <div className="flex">
              <div className="py-1 px-5 rounded-full mx-auto bg-yellow-400 text-green-800 text-base">
                ※ Draft Beer + $3
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
