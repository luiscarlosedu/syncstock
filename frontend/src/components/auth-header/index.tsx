import {
    HeaderLink,
    HeaderLogo,
    ContentHeader,
    HeaderImage,
    HeaderTitle,
    StyledLink
} from './styles';

import LogoImage from '../../assets/syncstock-no.png';

export function AuthHeader() {
    return (
        <ContentHeader>
            <HeaderLogo>
                <HeaderImage src={LogoImage} alt="logo syncstock" />
                <HeaderTitle>
                    <StyledLink to='/'>SyncStock</StyledLink>
                </HeaderTitle>
            </HeaderLogo>

            <HeaderLink 
                href="https://github.com/luiscarlosedu"
                target="_blank"
                rel="noopener noreferrer"
            >
                Desenvolvedor
            </HeaderLink>

        </ContentHeader>
    );
}