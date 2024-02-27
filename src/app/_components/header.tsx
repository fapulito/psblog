import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        Pulito Sviluppo
      </Link>
      <video width="320" height="240" loop autoPlay>
        <source src="https://res.cloudinary.com/dqzj6idvg/video/upload/v1709060391/psblog/cgirone_720_fbrtjy.mp4" type="video/mp4">

        </source>

      </video>
      
    </h2>
  );
};

export default Header;
