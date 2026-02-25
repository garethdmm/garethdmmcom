import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-[680px] mx-auto px-6 pt-12 pb-16">

      {/* Profile */}
      <main>
        {/* Masthead */}
        <div className="mb-8">
          <h1 className="mt-0 mb-1 text-[1.4rem]">Gareth MacLeod</h1>
          <p className="font-sans text-[0.88rem] text-[#555] m-0">Founder • Engineer • Waterloo, ON</p>
        </div>

        {/* Bio */}
        <div className="mb-10">
          <p className="mt-0">
            I've been building startups since 2010—my own and others—to varying degrees of success. Presently I'm head of engineering at <a href='https://invertbio.com/' target='_blank'>Invert</a>, where we're building AI that can solve bioprocess development.
          </p>
          <p>
            My career motto is <i>do what others are not</i>.
          </p>
          <p className="text-[0.88rem] font-sans text-[#555]">
            <a href="https://github.com/garethdmm" target="_blank">github</a>
            {' · '}
            <a href="https://www.linkedin.com/in/garethmacleod/" target="_blank">linkedin</a>
            {' · '}
            <a href="mailto:gareth.macleod@gmail.com">email</a>
          </p>
        </div>

        <hr />

        {/* Writing */}
        <section>
          <h2 className="text-base font-sans font-semibold uppercase tracking-[0.06em] text-[#888] mt-0">
            Writing
          </h2>
          <ul className="list-none p-0 m-0">
            <li className="mb-3 flex justify-between items-baseline gap-4">
              <Link href="/blog/its-the-money-silly" className="flex-1">
                It's the money, silly
              </Link>
              <span className="font-sans text-[0.82rem] text-[#888] shrink-0">Nov 2025</span>
            </li>
            <li className="mb-3 flex justify-between items-baseline gap-4">
              <Link href="/blog/i-worked-with-a-man-who-faked-his-own-death" className="flex-1">
                I worked with a man who faked his own death
              </Link>
              <span className="font-sans text-[0.82rem] text-[#888] shrink-0">Jun 2024</span>
            </li>
            <li className="mb-3 flex justify-between items-baseline gap-4">
              <Link href="/blog/how-to-feel-when-your-startup-feels-easy" className="flex-1">
                How to feel when your startup feels easy
              </Link>
              <span className="font-sans text-[0.82rem] text-[#888] shrink-0">Mar 2024</span>
            </li>
            <li className="mb-3 flex justify-between items-baseline gap-4">
              <Link href="/blog/surviving-five-years-in-the-most-dangerous-market" className="flex-1">
                Thriving in the presence of risk — Crypto 2013–17
              </Link>
              <span className="font-sans text-[0.82rem] text-[#888] shrink-0">Aug 2019</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
