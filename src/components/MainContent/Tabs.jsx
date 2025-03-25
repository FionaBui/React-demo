import PropTypes from "prop-types"
export default function Tabs ({button, children, buttonContainer}){
    const ButtonContainer = buttonContainer
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
    buttonContainer: PropTypes.elementType
}