import styled from 'styled-components';

const GridArea = styled.section`
    grid-area: ${({ areaName }) => areaName ?? 'auto / auto / auto / auto'};
`;

export default GridArea;
