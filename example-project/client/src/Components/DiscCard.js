import { React} from "react";
import { Link } from "react-router-dom"

import { Card, Table, Button, Icon } from "semantic-ui-react";

function DiscCard ( { id, brand, mold, image, speed, glide, turn, fade, description }){
    console.log(brand)

    return (
        <Card textAlign="center">
                <Card.Content class="header">
                    <h1>{brand}</h1>
                    <h2>{mold}</h2>
                </Card.Content > 
                
                <Card.Content class="header">
                    <img class="ui large image" src={image} alt={mold + "'s img"}/>
                </Card.Content>
                
                <Table compact textAlign="center">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Speed</Table.HeaderCell>
                            <Table.HeaderCell>Glide</Table.HeaderCell>
                            <Table.HeaderCell>Turn</Table.HeaderCell>
                            <Table.HeaderCell>Fade</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>{speed}</Table.Cell>
                            <Table.Cell>{glide}</Table.Cell>
                            <Table.Cell>{turn}</Table.Cell>
                            <Table.Cell>{fade}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
               <Card.Content  class="header">
                    <h4>Description:</h4>
                    {description}
                </Card.Content >

                {/* <Card.Content  class="header">Willing to relocate: {locationNeed ? "Yes":"No"} </Card.Content >
                <Card.Content  class="header">
                    <h4>Speed:</h4> 
                    {speed}
                </Card.Content >

                <Card.Content  class="header">
                    <h4>Glide:</h4>
                    {glide}
                </Card.Content >

                <Card.Content  class="header">
                <h4>Turn:</h4>
                    {turn}
                </Card.Content>

                <Card.Content  class="header">
                <h4>Fade:</h4>
                    {fade}
                </Card.Content> */}
        </Card>

    )
}

export default DiscCard;