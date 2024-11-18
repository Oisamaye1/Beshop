export async function generateStaticParams() {
    const res = await fetch("https://fakestoreapi.in/api/products/category");
    const data = await res.json();
  
    return data.categories.map((category: string) => ({
      category,
    }));
  }
  