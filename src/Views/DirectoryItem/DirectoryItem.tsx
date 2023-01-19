import React, {useEffect, useState} from 'react'
import client from '../../Api/Client'
import {useLocation} from 'react-router-dom'

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
        <div id='error-page'>
            <h1>Sovellus: {item.name}</h1>
            <div>
                <p>{item.description}</p>
            </div>
        </div>
    );
}
