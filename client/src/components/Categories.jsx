function Categories() {
  const categories = [
    "👟 Shoes",
    "👕 Fashion",
    "💻 Electronics",
    "⌚ Watches",
    "📚 Books",
    "💄 Beauty",
  ];

  return (
    <section className="max-w-7xl mx-auto py-12 px-8">
      <h2 className="text-4xl font-bold text-center mb-10">Shop by Category</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-white shadow-md rounded-xl p-6 text-center cursor-pointer hover:bg-blue-600 hover:text-white transition"
          >
            {category}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
