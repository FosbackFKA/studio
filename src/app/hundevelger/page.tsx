'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// This page is being deprecated in favor of /hundefor.
// It now serves as a redirect to the new landing page.
export default function HundevelgerRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/hundefor');
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <p>Omdirigerer til vår nye side for hundefôr...</p>
    </div>
  );
}
