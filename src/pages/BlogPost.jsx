import React from 'react';
import { useParams } from 'react-router-dom';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BlogHero from '../components/BlogHero';


function BlogPost() {
  const { slug } = useParams();
    
  const blogPosts = {
  'men-and-heart-disease': {
    banner: '/assets/img/why-men-avoid-going-to-the-doctor.jpg',
    title: 'Men and Heart Disease: What You Need to Know',
    date: 'July 20, 2025',
    content: (
      <>
  <p>
    Heart disease is the leading cause of death for men in the United States. But it doesn’t have to be that way. Many risk factors can be managed or even reversed with early action.
  </p>

  <h2>What Is Heart Disease?</h2>
  <p>
    Heart disease refers to several conditions, but the most common is coronary artery disease. This happens when the blood vessels that supply your heart get blocked or narrowed by plaque.
  </p>

  <h2>Risk Factors for Men</h2>
  <ul>
    <li>High blood pressure</li>
    <li>High cholesterol</li>
    <li>Smoking</li>
    <li>Diabetes</li>
    <li>Obesity</li>
    <li>Poor diet</li>
    <li>Lack of exercise</li>
    <li>Excess stress</li>
    <li>Family history of heart problems</li>
  </ul>

  <h2>Warning Signs to Watch For</h2>
  <p>Not all men have chest pain during a heart attack. Other signs can include:</p>
  <ul>
    <li>Shortness of breath</li>
    <li>Fatigue</li>
    <li>Dizziness</li>
    <li>Pain in the arm, neck, jaw, or back</li>
  </ul>

  <h2>How to Protect Your Heart</h2>
  <ul>
    <li>Schedule regular checkups</li>
    <li>Know your numbers (blood pressure, cholesterol, blood sugar)</li>
    <li>Eat heart-healthy foods like fruits, veggies, whole grains, and lean proteins</li>
    <li>Move your body regularly</li>
    <li>Quit smoking and limit alcohol</li>
  </ul>

  <p>
    At <strong>Ultimate Health DPC</strong>, we help you stay ahead of heart problems. Through ongoing monitoring and personalized care, we work with you to reduce risks and improve your heart health.
  </p>
  <p>Your heart works hard for you. Let’s take care of it.</p>
</>

    )
  },
  'women-and-heart-disease': {
    title: 'Women and Heart Disease: What You Need to Know',
    date: 'July 10, 2025',
    banner: '/assets/img/why-men-avoid-going-to-the-doctor.jpg',
    content: <>
  <p>
    Heart disease is the number one killer of women in the U.S. But many women don’t realize they’re at risk — and that can be dangerous.
  </p>

  <h2>Why Women Need to Pay Attention</h2>
  <p>
    Heart disease often looks different in women than it does in men. That means it can go unnoticed or be misdiagnosed. Women may not feel crushing chest pain. Instead, they might have more subtle symptoms.
  </p>

  <h2>Signs of Heart Disease in Women</h2>
  <ul>
    <li>Unusual fatigue</li>
    <li>Shortness of breath</li>
    <li>Nausea or vomiting</li>
    <li>Pain in the neck, jaw, or upper back</li>
    <li>Dizziness or lightheadedness</li>
    <li>Cold sweats</li>
  </ul>

  <h2>Risk Factors for Women</h2>
  <ul>
    <li>High blood pressure</li>
    <li>High cholesterol</li>
    <li>Smoking</li>
    <li>Diabetes</li>
    <li>Being overweight</li>
    <li>Family history</li>
    <li>Autoimmune disorders</li>
    <li>Menopause and hormonal changes</li>
  </ul>

  <h2>Prevention Is Power</h2>
  <ul>
    <li>Eat a heart-healthy diet</li>
    <li>Exercise regularly</li>
    <li>Reduce stress</li>
    <li>Quit smoking</li>
    <li>Control blood sugar and blood pressure</li>
  </ul>

  <p>
    At <strong>Ultimate Health</strong>, we focus on whole-woman care. That means we look at your full picture — hormones, lifestyle, stress, family history, and more. Together, we build a plan to protect your heart and your future.
  </p>
  <p>You only get one heart. Let’s keep it strong.</p>
</>

  },
  'why-men-avoid-the-doctor': {
    // title: 'Why Men Avoid the Doctor (And How to Change That)',
    // banner: '/assets/img/why-men-avoid-going-to-the-doctor.jpg', // your image path
    date: 'July 15, 2025',
    banner: '/assets/img/why-men-avoid-going-to-the-doctor.jpg',
    title: 'Why Men Avoid the Doctor (And How to Change That)',
    content: (
  <>
    <p>
      Let’s face it — many men don’t like going to the doctor. They often avoid checkups, ignore symptoms, or wait until something becomes serious before seeking help. But why is that? And more importantly, how can we change it?
    </p>

    <h1>Why Do Men Avoid the Doctor?</h1>
    <ol>
      <li>
        <strong>Fear of Bad News</strong>
        <p>
          Some men worry that a visit to the doctor will lead to scary news or a long list of problems. That fear can keep them away, even when they know something isn’t right.
        </p>
      </li>
      <li>
        <strong>Embarrassment or Discomfort</strong>
        <p>
          Talking about personal health concerns, especially those related to sexual health or mental well-being, can be uncomfortable. Many men feel embarrassed or ashamed.
        </p>
      </li>
      <li>
        <strong>Believing Symptoms Aren’t Serious</strong>
        <p>
          “It’ll go away on its own.” Sound familiar? Many men downplay symptoms or think they can tough it out without help.
        </p>
      </li>
      <li>
        <strong>Busy Lives and Limited Time</strong>
        <p>
          Between work, family, and other responsibilities, scheduling a doctor’s visit doesn’t always feel urgent — until it is.
        </p>
      </li>
      <li>
        <strong>Negative Past Experiences</strong>
        <p>
          Some men have had unpleasant experiences with healthcare in the past. Long wait times, feeling rushed, or not being heard can make them hesitant to return.
        </p>
      </li>
    </ol>

    <h2>How We Can Help Change That</h2>
    <p>
      At <strong>Ultimate Health Direct Primary Care</strong>, we understand how hard it can be to take that first step. That’s why we’ve created a different kind of experience:
    </p>

    <ul>
      <li>No judgment</li>
      <li>No rushed visits</li>
      <li>A focus on men’s health and concerns</li>
      <li>Easy scheduling and direct access to your provider</li>
    </ul>

    <p>
      We talk with you, not at you. Our goal is to make you feel comfortable, respected, and heard.
    </p>

    <p>
      It’s never too late to take charge of your health. We’re here when you’re ready.
    </p>
  </>
)


  },
  'peptide-therapy': {
    title: 'Peptide Therapy – Is It Just a Trend?',
    banner: '/assets/img/why-men-avoid-going-to-the-doctor.jpg',
    date: 'July 17, 2025',
    content: <>
  <p>
    You may have heard about peptide therapy on social media or from a friend. It’s gaining popularity fast. But what exactly is it, and does it really work?
  </p>

  <h2>What Are Peptides?</h2>
  <p>
    Peptides are short chains of amino acids — the building blocks of protein. They send signals to your body to perform specific functions like healing, muscle growth, fat loss, and more.
  </p>

  <h2>What Can Peptide Therapy Help With?</h2>
  <ul>
    <li>Boosting energy and metabolism</li>
    <li>Improving muscle mass and recovery</li>
    <li>Supporting fat loss</li>
    <li>Enhancing sleep and mood</li>
    <li>Increasing libido</li>
    <li>Slowing signs of aging</li>
  </ul>

  <h2>Is It Safe?</h2>
  <p>
    When used correctly under medical supervision, peptide therapy is generally safe and effective. At <strong>Ultimate Health</strong>, we offer personalized peptide treatments based on lab work and your health goals.
  </p>

  <h2>Not Just a Trend</h2>
  <p>
    While it may be trending, peptide therapy is rooted in science. More and more research is showing how targeted peptides can help optimize health naturally.
  </p>

  <p>
    Interested in learning more? Let’s chat about whether peptide therapy is a good fit for your wellness journey.
  </p>
</>

  },
  'women-and-testosterone-therapy': {
    title: 'Women and Testosterone Therapy',
    banner: '/assets/img/why-men-avoid-going-to-the-doctor.jpg',
    date: 'July 18, 2025',
    content: <>
  <p>
    Most people think testosterone is just for men, but women need it too. In fact, low testosterone levels in women can cause a wide range of frustrating symptoms.
  </p>

  <h2>Signs You May Have Low Testosterone:</h2>
  <ul>
    <li>Tired all the time</li>
    <li>Brain fog or trouble focusing</li>
    <li>Low sex drive</li>
    <li>Mood swings or anxiety</li>
    <li>Weight gain</li>
    <li>Poor muscle tone</li>
  </ul>

  <h2>What Causes Low Testosterone in Women?</h2>
  <ul>
    <li>Aging</li>
    <li>Menopause</li>
    <li>Stress</li>
    <li>Certain medications or health conditions</li>
  </ul>

  <h2>How Testosterone Therapy Can Help</h2>
  <p>When carefully dosed, testosterone therapy can help:</p>
  <ul>
    <li>Boost energy and mood</li>
    <li>Improve sexual wellness</li>
    <li>Enhance memory and focus</li>
    <li>Support weight loss and muscle strength</li>
  </ul>

  <h2>Is It Safe?</h2>
  <p>
    Yes, when managed by a qualified provider. At <strong>Ultimate Health</strong>, we take a gentle, personalized approach. We monitor your labs closely and adjust your plan as needed.
  </p>

  <p>
    You deserve to feel good in your body. Let’s get your hormones back in balance.
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
    <li>Evidence-based treatments, like FDA-approved medications such as Tirzepatide or Semaglutide</li>
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


  const post = blogPosts[slug];

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

export default BlogPost;
