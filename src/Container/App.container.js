import classes from './App.module.scss';
import Gaintaining from '../Components/Gaintaining/Gaintaining.component.jsx';
import Container from '@material-ui/core/Container';
const { container } = classes;

function App() {
  return (
    <Container maxWidth='lg' className={container}>
      <Gaintaining />
    </Container>
  );
}

export default App;
