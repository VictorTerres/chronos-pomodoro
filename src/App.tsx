import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Countdown } from './components/Countdown';
import { DefautInput } from './components/DefautInput';
import { Cycles } from './components/Cycles';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <Countdown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefautInput
              type='text'
              id='task'
              labelText='TASK'
              placeholder='Digite sua tarefa'
              //disabled
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <button>Enviar!</button>
          </div>
        </form>
      </Container>

      <Container>
        <section>Exibit</section>
      </Container>

      <Container>
        <section>Footer</section>
      </Container>
    </>
  );
}
