
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
      // Let the static import and CSS handle the aspect ratio and sizing
      className={cn("w-auto", className)}
      {...rest}
    />
  );
}
