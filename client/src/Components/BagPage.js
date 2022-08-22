import React from "react";
import BagCard from "./BagCard";
import { Container, Card } from 'semantic-ui-react';
// import { Card, Form, Label, Button, Input } from 'semantic-ui-react';
import { useState, useEffect } from 'react';

function BagPage() {

    const [bags, setBags] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/bags')
            .then(resp => resp.json())
            .then(data => setBags(data))
    }, [])

console.log(bags)

    const bagList = bags.map(bag => {
        return <BagCard key={bag.id}
        id={bag.id}
        name={bag.name} 
        user_id={bag.user_id}
        disc_id={bag.disc_id}
        // handleDelete={handleDelete}
        />
    })

    return (
        <Container textAlign="center"> 
            <h1>Bags</h1>
            <Card.Group itemsPerRow={4}>
                {bagList}
            </Card.Group>
        </Container>
        
    )
}

export default BagPage;