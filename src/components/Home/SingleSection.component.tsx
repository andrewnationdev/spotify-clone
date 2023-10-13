import '../../styles/home.css';
import SectionCardComponent from './SectionCard.component';

export default function SingleSectionComponent(){
    return(
        <section className="section-container">
            <div className="section-header">
                <span className="section-title">Esse é o Título</span>
                <span className="section-show-more">Mostrar mais</span>
            </div>
            <div className="section-cards">
                <SectionCardComponent/>
            </div>
        </section>
    )
}