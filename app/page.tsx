import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/michael-tran.github.io" : "";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-200 selection:text-slate-900 overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-slate-50 to-transparent opacity-50" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg font-black tracking-tighter text-slate-900 transition-all duration-300"
          >
            Michael Tran
          </Link>
          <div className="flex gap-8 text-[10px] font-bold tracking-widest uppercase text-slate-400">
            <Link href="#work" className="hover:text-slate-900 transition-all">PROJECTS</Link>
            <Link href="#philosophy" className="hover:text-slate-900 transition-all">ABOUT</Link>
            <Link href="#contact" className="hover:text-slate-900 transition-all">CONTACT</Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 space-y-8 relative">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 leading-[1.1]">
              Senior DevSecOps and Cloud-Native Backend Architect
            </h1>
          </div>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed font-normal border-l-2 border-slate-200 pl-6">
            Leveraging over six years of experience driving mission-critical AI, scalable ETL pipelines, and robust Kubernetes infrastructure to automate enterprise CI/CD and engineer highly resilient, cloud-native solutions.
          </p>
          <div className="pt-8 flex gap-6">
            <Link 
              href="#work" 
              className="group relative px-8 py-3 bg-slate-900 text-white font-bold tracking-widest uppercase text-xs overflow-hidden hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="py-20 space-y-12">
          <div className="flex items-end justify-between border-b border-slate-200 pb-4">
            <h2 className="text-xl font-black tracking-tighter text-slate-900">
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
              tags={["REACT", "JAVA", "SPRING BOOT", "SELENIUM", "JENKINS", "SONARQUBE"]}
              color="cyan"
              href="https://www.lockheedmartin.com/en-us/capabilities/undersea-warfare.html"
            />
          </div>
        </section>

        {/* Philosophy / Approach */}
        <section id="philosophy" className="py-20 grid md:grid-cols-12 gap-12 border-t border-slate-200">
          <div className="md:col-span-4 space-y-8">
            <h2 className="text-xl font-black tracking-tighter text-slate-900">
              {"// ABOUT ME"}
            </h2>
            <p className="text-sm font-medium text-slate-400">The Journey of Michael Tran.</p>
            {/* Profile Image - Replace src with your image in /public */}
            <div className="relative w-full aspect-[4/5] border border-slate-200 rounded-lg overflow-hidden bg-slate-50 group shadow-inner">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.4)_100%)] z-10" />
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:100%_4px] z-20 pointer-events-none" />
              
              <Image 
                src={`${basePath}/me.jpg`}
                alt="Profile"
                fill
                className="object-cover z-0 opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
          <div className="md:col-span-8 space-y-8 text-slate-600 leading-relaxed font-normal">
            <p>
              I am a tinkerer by design, a camper by choice, and a DevSecOps architect by pressure-cooking. My engineering philosophy doesn’t live in a textbook; it’s forged in the absolute, beautiful chaos of taking action first while explicitly broadcasting my coordinates so nobody gets caught in the blast radius.
            </p>
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-900" />
              <div className="grid grid-cols-2 gap-8 text-sm">
                <div>
                  <h3 className="text-slate-900 mb-4 tracking-widest uppercase text-[10px] font-black border-b border-slate-200 pb-2">PROTOCOLS</h3>
                  <ul className="space-y-2 text-slate-500">
                    <li className="flex items-center gap-2"><span className="text-slate-300">›</span> Active Listener</li>
                    <li className="flex items-center gap-2"><span className="text-slate-300">›</span> Be open minded</li>
                    <li className="flex items-center gap-2"><span className="text-slate-300">›</span> Feed that inner curiosity</li>
                    <li className="flex items-center gap-2"><span className="text-slate-300">›</span> Learn through trials and fire</li>
                    <li className="flex items-center gap-2"><span className="text-slate-300">›</span> Good enough for government work</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-slate-900 mb-4 tracking-widest uppercase text-[10px] font-black border-b border-slate-200 pb-2">Languages & Frameworks</h3>
                  <ul className="space-y-2 text-slate-500">
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Python / Java / TypeScript / JavaScript</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Django / FastAPI / Spring Boot</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> React / Bootstrap</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-slate-900 mb-4 tracking-widest uppercase text-[10px] font-black border-b border-slate-200 pb-2">Data & Analytics</h3>
                  <ul className="space-y-2 text-slate-500">
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Apache Spark / PySpark / Databricks</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Apache Kafka / Apache NiFi / Airflow</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> PostgreSQL / Cassandra / DynamoDB / MySQL</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> HDFS / HBase / Snowflake / Pandas / NumPy</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-slate-900 mb-4 tracking-widest uppercase text-[10px] font-black border-b border-slate-200 pb-2">Cloud & DevSecOps</h3>
                  <ul className="space-y-2 text-slate-500">
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> AWS (Glue, EMR, EC2, S3, GovCloud)</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Kubernetes / Helm / Docker / LocalStack</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> GitHub Actions / Jenkins / Ansible / CloudFormation</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> SonarQube / FreeIPA / OAuth / Pre-commit</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-slate-900 mb-4 tracking-widest uppercase text-[10px] font-black border-b border-slate-200 pb-2">Testing & Observability</h3>
                  <ul className="space-y-2 text-slate-500">
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
        <section id="contact" className="py-20 border-t border-slate-200">
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

      <footer className="py-12 text-center text-[10px] font-bold tracking-widest uppercase text-slate-400 border-t border-slate-100">
        <p>Built by Michael Tran &copy; {new Date().getFullYear()} — <a href="https://www.gitfolio.in/" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:underline">GitFolio</a></p>
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
    cyan: "hover:border-slate-400 hover:shadow-xl hover:shadow-slate-100",
    fuchsia: "hover:border-slate-400 hover:shadow-xl hover:shadow-slate-100",
    purple: "hover:border-slate-400 hover:shadow-xl hover:shadow-slate-100",
    yellow: "hover:border-slate-400 hover:shadow-xl hover:shadow-slate-100",
  };

  const textColors = {
    cyan: "group-hover:text-slate-600",
    fuchsia: "group-hover:text-slate-600",
    purple: "group-hover:text-slate-600",
    yellow: "group-hover:text-slate-600",
  };

  return (
    <Link href={href} className={`group block space-y-4 p-8 bg-white border border-slate-200 rounded-xl transition-all duration-500 ${colorClasses[safeColor]}`}>
      <div className="flex justify-between items-start">
        <h3 className={`text-lg font-black text-slate-900 tracking-tight transition-colors ${textColors[safeColor]}`}>
          {title}
        </h3>
        <ArrowUpRightIcon className={`w-4 h-4 text-slate-300 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-slate-900`} />
      </div>
      <p className="text-sm text-slate-500 leading-relaxed font-normal">
        {description}
      </p>
      <div className="flex gap-2 pt-2">
        {tags.map(tag => (
          <span key={tag} className="text-[9px] uppercase tracking-widest font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-sm transition-colors group-hover:bg-slate-900 group-hover:text-white">
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
      className="text-[10px] font-black tracking-widest text-slate-400 hover:text-slate-900 transition-all"
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
