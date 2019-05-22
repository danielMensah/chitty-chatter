import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import 'typeface-roboto';

export default createMuiTheme({
  palette: {
    primary: teal,
  },
  typography: {
    useNextVariants: true,
    allVariants: {
      fontWeight: 300,
    }
  },
  overrides: {
    MuiDrawer: {
      paper: {
        background: "teal",
      },
    },
    MuiDivider: {
      root: {
        margin: '0 10px',
      }
    }
  }
});