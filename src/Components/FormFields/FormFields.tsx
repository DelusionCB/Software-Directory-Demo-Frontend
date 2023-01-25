import React, {useState} from 'react'
import {Container, Row, Col, Input, Label, Form, FormGroup, Button} from 'reactstrap'
import client from '../../Api/Client'
import {useNavigate} from 'react-router-dom'

interface FormProps {
    central_function: string
    classification: string
    criticality: string
    description: string
    fileUrl?: File | null
    id?: number
    implementing_system: string
    life_cycle_status: string
    name: string
    other: string
    ownership: string
    preparedness_level: string
    product_owner: string
    replaces?: object | null
    security_level: string
    service_level: string
    strategic_importance: string
}

const defaultValues: FormProps = {
    central_function: '',
    classification: '',
    criticality: '',
    description: '',
    fileUrl: null,
    implementing_system: '',
    life_cycle_status: '',
    name: '',
    ownership: '',
    other: '',
    preparedness_level: '',
    product_owner: '',
    security_level: '',
    service_level: '',
    strategic_importance: '',
}

export default function FormFields () {
    const navigate = useNavigate()
    const [values, setValues] = useState<FormProps>(defaultValues)

    function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }

    function handleFileChange (e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files !== null) {
            const data = new FormData();
            data.append('files', new Blob([JSON.stringify(e.target.files[0])], {type: 'text/html'}))
            setValues({
                ...values,
                [e.target.name]: e.target.files[0],
            })
        }
    }

    async function postInfo () {
        let data;
        try {
            let preparedValues = {}
            preparedValues = values
            console.log(values, 'values')
            const response = await client.post(`softwaredirectory/InformationSystemServices/`, preparedValues)
            data = response.data;
        } catch (e: any) {
            throw Error(e)
        } finally {
            navigate(`/directory/${data.id}`, {
                state: {
                    id: data.id,
                },
            });
        }
    }

    return (
        <Container className='formfields'>
            <Form>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="name">
                                Nimi
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Syötä nimi"
                                type="text"
                                value={values.name}
                                onChange={(e) => { handleChange(e); }}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="description">
                                Kuvaus
                            </Label>
                            <Input
                                id="description"
                                name="description"
                                placeholder="Syötä kuvaus"
                                type="textarea"
                                value={values.description}
                                onChange={(e) => { handleChange(e); }}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="central_function">
                                Keskeinen toiminnallisuus
                            </Label>
                            <Input
                                id="central_function"
                                name="central_function"
                                placeholder="Syötä keskeinen toiminnallisuus"
                                type="textarea"
                                value={values.central_function}
                                onChange={(e) => { handleChange(e); }}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="ownership">
                                Omistajayksikkö / osasto
                            </Label>
                            <Input
                                id="ownership"
                                name="ownership"
                                placeholder="Syötä omistajayksikkö"
                                type="text"
                                value={values.ownership}
                                onChange={(e) => { handleChange(e); }}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="product_owner">
                                Vastuuhenkilö
                            </Label>
                            <Input
                                id="product_owner"
                                name="product_owner"
                                placeholder="Syötä vastuuhenkilö"
                                type="text"
                                value={values.product_owner}
                                onChange={(e) => { handleChange(e); }}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="classification">
                                Toiminnallinen luokitus
                            </Label>
                            <Input
                                id="classification"
                                name="classification"
                                placeholder="Syötä toiminnallinen luokitus"
                                type="text"
                                value={values.classification}
                                onChange={(e) => { handleChange(e); }}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="strategic_importance">
                                Strateginen merkitys
                            </Label>
                            <Input
                                id="strategic_importance"
                                name="strategic_importance"
                                placeholder="Syötä strateginen merkitys"
                                type="text"
                                value={values.strategic_importance}
                                onChange={(e) => { handleChange(e); }}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="criticality">
                                Kriittisyys
                            </Label>
                            <Input
                                id="criticality"
                                name="criticality"
                                placeholder="Syötä kriittisyys"
                                type="text"
                                value={values.criticality}
                                onChange={(e) => { handleChange(e); }}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="security_level">
                                Tietoturvataso
                            </Label>
                            <Input
                                id="security_level"
                                name="security_level"
                                placeholder="Syötä tietoturvataso"
                                type="text"
                                value={values.security_level}
                                onChange={(e) => { handleChange(e); }}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="preparedness_level">
                                Varautumistaso
                            </Label>
                            <Input
                                id="preparedness_level"
                                name="preparedness_level"
                                placeholder="Syötä varautumistaso"
                                type="text"
                                value={values.preparedness_level}
                                onChange={(e) => { handleChange(e); }}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="life_cycle_status">
                                Elinkaaren tila
                            </Label>
                            <Input
                                id="life_cycle_status"
                                name="life_cycle_status"
                                placeholder="Syötä elinkaaren tila"
                                type="text"
                                value={values.life_cycle_status}
                                onChange={(e) => { handleChange(e); }}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="service_level">
                                Palvelutaso
                            </Label>
                            <Input
                                id="service_level"
                                name="service_level"
                                placeholder="Syötä palvelutaso"
                                type="text"
                                value={values.service_level}
                                onChange={(e) => { handleChange(e); }}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="implementing_system">
                                Palvelun toteuttava tietojärjestelmä
                            </Label>
                            <Input
                                id="implementing_system"
                                name="implementing_system"
                                placeholder="Syötä palvelun toteuttava tietojärjestelmä"
                                type="text"
                                value={values.implementing_system}
                                onChange={(e) => { handleChange(e); }}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="other">
                                Muut
                            </Label>
                            <Input
                                id="other"
                                name="other"
                                placeholder="Syötä muut"
                                type="text"
                                value={values.other}
                                onChange={(e) => { handleChange(e); }}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="fileUrl">
                                Liitteet
                            </Label>
                            <Input
                                type="file"
                                id="fileUrl"
                                name="fileUrl"
                                onChange={(e) => { handleFileChange(e); }}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Button onClick={() => { void postInfo() }}>
                        Tallenna
                    </Button>
                </Row>
            </Form>
        </Container>
    );
}
