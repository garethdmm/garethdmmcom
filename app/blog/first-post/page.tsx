import Link from 'next/link';

export const metadata = {
  title: 'On the Gap Between Formal Models and Real Systems — Gareth MacLeod',
};

export default function FirstPost() {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>

      {/* Header */}
      <header style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '3.5rem' }}>
        <Link href="/" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 600, fontSize: '1rem', color: '#1a1a1a', textDecoration: 'none' }}>
          Gareth MacLeod
        </Link>
        <nav>
          <Link href="/">Writing</Link>
        </nav>
      </header>

      <main>
        <Link href="/" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '0.85rem', color: '#888', display: 'inline-block', marginBottom: '2rem' }}>
          ← Back
        </Link>

        <h1 style={{ marginTop: 0, fontSize: '1.75rem', lineHeight: 1.25, marginBottom: '0.4rem' }}>
          On the Gap Between Formal Models and Real Systems
        </h1>
        <p className="post-meta" style={{ marginBottom: '2rem' }}>February 2026</p>

        <hr />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
          amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit
          amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae,
          ornare sit amet, wisi.
        </p>

        <p>
          Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus
          enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id
          cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat
          volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus
          ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.
        </p>

        <p>
          Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Nullam in enim. Pellentesque felis
          orci, sagittis ac, malesuada et, facilisis in, ligula. Aenean imperdiet. Etiam est. Quam semper
          nibh. Fusce molestie. Phasellus ornare purus quis diam. Suspendisse dapibus lorem pellentesque
          magna. Integer nulla. Donec blandit feugiat ligula. Donec hendrerit, felis et imperdiet euismod,
          purus ipsum pretium metus, in lacinia nulla nisl eget sapien.
        </p>
      </main>
    </div>
  );
}
