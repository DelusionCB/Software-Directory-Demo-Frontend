import React, {useEffect, useState} from 'react'
import client from '../../Api/Client'
import DirectoryCard from '../../Components/DirectoryCard/DirectoryCard'
import {useNavigate} from 'react-router-dom'
import './index.css'

export default function DirectoryPage () {
    const navigate = useNavigate()
    const [data, setData] = useState([])

    async function getValues (): Promise<any> {
        try {
            const res: {data: [], status: any} = await client.get('softwaredirectory/InformationSystemServices/')
            setData(res.data); return;
        } catch (e: any) {
            throw Error(e)
        }
    }

    useEffect(() => {
        void getValues()
    }, [])

    function voidFunc (e: number) {
        navigate(`directory/${e}`, {
            state: {
                id: e,
            },
        });
    }

    function mapDirectoryData () {
        const mapped: JSX.Element[] = []
        data.map((item, key) => (
            mapped.push(
                <DirectoryCard
                    fetchDirectoryId={(e: number) => { voidFunc(e); }}
                    data={item}
                />,
            )
        ))
        return mapped
    }

    const mappedItems = mapDirectoryData()
    return (
        <div className='directory-page'>
            <div>
                <h1>Tervetuloa selaamaan arkistoja</h1>
                <div className='directory-items'>
                    {mappedItems}
                </div>
            </div>
        </div>
    );
}
