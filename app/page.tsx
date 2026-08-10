import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-[34em] mx-auto px-6 pt-20 pb-24">

      <main>
        {/* Masthead */}
        <div className="mb-10">
          <h1 className="caps mt-0 mb-1 text-[1.05rem]">Gareth MacLeod</h1>
          <p className="italic m-0">Founder · Engineer · Waterloo, Ontario</p>
        </div>

        {/* Bio */}
        <div>
          <p className="mt-0">
            I've been building startups since 2010—my own and others—to varying degrees of success. Presently I'm head of engineering at <a href='https://invertbio.com/' target='_blank'>Invert</a>, where we're building AI that can solve bioprocess development.
          </p>
          <p>
            My career motto is <i>do what others are not</i>.
          </p>
          <p>
            <a href="https://github.com/garethdmm" target="_blank">github</a>
            {' · '}
            <a href="https://www.linkedin.com/in/garethmacleod/" target="_blank">linkedin</a>
            {' · '}
            <a href="mailto:gareth.macleod@gmail.com">email</a>
          </p>
        </div>

        <div className="fleuron" aria-hidden="true">&#10086;</div>

        {/* Writing */}
        <section className="writing">
          <h2 className="caps mt-0 mb-6 text-[0.85rem]">
            Writing
          </h2>
          <ul className="list-none p-0 m-0">
            <li className="mb-3 flex justify-between items-baseline gap-6">
              <Link href="/writing/its-the-money-silly" className="flex-1">
                It's the money, silly
              </Link>
              <span className="shrink-0">Nov 2025</span>
            </li>
            <li className="mb-3 flex justify-between items-baseline gap-6">
              <Link href="/writing/i-worked-with-a-man-who-faked-his-own-death" className="flex-1">
                I worked with a man who faked his own death
              </Link>
              <span className="shrink-0">Jun 2024</span>
            </li>
            <li className="mb-3 flex justify-between items-baseline gap-6">
              <Link href="/writing/how-to-feel-when-your-startup-feels-easy" className="flex-1">
                How to feel when your startup feels easy
              </Link>
              <span className="shrink-0">Mar 2024</span>
            </li>
            <li className="mb-3 flex justify-between items-baseline gap-6">
              <Link href="/writing/surviving-five-years-in-the-most-dangerous-market" className="flex-1">
                Thriving in the presence of risk — Crypto 2013–17
              </Link>
              <span className="shrink-0">Aug 2019</span>
            </li>
          </ul>
        </section>

        <footer className="mt-16">
          <p className="m-0"><small>Last updated August 2026</small></p>
        </footer>
      </main>
    </div>
  );
}
