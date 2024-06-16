function Contact() {
  return (
    <section
      className="flex h-fit w-full flex-col items-center py-12 text-white md:pt-10"
      id="contact"
    >
      <h1 className="text-center text-3xl font-medium md:text-4xl">
        Contact me
      </h1>
      <div className="bg-slate-900 mt-5 flex w-9/12 flex-col items-center justify-center gap-10 rounded-2xl px-20 py-10 md:w-fit md:flex-row">
        <div className="flex w-fit flex-col items-center md:w-6/12">
          <span className="mb-2 block w-fit rounded-sm bg-slate-700 px-2 py-1 text-sm font-semibold text-cyan-400">
            Linkedin
          </span>
          <a
            href="https://www.linkedin.com/in/adhikarijenish/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit border-b text-sm"
          >
            @adhikarijenish
          </a>
        </div>
        <div className="flex w-fit flex-col items-center md:w-6/12">
          <span className="mb-2 block w-fit rounded-sm bg-slate-700 px-2 py-1 text-sm font-semibold text-green-400">
            Personal Mail
          </span>
          <a
            href="mailto:jenishadhikari2060@gmail.com"
            className="border-b text-sm"
          >
            jenishadhikari2060@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
