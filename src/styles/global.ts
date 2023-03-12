import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif;
    }

    body {
      background-color: #303131;
    }

    ul {
      list-style: none
    }

    #root{
        margin:0 auto;
    }
 `;
