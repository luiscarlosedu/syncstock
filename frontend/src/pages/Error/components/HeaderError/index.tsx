import { HeaderErrorContainer, HeaderErrorLogo, HeaderErrorLogoImage, HeaderErrorLogoTitle } from "./styles";

import ImageLogo from '../../../../assets/syncstock-white.png';

export function HeaderError() {
    return (
        <HeaderErrorContainer>
            <HeaderErrorLogo>
                <HeaderErrorLogoImage src={ImageLogo} />
                <HeaderErrorLogoTitle>
                    SyncStock
                </HeaderErrorLogoTitle>
            </HeaderErrorLogo>
        </HeaderErrorContainer>
    );
}