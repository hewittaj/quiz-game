/* eslint-disable react/prop-types */
import Options from './Options'

function Question(props) {
    const { question } = props
    return (
        <div>
            <h4>{question.question}</h4>
            <Options question={question} />
        </div>
    )
}

export default Question
