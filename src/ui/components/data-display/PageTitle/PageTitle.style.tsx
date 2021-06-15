import { experimentalStyled as styled } from "@material-ui/core/styles";
import { normalizeRouteRegex } from "next/dist/lib/load-custom-routes";

export const PageTitleContainer = styled("div")`
  text-align: center;
  margin: ${({ theme }) => theme.spacing(4) + " " + 0};
`;
let cor = "#6B2AEE";

export const PageTitleStyled = styled("h2")`
  margin: 0;
  //color: ${cor};
  //color: ${(props) => props.theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: 600;

  // Criar uma estilização pra quando o tamanho for menor
  // (down) que médio ('md')
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
  }
`;

export const PageSubtitleStyled = styled("h3")`
  margin: ${({ theme }) => theme.spacing(1.5) + " " + "0"};
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: normal;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;
