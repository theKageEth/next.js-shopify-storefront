import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { FaRegGem } from 'react-icons/fa';

export default function OpenCart({
  className,
  quantity,
  gemColor
}: {
  className?: string;
  quantity?: number;
  gemColor?: string;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
      {/* Icon Wrapper */}
      <div className="relative flex items-center justify-center transition-transform ease-in-out hover:scale-125">
        {/* Gem Icon with dynamic color */}
        <FaRegGem
          className={clsx(
            'absolute left-[5px] top-[-7px] h-4 w-4',
            gemColor,
            className,
            quantity ? 'animate-subtleBounce' : 'animate-sparkle'
          )}
        />
        {/* Shopping Cart Icon */}
        <ShoppingCartIcon className="h-6 w-6 translate-y-1" />
      </div>

      {/* Quantity Badge */}
      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-secondaryColor text-[11px] font-medium text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
