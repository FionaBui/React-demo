export default function TabButton ({children, onSelect, isSelected}){
    // Define function to handle event click
    return (
        <li>
            <button className={isSelected? "active" : undefined} onClick={onSelect} >{children}</button>
        </li>
    )
}
