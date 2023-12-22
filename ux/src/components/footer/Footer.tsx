import {FunctionComponent} from "react";
import {Container, Description, Title} from "./Footer.style";

const Footer: FunctionComponent = () => {
    return(
        <Container id={"Contatti"}>
            <Title>
                Cellulare:
            </Title>
            <Description>
                {"00 111 435 575"}
            </Description>
            <Title>
                Email:
            </Title>
            <Description>
                {"contoso@sample.ch"}
            </Description>
            <Title>
                Indirizzo:
            </Title>
            <Description>
                {"via test 55, Ginevra, SWITZERLAND"}
            </Description>
        </Container>
    )
}

export default Footer;