import styled from 'styled-components';
import Link from 'next/link.js';
export const Wrapper = styled.div`
    position: relative;
    padding: 1rem;
    background: rgba( 255, 255, 255, 0.25 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const Resolution = styled.span`
    position: absolute;
    background: white;
    color: red;
    font-size: 16px;
    padding: 3px 5px;
    text-transform: uppercase;
    top: 0;
    right: 0;
`;

export const link = styled.a`
    position: absolute;
    background: green;
    width:100%;
    left:0;
    bottom: -5px;
    text-align:center;
    padding: 5px 0;
`