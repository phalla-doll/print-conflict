import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Navigation */}
      <nav className="w-full border-b border-accent-2 py-6 px-6 fixed top-0 bg-background z-40">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex lg:flex-row flex-col leading-none">
            <span className="text-sm font-black tracking-[8px] uppercase text-primary m-0 p-0 lg:mr-2">PRINT</span>
            <span className="text-sm font-black tracking-[8px] uppercase text-primary m-0 p-0">CONFLICT</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[4px]">
            <Link href="#work" className="text-accent-1 hover:text-primary transition-colors">WORK</Link>
            <Link href="#about" className="text-accent-1 hover:text-primary transition-colors">ABOUT</Link>
            <Link href="#journal" className="text-accent-1 hover:text-primary transition-colors">JOURNAL</Link>
            <Link href="#contact" className="text-accent-1 hover:text-primary transition-colors">CONTACT</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="#contact" 
              className="hidden md:inline-flex border border-accent-2 py-2 px-6 font-mono text-[11px] uppercase tracking-[4px] text-accent-1 hover:text-primary transition-colors"
            >
              START A PROJECT
            </Link>
            <button className="md:hidden">
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow mt-[88px]">
        {/* HERO SECTION */}
        <section className="border-b border-accent-2 flex flex-col lg:flex-row min-h-[calc(100vh-88px)]">
          {/* Left Hero Content */}
          <div className="w-full lg:w-1/2 p-6 lg:p-16 flex flex-col justify-end lg:justify-center border-b lg:border-b-0 lg:border-r border-accent-2 relative">
            <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 -rotate-180" style={{ writingMode: 'vertical-rl' }}>
              <span className="font-mono text-accent-1 text-[11px] uppercase tracking-[4px]">ESTABLISHED 2024</span>
            </div>
            
            <div className="lg:pl-16">
              <h1 className="font-bebas text-6xl sm:text-8xl lg:text-[140px] leading-[0.85] tracking-[-2px] lg:tracking-[-4px] text-primary mb-8 font-light break-words">
                Nº 01<br/>PRINT<br/>CONFLICT
              </h1>
              
              <p className="font-mono text-xs uppercase tracking-[1px] lg:leading-[1.6] max-w-[320px] text-accent-1 mb-12">
                Custom t-shirt designs for punk bands, hardcore, and underground acts. Built to represent your sound.
              </p>
              
              <div className="flex items-center gap-4">
                <Link 
                  href="#work" 
                  className="inline-flex items-center gap-2 text-accent-1 font-mono text-[11px] uppercase tracking-[4px] hover:text-primary transition-colors group relative"
                >
                  <span>VIEW WORK</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </Link>
                
                {/* Decorative crosshairs */}
                <div className="hidden sm:flex items-center gap-4 ml-8 text-accent-2 opacity-50">
                  <div className="w-12 h-[1px] bg-accent-2 relative">
                    <div className="w-2 h-2 border border-accent-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-background"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] relative min-h-[500px] lg:min-h-full overflow-hidden flex items-center justify-center p-8">
            <div className="absolute top-12 right-12 font-bebas italic text-5xl opacity-20 text-white">SS/24</div>
            <div className="relative w-full max-w-lg aspect-[3/4] lg:aspect-auto lg:h-[80%] mx-auto border border-accent-2 bg-[#1a1a1a] z-10 overflow-hidden group">
              <Image 
                src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&q=80&w=1200&h=1200"
                alt="Punk band t-shirt design" 
                fill 
                className="object-cover object-center mix-blend-luminosity opacity-80 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
                priority
                referrerPolicy="no-referrer"
              />
              <div className="absolute -left-4 bottom-8 bg-primary text-background px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[2px] z-20">
                NEW COLLECTION
              </div>
            </div>
          </div>
        </section>

        {/* LOGO BAR */}
        <section className="border-b border-accent-2 bg-background text-primary overflow-hidden py-12 relative">
           <div className="text-center font-mono text-[11px] uppercase tracking-[4px] text-accent-1 mb-8">COLLABORATORS</div>
           <div className="flex items-center justify-between gap-8 md:gap-16 px-6 lg:px-24 whitespace-nowrap opacity-70 font-bebas text-3xl sm:text-4xl tracking-[2px] flex-wrap justify-center font-light">
              <div>TURNSTILE</div>
              <div className="italic">CODE ORANGE</div>
              <div>GEL</div>
              <div className="italic">TITLE FIGHT</div>
              <div>INCENDIARY</div>
           </div>
        </section>

        {/* RECENT WORK SECTION */}
        <section id="work" className="py-20 lg:py-32 px-6 border-b border-accent-2">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div className="font-mono text-[11px] uppercase tracking-[4px] border-b border-accent-2 pb-2 pr-12 text-accent-1">
                Nº 01 / SERIES
              </div>
              <Link href="#work" className="font-mono text-[11px] uppercase tracking-[4px] text-accent-1 hover:text-primary flex items-center gap-2 group transition-colors">
                VIEW ALL PROJECTS <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-12">
              {/* Project 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-[#1a1a1a] relative mb-4 overflow-hidden border border-accent-2">
                  <Image 
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800&h=1000"
                    alt="Turnstile t-shirt"
                    fill
                    className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                </div>
                <div className="flex justify-between font-mono text-[11px] uppercase tracking-[2px] items-start">
                  <div>
                    <h3 className="font-semibold mb-1 text-primary">TURNSTILE</h3>
                    <p className="text-accent-1">2024</p>
                  </div>
                  <div className="text-right">
                    <p className="text-accent-1">SCREEN PRINT</p>
                  </div>
                </div>
              </div>

               {/* Project 2 */}
               <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-[#1a1a1a] relative mb-4 overflow-hidden border border-accent-2">
                  <Image 
                    src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800&h=1000"
                    alt="GEL t-shirt"
                    fill
                    className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                </div>
                <div className="flex justify-between font-mono text-[11px] uppercase tracking-[2px] items-start">
                  <div>
                    <h3 className="font-semibold mb-1 text-primary">GEL</h3>
                    <p className="text-accent-1">2024</p>
                  </div>
                  <div className="text-right">
                    <p className="text-accent-1">2 COLOR FRONT</p>
                  </div>
                </div>
              </div>

               {/* Project 3 */}
               <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-[#1a1a1a] relative mb-4 overflow-hidden border border-accent-2">
                  <Image 
                    src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800&h=1000"
                    alt="Code Orange t-shirt"
                    fill
                    className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                   <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                </div>
                <div className="flex justify-between font-mono text-[11px] uppercase tracking-[2px] items-start">
                  <div>
                    <h3 className="font-semibold mb-1 text-primary">CODE ORANGE</h3>
                    <p className="text-accent-1">2023</p>
                  </div>
                  <div className="text-right">
                    <p className="text-accent-1">HEAVY DISTRESS</p>
                  </div>
                </div>
              </div>

               {/* Project 4 */}
               <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-[#1a1a1a] relative mb-4 overflow-hidden border border-accent-2">
                  <Image 
                    src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80&w=800&h=1000"
                    alt="Gout BCAB t-shirt"
                    fill
                    className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                </div>
                <div className="flex justify-between font-mono text-[11px] uppercase tracking-[2px] items-start">
                  <div>
                    <h3 className="font-semibold mb-1 text-primary">GOUT BCAB</h3>
                    <p className="text-accent-1">2024</p>
                  </div>
                  <div className="text-right">
                    <p className="text-accent-1">COMFORT COLORS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="border-b border-accent-2">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-6 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-accent-2">
              <div className="mb-16">
                <span className="font-mono text-[11px] uppercase tracking-[4px] border-b border-accent-2 pb-2 pr-12 text-accent-1">
                  Nº 02 / PROFILE
                </span>
              </div>
              
              <h2 className="font-bebas text-5xl sm:text-7xl lg:text-[110px] leading-[0.85] tracking-[-2px] lg:tracking-[-4px] text-primary mb-8 font-light break-words">
                A STUDY IN<br/>FORM &<br/>FUNCTION.
              </h2>
              
              <div className="font-satoshi text-base max-w-md text-accent-1 space-y-6 leading-relaxed">
                <p>
                  I&apos;ve been in bands, designed merch, loaded in vans, and stayed up all night hitting print deadlines. This isn&apos;t just a job—it&apos;s part of the culture.
                </p>
                <p>
                  I design shirts that look good, feel right, and actually mean something. Designed for the modern minimalist.
                </p>
                <p className="text-primary uppercase tracking-[2px] text-xs mt-8">
                  Let&apos;s make something worth wearing.
                </p>
              </div>

              <div className="mt-16">
                <div className="font-mono text-[11px] uppercase tracking-[4px] border-b border-accent-2 pb-4 mb-6 text-accent-1">CLIENTS / COLLABORATORS</div>
                <div className="flex flex-wrap gap-x-8 gap-y-4 font-bebas text-2xl text-accent-1">
                   <span>TURNSTILE</span>
                   <span>CODE ORANGE</span>
                   <span>GEL</span>
                   <span>TITLE FIGHT</span>
                   <span>INCENDIARY</span>
                </div>
              </div>
            </div>
            
             <div className="w-full lg:w-1/2 min-h-[500px] lg:min-h-0 relative grayscale border-accent-2">
               <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200&h=1600"
                  alt="Portrait of the designer"
                  fill
                  className="object-cover object-center opacity-80"
                  referrerPolicy="no-referrer"
               />
               <div className="absolute bottom-8 left-0 bg-primary text-background px-8 py-6 max-w-[80%]">
                  <p className="font-bebas text-2xl lg:text-3xl leading-[1.2] text-background">
                    &quot;GOOD DESIGN IS PART OF<br/>WHAT MAKES A BAND UNFORGETTABLE.&quot;
                  </p>
               </div>
            </div>
          </div>
        </section>

        {/* JOURNAL SECTION */}
        <section id="journal" className="py-20 lg:py-32 px-6 border-b border-accent-2">
          <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/3">
              <div className="font-mono text-[11px] uppercase tracking-[4px] border-b border-accent-2 text-accent-1 pb-2 inline-block mb-12 lg:mb-16">
                Nº 03 / JOURNAL
              </div>
              
              <h2 className="font-bebas text-5xl sm:text-6xl text-primary mb-6 leading-[1.1] tracking-[-1px] font-light">
                THOUGHTS, PROCESS, AND EXPLORATION.
              </h2>
              
              <div className="mt-12">
                <Link href="#journal" className="font-mono text-[11px] uppercase tracking-[4px] text-accent-1 hover:text-primary flex items-center gap-2 group w-max transition-colors">
                  READ ALL ARTICLES <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-2/3 flex flex-col gap-8">
               {/* Article 1 */}
               <div className="group border-b border-accent-2 pb-8 flex flex-col sm:flex-row gap-8 items-center cursor-pointer hover:border-primary transition-colors">
                  <div className="w-full sm:w-1/3 aspect-[4/3] bg-[#1a1a1a] border border-accent-2 relative overflow-hidden">
                     <Image 
                        src="https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?auto=format&fit=crop&q=80&w=600"
                        alt="Journal cover"
                        fill
                        className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                        referrerPolicy="no-referrer"
                     />
                  </div>
                  <div className="w-full sm:w-2/3 flex flex-col">
                     <span className="font-mono text-[11px] text-accent-1 uppercase tracking-[4px] mb-4">MAY 12, 2024</span>
                     <h3 className="font-bebas text-3xl sm:text-4xl text-primary mb-4 leading-none font-light">
                        THE PROCESS BEHIND A TOUR SHIRT
                     </h3>
                     <p className="font-satoshi text-accent-1 mb-6 max-w-md line-clamp-2 text-sm leading-relaxed">
                        Breaking down the design files, color separations, and print tests for the latest Turnstile Europe run. What it takes to go from sketch to 10,000 prints.
                     </p>
                     <div className="font-mono text-[11px] uppercase tracking-[4px] text-primary group-hover:text-accent-1 flex items-center gap-2 transition-colors">
                        READ ARTICLE <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                     </div>
                  </div>
               </div>

               {/* Article 2 */}
               <div className="group border-b border-accent-2 pb-8 flex flex-col sm:flex-row gap-8 items-center cursor-pointer hover:border-primary transition-colors">
                  <div className="w-full sm:w-1/3 aspect-[4/3] bg-[#1a1a1a] border border-accent-2 relative overflow-hidden">
                     <Image 
                        src="https://images.unsplash.com/photo-1562887250-9a52d844ad30?auto=format&fit=crop&q=80&w=600"
                        alt="Journal cover"
                        fill
                        className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                        referrerPolicy="no-referrer"
                     />
                  </div>
                  <div className="w-full sm:w-2/3 flex flex-col">
                     <span className="font-mono text-[11px] text-accent-1 uppercase tracking-[4px] mb-4">APR 24, 2024</span>
                     <h3 className="font-bebas text-3xl sm:text-4xl text-primary mb-4 leading-none font-light">
                        SCREEN PRINTING: STILL WORTH IT
                     </h3>
                     <p className="font-satoshi text-accent-1 mb-6 max-w-md line-clamp-2 text-sm leading-relaxed">
                        Why DTG and POD will never replace the texture, weight, and grit of a massive plastisol hit on a heavy cotton tee.
                     </p>
                     <div className="font-mono text-[11px] uppercase tracking-[4px] text-primary group-hover:text-accent-1 flex items-center gap-2 transition-colors">
                        READ ARTICLE <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer id="contact" className="bg-background border-t border-accent-2 pt-24 pb-12 px-6">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start border-b border-accent-2 pb-16 mb-8 gap-12">
          
          <div className="max-w-md">
             <div className="flex flex-col leading-none mb-8">
              <span className="text-2xl font-black tracking-[8px] uppercase text-primary m-0 p-0">PRINT</span>
              <span className="text-2xl font-black tracking-[8px] uppercase text-primary m-0 p-0">CONFLICT</span>
            </div>
            <p className="font-mono text-[11px] text-accent-1 mb-8 max-w-xs leading-[1.8] uppercase tracking-[2px]">
              T-Shirt Designs for Punk Bands.<br/>Based in nowhere, shipping everywhere.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 font-mono text-[11px] uppercase tracking-[4px]">
            <div className="flex flex-col gap-4">
              <span className="text-accent-2 mb-2">MENU</span>
              <Link href="#work" className="text-accent-1 hover:text-primary transition-colors">WORK</Link>
              <Link href="#about" className="text-accent-1 hover:text-primary transition-colors">ABOUT</Link>
              <Link href="#journal" className="text-accent-1 hover:text-primary transition-colors">JOURNAL</Link>
              <Link href="#contact" className="text-accent-1 hover:text-primary transition-colors">CONTACT</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="text-accent-2 mb-2">SOCIAL</span>
              <a href="#" className="text-accent-1 hover:text-primary transition-colors">INSTAGRAM</a>
              <a href="#" className="text-accent-1 hover:text-primary transition-colors">TWITTER</a>
              <a href="#" className="text-accent-1 hover:text-primary transition-colors">DRIBBBLE</a>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 items-start">
             <Link 
                href="mailto:hello@printconflict.com" 
                className="inline-flex items-center gap-4 border border-accent-2 text-primary py-4 px-8 font-mono text-[11px] uppercase tracking-[4px] hover:text-background hover:bg-primary transition-colors group"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <div className="text-accent-1 font-bebas text-3xl leading-none max-w-[200px] font-light">
                LET&apos;S MAKE SOMETHING SICK.
              </div>
          </div>

        </div>
        
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row justify-between items-center font-mono text-[10px] text-accent-2 uppercase tracking-[4px] gap-4">
          <div>© {new Date().getFullYear()} PRINT CONFLICT.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-primary transition-colors">TERMS</a>
          </div>
          <div className="flex items-center gap-2">
            PRINTCONFLICT.COM
          </div>
        </div>
      </footer>
    </div>
  );
}
