type Props = {
  name: string;
  description: string;
  image: string;
};

function Class({ name, description, image }: Props) {
  const overlayStyles = `p-5 absolute z-30 flex flex-col h-full items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90
    `;

  return (
    <div className="relative inline-block">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} />
    </div>
  );
}

export default Class;
