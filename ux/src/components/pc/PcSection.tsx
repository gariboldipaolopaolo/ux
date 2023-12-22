import {Container, Description, TextContainer, Title} from "./PcSection.style";

const PcSection = () => {
    return (
        <Container id={"PC"}>
            <img src={"/computer.jpg"} alt={"computer"} width={"500px"}/>
            <TextContainer>
                <Title>{"computer e notebook su misura"}</Title>
                <div>
                    <Description>
                        {"Serve un semplice PC per la navigazione online, un PC per il gaming, una workstation grafica oppure un server?\n" +
                            "Da noi Personal computer e notebook vengono ordinati o assemblati in base alle esigenze dei clienti.\n" +
                            "Disponibilità di qualsiasi componente hardware per potere assemblare il PC su misura per voi;\n" +
                            "inoltre sono disponibili su ordinazione notebook per qualsiasi utilizzo: dai piccoli netbook ai moderni e raffinati ultrabook fino ai potentissimi portatili per il gaming."}
                    </Description>
                </div>
            </TextContainer>
        </Container>
    )
}

export default PcSection;