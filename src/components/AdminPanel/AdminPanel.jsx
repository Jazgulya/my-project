import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddBook from '../AddBook/AddBook';
import { Container } from '@mui/material';
import ModalAdd from './ModalAdd';
import ModalEdit from './ModalEdit';
import { useState } from 'react';



export default function AdminPanel() {
    const [addVisible, setAddVisible] = useState(false)
    const [editVisible, setEditVisible] = useState(false)


    if (!AdminPanel) {
        return <h1>Loading...</h1>
    }

    return (
        <Container style={{ display: "flex", flexDirection: "column" }}>
            <Button variant='outlined' style={{ marginTop: "15px", padding: "10px" }} onClick={() => setAddVisible(true)}>Добавить новую книгу</Button>
            <ModalAdd open={addVisible} handleClose={() => setAddVisible(false)} />


            <Button variant='outlined' style={{ margin: "15px 0", padding: "10px" }} onClick={() => setEditVisible(true)}>Редактировать или удалить книгу</Button>
            <ModalEdit open={editVisible} handleClose={() => setEditVisible(false)} />



        </Container >
    );
}
