import styled from "styled-components";
import { THEME } from "../../ThemeColors";


export const StyeldBgWrapper = styled.div`

    background-color: ${({ theme }) => THEME[theme].backgroundColor};
    color: ${({ theme }) => THEME[theme].text};
    `



