import './styleSectionTres.scss';
import esculturaImg from '../../assets/images/imgEsculturaSectionTres.webp';
import museuImg from '../../assets/images/imgMuseuSectionTres.webp';

const SectionTres = () => {
  return (
    <section className="sectionTres">
      <div className="imagensST">
        <img src={esculturaImg} alt="Escultura" />
        <img src={museuImg} alt="Museu" />
      </div>
    </section>
  );
};

export default SectionTres;
