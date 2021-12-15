import Image from 'next/image';
import banner from '../assets/pexels-pixabay-301692.jpg';

const Banner = () => {
  return (
    <div className="banner w-full relative">
      <Image
        src={banner}
        alt="banner"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        priority
      />
      <div className="absolute top-1/2 text-white mx-2">
        <h2 className="text-4xl font-bold font-mono md:text-5xl lg:text-6xl">
          Welcome,
        </h2>
        <h2 className="text-2xl md:text-3xl lg:text-4xl">
          Browse and explore drinks from around the world.
        </h2>
      </div>
    </div>
  );
};
export default Banner;
