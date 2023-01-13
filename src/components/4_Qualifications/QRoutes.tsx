import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Education } from "./Education"
import { Work } from "./Work"

export const QRoutes = () => {
    return (
        <BrowserRouter>
            <section className="qualification section" id="qualification">
                <a href="#qualification">
                    <h2 className="section__title">Qualifications</h2>
                </a>
                <div className="section__subtitle">My personal journey</div>
                <Routes>
                    <Route path="/react-portfolio/" element={<Education />} />
                    <Route path="/react-portfolio/education" element={<Education />} />
                    <Route path="/react-portfolio/work" element={<Work />} />
                </Routes>
            </section>
        </BrowserRouter>
    )
}
