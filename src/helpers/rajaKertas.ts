import request from "./request";
type method = "put" | "post" | "delete";

const getRequest = async (
  endpoint: string,
  params: Object
  //   response: NextApiResponse
) => {
  try {
    const { data: response } = await request.get(endpoint, { params });
    return response;
  } catch (error) {
    throw error;
  }
};

const postRequest = async (
  endpoint: string,
  body: any,
  isFormData = false,
  method: method
) => {
  let payload = body;
  if (isFormData) {
    payload = new FormData();
    Object.keys(body).forEach((key: string) => {
      payload.append(key, body[key]);
    });
  }
  try {
    const { data: response } = await request[method](endpoint, payload);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getLogoHitam = () => getRequest(`/public/config-key/Logo/`, {});
export const getHero = () => getRequest(`/public/config-key/hero/`, {});
export const getProdukHero = () =>
  getRequest(`/public/config-key/PRODUCT_HERO/`, {});
export const getTentangKami = () =>
  getRequest(`/public/config-key/TENTANG_KAMI/`, {});
export const getKeunggulan = () =>
  getRequest(`/public/config-key/KEUNGGULAN/`, {});
export const getFaq = () => getRequest(`/public/config-key/FAQ/`, {});
export const getHomeGallery = () => getRequest(`/home-gallery/`, {});
export const getProductList = () => getRequest(`/product-detail/`, {});
export const getPartner = () => getRequest(`/our-partner/`, {});
export const getFooter = () => getRequest(`/public/config-key/Footer/`, {});
export const getMainProduct = () =>
  getRequest(`/public/config-key/mainproduct/`, {});
export const getWhatsapp = () => getRequest(`/public/config-key/WHATSAPP/`, {});
export const getProductDetail = (params: any) =>
  getRequest(`/product-detail/?url_slug=${params}`, {});

export const postContactUs = (body: any) =>
  postRequest(`/contact-us-form/`, body, false, "post");
