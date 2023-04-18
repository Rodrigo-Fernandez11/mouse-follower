
export function RandomFox(): JSX.Element {
  // Generamos un número aleatorio entre 1 y 122
  const randomNumber = () => Math.floor(Math.random() * 122) + 1;

  const image = `https://randomfox.ca/images/${randomNumber()}.jpg`;

  return (
    <img
      width="320"
      height="auto"
      src={image}
      className="mx-auto rounded-md bg-gray-300"
    />
  );
}
