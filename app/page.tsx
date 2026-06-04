import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/michael-tran.github.io" : "";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050510] text-cyan-50 font-mono selection:bg-fuchsia-500/30 selection:text-fuchsia-200 overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-fuchsia-900/20 to-transparent opacity-30" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-cyan-900/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:to-cyan-400 transition-all duration-300"
          >
            Michael Tran
          </Link>
          <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-cyan-700/80">
            <Link href="#work" className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">PROJECTS</Link>
            <Link href="#philosophy" className="hover:text-fuchsia-400 hover:drop-shadow-[0_0_5px_rgba(232,121,249,0.8)] transition-all">ABOUT</Link>
            <Link href="#contact" className="hover:text-yellow-400 hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.8)] transition-all">CONTACT</Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 space-y-8 relative">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              Senior DevSecOps and Cloud-Native Backend Architect
            </h1>
          </div>
          <p className="text-lg md:text-xl text-cyan-100/70 max-w-2xl leading-relaxed font-light border-l-2 border-fuchsia-500/50 pl-6">
            Leveraging over six years of experience driving mission-critical AI, scalable ETL pipelines, and robust Kubernetes infrastructure to automate enterprise CI/CD and engineer highly resilient, cloud-native solutions.
          </p>
          <div className="pt-8 flex gap-6">
            <Link 
              href="#work" 
              className="group relative px-8 py-3 bg-cyan-950/30 border border-cyan-500/50 text-cyan-300 font-bold tracking-widest uppercase text-sm overflow-hidden hover:bg-cyan-900/50 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Want to learn more? <ArrowRightIcon href="" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </Link>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="py-20 space-y-12">
          <div className="flex items-end justify-between border-b border-cyan-900/30 pb-4">
            <h2 className="text-2xl font-bold tracking-widest text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.6)]">
              // PROJECTS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Computer Vision Traffic Pipeline"
              description="Architected and deployed AI-driven computer vision pipelines at Transurban for automated vehicle detection, leveraging Python to process high-volume traffic data into PostgreSQL."
              tags={["PYTHON", "POSTGRESQL", "KUBERNETES", "HELM", "GITHUB ACTIONS"]}
              color="cyan"
              href="https://www.transurban.com/about-us/innovation"
            />

            <ProjectCard 
              title="Resilient Enterprise ETL Infrastructure"
              description="Accelerated production-readiness at Capital One during a $50B merger by engineering robust ETL pipelines using PySpark on AWS Glue and EMR, optimizing large-scale data processing across 13 databases."
              tags={["PYTHON", "PYSPARK", "AWS GLUE", "EMR", "CASSANDRA", "JENKINS"]}
              color="cyan"
              href="https://finance.yahoo.com/markets/stocks/articles/capital-one-travel-adds-discover-192042973.html"
            />

            <ProjectCard 
              title="Secure GovCloud Microservices"
              description="Owned the end-to-end SDLC at IBM for critical applications, deploying high-availability Java and Python microservices on AWS GovCloud EC2 and Snowball with secure OAuth endpoints."
              tags={["JAVA", "PYTHON", "DJANGO", "AWS EC2", "KAFKA", "JENKINS"]}
              color="cyan"
              href="https://jackpoulson.substack.com/p/exclusive-inside-trident-spectre"
            />

            <ProjectCard 
              title="High-Volume Data Integration Workflow"
              description="Architected comprehensive workflows at IBM using Apache NiFi to orchestrate high-volume Kafka topics, transitioning massive datasets into HDFS and real-time HBase storage with Splunk observability."
              tags={["JAVA", "APACHE NIFI", "APACHE KAFKA", "HDFS", "HBASE", "SPLUNK"]}
              color="cyan"
              href="https://www.ibm.com/industries/federal"
            />

            <ProjectCard 
              title="Automated Analytics & Document Processing"
              description="Engineered automated ETL pipelines at Ambit Greenzone using Python and Pandas to ingest Google Analytics data, containerized applications with Docker, and built an AI-driven traffic pattern prototype."
              tags={["PYTHON", "PANDAS", "NUMPY", "POSTGRESQL", "DOCKER"]}
              color="cyan"
              href="https://www.consumerfinance.gov/data-research/research-reports/credit-card-late-fees/"
            />

            <ProjectCard 
              title="Mission-Critical Geospatial Defense System"
              description="Engineered tactical applications at Lockheed Martin aggregating geospatial feeds for situational awareness, while modernizing legacy interfaces using React and a Java Spring Boot backend."
              tags={["REACT", "JAVA", "SPRING BOOT", "SELENIUM", "JENKINS"]}
              color="cyan"
              href="https://www.lockheedmartin.com/en-us/capabilities/undersea-warfare.html"
            />
          </div>
        </section>

        {/* Philosophy / Approach */}
        <section id="philosophy" className="py-20 grid md:grid-cols-12 gap-12 border-t border-cyan-900/30">
          <div className="md:col-span-4 space-y-8">
            <h2 className="text-2xl font-bold tracking-widest text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
              {"// ABOUT ME"}
            </h2>
            <p className="text-base font-bold tracking-widest text-green-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
              {"USER_AWAITING_INPUT..."}
            </p>
            <p>Initiating Subroutine: The Journey of Michael Tran.</p>
            {/* Profile Image - Replace src with your image in /public */}
            <div className="relative w-full aspect-[4/5] border border-cyan-500/30 rounded-sm overflow-hidden bg-cyan-950/30 group">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(5,5,16,0.8)_100%)] z-10" />
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:100%_4px] z-20 pointer-events-none" />
              
              <Image 
                src={`${basePath}/me.jpg`}
                alt="Profile"
                fill
                className="object-cover z-0 opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
          <div className="md:col-span-8 space-y-8 text-cyan-100/80 leading-relaxed font-light">
            <p>
              I am a tinkerer by design, a camper by choice, and a DevSecOps architect by pressure-cooking. My engineering philosophy doesn’t live in a textbook; it’s forged in the absolute, beautiful chaos of taking action first while explicitly broadcasting my coordinates so nobody gets caught in the blast radius.
            </p>
            <div className="p-6 bg-cyan-950/20 border border-cyan-500/20 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500" />
              <div className="grid grid-cols-2 gap-8 font-mono text-sm">
                <div>
                  <h3 className="text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">PROTOCOLS</h3>
                  <ul className="space-y-2 text-cyan-200/70">
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Active Listener</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Be open minded</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Feed that inner curiosity</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Learn through trials and fire</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Good enough for government work</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">Languages & Frameworks</h3>
                  <ul className="space-y-2 text-cyan-200/70">
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Python / Java / TypeScript / JavaScript</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Django / FastAPI / Spring Boot</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> React / Bootstrap</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">Data & Analytics</h3>
                  <ul className="space-y-2 text-cyan-200/70">
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Apache Spark / PySpark / Databricks</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Apache Kafka / Apache NiFi / Airflow</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> PostgreSQL / Cassandra / DynamoDB / MySQL</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> HDFS / HBase / Snowflake / Pandas / NumPy</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">Cloud & DevSecOps</h3>
                  <ul className="space-y-2 text-cyan-200/70">
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> AWS (Glue, EMR, EC2, S3, GovCloud)</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Kubernetes / Helm / Docker / LocalStack</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> GitHub Actions / Jenkins / Ansible / CloudFormation</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> SonarQube / FreeIPA / OAuth / Pre-commit</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">Testing & Observability</h3>
                  <ul className="space-y-2 text-cyan-200/70">
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Pytest / JUnit / Mockito / Behave</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Selenium / Robot Framework / UI Testing</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Splunk / Grafana / Prometheus</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 border-t border-cyan-900/30">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-8 pt-4">
                <SocialLink href="https://github.com/michael-tran" label="GITHUB" />
                <SocialLink href="https://linkedin.com/in/tran-the-man" label="LINKEDIN" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-xs font-mono text-cyan-900/50 border-t border-cyan-900/20">
        <p>Made with <a href="https://www.gitfolio.in/" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">GitFolio</a> and 🤖</p>
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, tags, color, href }: { title: string, description: string, tags: string[], color: "cyan" | "fuchsia" | "purple" | "yellow", href: string }) {
  // Valid color options for the card styling
  const validColors = ["cyan", "fuchsia", "purple", "yellow"] as const;
  
  // Runtime validation: default to "cyan" if an invalid color is provided
  const safeColor = validColors.includes(color) ? color : "cyan";

  const colorClasses = {
    cyan: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]",
    fuchsia: "group-hover:border-fuchsia-500/50 group-hover:shadow-[0_0_20px_rgba(232,121,249,0.2)]",
    purple: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
    yellow: "group-hover:border-yellow-500/50 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]",
  };

  const textColors = {
    cyan: "group-hover:text-cyan-400",
    fuchsia: "group-hover:text-fuchsia-400",
    purple: "group-hover:text-purple-400",
    yellow: "group-hover:text-yellow-400",
  };

  return (
    <Link href={href} className={`group block space-y-4 p-6 bg-[#0a0a1a] border border-cyan-900/30 transition-all duration-300 ${colorClasses[safeColor]}`}>
      <div className="flex justify-between items-start">
        <h3 className={`text-xl font-bold text-white tracking-wider transition-colors ${textColors[safeColor]}`}>
          {title}
        </h3>
        <ArrowUpRightIcon className={`w-5 h-5 text-cyan-700 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ${textColors[safeColor]}`} />
      </div>
      <p className="text-sm text-cyan-100/60 leading-relaxed font-light border-l border-cyan-900/50 pl-4">
        {description}
      </p>
      <div className="flex gap-2 pt-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-cyan-700 bg-cyan-950/30 px-2 py-1 border border-cyan-900/30 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

function SocialLink({ href, label }: { href: string, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-xs font-bold tracking-widest text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all"
    >
      {label}
    </a>
  );
}

// Simple Icons
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}
