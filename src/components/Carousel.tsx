import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type React from "react";
import ProductCom from "./home/Product/ProductCom";
import type { Produk } from "@/types";

const CarouselComponent: React.FunctionComponent<{
  produk: Produk[];
  type: string;
  pathname: string;
}> = ({ produk, type, pathname }) => {
  return (
    <div className="p-6">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        navigation={{
          nextEl: ".my-button-next",
          prevEl: ".my-button-prev",
        }}
        modules={[Navigation]}
        centeredSlidesBounds={true}
        // className="mySwiper"
      >
        {produk.map((gallery: any) => {
          return (
            <SwiperSlide key={gallery.id}>
              {type === "produk" && (
                <ProductCom
                  src={gallery.product.product_image}
                  alt={gallery.product.product_image_alt}
                  name={gallery.product.title}
                  type={pathname}
                />
              )}
            </SwiperSlide>
          );
        })}
        ...
      </Swiper>
      <div className="space-x-2 justify-end flex w-full px-4 mt-6">
        <button className="my-button-prev p-2 rounded-full bg-white text-black hover:text-brownkertas">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div className="swiper-pagination" />
        <button className="my-button-next p-2 rounded-full bg-white text-black hover:text-brownkertas">
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
