/* eslint-disable @nx/enforce-module-boundaries */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppRoutes } from '@frontend/routes';
import { AppLayout } from '@frontend/components/AppLayout/AppLayout';

export function App() {
  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  );
}

export default App;
