import {FunctionComponent} from "react";
import {CardContainer, Container, TitleContainer} from "./Services.style";
import Card from "./Card";

const Services: FunctionComponent = () => {
    const services: {title: string, description: string}[] = [
        {title: "vendita", description: "Vendita di Pc ed hardware informatico"},
        {title: "riparazione", description: "Riparazioni Pc e prodotti informatici"},
        {title: "assemblaggio", description: "Assemblaggio pc e modding"},
        {title: "formattazione", description: "Formattazione memorie"},
        {title: "recupero informazioni", description: "Recupero informazioni da memorie danneggiate"},
        {title: "aggiornamento", description: "Aggiornamento PC e dispositivi"},
    ];

    return (
        <Container id={"Servizi"}>
            <TitleContainer>
                {'Servizi'}
            </TitleContainer>
            <CardContainer>
                {services.map(({title, description}, i) => {
                    return <Card title={title} description={description}/>
                })}
            </CardContainer>
        </Container>
    )
}

export default Services;