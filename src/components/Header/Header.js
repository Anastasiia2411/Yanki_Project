import React from "react";

import { HeaderElementWrapper } from "./Header.style";
import { HeaderMenuList } from "./HeaderMenuList";
import { IconList } from "./HeaderIconList";
import { HeaderLogoSvg } from "./HeaderLogoSvg";

export function Header() {
    return (
        <>
            <HeaderElementWrapper>
                <HeaderMenuList/>
                <HeaderLogoSvg/>
                <IconList/>
            </HeaderElementWrapper>
        </>
    );
}





