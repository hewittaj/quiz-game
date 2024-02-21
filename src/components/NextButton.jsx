/* eslint-disable react/prop-types */
function NextButton(props) {
    const { dispatch, answer, index, numQuestions } = props
    if (answer === null) return null

    if (index < numQuestions - 1) {
        return (
            <button
                className='btn btn-ui'
                onClick={() => dispatch({ type: 'nextQuestion' })}
            >
                Next
            </button>
        )
    }
    if (index === numQuestions - 1) {
        return (
            <button
                className='btn btn-ui'
                onClick={() => dispatch({ type: 'finish' })}
            >
                Finish
            </button>
        )
    }
}

export default NextButton
