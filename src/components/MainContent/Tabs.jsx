import PropTypes from "prop-types"
export default function Tabs ({button, children, ButtonContainer}){
    return(
        <>
            <ButtonContainer>{button}
            </ButtonContainer>
            {children}
        </>
    )
}
Tabs.propTypes = {
    button: PropTypes.node,
    children: PropTypes.node,
    ButtonContainer: PropTypes.elementType
}