import {AppName, Item, Menu, NavBar, Social} from "./Header.style";
import {FunctionComponent, useState} from "react";

const Header: FunctionComponent = () => {
    const menuItems: string[] = ['Home', 'Servizi', 'PC', 'Contatti'];
    const [active, setActive] = useState<string>('Home');

    return (
        <NavBar>
            <AppName>
                <h1>PC Paradise</h1>
            </AppName>
            <Menu>
                {menuItems.map((item, index) => {
                    return <Item key={index} active={item ===active} onClick={() => setActive(item)}>
                        <a href={`#${item}`}>{item}</a>
                    </Item>
                })}
            </Menu>
            <Social>
                <img src={"/instagram.png"} width={25} height={25} alt={"instagram"}/>
                <img src={"/facebook.png"} width={25} height={25} alt={"facebook"}/>
            </Social>
        </NavBar>
    )
}

export default Header;