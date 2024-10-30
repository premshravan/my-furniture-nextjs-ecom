export async function getAllCategories() {
  try {
    const categoriesRes = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    if (!categoriesRes.ok) {
      throw new Error("Failed to fetch");
    }

    //conversting response to json
    const categories = await categoriesRes.json();
    return categories;
  } catch (err) {
    console.log("error", err);
  }
}

export async function getAllProducts() {
  try {
    const getAllProductsRes = await fetch("https://fakestoreapi.com/products");

    if (!getAllProductsRes.ok) {
      throw new Error("Failed to fecth");
    }
    const getAllProducts = await getAllProductsRes.json();
    return getAllProducts;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getSingleProduct(id: string) {
  const singleProductRes = await fetch(
    `https://fakestoreapi.com/products/${id}`
  );
  return singleProductRes.json();
}

export async function getProductsByCategory(category: string) {
  const productByCategoryRes = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return productByCategoryRes.json();
}
