import Image from 'next/image';
import Link from 'next/link';

export default function GetStartedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <Image
        src="/work-in-progress.png"
        alt="En construcción"
        width={400}
        height={400}
        className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto"
        priority
      />
      <Link
        href="/"
        className="inline-flex items-center justify-center h-[54px] my-4 px-8 rounded-[10px] bg-black text-white gap-2.5 no-underline"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
