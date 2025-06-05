import { HeaderError } from './components/HeaderError';
import { Container, ErrorContent, ErrorSubTitle, ErrorText, ErrorTitle } from './styles';

export default function Error() {
    return (
        <Container>
            <HeaderError />
            <ErrorContent>
                <ErrorTitle>404</ErrorTitle>
                <ErrorSubTitle>Esta página não foi encontrada</ErrorSubTitle>
                <ErrorText>Essa página que você acessou pode ter sido removida ou não existe.</ErrorText>
            </ErrorContent>
        </Container>
    );
}