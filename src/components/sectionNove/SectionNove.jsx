import './styleSectionNove.scss';

const SectionNove = () => {
  return (
    <section className="sectionNove" id='sectionNove'>
      <div className="sectionNove__info">
        <p>Date & Location</p>
        <p>Buy tickets on internet or at the gallery before the event</p>
      </div>
      <div className="sectionNove__details">
        <p>New collection exposition in London</p>
        <p>Date: Jul 27 2020</p>
        <p>Time: 8 pm - 10 pm</p>
        <p>Location: Moora Gallery, London</p>
        <p>Price: £16</p>
        <button>BUY TICKET</button>
      </div>
    </section>
  );
};

export default SectionNove;