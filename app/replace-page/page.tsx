'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ReplacePage() {
  const router = useRouter();
  const [isReplacing, setIsReplacing] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!isReplacing) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.replace('/test-page');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isReplacing, router]);

  const startAutoReplace = () => {
    setIsReplacing(true);
    setCountdown(5);
  };

  const stopAutoReplace = () => {
    setIsReplacing(false);
    setCountdown(5);
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Auto Replace Test</h1>
      <p>This page will automatically call router.replace('/test-page') after 5 seconds.</p>

      {isReplacing && (
        <div style={{ 
          padding: '1rem', 
          backgroundColor: '#f0f0f0', 
          borderRadius: '4px',
          marginBottom: '1rem'
        }}>
          <p style={{ fontSize: '1.5rem', margin: 0 }}>
            Replacing in {countdown} seconds...
          </p>
        </div>
      )}

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button
          onClick={startAutoReplace}
          disabled={isReplacing}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            backgroundColor: isReplacing ? '#ccc' : '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isReplacing ? 'not-allowed' : 'pointer',
          }}
        >
          Start Auto Replace
        </button>
        
        <button
          onClick={stopAutoReplace}
          disabled={!isReplacing}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            backgroundColor: !isReplacing ? '#ccc' : '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: !isReplacing ? 'not-allowed' : 'pointer',
          }}
        >
          Stop
        </button>
      </div>

      <h2>Instructions:</h2>
      <ol>
        <li>npm run build && npm run start</li>
        <li>open http://localhost:3000/replace-page</li>
        <li>open Chrome DevTools</li>
        <li>open network tab</li>
        <li>block `http://localhost:3000/test-page.txt=` as request url</li>
        <li>click "Start Auto Replace" button</li>
        <li>Wait for the countdown and see if .txt file is displayed</li>
      </ol>
    </main>
  );
}