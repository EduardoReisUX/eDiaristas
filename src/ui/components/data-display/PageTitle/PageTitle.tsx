import React from "react";
import {
  PageTitleContainer,
  PageTitleStyled,
  PageSubtitleStyled,
} from "./PageTitle.style";

// Tipagem do TypeScript
//      - A tipagem define o tipo das props (title, subtitle) de um component (PageTitle),
//        permitindo que o corretor detecte (intelliSense) e corrija automáticamente uma palavra
//      - Exemplo:
interface PageTitleProps {
  title: string; // Obrigatório                  // props.title é do tipo string
  subtitle?: string | JSX.Element; // Não obrigatório subtitle?:   // props.subtitle é do tipo string ou elemento JSX
}

//      - Component PageTitle possui props como title e subtitle definido no index.tsx
//      - Na linha abaixo está tipand PageTitle como React.FunctionalComponent e
//        puxa a interface (linha acima)
const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{props.title}</PageTitleStyled>
      <PageSubtitleStyled>{props.subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  );
};

export default PageTitle;
