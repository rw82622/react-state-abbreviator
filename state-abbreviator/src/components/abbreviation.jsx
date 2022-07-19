const Abbreviation = ({ myAbbreviation }) => {
    return (
        <span>
            <input
                type="text"
                className='abbreviate'
                value={myAbbreviation}
                readOnly={true}
            />
        </span>
    )
}
export default Abbreviation