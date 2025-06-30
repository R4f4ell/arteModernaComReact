import './styleSectionDez.scss';

const SectionDez = () => {
  return (
    <section className="sectionDez">
      <div className="sectionDez__content">
        <p>Join our mailing list and schedule your visit</p>
        <form className="sectionDez__form">
          <input type="email" placeholder="Your email address" required />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default SectionDez;
