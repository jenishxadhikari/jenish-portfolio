function Contact() {
  return (
    <section className="my-24 flex flex-col" id="contact">
      <h1 className="m-10 self-center text-5xl font-medium">Contact me</h1>
      <div className="flex gap-10 rounded-2xl bg-slate-900 px-20 py-10">
        <div className="flex w-6/12 flex-col items-center">
          <span className="mb-2 block w-fit rounded-sm bg-slate-700 px-2 py-1 text-sm font-semibold text-cyan-400">
            Linkedin
          </span>
          <a
            href="https://www.linkedin.com/in/adhikarijenish/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b w-fit"
          >
            @adhikarijenish
          </a>
        </div>
        <div className="flex w-6/12 flex-col items-center">
          <span className="mb-2 block w-fit rounded-sm bg-slate-700 px-2 py-1 text-sm font-semibold text-green-400">
            Personal Mail
          </span>
          <a
            href="mailto:jenishadhikari2060@gmail.com"
            className="border-b"
          >
            jenishadhikari2060@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
