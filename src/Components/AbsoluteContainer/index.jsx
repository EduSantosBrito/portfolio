import styled from 'styled-components';

const AbsoluteContainer = styled.div`
    position: absolute;
    top: ${({ top }) => top ?? 'auto'};
    left: ${({ left }) => left ?? 'auto'};
    right: ${({ right }) => right ?? 'auto'};
    bottom: ${({ bottom }) => bottom ?? 'auto'};
    margin: ${({ margin }) => margin ?? '0px'};
    padding: ${({ padding }) => padding ?? '0px'};
    background-color: ${({ backgroundColor }) => backgroundColor ?? 'transparent'};
`;

export default AbsoluteContainer;
