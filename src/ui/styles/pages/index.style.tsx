import { experimentalStyled as styled } from "@material-ui/core";
import { Paper } from "@material-ui/core";

export const FormElementsContainer = styled("div")`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  max-width: 650px;
  margin: 0 auto ${({ theme }) => theme.spacing(7)};
`;

export const ProfissionaisPaper = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(7)};
  margin: 0 auto ${({ theme }) => theme.spacing(10)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    &.MuiPaper-root {
      padding: 0;
      box-shadow: none;
    }
  }
`;

export const ProfissionaisContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(6)};
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-left: ${({ theme }) => theme.spacing(-2)};
    margin-right: ${({ theme }) => theme.spacing(-2)};
    // Pega as colunas ímpares (1, 3, 5) e troca o bg para paper
    > :nth-of-type(odd) {
      background-color: ${({ theme }) => theme.palette.background.paper};
    }
  }
`;
