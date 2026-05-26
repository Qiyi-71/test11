import Link from "next/link";

const features = [
  {
    title: "Fast by default",
    body: "Built with Next.js App Router, optimized font rendering, and production-ready defaults."
  },
  {
    title: "Vercel ready",
    body: "Deploy directly from GitHub with automatic framework detection and included project settings."
  },
  {
    title: "Easy to extend",
    body: "Use this as a starting point for a product page, portfolio, SaaS app, or documentation site."
  }
];

export default function Home() {
  return (
    <main className="page">
      <nav className="nav" aria-label="Main navigation">
        <Link className="brand" href="/">
          test11
        </Link>
        <div className="navLinks">
          <a href="#features">Features</a>
          <a href="#deploy">Deploy</a>
          <a className="button small" href="https://vercel.com/new" target="_blank" rel="noreferrer">
            Launch
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Next.js template for Vercel</p>
          <h1>Ship a polished website from a clean starting point.</h1>
          <p className="lead">
            A focused template with responsive layout, practical sections, and a deployment path that works cleanly on Vercel.
          </p>
          <div className="actions">
            <a className="button" href="#deploy">
              Deploy guide
            </a>
            <a className="button secondary" href="#features">
              View features
            </a>
          </div>
        </div>
        <div className="preview" aria-label="Website preview">
          <div className="previewTop">
            <span />
            <span />
            <span />
          </div>
          <div className="previewBody">
            <div className="stat">
              <strong>99</strong>
              <span>Lighthouse score target</span>
            </div>
            <div className="meter">
              <span />
            </div>
            <div className="rows">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="sectionHeader">
          <p className="eyebrow">What is included</p>
          <h2>Small template, useful defaults.</h2>
        </div>
        <div className="grid">
          {features.map((feature) => (
            <article className="card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="deploy" id="deploy">
        <div>
          <p className="eyebrow">Deploy</p>
          <h2>Push to GitHub, import in Vercel, publish.</h2>
        </div>
        <ol>
          <li>Install dependencies with <code>npm install</code>.</li>
          <li>Run locally with <code>npm run dev</code>.</li>
          <li>Deploy from the Vercel dashboard or CLI.</li>
        </ol>
      </section>
    </main>
  );
}
