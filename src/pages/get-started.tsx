import Image from 'next/image';
import Link from 'next/link';

export default function GetStartedPage() {
  return (
    <div className="h-screen overflow-hidden flex flex-col items-center justify-center px-4 text-center">
      <div className="flex-shrink-0">
        <Image
          src="/work-in-progress.png"
          alt="En construcción"
          width={400}
          height={400}
          className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto"
          priority
        />
      </div>
      <Link
        href="/"
        className="inline-flex items-center justify-center h-[48px] px-6 mt-6 rounded-[10px] bg-black text-white gap-2.5 no-underline text-sm"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
