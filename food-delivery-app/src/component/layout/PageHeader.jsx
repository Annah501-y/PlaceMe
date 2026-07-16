function PageHeader({ title, subtitle }) {
    return (
      <section className="bg-orange-500 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            {title}
          </h1>
  
          <p className="mx-auto mt-4 max-w-2xl text-lg text-orange-100">
            {subtitle}
          </p>
        </div>
      </section>
    );
  }
  
  export default PageHeader;