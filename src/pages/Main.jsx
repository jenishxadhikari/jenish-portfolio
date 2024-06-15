import {
  NavBar,
  Home,
  About,
  Skills,
  Experience,
  Projects,
  Contact,
  Footer,
} from "../components";

function Main() {
  return (
    <>
      <NavBar />
      <main className="-z-50 flex h-full flex-col items-center bg-[#242424] bg-[radial-gradient(#ffffff20_1px,#1A1F2D_1px)] bg-[size:30px_30px]">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Main;
