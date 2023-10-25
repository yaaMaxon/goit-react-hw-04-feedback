import { useState } from "react";
import { Section } from "components/Sections/Titles/Section";
import { FeedbackOptions } from "components/Sections/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Sections/Statistics/Statistics";
import { Notification } from "components/Sections/Notification/Notification";


export const App = () => {
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);

const onLeaveFeedback = stat => {

  switch(stat) {
    case "good":
      setGood(good + 1);
      break;

    case "neutral":
      setNeutral(neutral + 1);
      break;
    
    case "bad":
      setBad(bad + 1);
      break;

    default:
      return;
  }
}

const countTotalFeedback = () => {
  return good + neutral + bad;
};

const countPositiveFeedbackPercentage = () => {
  const positive = (good / countTotalFeedback()) * 100;
  return positive;
};

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={onLeaveFeedback}/>
        </Section>
        <Section title="Statistics">
          {good + neutral + bad === 0 ? 
          (<Notification message="There is no feedback"></Notification>) :
          (
            <Statistics 
             good={good} 
             neutral={neutral} 
             bad={bad} 
             total={countTotalFeedback()} 
             positivePercentage={countPositiveFeedbackPercentage()}/>
             )
            }
            </Section>
      </div>
    );
};
