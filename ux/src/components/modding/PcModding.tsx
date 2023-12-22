import {Container, Description, TextContainer, Title} from "./PcModding.style";

const PcModding = () => {
    return (
        <Container id={"modding"}>
            <TextContainer>
                <Title>{"realizzazione modding"}</Title>
                <div>
                    <Description>
                        {"Per gli amanti del gaming e del modding assembliamo personal computer con qualsiasi tipologia di case, illuminazione, aerazione, raffreddamenti a liquido e molte altre personalizzazioni."}
                    </Description>
                </div>
            </TextContainer>
            <img src={"/modding.jpg"} alt={"computer"} width={"500px"}/>
        </Container>
    )
}

export default PcModding;