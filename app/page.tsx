import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>

      {/* Header */}
      <header style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '3.5rem' }}>
        <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 600, fontSize: '1rem', color: '#1a1a1a' }}>
          Gareth MacLeod
        </span>
        <nav>
          <Link href="/blog/first-post">Writing</Link>
        </nav>
      </header>

      {/* Profile */}
      <main>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {/* Avatar */}
          <Image
            src="/me.png"
            alt="Profile photo"
            width={120}
            height={120}
            style={{ borderRadius: '50%', flexShrink: 0, objectFit: 'cover' }}
          />

          {/* Bio */}
          <div style={{ flex: 1, minWidth: 220 }}>
            <h1 style={{ marginTop: 0, fontSize: '1.4rem' }}>Gareth MacLeod</h1>
            <p style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '0.88rem', color: '#555', marginBottom: '0.75rem' }}>
              Associate Professor of Computer Science · State University
            </p>
            <p>
              I study distributed systems and programming language theory. My current work focuses on
              formal verification of concurrent protocols and making those ideas accessible to practitioners.
            </p>
            <p>
              Before academia I spent several years writing infrastructure software, which still shapes
              how I think about the gap between theory and the systems people actually build.
            </p>
            <p style={{ fontSize: '0.88rem', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#555' }}>
              <a href="mailto:jane@example.com">email</a>
              {' · '}
              <a href="#">github</a>
              {' · '}
              <a href="#">google scholar</a>
            </p>
          </div>
        </div>

        <hr />

        {/* Writing */}
        <section>
          <h2 style={{ fontSize: '1rem', fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#888', marginTop: 0 }}>
            Writing
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/blog/how-to-feel-when-your-startup-feels-easy">
                How to feel when your startup feels easy
              </Link>
              <span className="post-meta">Mar 2024</span>
            </li>
            <li style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/blog/first-post">
                On the Gap Between Formal Models and Real Systems
              </Link>
              <span className="post-meta">Feb 2026</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
