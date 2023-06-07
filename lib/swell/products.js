import swell from "./client";

export const getProducts = async ({ page = 1, sort = "", filters = {}, limit = "25" }) => {
  return await swell.products.list({
    category: "flasker",
    page,
    limit,
    expand: ["variants", "categories", "attributes"],
  });
};

export const getProductBySlugOrId = async (slugOrId) => {
  return await swell.products.get(slugOrId);
};

export const getProductsGo = async ({ page = 1, sort = "", filters = {}, limit = "25" }) => {
  return await swell.products.list({
    category: "plateau-go",
    page,
    limit,
    expand: ["variants", "categories", "attributes"],
  });
};
