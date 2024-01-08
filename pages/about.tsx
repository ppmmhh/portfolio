import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              I'm going to be learning more and more about code and web dev in
              the next 12 weeks.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
