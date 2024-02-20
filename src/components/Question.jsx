/* eslint-disable react/prop-types */
import Options from './Options'

function Question(props) {
    const { question, dispatch, answer } = props
    return (
        <div>
            <h4>{question.question}</h4>
            <Options question={question} dispatch={dispatch} answer={answer} />
        </div>
    )
}

export default Question
