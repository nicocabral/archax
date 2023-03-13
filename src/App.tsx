import './App.scss';
import Applications from './components/Applications/Applications';
import Main from './components/Layout/Main';
import useData from './hooks/useData';
function App() {
  const { node, data } = useData();
  return (
    <Main node={node} data={data}>
      <Applications/>
    </Main>
  );
}

export default App;
