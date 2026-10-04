import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = {
  "DevOps & CI/CD": ["DevOps","Docker","Docker Compose","DockerHub","Kubernetes","Jenkins CI/CD","AWS CodeBuild","AWS CodeDeploy","AWS CodeCommit","AWS Elastic Beanstalk"],
  "AWS": ["EC2","Lambda","VPC","S3","Glacier","RDS","Redshift","IAM","CloudFront","EBS","Route53","Elastic IP","Elastic Load Balancing","CloudFormation","Amazon Lex","Amazon Rekognition","EKS","SageMaker","Fargate","EFS","AWS Glue"],
  "Monitoring": ["Prometheus","Grafana","Loki","AWS CloudWatch","AWS CloudTrail"],
  "Backend": ["Python","Django","Django REST Framework","Flask","REST APIs"],
  "Source Control": ["Git","GitHub","GitHub Desktop","Gitea"],
  "Databases": ["MySQL","Redshift","DynamoDB","AWS RDS"],
  "IaC & Automation": ["Terraform"],
  "OS": ["Windows","Linux","Ubuntu"],
  "AI": ["Generative AI","ChatGPT","Stable Diffusion","AWS Polly","OpenAI API"]
};

function Tags({items}) {
  return <div className="tags">{items.map(x => <span key={x}>{x}</span>)}</div>;
}

function App() {
  return <div>
    <header className="nav">
      <a className="logo" href="#home">AP<span>.</span></a>
      <nav>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="navButton" href="mailto:ashapendyala12@gmail.com">Let's connect</a>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="heroCopy">
          <p className="eyebrow">ASSOCIATE SOFTWARE ENGINEER · AWS · DEVOPS · BACKEND</p>
          <h1>Cloud, backend and automation — built to work reliably.</h1>
          <p className="heroText">
            I'm Asha Pendyala, an Associate Software Engineer focused on AWS cloud solutions,
            backend development, DevOps practices, automation and reliable application delivery.
          </p>
          <div className="actions">
            <a className="button primary" href="#projects">View my projects ↗</a>
            <a className="button secondary" href="/Asha_Pendyala_Resume.docx" download>Download resume ↓</a>
          </div>
          <div className="contactLine">
            <a href="mailto:ashapendyala12@gmail.com">ashapendyala12@gmail.com</a>
            <span>·</span>
            <a href="https://www.linkedin.com/in/pendyalaasha-419246253" target="_blank">LinkedIn</a>
            <span>·</span>
            <a href="https://github.com/Ashapendyala" target="_blank">GitHub</a>
          </div>
        </div>

        <div className="terminal">
          <div className="terminalHead"><i></i><i></i><i></i><span>deploy.sh</span></div>
          <pre>{`$ deployment workflow

        GIT
         │
         ▼
       CI/CD
         │
    ┌────┼────┐
    ▼    ▼    ▼
  BUILD TEST DEPLOY
         │
         ▼
      AWS EC2
         │
      ┌──┴──┐
      ▼     ▼
   NGINX  DOCKER
      │
      ▼
  APPLICATION
      │
      ▼
PROMETHEUS + GRAFANA

✓ automation
✓ monitoring
✓ reliable delivery`}</pre>
        </div>
      </section>

      <section id="about" className="section">
        <div className="label">01 / ABOUT</div>
        <div>
          <h2>Backend engineering with a strong cloud and DevOps focus.</h2>
          <p className="lead">
            Proficient in backend development and AWS cloud solutions, with a strong focus on
            DevOps practices for efficient deployment, automation and system reliability.
            Experienced with Python, Django, AWS deployments, Linux administration, Git server
            operations, Terraform and generative AI applications.
          </p>
          <div className="stats">
            <div><b>AWS</b><span>Cloud solutions</span></div>
            <div><b>DEVOPS</b><span>Automation & CI/CD</span></div>
            <div><b>PYTHON</b><span>Backend development</span></div>
            <div><b>AI</b><span>Generative applications</span></div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="label">02 / EXPERIENCE</div>
        <div className="timeline">
          <article>
            <div className="role">
              <div><h2>Associate Software Engineer</h2><p>Orchasp · April 2024 — Present</p></div>
              <span>Current</span>
            </div>
            <ul>
              <li>Engineered scalable solutions using AWS EC2, VPC, S3, RDS, Redshift, Lambda, IAM and CloudFront.</li>
              <li>Implemented DevOps solutions to streamline application workflows and improve operational stability.</li>
              <li>Collaborated with frontend teams to develop backend APIs and ensure smooth client-server data flow.</li>
              <li>Worked with AI technologies in building generative AI applications and performed comparative analysis of leading generative models.</li>
              <li>Managed deployments and Git server operations within Linux-based environments.</li>
              <li>Supported testing, troubleshooting and deployment activities across application workflows.</li>
            </ul>
          </article>

          <article>
            <div className="role">
              <div><h2>Associate Software Engineer</h2><p>Orchasp · January 2024 — April 2024</p></div>
            </div>
            <ul>
              <li>Designed and developed backend APIs using Python and Flask for frontend-backend communication.</li>
              <li>Created and managed database schemas for user data, questions, answers and evaluation scores.</li>
              <li>Integrated OpenAI API to dynamically generate interview questions based on selected technologies.</li>
              <li>Developed APIs to evaluate user responses through OpenAI and calculate scores in real time.</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="label">03 / PROJECTS</div>
        <div className="projects">
          <article className="project featured">
            <div className="projectNo">01</div>
            <div>
              <p className="projectType">AWS · DEVOPS · NGINX · LINUX</p>
              <h2>IndusAyush</h2>
              <p>
                Deployed multiple client landing pages on AWS EC2 instances, configured Nginx
                as a reverse proxy, optimized costs by hosting multiple projects on a single
                EC2 instance, and maintained uptime and monitored performance using AWS tools.
              </p>
              <Tags items={["AWS EC2","Nginx","Reverse Proxy","Linux","AWS Monitoring","Cost Optimization"]}/>
              <div className="architecture">
                <span>Client</span><b>→</b><span>Nginx</span><b>→</b><span>EC2</span><b>→</b><span>Landing Pages</span>
              </div>
            </div>
          </article>

          <article className="project">
            <div className="projectNo">02</div>
            <div>
              <p className="projectType">DJANGO REST · DOCKER · AWS</p>
              <h2>UltraClips</h2>
              <p>
                Contributed to a video-based platform using Django REST Framework for video
                upload, management and retrieval. Implemented authentication, containerized
                the application with Docker and supported deployment and management on AWS EC2.
              </p>
              <Tags items={["Django REST Framework","Docker","AWS EC2","REST API","Authentication","Video Platform"]}/>
              <div className="architecture">
                <span>Client</span><b>→</b><span>REST API</span><b>→</b><span>Docker</span><b>→</b><span>AWS EC2</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="label">04 / SKILLS</div>
        <div className="skillGrid">
          {Object.entries(skills).map(([name, items]) =>
            <article className="skillCard" key={name}><h3>{name}</h3><Tags items={items}/></article>
          )}
        </div>
      </section>

      <section className="section">
        <div className="label">05 / EDUCATION</div>
        <div className="education">
          <h2>Bachelor of Technology</h2>
          <p>Electronics and Communication Engineering</p>
          <p>SASI Institute of Technology and Engineering · 2021 — 2024</p>
          <h3>Certifications</h3>
          <Tags items={[
            "HackerRank REST API — Intermediate",
            "HackerRank Problem Solving — Basic",
            "HackerRank Python — Intermediate",
            "AWS Certified — Core (Intermediate)",
            "AWS with DevOps — Intermediate",
            "Linux Essentials & Administrator — Intermediate"
          ]}/>
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">06 / CONTACT</p>
        <h2>Let's build something reliable.</h2>
        <p>Open to opportunities involving AWS, DevOps, backend engineering, automation and cloud deployment.</p>
        <div className="actions center">
          <a className="button primary" href="mailto:ashapendyala12@gmail.com">Email me ↗</a>
          <a className="button secondary" href="https://www.linkedin.com/in/pendyalaasha-419246253" target="_blank">LinkedIn ↗</a>
          <a className="button secondary" href="https://github.com/Ashapendyala" target="_blank">GitHub ↗</a>
        </div>
      </section>
    </main>

    <footer><span>© 2026 Asha Pendyala</span><span>AWS · DevOps · Backend · Automation</span></footer>
  </div>
}

createRoot(document.getElementById("root")).render(<App />);
