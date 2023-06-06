import swell from "./client";

export const getProducts = async ({ page = 1, sort = "", filters = {}, limit = "25" }) => {
  return await swell.products.list({
    page,
    limit,
    sort,
    $filters: filters,
    expand: ["variants", "categories", "attributes"],
  });
};

export const getProductBySlugOrId = async (slugOrId) => {
  return await swell.products.get(slugOrId);
};
