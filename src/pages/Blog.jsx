import React from 'react';
import BlogPreview from '../components/BlogPreview';
import Footer from '../components/Footer';
import PhotoBanner from '../components/PhotoBanner';
import businessWomenBanner from '../assets/banners/blog-banner.png';
import { lipedemaPost } from './LipedemaAndMenopause';

function Blog() {
  return (
    <>
      <PhotoBanner
        image={businessWomenBanner}
        alt="Amanda Gaskin Business Women of Style"
      />

      <section className="section blog py-5">
        <div className="container">
          <h1>Health Tips, Wellness &amp; Preventive Care</h1>
          <p>
            Expert guidance, preventive care tips, and wellness resources from the Ultimate Health team.
          </p>

          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
              <BlogPreview
                title={lipedemaPost.title}
                excerpt={lipedemaPost.description}
                image={lipedemaPost.image}
                link={lipedemaPost.path}
              />
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <BlogPreview
                title="Why Men Avoid the Doctor"
                excerpt="Breaking the stigma around men's health visits."
                image="/assets/img/why-men-avoid-going-to-the-doctor.jpg"
                link="/blog/why-men-avoid-the-doctor"
              />
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <BlogPreview
                title="Men and Heart Disease: What You Need to Know"
                excerpt="Discover practical ways to improve your wellness journey."
                image="/assets/img/blog-images/mens-heart-disease.webp"
                link="/blog/men-and-heart-disease"
              />
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <BlogPreview
                title="Women and Heart Disease: What You Need to Know"
                excerpt="Learn the signs and treatments to restore hormone health."
                image="/assets/img/blog-images/womens-heart-diseases.webp"
                link="/blog/women-and-heart-disease"
              />
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <BlogPreview
                title="Peptide Therapy – Is It Just a Trend?"
                excerpt="The impact of sleep on long-term wellness."
                image="/assets/img/blog-images/peptides-blog.webp"
                link="/blog/peptide-therapy"
              />
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <BlogPreview
                title="Women and Testosterone Therapy"
                excerpt="Are supplements right for you? Here's what to know."
                image="/assets/img/blog-images/testosterone-therapy.webp"
                link="/blog/women-and-testosterone-therapy"
              />
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <BlogPreview
                title="Does the Labia Really Matter?"
                excerpt="Discover how peptide therapy supports optimal health."
                image="/assets/img/blog-images/does-labia-matter.png"
                link="/blog/does-the-labia-really-matter"
              />
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <BlogPreview
                title="Where to Find Safe, Affordable Weight Loss in Leesburg, FL"
                excerpt="Why “Safe” Matters in Weight Loss"
                image="/assets/img/blog-images/safe-weight-loss.webp"
                link="/blog/safe-affordable-weight-loss-in-leesburg-florida"
              />
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <BlogPreview
                title="Top 5 Signs Your Hormones Might Be Out of Balance—And What Leesburg Women Are Doing About It"
                excerpt="Hormones play a quiet but powerful role in how you feel every day."
                image="/assets/img/blog-images/hormone-balance.webp"
                link="/blog/signs-your-hormones-might-be-out-of-balance"
              />
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <BlogPreview
                title="What Direct Primary Care Looks Like in Lake County vs Traditional Insurance"
                excerpt="The healthcare system can feel like a maze"
                image="/assets/img/blog-images/health-care-maze.webp"
                link="/blog/direct-primary-care-versus-traditional-care"
              />
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <BlogPreview
                title="Male Patient Seminar with Dr. Cory Rice"
                excerpt="Precision and preventive medicine"
                image="/assets/img/blog-images/blog-post-uhdpc.webp"
                link="/blog/precision-and-preventive-medicine"
                isVideo={true}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Blog;