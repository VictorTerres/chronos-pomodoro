import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading/Heading';
import { Container } from './components/Container/Container';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Container>
        <section>
          <Heading>
            <TimerIcon />
          </Heading>
        </section>
      </Container>

      <Container>
        <section>Menu</section>
      </Container>

      <Container>
        <section>Counter</section>
      </Container>

      <Container>
        <section>Footer</section>
      </Container>
    </>
  );
}
