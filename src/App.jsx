import { Component } from "react";
import { Section } from "components/Sections/Titles/Section";
import { FeedbackOptions } from "components/Sections/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Sections/Statistics/Statistics";
import { Notification } from "components/Sections/Notification/Notification";


export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
};

onLeaveFeedback = stat => {
  this.setState(prevState => {
    return{
      [stat]: prevState[stat] + 1,
    }
  });
}

countTotalFeedback = () => {
  const {good, neutral, bad} = this.state;
  return good + neutral + bad;
};

countPositiveFeedbackPercentage = () => {
  const positive = (this.state.good / this.countTotalFeedback()) * 100;
  return positive;
};

  render () {
    const {good, neutral, bad} = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        <Section title="Statistics">
          {good + neutral + bad === 0 ? 
          (<Notification message="There is no feedback"></Notification>) :
          (
            <Statistics 
             good={good} 
             neutral={neutral} 
             bad={bad} 
             total={this.countTotalFeedback()} 
             positivePercentage={this.countPositiveFeedbackPercentage()}/>
             )
            }
            </Section>
      </div>
    );
  }
};
