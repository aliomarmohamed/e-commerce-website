import React from "react";
import Img1 from "../../assets/women/ريان3.png";
import Img2 from "../../assets/women/ريان3.png";
import Img3 from "../../assets/women/ريان3.png";
import Img4 from "../../assets/women/ريان3.png";
import { FaStar } from "react-icons/fa6";


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "جهات حكومية وقطاع الاعمال",
    rating: 5.0,
    color: " ",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "الكل",
    rating: 5,
    color: " ",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "طالب",
    rating: 5,
    color: " ",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "زائر",
    rating: 5,
    color: " ",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "مقيم",
    rating: 5,
    color: " ",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-10 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            احصل علي افضل خدمة
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            الخدمات الرقمية
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            ---
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[50px] w-[50px] object-cover rounded-md"
                />
                <div>


                  <button className="">
                    <h3 className="font-semibold">{data.title}</h3>

                  </button>

                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              المزيد من الخدمات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Products;