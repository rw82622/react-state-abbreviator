
const DropDown = ({ setMyState, setMyAbbreviation, stateOptions }) => {
    return (
        <span>
            <button
                type="button"
                className="dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
                data-bs-offset="-180,0"
                aria-expanded="false">
                <span className="visually-hidden">Toggle Dropstart</span>
            </button>
            <ul className="dropdown-menu scroll">
                {stateOptions.map((current) => (
                    <li
                        className="dropdown-item"
                        key={current.name}
                        onClick={() => {
                            setMyState(current.name)
                            setMyAbbreviation(current['alpha-2'])
                        }}>
                        {current.name}
                    </li>
                ))}
            </ul>
        </span>
    )
}

export default DropDown