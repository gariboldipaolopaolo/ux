import {FunctionComponent} from "react";
import {Container, Description, Title} from "./Card.style";

type CardProps = {
    title: string;
    description: string;
}

const Card: FunctionComponent<CardProps> = ({title, description}) => {
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Description>
                {description}
            </Description>
        </Container>
    )
}

export default Card;