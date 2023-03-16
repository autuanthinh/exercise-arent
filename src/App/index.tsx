import { FC, useMemo, useState } from 'react';
import { AppContext } from 'context';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

import Routers from './routers';

import './index.scss';

const App: FC<{}> = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);

  const contextValue = useMemo(() => {
    return {
      isLoggedIn,
      setLoggedIn,
    };
  }, [isLoggedIn]);

  return (
    <ThemeProvider>
      <AppContext.Provider value={contextValue}>
        <Routers isLoggedIn={isLoggedIn} />
      </AppContext.Provider>
    </ThemeProvider>
  );

  /* -------------------------------------------------------------------------- */
  /*                                    fake                                    */
  /* -------------------------------------------------------------------------- */
  // return <PulseSurveyConfigPage />;
};

export default App;
