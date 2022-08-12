import React from "react";
import DiscCard from "./DiscCard";
import { Container, Card } from 'semantic-ui-react';
// import { Card, Form, Label, Button, Input } from 'semantic-ui-react';
import { useState, useEffect } from 'react';

function DiscPage() {

    const [discs, setDiscs] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/discs')
            .then(resp => resp.json())
            .then(data => setDiscs(data))
    }, [])

    const discList = discs.map(disc => {
        return <DiscCard key={disc.id}
        id={disc.id}
        brand={disc.brand} 
        mold={disc.mold}
        image={disc.image}
        speed={disc.speed} 
        glide={disc.glide}
        turn={disc.turn}
        fade={disc.fade}
        description={disc.description}
        // handleDelete={handleDelete}
        />
    })

    return (
        <Container textAlign="center"> 
            <h1>Discs</h1>
            <Card.Group itemsPerRow={4}>
                {discList}
            </Card.Group>
        </Container>
        
    )
}

export default DiscPage;