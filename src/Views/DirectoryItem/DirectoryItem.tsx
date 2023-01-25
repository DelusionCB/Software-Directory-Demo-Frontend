import React, {useEffect, useState} from 'react'
import client from '../../Api/Client'
import {useLocation} from 'react-router-dom'
import {Container, Row, Col} from 'reactstrap'

interface itemProps {
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

export default function DirectoryItem () {
    const params = useLocation();
    const [item, setItem] = useState<itemProps>(Object)

    async function getValues (id: number): Promise<any> {
        try {
            const res: {data: any} = await client.get(`softwaredirectory/InformationSystemServices/${id}`)
            setItem(res.data); return;
        } catch (e: any) {
            throw Error(e)
        }
    }

    useEffect(() => {
        void getValues(params.state.id)
    }, [])

    return (
        <Container className='directoryItem-page'>
            <Row>
                <Col>
                    <h1>Arkisto: {item.name}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Kuvaus</h2>
                    <p>{item.description}</p>
                </Col>
                <Col>
                    <h2>Toiminnallinen luokitus</h2>
                    <p>{item.classification}</p>
                </Col>
                <Col>
                    <h2>Kriittisyys</h2>
                    <p>{item.criticality}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Palvelun toteuttava järjestelmä</h2>
                    <p>{item.implementing_system}</p>
                </Col>
                <Col>
                    <h2>Elinkaaren tila</h2>
                    <p>{item.life_cycle_status}</p>
                </Col>
                <Col>
                    <h2>Omistajayksikkö / osasto</h2>
                    <p>{item.ownership}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Varautumistaso</h2>
                    <p>{item.preparedness_level}</p>
                </Col>
                <Col>
                    <h2>Vastuuhenkilö</h2>
                    <p>{item.product_owner}</p>
                </Col>
                <Col>
                    <h2>Tietoturvataso</h2>
                    <p>{item.security_level}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Palvelutaso</h2>
                    <p>{item.service_level}</p>
                </Col>
                <Col>
                    <h2>Strateginen merkitys</h2>
                    <p>{item.strategic_importance}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Liitteet</h2>
                    <a href={item.fileUrl}>{item.fileUrl}</a>
                </Col>
            </Row>
        </Container>
    );
}
