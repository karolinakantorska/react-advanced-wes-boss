import React from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';


export default class Page extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <Header />
                    <Inner>
                        {this.props.childeren}
                    </Inner>
                </StyledPage>
            </ThemeProvider>
        )
    }
}
// ThemeProvider uses context API lets to pass this values to the children
const theme = {
    red:   '#FF5733',
    black: '#1c2833',
    grey:  '#424949',
    lightGrey:  '#b2babb',
    offWhite: '#f7f9f9',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0, 0.09)',

};

const StyledPage = styled.div`
    background: white;
    color: ${props => props.theme.black};
`;
const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    background: ${props => props.theme.lightGrey};
    margin: 0 auto;
    padding: 2rem;
`;
// can be written anywhere in application
injectGlobal`
    {/* loading font*/}
    @font-face {
        font-family: 'radnika-next';
        src: url('/static/radnikanext-medium-webfont.woff2');
        format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html {
        box-sizing: border-box;
        {/* every rem wil be sizing to 10px not 16 as normally*/}
        font-size: 10px;
    }
    {/* everything is inheriting this styling, here: border-box*/}
    *,*:before,*:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }
    a {
        text-decoration: none;
        {/* we have no acces to ${props => props.theme.lightGrey}... only because this is in the same file we can do: ${theme.black} */}
        color: ${theme.black};
    }
`;
