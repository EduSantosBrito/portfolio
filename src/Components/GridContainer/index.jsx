import styled from 'styled-components';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: ${({ columns }) => columns ?? 'none'};
    grid-template-rows: ${({ rows }) => rows ?? 'none'};
    margin: ${({ margin }) => margin ?? '0px'};
    padding: ${({ padding }) => padding ?? '0px'};
    background-color: ${({ backgroundColor }) => backgroundColor ?? 'transparent'};
    grid-row-gap: ${({ rowGap }) => rowGap ?? 0};
    grid-column-gap: ${({ columnGap }) => columnGap ?? 0};
`;

export default GridContainer;
