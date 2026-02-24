import Link from 'next/link';

export const metadata = {
  title: 'I worked with a man who faked his own death — Gareth MacLeod',
};

export default function FakedDeathPost() {
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
          I worked with a man who faked his own death
        </h1>
        <p className="post-meta" style={{ marginBottom: '2rem' }}>June 2024</p>

        <hr />

        <p>
          I only spoke with Gerald Cotton on the phone, but we had substantial business dealings with him for a time. He ran one of the Canadian exchanges, which had low volume but highly arbitrageable orders, so we made a tidy profit trading there, and added substantial liquidity to their books, so it was a profitable relationship for both parties.
        </p>

        <p>
          Late in the Tinker years, Gerald's exchange stopped processing our withdrawals. I emailed our customer service rep and cc'd Gerald, who had always made sure our requests were fulfilled on time, but got no reply. A few weeks later the company went bankrupt altogether, starting a small media circus. Our balance on the exchange was not a large portion of our assets, but it was enough to be upset about.
        </p>

        <p>
          In short order it arrived that Gerald had disappeared, and the company did not have the assets to redeem its customer deposits.
        </p>

        <p>
          It took a few months for the story to become comprehensible, but here it is in an abridged form, as close as I have been able to understand it.
        </p>

        <ol style={{ paddingLeft: '1.5rem', lineHeight: 1.7, listStyleType: 'decimal', marginBottom: '1.1rem' }}>
          <li style={{ marginBottom: '1rem' }}>Gerald was the only person at Quadriga who kept track of deposits, and he did not do so with any rigour. Other employees reported seeing stacks of cash labelled with post-it notes in his kitchen.</li>
          <li style={{ marginBottom: '1rem' }}>Gerald had taken some of these deposits and spent them on himself, buy cars and planes and living a lifestyle far above his means.</li>
          <li style={{ marginBottom: '1rem' }}>Part of the way Gerald financed this by taking customer <em>bitcoin</em> deposits, transferred them to his personal accounts, and sold them.</li>
          <li style={{ marginBottom: '1rem' }}>This put Quadriga in a net-short position against bitcoin. They had debts denominated in bitcoin, but did not have the bitcoin assets to redeem them. This mean that in order to redeem those debts, they would have to buy bitcoin at its current market price using their fiat cash on hand.</li>
          <li style={{ marginBottom: '1rem' }}>The price of bitcoin over these years went way up. Eventually, Quadriga was sitting on an unrealized loss of hundreds of millions of dollars.</li>
          <li style={{ marginBottom: '1rem' }}>In the fall of 2018, Gerald married his fiancé in Canada, wrote and signed a will, and then took a trip to India.</li>
          <li style={{ marginBottom: '1rem' }}>Weeks after the signing this will, a death certificate for Gerald is issued in Jaipur, a small city in north-west India near the border with Pakistan.</li>
          <li>Quadriga's other employees realize the severity of the situation they are in, and that they have no access to customer deposits (even the ones that still remain). They declare bankruptcy and contact the authorities.</li>
        </ol>

        <p>
          Much has been said about this story by others. What I'd like to add starts with a simple statement: I think it probable that Gerald is still alive, living somewhere in Southeast Asia. The presence of motive, the timing of the will, and the bizarreness of his reported death, are just too much to overlook. It is easy to imagine that, once he realized the mess that he was in, he made a decision that he'd rather live in exile from western civilization than face the consequences of his actions. With millions of dollars at his disposal, it could be feasible to find a local official in one of these regions he could bribe into issuing a death certificate on his behalf. He could live off of cash for years or decades.
        </p>

        <p>
          Some investigative reporting has suggested that Gerald may have been an online con-artist before he started Quadriga. A CBC podcast describes a particular pre-crypto online community centered around creating and selling ponzi schemes to a, seemingly self-aware, community of buyers. The reporters believe that Gerald, operating under a pseudonym, was one of the members of this community, both selling, and buying, scam-assets in a sort of bizarre game of trying to be at the top of the ponzi pyramid. I don't know what is true here.
        </p>

        <p>
          Gerald is the only person who ever successfully scammed Tinker. The early 2010s crypto world was the wild west. We put an enormous amount of energy into vetting our partners and considering how to avoid being hacked or defrauded. We had a criteria we followed religiously which determined whether we would work with a trading venue, and we rejected many over the years which we accurately judged to be untrustworthy. As I've written elsewhere, the critical element of our approach was that it did not require us to be right every time. While we did choose to trust Gerald, trust isn't binary. We kept our exposure to Quadriga limited to level I could describe as upsetting, but not disturbing. The loss that we incurred was much less than a maximal loss. Regardless, as the only man who "got us", I must tip my hat to him.
        </p>

        <p>
          Gerald stole money from many other people who felt the loss much more than we did. It is too bad that he likely will never answer for that in a formal way.
        </p>

        <p>
          Despite these facts, over time, my emotions about this story have turned into bemusement, with a touch of sorrow. If the reporting about his early years are true, then Gerald was a small-time con man who tripped into an incredible, legitimate, business opportunity, but binned it — either because he didn't have the skill to manage it, or because he couldn't stop thinking about it like it was a score.
        </p>

        <p>
          The crime he committed was embezzlement, but this wasn't his mistake. His mistake was to put his company in an enormous short bitcoin position. This was an act of simple financial inexperience. The amount of customer deposits he used to buy cars and airplanes was likely in the single digit millions, which could be conceivably covered by business revenue in the long run. He may even have thought that the company was solvent and he was just spending revenue which was legally his. But the fact that these deposits were bitcoin-denominated debts he was responsible for repaying, together with Bitcoin's rapid 10x price rise in the run up to 2018, multiplied the hole on his balance sheet into the hundreds of millions of dollars. This is how his shot at going legit went awry.
        </p>

        <p>
          But even at this moment, it wasn't over for him. It is likely that if he had come clean to the Canadian financial authorities at this moment, he would have gotten a sentence of around a decade in prison. He might have been eligible for parole in a short matter of years. His life after this difficult period may have been humble, but he would have kept his life in Canada, his relationship with his fiancé, and potentially other friends and family. He might even have been able to swing his story into a book deal and then a form of micro-celebrity, like Jordan Belfort or Martin Shkreli. Facing this publicly would have been humiliating and scary. People close to him, and the public in general, would have been very angry at him. But ultimately he would have been able to continue his life and re-build it.
        </p>

        <p>
          So its hard for me to see this as other than a story of a man who repeatedly turned away from redemption multiple times, and that makes me sad.
        </p>

        <p>
          I wonder what it feels like. Whatever our judgement of him, if he did fake his own death, that seems to imply that he considered his crimes to be extreme. Does that feel Edgar Allen Poe's tell-tale heart, where the guilt is ever-present? Or maybe like Lynch's lost highway, where the memory of your crime is like a spot in the corner of your vision that you can never blink away. Maybe he feels fine about it. That's possible too.
        </p>

        <p>
          I wonder what would happen if Gerald suddenly emerged from rural Asia, ready to face the music. Whether that would be worth something to him, spiritually. Maybe, maybe not.
        </p>
      </main>
    </div>
  );
}
