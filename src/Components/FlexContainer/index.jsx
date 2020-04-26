import styled from 'styled-components';

const FlexContainer = styled.div`
    display: flex;
    margin: ${({ margin }) => margin ?? '0px'};
    padding: ${({ padding }) => padding ?? '0px'};
    flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
    align-items: ${({ alignItems }) => alignItems ?? 'center'};
    justify-content: ${({ justifyContent }) => justifyContent ?? 'center'};
    background-color: ${({ backgroundColor }) => backgroundColor ?? 'transparent'};
`;

export default FlexContainer;
