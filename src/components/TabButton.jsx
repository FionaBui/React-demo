export default function TabButton ({children, onSelect}){
    // Define function to handle event click
    return (
        <li>
            <button onClick={onSelect} >{children}</button>
        </li>
    )
}
