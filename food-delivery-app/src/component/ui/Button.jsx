function Button({
    children,
    type = "button",
    variant = "primary",
    className = "",
    ...props
  }) {
    const baseStyles =
      "rounded-lg px-6 py-3 font-medium transition duration-300";
  
    const variants = {
      primary:
        "bg-orange-500 text-white hover:bg-orange-600",
  
      secondary:
        "border border-orange-500 text-orange-500 hover:bg-orange-50",
  
      outline:
        "border border-gray-300 text-gray-700 hover:bg-gray-100",
  
      danger:
        "bg-red-500 text-white hover:bg-red-600",
    };
  
    return (
      <button
        type={type}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  
  export default Button;