import NextImage, { type ImageProps as NextImageProps } from 'next/image';
// The user stated FKA_logo.svg is at /home/user/studio/src/components/common/FKA_logo.svg
// So the relative import from /home/user/studio/src/components/common/logo.tsx is correct.
import fkaLogoSrc from './FKA_logo.svg';

interface FkaLogoProps extends Omit<NextImageProps, 'src' | 'alt'> {}

export function FkaLogo(props: FkaLogoProps) {
  const {
    className,
    width: explicitWidth,
    height: explicitHeight,
    priority, // Pass through priority if set
    ...rest
  } = props;

  // Default intrinsic dimensions for aspect ratio if not provided by props.
  // These are for the `next/image` `width` and `height` props, NOT for CSS.
  // The actual rendered size will be determined by CSS (e.g., `className="h-10 w-auto"`).
  const intrinsicWidth = 150; // Default aspect ratio, e.g., 150x40 or actual aspect ratio of logo
  const intrinsicHeight = 40;

  return (
    <NextImage
      src={fkaLogoSrc}
      alt="Felleskjøpet Agri Logo"
      // Use explicit width/height if passed, otherwise use default intrinsic dimensions
      // for aspect ratio. Tailwind classes like h-10 w-auto will then scale this.
      width={explicitWidth || intrinsicWidth}
      height={explicitHeight || intrinsicHeight}
      className={className}
      priority={priority} // Ensure priority can be passed for LCP elements
      {...rest}
    />
  );
}
