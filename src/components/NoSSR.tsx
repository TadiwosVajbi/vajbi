'use client';

import { useEffect, useState } from 'react';

interface NoSSRProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * NoSSR component prevents hydration mismatches by only rendering children on the client side
 * Use this for components that use browser-only APIs or have different server/client rendering
 */
const NoSSR = ({ children, fallback = null }: NoSSRProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default NoSSR;
