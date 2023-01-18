import React from 'react'
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap'

interface DirectoryProps {
    fetchDirectoryId: (id: number) => void
    data: {
        central_function: string
        classification: string
        criticality: string
        description: string
        fileUrl: string
        id: number
        implementing_system: string
        life_cycle_status: string
        name: string
        other: string
        ownership: string
        preparedness_level: string
        product_owner: string
        replaces: object | null
        security_level: string
        service_level: string
        strategic_importance: string
    }
}

export default function DirectoryCard (item: DirectoryProps) {
    function redirectToId () {
        item.fetchDirectoryId(item.data.id)
    }

    return (
        <Card
            style={{
                width: '18rem',
            }}
        >
            <CardBody>
                <CardTitle tag="h5">
                    {item.data.name}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {item.data.classification}
                </CardSubtitle>
                <CardText>
                    {item.data.description}
                </CardText>
                <Button onClick={redirectToId}>
                    Avaa sovelluksen tiedot
                </Button>
            </CardBody>
        </Card>
    );
}
