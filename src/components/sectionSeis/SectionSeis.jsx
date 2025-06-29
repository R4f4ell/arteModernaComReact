import './styleSectionSeis.scss';
import imgJulia from '../../assets/images/imgSectionSeis.webp';
import iconQuote from '../../assets/images/iconQuote.png';

const SectionSeis = () => {
  return (
    <section id="sectionSeis">
      <div className="centro-img">
        <img
          src={imgJulia}
          alt="Imagem da Julia Hawson"
          className="imgJulia"
        />
      </div>

      <div className="centro-texto">
        <div>
          <p className="about">ABOUT THE ARTIST</p>
        </div>

        <div className="conteudo">
          <div>
            <h2>
              Momentum creator: <br /> Julia Hawson
            </h2>
          </div>
          <div>
            <p>
              New York-born Julia Hawson is a master of different arts. She is
              well known for her stunning and amazing artworks which were
              presented in more than 20 different countries.”
            </p>
          </div>
          <div className="quote">
            <img src={iconQuote} alt="Quote" />
            <p>"Landscape was the primary influence on her subject matter.”</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSeis;
