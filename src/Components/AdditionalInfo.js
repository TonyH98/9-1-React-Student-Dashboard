import { useState } from "react"
import "./Additionalinfo.css"

const Additionalinfo = ({info}) => {
    const [showInfo, setShowInfo] = useState(false)

    function toggleInfo(){
        setShowInfo(!showInfo)
    }
    return(
        <div>
        <button onClick={toggleInfo}>{!showInfo ? "Show More...": "Show Less..."}</button>
            {showInfo ? (
                <div className="student-info">
                    <section className="codewars">
                    <h4>Code Wars:</h4>
                    <p>Current Total: {info.codewars.current.total}</p>
                    <p>Last Week: {info.codewars.current.lastWeek}</p>
                    <p>Goal: {info.codewars.goal.total}</p>
                    <p>Percent of Goal Achieved: {((info.codewars.current.total /info.codewars.goal.total) * 100).toFixed(2)}% </p>
                    </section>
                    <section className="scores">
                        <h4>Scores:</h4>
                        <p>Assignments: {info.cohort.scores.assignments * 100}%</p>
                        <p>Projects: {info.cohort.scores.projects * 100}%</p>
                        <p>Assesments: {info.cohort.scores.assessments * 100}%</p>
                    </section>
                    <section className="certification">
                        <h4>Certification</h4>
                        <p>Resume: {info.certifications.resume ? "✅" : "❌"}</p>
                        <p>Linkedin: {info.certifications.linkedin ? "✅" : "❌"}</p>
                        <p>Github: {info.certifications.github ? "✅" : "❌"}</p>
                        <p>MockInterview: {info.certifications.mockInterview ? "✅" : "❌"}</p>
                    </section>
                </div>
            ): null}
        </div>
    )
}

export default Additionalinfo