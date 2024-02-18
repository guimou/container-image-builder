// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { AppRoutes } from '@app/routes';
import { AppLayout } from '@app/components/AppLayout/AppLayout';

export function App() {
  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  );
}

export default App;
