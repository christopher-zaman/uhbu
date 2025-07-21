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

  }
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
