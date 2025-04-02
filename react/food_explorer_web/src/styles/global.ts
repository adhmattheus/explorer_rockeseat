import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   :root{
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        outline: none;
    }

    button {
        font-family: 'Poppins', sans-serif;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
    
    .swiper {
        position: relative;
        overflow: hidden;
        margin: 0 !important;
        
    }
    
    .swiper-slide {
        width: auto !important;
        height: auto !important;
     
    }
    
    
    .swiper-button-next,
    .swiper-button-prev {
        height: 50.9rem;
        margin: -25.6rem -1rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-weight: bolder;
        mask-image: none;
    }

    .swiper-button-next:hover,
    .swiper-button-prev:hover {
	    animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }

    .swiper::before,
    .swiper::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: 30rem; 
        z-index: 2;
    }

    .swiper::before {
        left: 0;
        background: linear-gradient(
            to right,
            ${({ theme }) => theme.COLORS.BACKGROUND_900},
            transparent
        );
    }

    .swiper::after {
        right: 0;
        background: linear-gradient(
            to left,
            ${({ theme }) => theme.COLORS.BACKGROUND_900},
            transparent
        );
    }
`;
