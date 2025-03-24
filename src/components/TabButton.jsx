import PropTypes from 'prop-types';

export default function TabButton ({children, onSelect, isSelected}){
    // Define function to handle event click
    return (
        <li>
            <button className={isSelected? "active" : undefined} onClick={onSelect} >{children}</button>
        </li>
    )
}
TabButton.propTypes = {
    children: PropTypes.node.isRequired,  
    onSelect: PropTypes.func.isRequired,    
    isSelected: PropTypes.bool.isRequired 
};