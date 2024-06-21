interface TagProps {
  children: string;
}

function Tag(props: TagProps) {
  const { children } = props;
  return (
    <div className="py-1 px-2 text-sm rounded-full border text-[#5B6F83] border-color-[#DAE4F0]">
      {children}
    </div>
  );
}

export default Tag;
