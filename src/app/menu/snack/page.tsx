import Link from "next/link";

export default function Snack() {
  return (
    <section className="bg-repeat w-full mb-40">
      <div className="container max-w-5xl mx-auto px-8 lg:px-3 pt-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 text-white">
          <div className="col-span-1 text-xl">
            <div className="text-center text-4xl font-semibold mb-16 lg:mb-14 text-yellow-400">
              SNACK
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>감자튀김</div>
                <div>$8.88</div>
              </div>
              <div className="text-sm text-yellow-200">Fries</div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>스노우치즈감자튀김</div>
                <div>$11.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Snow Cheese Fries
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>호떡아이스크림</div>
                <div>$11.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Korean Sweet Pancake with Vanilla Ice Cream
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>콘치즈</div>
                <div>$12.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">Corn Cheese</div>

              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>타코야키</div>
                <div>$12.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">Takoyaki</div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>타코와사비</div>
                <div>$12.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">Tako Wasabi</div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>황도&리치</div>
                <div>$16.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Iced Yellow Peach & Lychee
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>명란계란찜</div>
                <div>$16.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Steamed Eggs With Pollack Roe
                <hr className="my-3"></hr>
              </div>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>계란말이</div>
                <div>$16.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Rolled Omelette
              </div>
              <div className="flex justify-between mx-6 text-sm">
                <div>Add 치즈 Cheese </div>
                <div>$2</div>
              </div>
              <div className="flex justify-between mx-6 text-sm">
                <div>Add 명란 Pollak Roe </div>
                <div>$3</div>
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>해물파전</div>
                <div>$19.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Seafood & Green Onion Pancake
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>김치전</div>
                <div>$19.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">Kimchi Pancake</div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>반반전</div>
                <div>$20.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Half & Half Pancake
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>바삭통먹태구이</div>
                <div>$22.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">Dried Pollack</div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>닭똥집 튀김</div>
                <div>$22.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Deep Fried Chicken Gizzards
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>순살치킨</div>
                <div>$23.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Crispy Boneless Fried Chicken
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>양념순살치킨</div>
                <div>$24.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Sweet & Spicy Boneless Fried Chicken
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>스노우치즈치킨</div>
                <div>$24.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Snow Cheese Boneless Fried Chicken
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>파닭</div>
                <div>$25.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Green Onion Boneless Fried Chicken
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div className="flex">
                  치즈불닭{" "}
                  <img src="/image/r_peper1.png" className="ml-1 w-8"></img>
                </div>
                <div>$25.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Spicy Grilled Chicken with Cheese
              </div>
              <hr className="my-3"></hr>
            </div>
            <div className="my-6">
              <div className="flex justify-between">
                <div>과일안주</div>
                <div>$25.88</div>
              </div>
              <div className="my-1 text-sm text-yellow-200">
                Assorted Fruits Platter
              </div>
              <hr className="my-3"></hr>
            </div>
          </div>
          <div className="col-span-1 text-xl">
            <div className="text-center text-4xl font-semibold mb-16 lg:mb-14 text-yellow-400">
              SOFT DRINK
            </div>
            <div className="my-8">
              <div className="flex justify-between">
                <div>Coke, Coke Zero, Diet Coke</div>
                <div>$2.88</div>
              </div>
              <div>Sprite, Canada Dry</div>
            </div>
            <div className="my-8">
              <div className="flex justify-between">
                <div>Nestea, Tonic Water, Club Soda</div>
                <div>$3.88</div>
              </div>
              <div>Arizona, Milkis, Aloe,</div>
              <div>Crushed Pear Juice (갈아만든배)</div>
            </div>
            <div className="my-8">
              <div className="flex justify-between">
                <div>Perrier, Hangover Drink (헛개차)</div>
                <div>$4.88</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
