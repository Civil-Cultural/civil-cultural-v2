/* --- libs --- */
import { Outlet } from 'react-router-dom';
import { SSRProvider } from 'react-bootstrap';

/* --- providers --- */
import { CustomThemeProvider } from '@providers/ThemeContext';

/* --- styles --- */
import 'styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <SSRProvider>
      <CustomThemeProvider>
        <Outlet />
      </CustomThemeProvider>
    </SSRProvider>
  )
}

export default App
