import React from "react";

import { HeaderListLink, HeaderList } from "./Header.style";

export function HeaderMenuList() {
    return (
        <HeaderList>
            <li>
                <HeaderListLink>
                    NEW
                </HeaderListLink>
            </li>
            <li>
                <HeaderListLink>
                    КАТАЛОГ
                </HeaderListLink>
            </li>
            <li>
                <HeaderListLink to="/">
                    ГОЛОВНА
                </HeaderListLink>
            </li>
        </HeaderList>
    );
}