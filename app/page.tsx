import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Next.js Prefetch TXT Bug Demo</h1>
      <p>This demonstrates a bug where .txt files are unintentionally displayed when prefetch fails and hard navigation occurs.</p>

      <h2>Test Links:</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '1rem' }}>
          <Link href="/test-page" prefetch={true} style={{
            color: "#0070f3",
          }}>
            Normal Page Link (with prefetch)
          </Link>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Link href="/router-replace-test" style={{
            color: "#0070f3",
          }}>
            Test router.replace()
          </Link>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Link href="/replace-page" style={{
            color: "#0070f3",
          }}>
            Auto Replace Page
          </Link>
        </li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
        <li>npm run build && npm run start</li>
        <li>open http://localhost:3000</li>
        <li>open Chrome DevTools</li>
        <li>open network tab</li>
        <li>click on the link above</li>
        <li>block `http://localhost:3000/test-page.txt=` as request url</li>
        <li>click "Normal Page Link (with prefetch)" link</li>
      </ol>
    </main>
  );
}
