import React from "react";

function ProductCom({ src, alt, name, pathname }: any) {
  return (
    <div className="space-y-4">
      <img
        className="object-scale-down"
        src={src}
        width={50}
        height={50}
        alt={alt}
      />
      <h1
        className={`${
          pathname === "/product" ? "text-black" : "text-white"
        } font-bold`}
      >
        {name}
      </h1>
    </div>
  );
}

export default ProductCom;
