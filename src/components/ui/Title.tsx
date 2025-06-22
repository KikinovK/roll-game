const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="relative flex items-center w-[min(100%,600px)] text-2xl text-center py-1 text-white font-bold">
      <span className=" flex-grow-1 h-[1px] bg-white/40 radius/4 mt-1"></span>
      <span className="px-4"> {children}</span>
      <span className=" flex-grow-1 h-[1px] bg-white/40"></span>
    </h1>
  );
}

export default Title;
