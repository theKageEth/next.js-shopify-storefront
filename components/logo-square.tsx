import LogoIcon from './icons/logo';

export default function LogoSquare() {
  return (
    <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full">
      <LogoIcon className="translate-x-[1.5px] scale-[2.5]" />
    </div>
  );
}
