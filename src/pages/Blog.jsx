import React from 'react';
import BlogPreview from '../components/BlogPreview';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';
import banner from '../assets/banners/subscribe.png';
import Title from '../components/Title';

function Blog() {
  return (
    <>
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="Check Out Our Blogs"
    subtitle=""
    textColor="rgba(255, 255, 255, 1)"
     />
    <section className="section blog py-5">
      <div className="container">
          <Title
          introText = "Read Our"
          highlightText = "Blogs"
           />
        {/* First Row */}
        <div className="row mb-5">
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
              link="/blog/men-and-heart-disease
"
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
          
        </div>

        {/* Second Row */}
        <div className="row">
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
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default Blog;
