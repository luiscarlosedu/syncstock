import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HeaderError } from './components/HeaderError';
import { Container, DevLinks, ErrorContent, ErrorSubTitle, ErrorText, ErrorTitle, SocialLinks } from './styles';

export default function Error() {
    return (
        <Container>
            <HeaderError />
            <ErrorContent>
                <ErrorTitle>404</ErrorTitle>
                <ErrorSubTitle>Esta página não foi encontrada</ErrorSubTitle>
                <ErrorText>Essa página que você acessou pode ter sido removida ou não existe.</ErrorText>
                <SocialLinks>
                    <DevLinks>
                        <a href="https://instagram.com/https.luisedu77" target="_blank"><FaInstagram size={20} /></a>
                    </DevLinks>
                    <DevLinks>
                        <a href="https://github.com/luiscarlosedu" target="_blank"><FaGithub size={20} /></a>
                    </DevLinks>
                    <DevLinks>
                        <a href="https://linkedin.com/in/luiscarlosedu/" target="_blank"><FaLinkedin size={20} /></a>
                    </DevLinks>
                </SocialLinks>
            </ErrorContent>
        </Container>
    );
}
