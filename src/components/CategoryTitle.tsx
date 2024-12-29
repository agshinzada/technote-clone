const CategoryTitle = ({ title }: { title: string | undefined }) => {
  return <h2 className="text-2xl font-bold md:mt-0 mt-4">{title}</h2>;
};

export default CategoryTitle;
