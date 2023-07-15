const RedButton = ({ children }: { children: string[] | string }) => {
  return (
    <button className="bg-red-700 p-4 shadow-lg text-white md:mt-4 hover:scale-125 transition-transform duration-500">
      {children}
    </button>
  );
};

export default RedButton;
