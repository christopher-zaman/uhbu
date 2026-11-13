import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import articleMarkdown from '../content/lipedema-and-menopause.md?raw';

const host = 'https://www.ultimatehealthdpc.com';
const authorPath = '/meet-us#about-us';

export const lipedemaPost = {
  path: '/blog/lipedema-and-menopause',
  title: 'Lipedema and Menopause: Why Hormonal Changes May Affect More Than Hot Flashes',
  description: 'Learn about lipedema symptoms in women, how they may relate to menopause and hormonal changes, and when to seek an evaluation in Leesburg, FL.',
  image: '/assets/img/blog-images/hormone-balance.webp',
};

const referencesHeading = '## References and Further Reading';
const [article, references] = articleMarkdown.split(referencesHeading);
const markdownComponents = {
  a: ({ href, children }) => href?.startsWith('/')
    ? <Link to={href}>{children}</Link>
    : <a href={href}>{children}</a>,
};

const url = host + lipedemaPost.path;
const image = host + lipedemaPost.image;
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: lipedemaPost.title,
  description: lipedemaPost.description,
  image,
  mainEntityOfPage: url,
  author: {
    '@type': 'Person',
    name: 'Amanda Gaskin',
    honorificSuffix: 'MSN, APRN',
    jobTitle: 'Menopause Care Professional',
    url: host + authorPath,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Ultimate Health Direct Primary Care',
    url: host,
  },
};

export default function LipedemaAndMenopause() {
  return (
    <>
      <SEO
        title="Lipedema and Menopause: Symptoms & Evaluation | Ultimate Health DPC"
        description={lipedemaPost.description}
        image={image}
        url={url}
        type="article"
        jsonLd={structuredData}
      />
      <section className="section py-5">
        <article className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-xl-8">
              <header className="mb-4">
                <h1>{lipedemaPost.title}</h1>
                <p className="mb-1">
                  By <Link to={authorPath}>Amanda Gaskin, MSN, APRN</Link> | Menopause Care Professional
                </p>
                <p className="text-muted">Ultimate Health Direct Primary Care</p>
              </header>
              <ReactMarkdown components={markdownComponents}>{article}</ReactMarkdown>
              <p className="mb-4">
                <Link to="/contact#contact" className="btn btn-outline-primary">
                  Schedule a Women's Health Consultation
                </Link>
              </p>
              <ReactMarkdown>{referencesHeading + references}</ReactMarkdown>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
}
