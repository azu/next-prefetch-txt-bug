import Link from 'next/link';

export default function TestPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Test Page</h1>
      <p>This is a normal page that should load correctly.</p>
      <Link href="/">← Back to Home</Link>
    </main>
  );
}