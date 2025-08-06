'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export  function RouterReplaceTest() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCount = searchParams.get('count') || '0';

  const handleReplace = () => {
    router.replace('/test-page');
  };

  const handleReplaceWithParam = () => {
    const newCount = parseInt(currentCount) + 1;
    router.replace(`/router-replace-test?count=${newCount}`);
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Router Replace Test</h1>
      <p>Testing if router.replace() has the same .txt file display bug.</p>
      <p>Current count parameter: {currentCount}</p>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button
          onClick={handleReplace}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Test router.replace('/test-page')
        </button>

        <button
          onClick={handleReplaceWithParam}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Replace with param (count={parseInt(currentCount) + 1})
        </button>
      </div>

      <h2>Instructions:</h2>
      <ol>
        <li>npm run build && npm run start</li>
        <li>open http://localhost:3000/router-replace-test</li>
        <li>open Chrome DevTools</li>
        <li>open network tab</li>
        <li>block `http://localhost:3000/test-page.txt=` as request url</li>
        <li>click the button above</li>
      </ol>
    </main>
  );
}
