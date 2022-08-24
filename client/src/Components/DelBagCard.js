import { React} from "react";
import { Link } from "react-router-dom"

import { Card, Table, Button, Icon } from "semantic-ui-react";

function BagCard ( { id, name, user_id, disc_id }){
    console.log(name)

    return (
        <Card textAlign="center">
                <Card.Content class="header">
                    <h1>{id}</h1>
                    <h2>{name}</h2>
                </Card.Content > 
        </Card>

    )
}

export default BagCard;