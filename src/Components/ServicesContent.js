    
import '../App.css';
import { FaLaptopCode, FaGlobe, FaCodeBranch, FaTools, FaCloudUploadAlt, FaUserTie } from 'react-icons/fa';

function ServicesContent() {


  return (
    <div className="Services-Section">
   
        <div className="Services-Container">
            <h2>Serviços.</h2>
            <p className='subtitle'>Nossos Serviços </p>

            <div class="Services-Box">
                <div>
                    <i><FaLaptopCode /></i>
                    <h3>Landing Page</h3>
                    <p>Desenvolvemos páginas atraentes e otimizadas para conversão, perfeitas para destacar seu produto ou serviço.</p>
                </div>
                <div>
                    <i><FaGlobe /></i>
                    <h3>WebSite</h3>
                    <p>Criação de sites modernos e responsivos que refletem a identidade da sua marca e atendem às suas necessidades.</p>
                </div>

                <div>
                    <i><FaCodeBranch /></i>
                    <h3>Aplicação Full Stack</h3>
                    <p>Desenvolvimento completo de aplicações personalizadas, abrangendo front-end e back-end, com foco em desempenho e escalabilidade. teste</p>
                </div>

                
                <div>
                    <i><FaTools /></i>
                    <h3>Manutenção</h3>
                    <p>Correção de erros, atualização de funcionalidades e melhorias contínuas para garantir a qualidade do seu sistema.</p>
                </div>

                
                <div>
                    <i><FaCloudUploadAlt/></i>
                    <h3>Implantação</h3>
                    <p>Implantamos sistemas e soluções digitais de forma eficiente e segura, garantindo uma transição tranquila.</p>
                </div>

                <div>
                    <i><FaUserTie /></i>
                    <h3>Consultoria</h3>
                    <p>Análise especializada para identificar oportunidades de melhoria e soluções tecnológicas alinhadas ao seu negócio.</p>
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default ServicesContent;
