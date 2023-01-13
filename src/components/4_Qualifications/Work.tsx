import { Link } from "react-router-dom"
import {
    WORK_DATE1, WORK_DATE2, WORK_DATE3, WORK_TITLE1, WORK_TITLE2, WORK_TITLE3, WORK_COMPANY1, WORK_COMPANY2, WORK_COMPANY3, WORK_DESCRIPTION1, WORK_DESCRIPTION2, WORK_DESCRIPTION3
} from "../../config/Config"


export const Work = () => {
    return (
        <section>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <Link to="/education">
                        <div className="qualification__button button--flex" data-target="#education">
                            <i className="uil uil-graduation-cap qualification__icon" />
                            Education
                        </div>
                    </Link>
                    <Link to="/work">
                        <div className="qualification__button button--flex qualification__active" data-target="#education">
                            <i className="uil uil-briefcase-alt qualification__icon" />
                            Work
                        </div>
                    </Link>
                </div>
            </div>


            <div className="qualification__sections">
                {/*===============================QUALIFICATION CONTENT 1 ===========================*/}
                <div className="qualification__content qualification__active" data-content id="education">
                    {/*===============================QUALIFICATION 1 ===========================*/}
                    <div className="qualification__data" style={{ "textAlign": "right" }}>
                        <div>
                            <h3 className="qualification__title">{WORK_TITLE1}</h3>
                            <span className="qualification__subtitle">{WORK_COMPANY1}</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt" />
                                {WORK_DATE1}
                            </div>
                            <span className="qualification__subtitle">{WORK_DESCRIPTION1}</span>
                        </div>
                        <div>
                            <span className="qualification__rounder" />
                            <span className="qualification__line" />
                        </div>
                    </div>
                    {/*===============================QUALIFICATION 2 ===========================*/}
                    <div className="qualification__data">
                        <div />
                        <div>
                            <span className="qualification__rounder" />
                            <span className="qualification__line" />
                        </div>
                        <div>
                            <h3 className="qualification__title">{WORK_TITLE2}</h3>
                            <span className="qualification__subtitle">{WORK_COMPANY2}</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt" />
                                {WORK_DATE2}
                            </div>
                            <span className="qualification__subtitle">{WORK_DESCRIPTION2}</span>
                        </div>
                    </div>
                    {/*===============================QUALIFICATION 3 ===========================*/}
                    <div className="qualification__data" style={{ "textAlign": "right" }}>
                        <div>
                            <h3 className="qualification__title">{WORK_TITLE3}</h3>
                            <span className="qualification__subtitle">{WORK_COMPANY3}</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt" />
                                {WORK_DATE3}
                            </div>
                            <span className="qualification__subtitle">{WORK_DESCRIPTION3}</span>
                        </div>
                        <div>
                            <span className="qualification__rounder" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
