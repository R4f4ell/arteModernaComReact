import './styleSectionOito.scss';
import imgDarkness from '../../assets/images/imgDarkness.webp';
import imgAfter from '../../assets/images/imgAfter.webp';
import imgTrue from '../../assets/images/imgTrue.webp';

const SectionOito = () => {
  return (
    <section className="sectionOito">
      <div className="container">
        <div className="divText">
          <p>Darkness, 2018</p>
          <p>As Julia said, it was the most expressive artwork for her. It took only about 5 minutes to paint to have the result that she wanted. The idea was to reflect our social connection with each other.</p>
        </div>
        <div className="divImg">
          <div className="imagem" style={{ backgroundImage: `url(${imgDarkness})` }}></div>
        </div>
      </div>

      <div className="container reverse">
        <div className="divText">
          <p>After that moment, 2018</p>
          <p>Julia believes that love is the crucial value to everyone who wants to live a full life. You should be able to love somebody as you love yourself. With this sculpture, she wanted to portray the love for everybody.</p>
        </div>
        <div className="divImg">
          <div className="imagem" style={{ backgroundImage: `url(${imgAfter})` }}></div>
        </div>
      </div>

      <div className="container">
        <div className="divText">
          <p>True, 2018</p>
          <p>This artwork presented individuals feelings. Julia idea and observation is that nowadays people sometimes are misled by their inner emotions and not always express themselves as individuals.</p>
        </div>
        <div className="divImg">
          <div className="imagem" style={{ backgroundImage: `url(${imgTrue})` }}></div>
        </div>
      </div>
    </section>
  );
};

export default SectionOito;