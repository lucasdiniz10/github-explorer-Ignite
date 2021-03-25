import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

const title = 'Hello World'

export function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  );
}