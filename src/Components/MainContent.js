
import '../App.css';

function MainContent() {
  return (

  
    <div className="Container">
            

        <div className="Left-side">
          <p>Disponível para Serviços</p>
          <h2>
            <strong className="bolda">Tecnologia e Design</strong>
          </h2>
          <h3>
            Desenvolvemos websites, Landing Pages e <br />
            Aplicações Web com design moderno e tecnologia teste
          </h3>
          <button>Saiba Mais</button>
        </div>
        <div className="Right-side">
          <div className="box-projects">
            <img
              className="img1"
              src="https://goodmockups.com/wp-content/uploads/2021/05/Free-Website-Presentation-Mockup-PSD.jpg"
              height="300"
              width="400"
              alt=""
            />
            <img
              className="img2"
              src="https://goodmockups.com/wp-content/uploads/2021/05/Free-Website-Presentation-Mockup-PSD.jpg"
              height="300"
              width="400"
              alt=""
            />
            <img
              className="img3"
              src="https://goodmockups.com/wp-content/uploads/2021/05/Free-Website-Presentation-Mockup-PSD.jpg"
              height="300"
              width="400"
              alt=""
            />
          </div>
        </div>
      </div>
  );
}

export default MainContent;
