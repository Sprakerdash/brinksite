import { createGlobalStyle } from "styled-components"

export const theme = {
  colors: {
    blue: "#23a9ff",
    dblue: "#0b0842",
    lblue: "#6ABEF4",
    menu: "#105d86",
    background: "#fff",
    subtle: "#cccccc",
    red: "#e94f37",
    text: "#4a4a4a",
    psubtle: "#a486c9",
  },
  shadow: {
    title: "0 0em 0.2em #38ade9, 0 0em 0.2em #0d6f58",
    card: "0 0 3em 0.4em #1ca2e7b8, inset 0 0 1em 0em #1ca2e7b8",
  },
  zIndex: {
    nav: 10,
    menu: 11,
    navIcon: 12,
    cursor: 1000,
    cursorOverLay: 1001,
  },
  constant: {
    navHeight: `8rem`,
  },
  sizes: {
    xs: "@media only screen and (min-width: 400px) ",
    sm: "@media only screen and (min-width: 568px) ",
    md: "@media only screen and (min-width: 768px) ",
    lg: "@media only screen and (min-width: 992px) ",
  },
}

export const Global = createGlobalStyle`
html{
  font-size: 62.5% !important;
  font-family: "Poppins",serif, sans-serif,georgia;
}
  body{
      background: ${props => props.theme.colors.background};
  }
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
  .cursor{
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: ${({ theme }) => theme.zIndex.cursor};
    /* background-color: red; */
    pointer-events: none;
    /* background-image: url('/logo.png');
    background-repeat: no-repeat; */
  }
  /* Regular Cursor */
  .cursor:before,.cursor:after{
    content:'';
    position: absolute;
    transform: translate3d(-50%,-50%,0) scale(0.5);
    top:50%;
    left:50%;
    width: 6rem;
    height: 6rem;
    border: 2px solid ${({ theme }) => theme.colors.lblue};
    border-radius: 50%;
    transition: transform .2s linear;
  }
  .cursor:after{
    opacity: 0;
    background-color:${({ theme }) => theme.colors.lblue};
  }
  .comingSoon{
    color: #7d7c7c !important;
    pointer-events: none !important;
    position: relative;
    /* :after{
      position: absolute;
      content:'Coming Soon';
      white-space: nowrap;
      top:5%;
      left:110%;
      font-size: 0.5em;
      background: red;
      color:#000;
      padding: 0.5em;
      border-radius: 10px;
      transform: translate(-50%,-50%);
    } */
  }
   /* make after opacity 1 to highlight */
  .navLinkHighlight,.IconHighLight{
    mix-blend-mode:hard-light;
    /* background:#fff; */
    &:before{
      transform: translate3d(-50%,-50%,0) scale(1.2);
    }
    &:after{
      opacity: 1;
      transform: translate3d(-50%,-50%,0) scale(1.2);
    }
    }
    .IconHighLight{
      mix-blend-mode:difference;
    }
    p{
      color:#fff;
      font-size: 1.6rem;
      margin:1rem 0;
      text-align: center;
      line-height: 1.4;
    }
    .Title{
      top:0;
    }
    .pulse{
  position: relative;
}
.pulse::after{
  content:'';
  height: 10px;
  width: 10px;
  position: absolute;
  top:0;
  left:0;
  border-radius: 50%;
  background-color: red;
}
.glass{
      backdrop-filter: blur(10px);
      background: rgba(255,255,255,0.2);
      box-shadow: 10px 10px 10px rgba(46,54,68,0.03);
      border:solid 2px transparent;
      background-clip: padding-box;
    }
    .ScrollContainer{
      height:100vh;
      width:100vw;
      position:relative;
    }
    .ScrollCanvas {
      position:absolute !important;
      top:0 !important;
      left:0 !important;
      height:100%;
      width:100%;
    }
