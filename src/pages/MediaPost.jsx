import React from 'react';
import { useParams } from 'react-router-dom';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BlogHero from '../components/BlogHero';


function MediaPost() {
  const { slug } = useParams();
    
  const mediaPosts = {
  'winner-of-small-business-administration-2025': {
    banner: '/assets/img/why-men-avoid-going-to-the-doctor.jpg',
    title: 'AAEA Among U.S. Small Business Administration North Florida\'s Top Honorees for 2025 - Flagler News Weekly: ',
    date: 'April 4, 2025',
    content: (
      <>
      <p>
      JACKSONVILLE — The U.S. Small Business Administration’s North Florida district office is celebrating the district’s Small Business Person of the Year and 5 additional honorees as it prepares for National Small Business Week, which will take place May 4-10, 2025. Along with awards ceremonies, the week will include a national small business roadshow with SBA Administrator Kelly Loeffler, a two-day virtual summit, community events and educational sessions about manufacturing, digital marketing, cybersecurity and cryptocurrency, as well as online business resources and renowned speakers.
      </p>
      <a href="https://www.flaglernewsweekly.com/aaea-among-u-s-small-business-administration-north-floridas-top-honorees-for-2025/" target="_blank">The winners include: Amanda Gaskin, Ultimate Health Direct Primary Care!</a>
    </>
    )
  },
  'amanda-named-small-business-person-of-the-year': {
    title: 'Amanda Gaskin Named 2025 SBA Woman-Owned Small Business Person of the Year for Florida',
    date: 'April 4th, 2025',
    banner: '/assets/img/why-men-avoid-going-to-the-doctor.jpg',
    content: <>
  <p>
    LEESBURG, Fla. – The U.S. Small Business Administration has named Amanda V. Gaskin, founder of Ultimate Health Direct Primary Care and Ultimate Health Spa, the 2025 State of Florida and North Florida District Woman-Owned Small Business Person of the Year.
<br></br><br></br>
    The prestigious honor recognizes Gaskin’s outstanding leadership, entrepreneurial success and commitment to advancing small business ownership across the state.
<br></br><br></br>
    Her nomination rose to the top among statewide submissions, earning her recognition not only for North Florida but also as the overall winner for the state—an impressive achievement that reflects her dedication to healthcare innovation and community empowerment.
  </p>


  <p>
    “This award is more than just recognition of our business growth—it’s a celebration of resilience, purpose and the impact small businesses can have when they lead with heart,” Gaskin said. “I’m honored to represent so many incredible women business owners across Florida who are changing lives through entrepreneurship.”
<br></br><br></br>
    Founded in 2021, Ultimate Health DPC was created to address healthcare access disparities brought to light during the COVID-19 pandemic. Today, the seven-figure practice has expanded to multiple locations, offering primary care, aesthetic services, men’s and women’s sexual wellness, and a training academy for aspiring healthcare entrepreneurs.
<br></br><br></br>
    Through her leadership, Gaskin has created jobs and opened doors for others to pursue their dreams of business ownership—particularly women and minority healthcare providers navigating challenges in the traditional medical model.
<br></br>
    The SBA will recognize Gaskin and other National Small Business Week award recipients during events held across the country May 4–10. She will also be honored locally at celebratory events hosted by the Florida SBDC in Jacksonville and Orlando, including a private Orlando event on May 21.
  </p>

  
</>

  },
  'tired-of-your-primary-care-provider': {
    // title: 'Why Men Avoid the Doctor (And How to Change That)',
    // banner: '/assets/img/why-men-avoid-going-to-the-doctor.jpg', // your image path
    date: 'April 15, 2025',
    banner: '/assets/img/why-men-avoid-going-to-the-doctor.jpg',
    title: 'Tired of your primary care provider? Leesburg practitioner recognized for direct care alternative',
    content: (
  <>
    <p>
      LEESBURG — Problems caused by insurance company quotas and overworked doctors have caused a shift in how practitioners conduct annual checkups and manage care.
<br></br><br></br>
        One practitioner in Leesburg has detoured from the status quo to provide personalized care and now has a prominent award recognizing her innovation in her community.
<br></br><br></br>
        Amanda Gaskin, founder of and nurse practitioner at Ultimate Health Direct Primary Care, Ultimate Health Spa and Ultimate Health Men’s Clinic has won the 2025 SBA Woman-Owned Small Businessperson of the Year for the state of Florida.
<br></br><br></br>
Gaskin has also been recognized as the North Florida District Woman-Owned Small Businessperson of the Year.
<br></br><br></br>
<a href="https://www.dailycommercial.com/story/news/local/2025/04/15/leesburg-practitioner-wins-prominent-award-for-primary-care-alternative/82567975007/   ">Tired of your primary care provider? Leesburg practitioner recognized for direct care alternative</a>
    </p>

    
  </>
)


  },
  'orlando-bizjournals': {
    title: 'Orlando-area primary care company plans expansion into men\'s clinics and spa services',
    banner: '/assets/img/why-men-avoid-going-to-the-doctor.jpg',
    date: 'April 29, 2025',
    content: <>
  <p>
    This rapidly growing medical practice has ambitious plans for the future, including expanding into specialized clinics and wellness services to meet diverse health care needs.
    <br></br>
    <a href="https://www.dailycommercial.com/story/news/local/2025/04/15/leesburg-practitioner-wins-prominent-award-for-primary-care-alternative/82567975007/"> Preview the article</a>
  </p>

  
</>

  },
  'small-business-administration': {
    title: 'Ultimate Health Direct Primary Care: A New Approach to Medical Care Management Multi-Service Primary Care Clinic Launches in Leesburg with Assistance from Florida SBDC at UCF',
    banner: '/assets/img/why-men-avoid-going-to-the-doctor.jpg',
    date: 'May 5, 2025',
    content: <>
  <p>
    Successful entrepreneurs typically have a spirit, an energy, a kind of determination that drives them to meet and overcome the many challenges faced when starting a new business. For Amanda Gaskin (Neil), now the owner and operator of Ultimate Health Direct Primary Care, LLC, it was the conviction that she had a great idea for improving the delivery of healthcare in Lake County, Florida that inspired her to pursue a new venture. With assistance from the Florida Small Business Development Center at the University of Central Florida (FSBDC at UCF), Gaskin was able to turn her idea into reality.
<br></br><br></br>
At Ultimate Health Direct Primary Care, Neil and her team do healthcare a little differently. Direct Primary Care (DPC) is a new and innovative personalized approach to medical care management. This affordable, patient-centric model gives members access to unlimited primary care. The focus is to provide every patient with individualized attention to meet his or her specific healthcare needs; 24/7; days, nights, weekends; and in whatever manner they choose: phone, telehealth, email, in office. And it’s all covered by a single, monthly fee. Ultimate Health DPC’s monthly direct pay, flat fee is likely to cover 80-90% of the issues for which patients need to seek medical care, including: routine and preventative care; sick visits, weight loss management, and chronic disease management. Gone are the high costs of standard health insurance with traditional pay-per-visit doctor’s appointment co-pays, and expensive and often unnecessary visits to urgent care centers or emergency rooms. This model works well for patients and their employers alike, resulting in lower expenses and fewer sick days.
<br></br><br></br>
“At Ultimate Health DPC, we put the patient back in the center of care,” Gaskin explains. “Personal attention is what we offer. Our billing model supports that focus; it’s set up as a monthly membership model that offers patients unlimited, 24-hour access to me as their primary care provider.” “When the idea for Ultimate Health DPC came to me, I approached my credit union for advice,” recalls Gaskin. “And they referred me to the FSBDC. I am a health care professional, not a businesswoman. At least I wasn’t a businesswoman until I started working with the FSBDC. With their help, today I am.” “I just know I had an idea. With my FSBDC consultant Jamie Mead, she took my idea and helped me write my business plan,” continued Gaskin. “Then together we went after an SBA loan. The FSBDC helped me with everything the bank needed. We checked every box. Jamie made sure we presented a strong loan application and helped me educate our banker and answer his questions about our new cash-based, membership health care model. My consultant ensured we had the data, and that our story was iron clad. And we got the loan!” “If I had to use one word to describe the FSBDC, it would be ‘partner’” said Gaskin. “The SBDC and my consultant Jamie took on my dream and made it her dream. And now it’s come true. We got the loan and now Ultimate Health DPC is off to a great start. We have only been open for 30 days, and we are already halfway to our first-year patient goal,” Gaskin shared proudly. “I think they like us” she concluded with a smile. 
  </p>

</>

  },
  'does-the-labia-really-matter': {
    title: 'Does the Labia Really Matter?',
    banner: '/assets/img/why-men-avoid-going-to-the-doctor.jpg',
    date: 'July 19, 2025',
    content: <>
  <p>
    It might feel awkward to talk about, but many women have concerns about the appearance or comfort of their labia. And the truth is, yes — it matters. Because how you feel in your body matters.
  </p>

  <h2>What Can Cause Labia Concerns?</h2>
  <ul>
    <li>Childbirth</li>
    <li>Aging</li>
    <li>Genetics</li>
    <li>Weight loss</li>
  </ul>

  <p>Changes in the labia can lead to:</p>
  <ul>
    <li>Discomfort in clothing</li>
    <li>Pain during intimacy</li>
    <li>Hygiene issues</li>
    <li>Self-consciousness</li>
  </ul>

  <h2>You’re Not Alone</h2>
  <p>
    Many women experience these concerns but don’t know where to turn. At <strong>Ultimate Health</strong>, we offer safe and simple cosmetic gynecology treatments to help improve comfort and confidence.
  </p>

  <h2>What Are Your Options?</h2>
  <p>
    We offer procedures like labiaplasty and other vaginal rejuvenation services in a private, respectful environment.
  </p>

  <p>
    This isn’t about vanity. It’s about feeling good in your body and reclaiming your confidence.
  </p>

  <p>
    Have questions? We’re here to help you feel heard, respected, and empowered.
  </p>
</>

  },

  'safe-affordable-weight-loss-in-leesburg-florida': {
    title: 'Where to Find Safe, Affordable Weight Loss in Leesburg, FL?',
    banner: '/assets/img/blog-images/safe-weight-loss.webp',
    date: 'September 28, 2025',
    content: <>
  <p>
    When it comes to weight loss, the internet is packed with quick fixes and risky fads. But if you live in Leesburg, FL or the surrounding areas of Lady Lake, Mount Dora, or The Villages, you don’t have to gamble with your health. There are clinically supervised, affordable weight loss options right here in your backyard.
  </p>

  <h2>Why “Safe” Matters in Weight Loss</h2>
  <p>
    Crash diets and unregulated pills may promise fast results, but they can leave you feeling drained and put your long-term health at risk.
  </p>

  <h2>Safe weight loss means:</h2>
  <ul>
    <li>Supervision by a licensed medical provider</li>
    <li>Customized plans based on your labs and lifestyle</li>
    
    <li>Built-in accountability so you don’t feel like you’re doing it alone</li>
  </ul>

  <h2>Why “Affordable” is Possible in Leesburg</h2>
  <p>
    Many patients think weight loss care is out of reach financially.  
    <strong>But at Ultimate Health DPC in Leesburg,</strong>, programs are designed to be transparent, with weekly plans starting at $150. No surprise costs. No hidden fees.
  </p>

  <h2>A Local Option You Can Trust</h2>
  <p>
    Patients across Lake County choose Ultimate Health DPC because they want:
  </p>

  <ul>
    <li>Access to board-certified providers who understand both medical care and lifestyle support</li>
    <li>Flexible scheduling that fits busy lives</li>
    <li>A practice that puts relationships first, not insurance codes</li>
  </ul>
  <p>
    If you’ve been asking yourself, “Where can I find affordable weight loss near me in Leesburg, FL?”—the answer is here.
    <br />
    <strong>
       Call Ultimate Health DPC today at 352-901-6582 and schedule your consultation.
    </strong>
  </p>
</>

  },

  'signs-your-hormones-might-be-out-of-balance': {
    title: 'Top 5 Signs Your Hormones Might Be Out of Balance—And What Leesburg Women Are Doing About It',
    banner: '/assets/img/blog-images/hormone-balance.webp',
    date: 'September 28, 2025',
    content: <>
  <p>
    Hormones play a quiet but powerful role in how you feel every day. For women in Leesburg, Lady Lake, and The Villages, hormone imbalance is one of the most common reasons for fatigue, weight changes, and mood swings.
  </p>

  <h2>Here are the Top 5 Signs Your Hormones May Be Out of Balance:</h2>
  <ol>
    <li><strong class="text-success">Sudden Weight Gain or Trouble Losing Weight - </strong> Even with healthy eating and exercise, hormones like insulin, cortisol, and thyroid can make weight management nearly impossible</li>
    <li><strong class="text-success">Low Energy or Constant Fatigue - </strong> If you feel like you’re running on empty—even after a full night’s sleep—hormonal shifts may be draining your energy.</li>
    <li><strong class="text-success">Mood Swings or Increased Anxiety - </strong> Estrogen and progesterone fluctuations often cause irritability, sadness, or anxious thoughts.</li>
    <li><strong class="text-success">Hot Flashes or Night Sweats - </strong> Classic signs of perimenopause and menopause, which many women in Lake County begin experiencing in their 40s and 50s.</li>
    <li><strong class="text-success">Low Libido or Vaginal Dryness - </strong> A topic many women avoid, but these are clear signals your hormones may need support.</li>
  </ol>
  <h2>
    What Local Women Are Doing About It
  </h2>
  <p>
    At Ultimate Health DPC in Leesburg, women are turning to Bioidentical Hormone Replacement Therapy (BHRT) and personalized lab testing to get to the root of the problem. With options like pellet therapy, topical creams, or injections, women are restoring balance safely under the care of a board-certified provider.
    <br></br><br></br>
    Leesburg women aren’t settling for “just deal with it” anymore. They’re choosing a clinic that listens, tests, and treats the whole person.
  </p>  
  <p>
    Ready to learn if your symptoms are hormone-related? 
    <br />
    <strong>
        Book a hormone consultation today with Ultimate Health DPC.
    </strong>
  </p>
</>
  },  

  'direct-primary-care-versus-traditional-care': {
    title: 'What Direct Primary Care Looks Like in Lake County vs Traditional Insurance',
    banner: '/assets/img/blog-images/hormone-balance.webp',
    date: 'September 28, 2025',
    content: <>
  <p>
    The healthcare system can feel like a maze—especially when it comes to choosing between traditional insurance and Direct Primary Care (DPC). For families in Leesburg, Mount Dora, and Lady Lake, the difference couldn’t be clearer.
  </p>

  <h2>Traditional Insurance Care</h2>

  <ul>
    <li><strong>Long wait times</strong> for appointments</li>
    <li>Short, rushed visits (average of 7 minutes)</li>
    <li>Surprise bills, copays, and deductibles</li>
    <li>Decisions often driven by insurance, not your provider</li>
  </ul>
  
  <h2>
    Direct Primary Care in Lake County
  </h2>

  <p>
    At Ultimate Health DPC, patients pay a flat monthly membership fee and receive:
  </p> 

  <ul>
    <li><strong>Unlimited access</strong>to your provider by phone, text, or in-person</li>
    <li>Same-day or next-day appointments</li>
    <li>Longer visits where your provider actually knows you</li>
    <li>Transparent pricing on labs, imaging, and medications</li>
    <li>Wellness and preventive services included</li>
  </ul>
   
  <p>
    Why More Lake County Residents Are Switching 
    <br />
    Families, small business owners, and retirees are finding that DPC is not only more affordable but also more personalized. Patients are no longer stuck navigating red tape and surprise costs. Instead, they have a trusted provider who focuses on their health, not billing codes.
  </p>
  <p>
    If you’ve ever asked yourself, “Why is healthcare so complicated?”—DPC may be the answer.
  </p>

  <p> Discover why more people in Leesburg, Lady Lake, and The Villages are making the switch. Visit UltimateHealthDPC.com to learn more or call 352-901-6582 to join today</p>
</>
  },  
};


  const post = mediaPosts[slug];

  if (!post) {
    return (
      <>
        <TopBar />
        <NavBar />
        <div className="container mt-5">
          <h2>404 - Blog Post Not Found</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <TopBar />
      <NavBar />
      <BlogHero
        backgroundImage={post.banner}
        title={post.title}
        />
      <section className="section py-5">
        <div className="container">
            <p className="text-muted">{post.date}</p>
            <hr />
            <div className="lead">{post.content}</div>
        </div>
    </section>
      <Footer />
    </>
  );
}

export default MediaPost;
