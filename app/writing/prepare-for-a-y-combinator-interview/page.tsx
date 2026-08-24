import Link from 'next/link';
import { postMetadata } from '@/lib/postMetadata';

export const metadata = postMetadata({
  slug: 'prepare-for-a-y-combinator-interview',
  title: 'A simple method to prepare for a Y Combinator interview',
  description:
    'Prepare concise answers, identify the facts most likely to persuade an investor, and practise saying both under pressure.',
});

export default function PrepareForAYCombinatorInterviewPost() {
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
          A simple method to prepare for a Y Combinator interview
        </h1>
        <p className="m-0 italic">October 2020</p>

        <div className="fleuron" aria-hidden="true">&#10086;</div>

        <p>
          I first wrote this method in 2017 while helping a small group prepare for W2018 interviews.
          Since then thousands of people have read it, and I know many teams that were accepted after
          using it. By W2021, parts had begun to age, so I added new material, revised dated passages, and
          included advice for video interviews.
        </p>

        <p>
          My startup was accepted to Y Combinator in April 2014, on our third application and third
          interview in two years. Through our failures, our eventual success, and many conversations with
          successful applicants, we developed a preparation method that I think is quite good. I&apos;ve since
          taught it to dozens of other applicants, with a high success rate.
        </p>

        <p>
          The goal is to communicate clearly about your startup. You still need a good startup to get into
          Y Combinator; we&apos;ll take that as given. The focus here is explaining your startup, convincing
          people that it is good, and doing both under pressure. That skill is useful beyond interviews.
          It applies to investor pitches and early hiring, and can even help refine your plans and company
          strategy. These side benefits are why I recommend spending serious time preparing. Even if you
          don&apos;t get in, you&apos;ll be a better founder afterwards.
        </p>

        <p>
          Build two documents about what you want to tell the Y Combinator partners. Refine them with
          feedback from founders and mentors, then practise under interview conditions until the answers
          come easily under pressure. The documents are:
        </p>

        <ol className="pl-6 leading-[1.7] list-decimal mb-[1.1rem]">
          <li>Answers to the questions the partners will probably ask.</li>
          <li>A short list of the best reasons to fund your startup.</li>
        </ol>

        <p>
          The first document is straightforward. My cofounders and I listed every question we thought we
          might be asked. With some curation, we&apos;d end up with 50–100 questions. For each, we drafted an
          answer in 1–3 short bullet points, then refined it through conversations about our startup,
          especially with Y Combinator alumni. Once we were happy with the answers, we memorized the
          points and quizzed one another. Sometimes we practised for hours over several days.
        </p>

        <p>
          Prepare answers ahead of time because it is hard to be both concise and clear on the spot. An
          apocryphal Churchill quote puts it this way: &ldquo;If you want me to speak for five minutes, I can do
          it in a week; if an hour, I can do it now.&rdquo; In a ten-minute interview, a prepared 10-second
          answer is better than a 30-second improvisation with the same information. It leaves the partners
          more time to think, ask another question, or hear another strength of your startup. This does not
          mean memorizing a script. Keep the key ideas at the front of your mind so you can phrase them
          easily on the day.
        </p>

        <p>
          Most interview topics are easy to anticipate. Ten minutes is short, and what the partners need
          to learn is no mystery: traction, progress, competition, your team, and related basics. Start
          with the questions on the written application. For questions specific to your startup, simple
          brainstorming will get you far. What would you ask if you were evaluating your own startup as an
          investor? What might concern or interest the partners? When you reach the bottom of this well,
          ask mentors or peers what they would ask. You can also use published
          {' '}<a href="https://techcrunch.com/2012/04/27/be-concise-the-top-questions-asked-at-a-y-combinator-interview/" target="_blank">lists of questions</a>,
          {' '}<a href="https://www.youtube.com/watch?v=syoqjYLDs48" target="_blank">videos of interviews</a>,
          {' '}and <a href="https://mattermark.com/insights-yc-alum-prepare-y-combinator-interview/" target="_blank">other guides</a>.
        </p>

        <p>
          Think especially hard about the questions you hope they <em>don&apos;t</em> ask, the subjects you most
          want to avoid, and the questions you may have avoided asking yourself. Y Combinator partners are
          smart, and there is a good chance they will find the weakest part of your story and dive into it.
          Rough edges won&apos;t disqualify you; every startup has them. But if you cannot discuss yours, you
          may look unaware of critical blind spots, which can sink the interview. At minimum, show that you
          see the weakness and are thinking about how to address it. A useful opening is: &ldquo;Yes, that is a
          challenge. Here are some ways we&apos;re thinking about it.&rdquo;
        </p>

        <p>
          Having answers on the page is not the same as having <em>good</em> answers. We learned this after
          our first interview. We were ready for every question and still didn&apos;t get in. I guess we weren&apos;t
          as smart as we thought. To find out whether your answers are good, ask peers, mentors, and ideally
          people who have interviewed at Y Combinator for feedback. The best format is a mock interview:
          set a timer for ten minutes and have someone pepper you with questions from your document or a
          public list. Afterwards, ask what made sense and what didn&apos;t. After several mock interviews,
          patterns in the feedback should show where you need to improve.
        </p>

        <p>
          The second document is a short list of the best things about your startup. I call these things
          {' '}<em>sparklers</em>. They differ for every team, but a general definition is: things a smart
          investor should know that could change their decision, especially facts they may not think to
          ask about. Prepare your sparklers because you cannot trust that they will arise naturally; you
          need to introduce them. The partners are looking for reasons to fund you, but in ten minutes the
          conversation can easily miss the information that would excite them.
        </p>

        <p>
          Possible sparklers include traction, growth or conversion rates, patents, founder track records,
          unusual expertise, PhDs, industry connections, hidden insights, unfair advantages, brand-name
          customers, letters of intent, daily active users, or a long waiting list.
        </p>

        <p>
          To find yours, ask experienced people what stands out about your startup. New founders often do
          not know what sounds exciting to an investor, though experienced founders can miss things too.
          I&apos;ve finished mock interviews only to learn something critical afterwards, such as &ldquo;We have an
          exclusive deal with General Electric&rdquo; or &ldquo;We have a million dollars in ARR.&rdquo;
        </p>

        <p>
          Once you have your sparklers, make sure you say them. That sounds trivial, but Y Combinator
          interviews move so quickly that you can enter a trance-like state and forget. Some questions in
          your preparation document may give you a natural opening for one. During a pause, you can say,
          &ldquo;Something else we wanted to tell you was…&rdquo; Another option is to answer a question, then keep
          talking long enough to introduce a related sparkler. Practise this in mock interviews.
        </p>

        <h2 className="caps text-[0.85rem] mt-12 mb-4">Video interviews</h2>

        <p>
          Video interviews add a few complications. First, nail the basics of a multi-person call. Make
          sure every teammate has the best internet connection and video performance possible. If you can
          afford it, consider upgrading to your provider&apos;s fastest plan for the month of the interview.
          Close other programs before the call so the chat app has free rein over your computer&apos;s memory
          and processing power.
        </p>

        <p>
          Second, decide in advance which founder will answer each question or topic. Every founder should
          speak at least once; this is one way to show that you work well together. But if founders talk at
          the same time, you can waste valuable seconds on &ldquo;You go.&rdquo; &ldquo;No, you go.&rdquo; This is already a risk
          in person, but video makes it worse because subtle social cues are harder to read. Divide your
          questions into topic areas and make one founder responsible for each. For my team, the areas were
          roughly technology, product, and financial operations. Choose what fits yours, then practise
          sticking to it without talking over one another.
        </p>

        <p>
          That&apos;s it: anticipate the questions, prepare concise answers, and practise. Identify your
          sparklers and make sure you say them. This is not a universal method. I&apos;ve used it only with
          software companies, so other startups may need to adapt it. Your startup still needs to be good;
          preparation helps only with the part where presentation matters. Many Y Combinator alumni I&apos;ve
          discussed it with agree that it is a sound approach, but you should adapt it to your own style.
        </p>

        <p>
          If you have time between receiving the invitation and doing the interview, use it to improve the
          startup itself. Increase a core metric, sign a large customer, launch the product, or find your
          first paying user. Progress like that can change the interview and show how much your team can do
          in a short time.
        </p>

        <p>
          Interviewing at Y Combinator can be useful whether or not you get in. It forces you to see your
          startup through someone else&apos;s eyes. What is working? What are you worried about? What do you
          want the project to become? You may learn something that stays with you for a long time.
        </p>

        <p>Good luck.</p>
      </main>
    </div>
  );
}
