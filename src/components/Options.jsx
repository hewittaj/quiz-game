/* eslint-disable react/prop-types */
function Options(props) {
    const { question } = props
    return (
        <div className='options'>
            {question.options.map((option) => (
                <button key={option} className='btn btn-option'>
                    {option}
                </button>
            ))}
        </div>
    )
}

export default Options
