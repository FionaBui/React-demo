import PropTypes from "prop-types"
export default function Tabs ({button, children}){
    return(
        <>
            <menu>{button}
            </menu>
            {children}
        </>
    )
}
Tabs.propTypes = {
    button: PropTypes.node,
    children: PropTypes.node
}