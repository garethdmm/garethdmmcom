import Link from 'next/link';

export const metadata = {
  title: 'How to feel when your startup feels easy — Gareth MacLeod',
};

export default function HowToFeelPost() {
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
          How to feel when your startup feels easy
        </h1>
        <p className="post-meta" style={{ marginBottom: '2rem' }}>March 2024</p>

        <hr />

        <p>
          I did something hard once: I took my startup from zero to $1m in daily volume in 4 months.
          Something has bothered me ever since: it felt easy.
        </p>

        <p>
          That summer, my team had pivoted and set a new challenge for ourselves: start a crypto market
          making business and grow it from zero to 10% of all trading volume in three months. We didn't
          know how to do this, but we had an idea for a simple trading bot and strategy that would get us
          started. When we turned this bot on for the first time, I watched it work for an hour before I
          turned to my cofounder and said "We are 2% of all trading in this market". Our first guess had
          gotten us 20% of the way there! With a few more straightforward improvements, we hit and
          surpassed our goal with time to spare. With success came attention, and chatter that we were one
          of the "hot" companies in our YC batch. When it came time to raise our seed round, we were able
          to pull in 7 figures with only a few days of meetings.
        </p>

        <p>
          If you're a founder, and are feeling your jaw tighten as I tell you how easy my startup was,
          don't worry. This "easy" period was a brief interlude in years of struggle. Hard was so familiar,
          that the departure from it actually felt distressing. Startups are hard, right? So why did this
          feel easy?
        </p>

        <p>
          Maybe we were frauds. We were doing something easy and letting people believe that it was hard,
          or at least, not correcting them when they were impressed. I worried that if people really knew
          how easy this was, they'd laugh, and lose interest in us right away.
        </p>

        <p>
          It's obvious to me today that this idea was wrong. Instead, I've come to believe that ease is a
          critical ingredient in startups.
        </p>

        <p>
          Let's deal first with the imposter syndrome. I had internalized — through culture and personal
          experience — that startups are hard, and mutated this into the notion that everything about
          startups should be hard, all the time. This was a mistake.
        </p>

        <p>
          No one ever said that every day of your startup has to be hard. The first phase of a startup is
          a search for something people want. The search is often very hard. This doesn't mean that the
          thing that you find will be hard to build or sell. Once you find something people want, that part
          of your project will get easier in a step wise way. The ease is a signal that you're doing
          something right!
        </p>

        <p>
          For a certain class of idea, the perception that it is hard may actually make it easy. In our
          case, I can say with hindsight that we — and many other people — overestimated how sophisticated
          crypto markets were in that era. If more people thought this was easy, there would have been more
          competition in the markets, and it would have been hard. Because it sounded hard, few people
          wanted to do it, and our simple approaches were very successful. The trick was that you had to be
          willing to do something that sounded hard in order to discover that it was easy.
        </p>

        <p>
          This idea that there is a delta between perceived and realized difficulty of a project may be one
          reason why startups exist at all. If everything was equally easy and hard as it appeared, then
          resources would already be perfectly allocated. There would be no edge for small teams to discover.
        </p>

        <p>
          It's worthwhile to consider this delta from the opposite direction. I've been speaking about what
          it feels like from the inside, when you're doing something hard that feels easy, but what does
          this feel like from the perspective of an outside observer? I think we all know. You see someone
          achieve something hard, you feel a sense of awe, and possibly a pang of insecurity: the fear that
          you'll never be as good as that person.
        </p>

        <p>
          This makes me suspect that part of my discomfort with ease was because of ego. I wanted to feel
          the same way about myself that I felt about the people I admired. The people I admired did things
          that looked very hard, so — in a perverse way — I wanted what I was doing to feel hard. Doing
          something easy didn't give me the self-satisfaction I was searching for.
        </p>

        <p>
          This is an emotional logic that we should all be happy to let go of. Finding something that feels
          easy, even for a few months, in the midst of a startup grind is a gift. The people we admired
          were never afraid to take an easy win when it presented itself.
        </p>

        <p>
          So don't worry if your startup suddenly starts to feel easy, that probably means you're doing
          something right. When you see other people do hard things, don't take it as evidence that they
          are better than you, rather, take it as proof that hard things can actually be done.
        </p>

        <p>
          Most importantly, consider: maybe the hard thing you've been thinking of is easier than you think.
        </p>
      </main>
    </div>
  );
}
