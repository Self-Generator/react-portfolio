import { Link } from "react-router-dom"
import {
    EDUCATION_DATE1, EDUCATION_DATE2, EDUCATION_DATE3, EDUCATION_DEGREE1, EDUCATION_DEGREE2, EDUCATION_DEGREE3, EDUCATION_NAME1, EDUCATION_NAME2, EDUCATION_NAME3,
} from "../../config/Config"


export const Education = () => {
    return (
        <section>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <Link to="/education">
                        <div className="qualification__button button--flex qualification__active" data-target="#education">
                            <i className="uil uil-graduation-cap qualification__icon" />
                            Education
                        </div>
                    </Link>
                    <Link to="/work">
                        <div className="qualification__button button--flex" data-target="#education">
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
                            <h3 className="qualification__title">{EDUCATION_DEGREE1}</h3>
                            <span className="qualification__subtitle">{EDUCATION_NAME1}</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt" />
                                {EDUCATION_DATE1}
                            </div>
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
                            <h3 className="qualification__title">{EDUCATION_DEGREE2}</h3>
                            <span className="qualification__subtitle">{EDUCATION_NAME2}</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt" />
                                {EDUCATION_DATE2}
                            </div>
                        </div>
                    </div>
                    {/*===============================QUALIFICATION 3 ===========================*/}
                    <div className="qualification__data" style={{ "textAlign": "right" }}>
                        <div>
                            <h3 className="qualification__title">{EDUCATION_DEGREE3}</h3>
                            <span className="qualification__subtitle">{EDUCATION_NAME3}</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt" />
                                {EDUCATION_DATE3}
                            </div>
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
