import { Store } from "lucide-react";

function EmptyState({ title, description }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-white py-16 shadow">
      <Store
        size={70}
        className="text-orange-500"
      />

      <h2 className="mt-6 text-2xl font-bold text-gray-800">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-center text-gray-500">
        {description}
      </p>
    </div>
  );
}

export default EmptyState;