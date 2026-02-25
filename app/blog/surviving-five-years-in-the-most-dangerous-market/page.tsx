import Link from 'next/link';

export const metadata = {
  title: 'Thriving in the presence of risk — Crypto 2013–17 — Gareth MacLeod',
};

export default function SurvivingFiveYearsPost() {
  return (
    <div className="max-w-[680px] mx-auto px-6 pt-12 pb-16">

      {/* Header */}
      <header className="flex items-baseline justify-between mb-14">
        <Link href="/" className="font-sans font-semibold text-base text-[#1a1a1a] no-underline">
          Gareth MacLeod
        </Link>
        <nav className="font-sans text-[0.85rem]">
          <Link href="/" className="text-[#555] ml-5 hover:text-accent hover:no-underline">Writing</Link>
        </nav>
      </header>

      <main>
        <Link href="/" className="font-sans text-[0.85rem] text-[#888] inline-block mb-8">
          ← Back
        </Link>

        <h1 className="mt-0 text-[1.75rem] leading-tight mb-[0.4rem]">
          Thriving in the presence of risk — Crypto 2013–17
        </h1>
        <p className="font-sans text-[0.82rem] text-[#888] mb-8">August 2019</p>

        <hr />

        <p>
          The goal of Tinker was to build the Goldman Sachs of the blockchain-future, and our thesis was
          good. Granting that cryptocurrencies would be the next medium of finance, we'd start out with an
          early lead in market making, use that edge to expand into other investment products as the market
          grew, and by the time the traditional investment banks caught on to the game, we'd be too
          entrenched to beat. Core to the success of the plan was one very difficult thing: survival.
        </p>

        <p>
          In this era, the half-life of a cryptocurrency startup was about six months. Companies were
          dropping like flies to hacks, regulatory shutdowns, freeze-outs by banks, and rogue founders.
          The possibility of falling victim to one of these events was very scary. Instead of avoiding our
          fear, we focused on it, and forced ourselves to make it as specific as possible.
        </p>

        <p>
          The resource we had that we needed to protect were the company assets — primarily investor cash.
          If those were lost it would be the end of the company, and potentially diminish our careers. To
          run this business we'd have to deploy most of that cash to vulnerable locations such as
          cryptocurrency exchange accounts, and at any given time much of it would be "nowhere": in transit
          through the blockchain or the international wire system. The assets held in exchange accounts
          would also be actively traded by the automated systems which we would build, which could fail in
          any number of ways due to human or machine error.
        </p>

        <p>We put all of these fears into a threat model. A simple version of it would have looked like this:</p>

        <ul className="pl-6 leading-[1.8]">
          <li>Exchange failures
            <ul className="pl-6">
              <li>Exchange founders go rogue and steal our money</li>
              <li>Exchange gets hacked and hackers steal our money</li>
              <li>Exchange gets shut down by authorities and funds are frozen</li>
            </ul>
          </li>
          <li>Directed Attacks
            <ul className="pl-6">
              <li>Our trading servers are hacked</li>
              <li>Our laptops or phones are hacked or stolen</li>
              <li>Founder is kidnapped/mugged and forced to hand over the keys</li>
            </ul>
          </li>
          <li>System Failures
            <ul className="pl-6">
              <li>A bug in a trading strategy makes a bunch of bad trades and loses all our money (e.g. Knight Capital)</li>
              <li>A bug in our accounting logic causes our p&amp;l numbers to be inaccurate, and lose money while we think we&apos;re making money</li>
            </ul>
          </li>
          <li>Market Risks
            <ul className="pl-6">
              <li>The price swings rapidly while we&apos;re in a big opposite position</li>
              <li>Huge price drop causes company inventory to lose value</li>
            </ul>
          </li>
        </ul>

        <p>In short, we were about to run a marathon through a mine-field.</p>

        <p>
          It was clear that we'd have to get really good at thinking about risk if we were to have any
          chance at this. Almost all of this was new to us: we'd had course-work in computer security, and
          I was tangential to the security team while I was at Facebook, but none of us had ever thought
          about price risk, handling real money with algorithms, or operating in an environment in which
          you are constantly under attack.
        </p>

        <p>
          Around this time, a friend of mine recommended I read <em>The Black Swan</em>, a book by
          mathematician-trader Nassim Nicholas Taleb. Black Swan examines the good and bad ways that human
          beings think about Extreme Events: low-probability, high impact occurrences such as market
          crashes, bankruptcies, natural disasters, and engineering failures. The book formalized many of
          the intuitions around risk that we used early on.
        </p>

        <p>
          Taleb's work is expansive, but if we take only the most immediately relevant bits we might come
          up with a quick summary:
        </p>

        <blockquote className="border-l-[3px] border-[#ddd] my-7 pl-5 text-[#444]">
          <p className="mt-0 mx-0 mb-3">
            In any domain that contains extreme events, it is a mistake to bank your survival on your
            ability to precisely predict and avoid those events. Our knowledge of the world is imperfect,
            and there will always be an extreme case that is not in the historical data.
          </p>
          <p className="m-0">
            Rather, we should focus our attention on the impact such events would have were they to
            happen, and structure our systems such that they can survive, absorb, and even grow in their
            presence.
          </p>
        </blockquote>

        <p>
          Applying this to our situation, we decided that the only way we could build this company was if
          we were willing to get hit, possibly hard, possibly often. We'd be smart and try to cut down the
          number of extreme events we were exposed to, but we wouldn't put any money on our ability to
          avoid them. In fact the opposite: we would expect the bad thing to happen, and for each threat
          under consideration, we'd focus on making sure we could survive the blow when it came. If we'd
          had a mantra it would have been this:
        </p>

        <p className="text-center italic font-semibold my-8 text-[1.05rem]">
          Expect the worst to happen. Plan how to survive it.
        </p>

        <p>
          From this idea flowed hundreds of decisions about how to run the business, from how we chose
          what strategies to run, to how we set up our monitoring systems, to how we set up our information
          security. The starting point for how to approach any risk in our company was the assumption that
          our worst fears would come true.
        </p>

        <p>
          So here's the gotcha line: we were right. Of all those things in the threat model, a lot of them
          really did happen, including four exchange failures and one critical trading bug (none of our
          machines were ever compromised). But none of those moments were fatal — in fact, the worst caused
          a loss of 4%. We made it through the minefield bruised but undefeated.
        </p>

        <p>Here are two stories about specific threats we faced and how we survived when disaster struck.</p>

        <h2 className="text-[1.2rem] mt-10 mb-3">
          Case Study I: The day a bug almost gave away all our money
        </h2>

        <p>
          One night in 2015, I was winding-down watching Buffy the Vampire Slayer at about 2am. My phone
          buzzed and I glanced over to see the home screen covered in PagerDuty alerts — I was on call that
          week. I got over to my desk quickly and saw that we were bleeding money at a disturbing rate:
          about 0.1% per minute. We'd be down 10% by the end of the hour. It was instantly clear that this
          was the worst trading error we had ever encountered, and if we didn't stop it the company would
          be dead by the morning.
        </p>

        <p>
          Of course, that didn't happen. As soon as I understood the effect, I shut down all trading,
          closed our open positions, and began to survey the damage and diagnose the issue. We had lost a
          total of 0.3%. The next day, we discovered that the cause of the issue was a bizarre interaction
          between one of our redundancy systems and unexpected time-out behaviour from one particular
          exchange. It was a complex set of interactions that could not have been predicted ahead of time.
          We fixed the issue and were trading full-bore again by the end of the day.
        </p>

        <p>
          There are two reasons why we survived that day and did not become a mini-Knight Capital. The
          proximate cause was that we had obsessive, redundant, default-fail monitoring of every aspect of
          our trading systems. The issue that occurred was detected by three different monitoring processes
          on two different machines. If my phone had been dead or I otherwise wasn't able to catch the
          issue, within five minutes one of my colleague's phones would have been jumping off the
          nightstand.
        </p>

        <p>
          But the ultimate cause that we woke up that day down 0.3% and not 20% is that we expected that
          one day we would push a critical trading bug into production. <em>Expect the worst to happen.
          Plan how to survive it.</em> We knew that we were fallible, and that engineers with far more
          experience than us had blown up their companies with such errors. We didn't know how or when, but
          we knew there were things we could do to minimize the damage when it happened: catch it early,
          have redundancies, have simple kill-switches ready. In the end, this was a scary moment but it
          wasn't a near miss. We were just prepared.
        </p>

        <h2 className="text-[1.2rem] mt-10 mb-3">
          Case Study II: Trusting people you don&apos;t trust
        </h2>

        <p>
          Of any of the items in that threat-model above, the one that kept us awake at night was the fear
          that an exchange would blow up while we had a pile of cash sitting with them. Exchanges were
          dropping like flies at the time. Mt. Gox exploded in 2014. BTC-E, one of the biggest exchanges
          of the day, was likely run by the Russian underworld. In order to do the trading that we wanted
          to do, we had to hand off almost all of our funds to organizations like this.
        </p>

        <p>
          So we went back to first principles and figured out how to survive. There were two approaches to
          the problem of exchange failures, whatever their cause: try to avoid them, and try to survive them.
        </p>

        <p>
          Avoiding failures meant predicting them, and we already knew we couldn't do this precisely (which
          exchanges will fail at what times). What we could do was make some negative bets: "this exchange
          is likely to fail sometime in some way" and avoid those exchanges altogether. To do this we came
          up with a checklist of positive conditions that any exchange would have to meet in order for us
          to trust them with any amount of money. Most of these rules were simple and easy to check, like:
        </p>

        <ul className="pl-6 leading-[1.8]">
          <li>Must have a strong relationship with a credible bank</li>
          <li>Must have fiat currency deposits and withdrawals</li>
          <li>Must have a human contact we can get on the phone within a day</li>
          <li>…</li>
        </ul>

        <p>
          Some of these might seem trivial on their own, but the advantage of checklists is that they can
          build a high-information picture of a system with low cognitive load. Consider the number of
          plane crashes or operating-room mistakes that have been avoided using checklists. For our
          purposes this meant that whenever we started thinking about a new exchange, the question was
          simple: does it pass the checklist or not? You're much less likely to make a dumb mistake
          answering a simple question than a complicated one. Similarly, we could regularly audit our
          exchange roster and boot any one which fell below the waterline.
        </p>

        <p>
          But we weren't going to bank our survival on avoiding exchange failures. <em>Expect the worst to
          happen, plan to survive it.</em> We still had to be prepared to survive if and when an exchange
          got hit while we had funds at risk.
        </p>

        <p>
          We decided to do this by setting strict limits to how much money could be kept in each account.
          Working backwards from the assumption that we would get hit, the first conclusion was we could
          never have a single point of failure on our exchange roster. Even if the most trusted exchange
          fails with a complete loss of funds we should be able to continue operating. So we set a single
          global restriction, that we'd never have more than x% of our assets in any account, and set x
          such that the loss would hurt bad, but we could survive.
        </p>

        <p>
          Then we went through each exchange individually and set an even more restrictive limit based on
          any extra information that wasn't already captured in our trust checklist. Sometimes this was
          something specific, sometimes it was semi-inside information (the crypto world was small at the
          time), and other times it was just our own intuition.
        </p>

        <p>
          It was always tempting to break these limits. Every day there was some profit somewhere that we
          weren't taking, only because we refused to risk more assets on that exchange. But we stuck to our
          account limits religiously, because that was the only way this worked. Fraud often looks like
          opportunity, and many of those temptations were traps of one kind or another. If we compromised
          enough times based on short-term emotions, we knew we'd eventually find ourselves caught out with
          paper profits on a dead exchange.
        </p>

        <p>
          After all of this thinking and worrying over five years, Tinker survived four major exchange
          hacks and one rogue exchange founder while we had funds at risk. Five other exchanges (not in the
          previous list) ceased operations while we were working with them, some in an orderly wind-down,
          and others less so. In most of these cases Tinker ultimately accrued no loss, the largest single
          loss from any of these events was 4%, and the total of all losses was under 6% (about 1.1%
          annualized). It's impossible to quantify the number of failures we simply avoided, but it's
          likely in the dozens.
        </p>

        <h2 className="text-[1.2rem] mt-10 mb-3">
          Details &lt; Approach &lt; Understanding
        </h2>

        <p>
          I'm sure I have four or five other case-studies I could turn into posts of their own. The
          details are interesting because they seem to be the answer to the title "How we survived five
          years in the most dangerous market in the world." As I've hammered home already, the reason we
          got the details right was because we had the right approach. <em>Expect the worst to happen.
          Plan to survive it.</em>
        </p>

        <p>
          But the reason we had the right approach was that we built a good understanding of the role that
          risk played in our business. I use the word "built" instead of "had", because it was an effortful
          process, not a static piece of knowledge that we entered the project with. We built that
          understanding starting with brutal honesty about the ways things could go wrong. For each of
          these risks we thought hard about the characteristics, quickly realizing that we were in a domain
          where extreme events were the norm, and that these could not be modelled, predicted, or reliably
          avoided. We understood that we ourselves were a source of risk, through human fallibility or
          impulsiveness. And we knew that for our purposes, survival was the most critical focus.
        </p>

        <p>
          Finally, for all this talk of hazards and catastrophes, I've ignored one of the core parts of
          that understanding: that risk was good, in fact it was the reason to take on the project in the
          first place. The risk in these markets shooed competitors away like a bug lamp, and created an
          opportunity to build an early lead. You couldn't have the project without the risk, and the risk
          was why the project was worth doing. My best wishes for you, reader, are that you find many risks
          worth taking, and understand them well.
        </p>
      </main>
    </div>
  );
}
