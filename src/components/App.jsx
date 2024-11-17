import { useEffect, useState } from 'react'
import s from "./App.module.css"


import Description from './Description/Description'
import Options from './Options/Options'
import Feedback from './Feedback/Feedback'
import Notification from './Notification/Notification'


function App() {
  const [feedback, setFeedback] = useState(() => 
    JSON.parse(localStorage.getItem('feedback')) ??
  {
    good: 0,
	  neutral: 0,
	  bad: 0
  });
 
  const updateFeedback = feedbackType => {
        setFeedback(prev => ({
          ...prev,
          [feedbackType]: prev[feedbackType] + 1,
        }));
       };
  
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
   }, [feedback]);

  return (
    <>
      <div className={s.container}>
        <Description />
        <Options 
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset = {handleReset}
        />
        {totalFeedback === 0 ?
        (<Notification />) :
        (<Feedback
         type={feedback}
         totalFeedback={totalFeedback}
         positiveFeedback={positiveFeedback} 
        />
        )}
      </div>

    </>
  )
}

export default App
