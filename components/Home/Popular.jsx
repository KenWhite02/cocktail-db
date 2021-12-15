import Image from 'next/image';

const Popular = ({ drinks }) => {
  const cocktails = drinks.slice(0, 9);

  return (
    <div className="max-w-screen-2xl m-auto">
      <h2 className="text-black font-bold text-4xl mt-5 text-center">
        Popular drinks
      </h2>

      <div className="m-2 sm:grid md:grid-cols-2 lg:grid-cols-3">
        {cocktails.map((cocktail) => {
          const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } =
            cocktail;
          return (
            <div
              key={idDrink}
              className="group shadow-2xl cursor-pointer my-10 mx-3 md:mx-5 lg:mx-7 xl:10 bg-white transition-all duration-500 ease-in-out hover:scale-105"
            >
              <Image
                src={strDrinkThumb}
                alt={strDrink}
                layout="responsive"
                placeholder="blur"
                blurDataURL={strDrinkThumb}
                height={450}
                width={500}
                objectFit="cover"
              />

              <div className="p-2 text-black">
                <h2 className="font-extrabold text-4xl">{strDrink}</h2>
                <h2 className="font-mono">{strGlass}</h2>
                <p className="text-gray-400">{strAlcoholic}</p>
                <button className="bg-green-500 px-4 py-2 tracking-widest text-lg opacity-0 transition-all duration-1000 ease-in-out group-hover:opacity-100">
                  Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
