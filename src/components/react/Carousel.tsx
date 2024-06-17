import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";

import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type React from "react";
import ProductCom from "../home/Product/ProductCom";
import type { Gallery, Produk } from "@/types";

const CarouselComponent: React.FunctionComponent<{
  produk: Produk[];
  gallery: Gallery[];
  type: string;
  pathname: string;
}> = ({ produk, type, pathname, gallery }) => {
  return (
    <div className="p-6">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={20}
        navigation={{
          nextEl: ".my-button-next",
          prevEl: ".my-button-prev",
        }}
        modules={[Navigation]}
        centeredSlidesBounds={true}
        // className="mySwiper"
      >
        {produk !== undefined &&
          produk.map((gallery: any) => {
            return (
              <SwiperSlide key={gallery.id}>
                {type === "produk" && (
                  <ProductCom
                    src={gallery.product.product_image}
                    alt={gallery.product.product_image_alt}
                    name={gallery.product.title}
                    type={type}
                    pathname={pathname}
                    url_slug={gallery.url_slug}
                  />
                )}
              </SwiperSlide>
            );
          })}
        {gallery !== undefined &&
          gallery.map((produk: any) => {
            return (
              <SwiperSlide key={produk.id}>
                {type === "gallery" && (
                  <ProductCom
                    src={produk.home_gallery_image}
                    alt={produk.home_gallery_image_alt}
                    name={""}
                    type={type}
                    pathname={pathname}
                  />
                )}
              </SwiperSlide>
            );
          })}
      </Swiper>

      <div className="space-x-2 justify-end flex w-full px-4 mt-6">
        <button className="my-button-prev p-2 rounded-full bg-white text-black hover:text-brownkertas">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div />
        <button className="my-button-next p-2 rounded-full bg-white text-black hover:text-brownkertas">
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
