import Link from 'next/link';
import { postMetadata } from '@/lib/postMetadata';

export const metadata = postMetadata({
  slug: 'its-the-money-silly',
  title: "It's the money, silly",
  description:
    "Canada's startup gap with Silicon Valley is usually blamed on unambitious culture and talent leaving. The missing explanation is money.",
});

export default function ItsTheMoneySillyPost() {
  return (
    <div className="max-w-[34em] mx-auto px-6 pt-20">

      {/* Running head */}
      <header className="mb-14">
        <Link href="/" className="caps no-underline text-[0.85rem]">
          Gareth MacLeod
        </Link>
      </header>

      <main>
        <h1 className="mt-0 mb-1 text-[1.45rem] leading-[1.25] text-balance">
          It's the money, silly
        </h1>
        <p className="m-0 italic">November 2025</p>

        <div className="fleuron" aria-hidden="true">&#10086;</div>

        <p>
          People have been talking about the shortcomings of the Canadian tech startup world my whole career, with Silicon Valley the bar against which we measure ourselves. With renewed heat on this topic in the tariff era, two problems in particular have received a lot of attention: our <em>unambitious</em> culture, and our constant leakage of good talent <em>to</em> Silicon Valley. Both of these are worth discussing, but as explanations for why we differ from California, they are weak and incomplete. What both explanations are missing is money.
        </p>

        <p>
          The enormous concentration of investment capital and its side effects in Silicon Valley is hard to grasp until you see it in action. I often tell young founders that raising money in California is not 10 times easier, it is something closer to 1000 times easier. Back in my day, before things got <em>truly</em> crazy, I raised two million dollars in San Francisco in five hours of meetings. My startup at the time—a cryptocurrency market maker—was not difficult to fund in Canada, it was unfundable.
        </p>

        <p>
          There are in any given year about two hundred billion dollars between San Jose and San Francisco looking for a startup round to invest in. That is enough to put a five million dollar seed round into forty thousand companies every year. Like, jesus christ. Silicon Valley has four times as much startup investment per person as Canada.
        </p>

        <p>
          The speed to raise a seed round is only an immediate effect. The density of capital affects what investment strategies are profitable, which affects what ideas are fundable, which affects what ideas founders choose. It is the black swan farming investment model which supports the crazy bets which become Google, Reddit, and Airbnb. Pushing people to "be more ambitious" without the financial support for those ideas is a lost cause.
        </p>

        <p>
          Capital concentration also changes the terms on which deals are made. More investment dollars means more investors competing to buy startup equity, which means more founder-friendly terms for those deals. This is not a moral argument that founders <em>deserve</em> more power, it is a material argument that results are better when founders have more room to take risk. All of us know a Canadian founder who has been pressured for a personal guarantee by BDC. Founder-antagonistic deals make founders less ambitious.
        </p>

        <p>
          Now, those two hundred billion dollars did not magically appear from nowhere one day, and then the other side of the market adjusted their behaviour. The history of Silicon Valley is one of growth over time, from WW2 research funding through to the integrated circuits to the internet to the present AI boom. Industry practices and culture have changed as well as investment models and dollars. Material conditions and culture shape each other. But trying to change one without changing the other is a fool's errand.
        </p>

        <p>
          It's surprising to me that this argument is controversial. The idea that resource climates shape behaviour is as obvious in economics as it is in anthropology. In particular I often hear investors dismissing this argument. On this I have two theories: one about ideologies, the other about incentives. The first is that the ethos of the investment industry are often individualistic, and so are biased towards considering causes based on personal behaviour rather than structures. "They succeed because they are ambitious" is a more attractive conclusion than "They succeed because their environment has more resources". The second is that—although there is an incentive to the industry as a collective to grow its investment base—there is an aversion on the personal level to the changes that this might create. As I said, more money means more funds, more funds means more competition for deals and less investor-friendly terms. An individual investor who is successful in the current Canadian industry could see themselves threatened by this change.
        </p>

        <p>
          There is good news in this formulation. Although we are 50 multiples away from Silicon Valley in absolute dollars, we are only 4 times away in capital density. If we increase the size of our industry only 14% annually, we can make up half the difference in only five years, or the whole difference with 30%. It would be well worth the time for us to think about what circumstances to cause this.
        </p>
      </main>
    </div>
  );
}
