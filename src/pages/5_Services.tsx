import { SERVICES } from "../config/Config"

export const Services = () => {

    const modalViews = document.querySelectorAll('.services__modal'),
        modalBtns = document.querySelectorAll('.services__button'),
        modalCloses = document.querySelectorAll('.services__modal-close');

    let modal = function (modalClick: any) {
        modalViews[modalClick].classList.add('active-modal');
    };

    modalBtns.forEach((modalBtn, i) => {
        modalBtn.addEventListener('click', () => {
            modal(i);
        })
    });

    modalCloses.forEach(modalClose => {
        modalClose.addEventListener('click', () => {
            modalViews.forEach((modalView) => {
                modalView.classList.remove('active-modal');
            });
        });
    });

    return (
        <div>
            {/*==================== SERVICES ====================*/}
            <section className="services section" id="services">
                <a href="#services">
                    <h2 className="section__title">Services</h2>
                </a>
                <span className="section__subtitle">What I offer</span>

                <div className="services__container container grid">
                    {
                        SERVICES.map((service, index) => {
                            return (
                                <div key={index}>
                                    {/*===================== SERVICES 1 ====================*/}
                                    <div className="services__content">
                                        <div>
                                            <i className={service.icon} />
                                            <h3 className="services__title">{service.name}</h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}