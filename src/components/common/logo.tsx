
import NextImage, { type ImageProps as NextImageProps } from 'next/image';
// The user stated FKA_logo.svg is at /home/user/studio/src/components/common/FKA_logo.svg
// So the relative import from /home/user/studio/src/components/common/logo.tsx is correct.
import fkaLogoSrc from './FKA_logo.svg';
import fkaLogoWhiteSrc from './FKA_logo-white.svg';
import { cn } from '@/lib/utils';

// We Omit width and height because the component manages its own aspect ratio.
// Size should be controlled via className.
interface FkaLogoProps extends Omit<NextImageProps, 'src' | 'alt' | 'width' | 'height'> {
  variant?: 'default' | 'white';
}

export function FkaLogo(props: FkaLogoProps) {
  const {
    className,
    variant = 'default',
    ...rest
  } = props;

  const logoSrc = variant === 'white' ? fkaLogoWhiteSrc : fkaLogoSrc;

  return (
    <NextImage
      src={logoSrc}
      alt="Felleskjøpet Agri Logo"
      // Provide intrinsic dimensions for Next.js to calculate the aspect ratio.
      width={150} 
      height={40}
      // The passed `className` (e.g., "h-10") will set one dimension,
      // and "w-auto" or "h-auto" will ensure the other scales correctly.
      className={cn("h-auto w-auto", className)}
      {...rest}
    />
  );
}
