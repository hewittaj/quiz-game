/* eslint-disable react/prop-types */
function Progress(props) {
    const { index, numQuestions, points, maxPossiblePoints, answer } = props
    return (
        <header className='progress'>
            <progress
                max={numQuestions}
                value={index + Number(answer !== null)}
            />
            <p>
                Question{' '}
                <strong>
                    {index} / {numQuestions}
                </strong>
            </p>
            <p>
                <strong>{points}</strong> / {maxPossiblePoints}
            </p>
        </header>
    )
}

export default Progress
