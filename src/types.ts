export interface Produk {
  id: number;
  product: {
    id: number;
    created_at: string;
    updated_at: string;
    title: string;
    product_image: string;
    product_image_alt: string;
  };
  created_at: string;
  updated_at: string;
  description: string;
  url_slug: string;
}
