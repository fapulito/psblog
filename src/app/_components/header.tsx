import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        Pulito Sviluppo
      </Link>
      <video width="320" height="240" loop autoPlay>
        <source src="https://fqz5ql6n25lmhdwa.public.blob.vercel-storage.com/psblog/cgirone_high_265-P0G2DYpYrleSsqCMRwdPcQUkbSJ9cD.mp4" type="video/mp4">

        </source>

      </video>
      
    </h2>
  );
};

export default Header;
