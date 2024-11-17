import s from "./Feedback.module.css"

const Feedback = ({type, totalFeedback, positiveFeedback}) => {
  const {good, neutral, bad} = type;
 
    return (
    <div>
      <ul className={s.list}>
        <li className={s.type}>Good: {good}</li>
        <li className={s.type}>Neutral: {neutral}</li>
        <li className={s.type}>Bad: {bad}</li>
        <li className={s.type}>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  )
}

export default Feedback