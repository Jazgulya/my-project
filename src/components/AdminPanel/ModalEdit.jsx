import { Box, IconButton, Modal, TableCell, TableRow } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { booksContext } from "../../contexts/booksContext";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";
// import "ModalEdit.css"

const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "auto",
    height: "500px",
    overflow: "auto",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function ModalAdd({ open, handleClose }) {
    const navigate = useNavigate()
    const { books, getBooks, deleteBook } = useContext(booksContext)

    useEffect(() => {
        getBooks()
    }, [])
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

        >
            <Box sx={style}>
                <Typography variant="h6" style={{ textAlign: "center", fontWeight: "500", fontSize: "25px" }}> Список книг</Typography>
                {books?.map((item) =>
                    <TableRow
                        key={item.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }, margin: "15px" }}
                    >
                        <TableCell align="right"><img style={{ width: "30px" }} src={item.photo} /></TableCell>
                        <TableCell component="th" scope="row">
                            {item.title}
                        </TableCell>
                        <TableCell align="right">{item.price}</TableCell>
                        <TableCell align="right">{item.year}</TableCell>
                        <TableCell align="right"><IconButton onClick={() => navigate(`/edit/${item.id}`)}><EditIcon /></IconButton></TableCell>
                        <TableCell align="right"><IconButton onClick={() => deleteBook(item.id)}><DeleteIcon /></IconButton></TableCell>

                    </TableRow>)}
            </Box>
        </Modal>
    )
}
export default ModalAdd