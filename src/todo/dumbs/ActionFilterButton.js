export function ActionFilterButton({filterDisplay, mode}) {
    return (
        <li>
            <a onClick={e => filterDisplay(e, mode)}>{mode}</a>
        </li>
    )
}