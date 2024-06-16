import React from "react";

function ProductCom({ src, alt, name, pathname, url_slug }: any) {
  return (
    <a className="space-y-4" href={`/product/${url_slug}`}>
      <img className="" src={src} width={50} height={50} alt={alt} />
      <h1
        className={`${
          pathname === "/product" ? "text-black" : "text-white"
        } font-bold`}
      >
        {name}
      </h1>
    </a>
  );
}

export default ProductCom;
