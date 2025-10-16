import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { Heading } from '../../components/Heading';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>404 - Página não encontrada</Heading>
          <p>
            Opa! Parece que a página que você está tentando acessar não existe.
          </p>
          <p>
            Mas calma, dá pra voltar em segurança para a{' '}
            <a href='/'>página principal</a> ou{' '}
            <a href='/history'>para o histórico</a>.
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
