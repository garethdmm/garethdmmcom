import Link from 'next/link';

export default function Home() {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>

      {/* Profile */}
      <main>
        {/* Masthead */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ marginTop: 0, marginBottom: '0.25rem', fontSize: '1.4rem' }}>Gareth MacLeod</h1>
          <p style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '0.88rem', color: '#555', margin: 0 }}>Founder • Engineer • Waterloo, ON</p>
        </div>

        {/* Bio */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ marginTop: 0 }}>
            I've been building startups since 2010—my own and others—to varying degrees of success. Presently I'm head of engineering at <a href='https://invertbio.com/' target='_blank'>Invert</a>, where we're building AI that can solve bioprocess development.
          </p>
          <p>
            My career motto is <i>do what others are not</i>.
          </p>
          <p style={{ fontSize: '0.88rem', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#555' }}>
            <a href="https://github.com/garethdmm" target="_blank">github</a>
            {' · '}
            <a href="https://www.linkedin.com/in/garethmacleod/" target="_blank">linkedin</a>
          </p>
        </div>

        <hr />

        {/* Writing */}
        <section>
          <h2 style={{ fontSize: '1rem', fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#888', marginTop: 0 }}>
            Writing
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
              <Link href="/blog/i-worked-with-a-man-who-faked-his-own-death" style={{ flex: 1 }}>
                I worked with a man who faked his own death
              </Link>
              <span className="post-meta" style={{ flexShrink: 0 }}>Jun 2024</span>
            </li>
            <li style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
              <Link href="/blog/how-to-feel-when-your-startup-feels-easy" style={{ flex: 1 }}>
                How to feel when your startup feels easy
              </Link>
              <span className="post-meta" style={{ flexShrink: 0 }}>Mar 2024</span>
            </li>
            <li style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
              <Link href="/blog/surviving-five-years-in-the-most-dangerous-market" style={{ flex: 1 }}>
                Thriving in the presence of risk — Crypto 2013–17
              </Link>
              <span className="post-meta" style={{ flexShrink: 0 }}>Aug 2019</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
