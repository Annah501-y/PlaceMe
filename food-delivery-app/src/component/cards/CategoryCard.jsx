function CategoryCard({ name, image }) {
    return (
      <div className="cursor-pointer rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-lg">
  
        {/* Category image should be placed in:
            src/assets/categories/
            Example:
            src/assets/categories/pizza.jpg
        */}
        <img
          src={image}
          alt={name}
          className="mx-auto h-20 w-20 rounded-full object-cover"
        />
  
        <h3 className="mt-4 font-semibold text-gray-800">
          {name}
        </h3>
  
      </div>
    );
  }
  
  export default CategoryCard;