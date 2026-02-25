import Link from 'next/link';

export const metadata = {
  title: "It's the money, silly — Gareth MacLeod",
};

export default function ItsTheMoneySillyPost() {
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
          It's the money, silly
        </h1>
        <p className="font-sans text-[0.82rem] text-[#888] mb-8">November 2025</p>

        <hr />

        <p>
          People have been talking about the shortcomings of the Canadian tech startup world my whole professional life, with Silicon Valley the bar against which we measure ourselves. With renewed heat on this topic in the tariff era, two problems in particular have received a lot of attention: our <em>unambitious</em> culture, and our constant leakage of good talent <em>to</em> Silicon Valley. Both of these are worth discussing, but as causal explanations for our differences to California, they are weak and incomplete. What is missing from this framework is money.
        </p>

        <p>
          The enormous concentration of investment capital and its side effects in Silicon Valley is difficult to appreciate until you see it in action. I often tell young founders that raising money in California is not 10 times easier, it is something closer to 1000 times easier. Back in my day, before things got <em>truly</em> crazy, I raised two million dollars in San Francisco in five hours of meetings. My startup at the time—a cryptocurrency market maker—was not difficult to fund in Canada, it was unfundable.
        </p>

        <p>
          There are in any given year about two hundred billion dollars between San Jose and San Francisco looking for a startup round to invest in. That is enough to put a five million dollar seed round into forty thousand companies every year. Like, jesus christ. The Canadian industry is dwarfed by this by a factor of four <em>after</em> controlling for our relative population.
        </p>

        <p>
          The speed to raise a seed round is only a first-order effect. The density of capital affects what investment strategies are profitable, which affects what ideas are fundable, which affects what ideas founders choose. It is the black swan farming investment model which supports the crazy bets which become Google, Reddit, and Airbnb. Pushing people to "be more ambitious" without the financial support for those ideas is a lost cause.
        </p>

        <p>
          Capital concentration also changes the terms on which deals are made. More investment dollars means more supply on the buy side for startup equity, which means more founder-friendly terms for those transactions. This is not a moral argument that founders <em>deserve</em> more power, it is a material argument that outcomes are better when founders have more room to take risk. All of us know a Canadian founder who has been pressured for a personal guarantee by BDC. Founder-antagonistic deals suppress ambition.
        </p>

        <p>
          Now, those two hundred billion dollars did not magically appear from nowhere one day, and then the other side of the market adjusted their behaviour. The history of Silicon Valley is one of growth over time, from WW2 research funding through to the integrated circuits to the internet to the present AI boom. Industry practices and culture have changed as well as investment models and dollars. Material conditions exist in an interplay with culture. But trying to change one without changing the other is a fool's errand.
        </p>

        <p>
          It's remarkable to me that this argument is controversial. The idea that resource climates shape behaviour is as obvious in economics as it is in anthropology. In particular I often hear investors dismissing this argument. On this I have two theories: one pseudo-political, the other incentives. The first is that the ethos of the investment industry are often individualistic, and thus are biased towards considering causes based on personal behaviour rather than structures. "They succeed because they are ambitious" is a more attractive conclusion than "They succeed because their environment has more resources". The second is that—although there is an incentive to the industry as a collective to grow its investment base—there is an aversion on the personal level to the changes that this might create. As I said, more money means more funds, more funds means more competition for deals and less investor-friendly terms. An individual investor who is successful in the current Canadian industry could see themselves threatened by this change.
        </p>

        <p>
          There is good news in this formulation. Although we are 50 multiples away from Silicon Valley in absolute dollars, we are only 4 times away in capital density. If we increase the size of our industry only 14% annually, we can make up half the difference in only five years, or the whole difference with 30%. It would be well worth the time for us to think about what circumstances to cause this.
        </p>
      </main>
    </div>
  );
}
