import {FunctionComponent} from "react";
import {Button, Container, SubTitle, Title, TitleContainer} from "./Landing.style";

const Landing: FunctionComponent = () => {
    return (
        <Container>
            <TitleContainer>
                <div style={{paddingLeft: '1em'}}>
                    <Title>Hardware</Title>
                </div>
                <div style={{paddingLeft: '1em', paddingTop: '0', marginTop: '-2em'}}>
                    <SubTitle>
                        e servizi informatici
                    </SubTitle>
                </div>
                <div style={{paddingLeft: '1em'}}>
                    <Button>{"Scopri di piu' >"}</Button>
                </div>
            </TitleContainer>
        </Container>
    )
}

export default Landing;