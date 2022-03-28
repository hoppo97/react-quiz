import React, {Component} from 'react'
import styles from './Quiz.module.css'
class Quiz extends Component{
  state = {
    quiz: []
  }

  render() {
    return (
      <div className={styles.quiz}>
        <h1>Quiz</h1>
      </div>
    )
  }
}

export default Quiz;