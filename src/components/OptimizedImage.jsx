import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { imageOptimization } from '../utils/performance';
import { imageAccessibility } from '../utils/accessibility';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  sizes = '100vw',
  priority = false,
  lazy = true,
  placeholder = 'blur',
  blurDataURL,
  onLoad,
  onError,
  context = 'informative',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // Generate responsive image URLs
  const responsiveUrls = imageOptimization.generateResponsiveUrls(src);
  const srcSet = imageOptimization.generateSrcSet(src);

  // Generate appropriate alt text
  const optimizedAlt = imageAccessibility.generateAltText(context, alt);
  const isDecorative = imageAccessibility.isDecorative(src, context);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || priority) {
      setIsInView(true);
      return;
    }

    if (!imgRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [lazy, priority]);

  // Preload critical images
  useEffect(() => {
    if (priority) {
      imageOptimization.preloadImage(src);
    }
  }, [src, priority]);

  const handleLoad = (e) => {
    setIsLoaded(true);
    setHasError(false);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setHasError(true);
    setIsLoaded(false);
    if (onError) onError(e);
    console.error(`Failed to load image: ${src}`);
  };

  // Placeholder component
  const Placeholder = () => (
    <motion.div
      className={`bg-gray-200 flex items-center justify-center ${className}`}
      style={{ width, height }}
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoaded ? 0 : 1 }}
      transition={{ duration: 0.3 }}
    >
      {placeholder === 'blur' && blurDataURL ? (
        <img
          src={blurDataURL}
          alt=""
          className="w-full h-full object-cover filter blur-sm"
          aria-hidden="true"
        />
      ) : (
        <div className="text-gray-400 text-center">
          <svg
            className="w-8 h-8 mx-auto mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm">Loading...</span>
        </div>
      )}
    </motion.div>
  );

  // Error component
  const ErrorFallback = () => (
    <motion.div
      className={`bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center ${className}`}
      style={{ width, height }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-gray-500 text-center">
        <svg
          className="w-8 h-8 mx-auto mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
        <span className="text-sm">Failed to load image</span>
      </div>
    </motion.div>
  );

  if (hasError) {
    return <ErrorFallback />;
  }

  return (
    <div className="relative overflow-hidden" ref={imgRef}>
      {/* Placeholder */}
      {!isLoaded && <Placeholder />}

      {/* Main Image */}
      {isInView && (
        <motion.img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={isDecorative ? '' : optimizedAlt}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          width={width}
          height={height}
          onLoad={handleLoad}
          onError={handleError}
          loading={lazy && !priority ? 'lazy' : 'eager'}
          decoding="async"
          role={isDecorative ? 'presentation' : undefined}
          aria-hidden={isDecorative ? 'true' : undefined}
          {...props}
          style={{
            ...props.style,
            aspectRatio: width && height ? `${width}/${height}` : undefined
          }}
        />
      )}

      {/* Loading indicator for slow connections */}
      {isInView && !isLoaded && !hasError && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
        >
          <motion.div
            className="w-6 h-6 border-2 border-teal-600 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sizes: PropTypes.string,
  priority: PropTypes.bool,
  lazy: PropTypes.bool,
  placeholder: PropTypes.oneOf(['blur', 'empty']),
  blurDataURL: PropTypes.string,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  context: PropTypes.oneOf(['decorative', 'informative', 'functional', 'complex'])
};

export default OptimizedImage;
