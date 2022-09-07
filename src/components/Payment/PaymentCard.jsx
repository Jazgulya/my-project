import * as React from "react";
import Typography from "@mui/material/Typography";

import TextField from "@mui/material/TextField";
import { Box, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PaymentCard() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Typography style={{ margin: "15px 0px" }} variant="h6" gutterBottom>
        Форма оплаты
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            label="Имя "
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Номер карты"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Срок истечения карты"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Последние три цифры на обратной стороне карты"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
      </Grid>
      <Box display={"flex"} justifyContent={"flex-end"} margin={"15px 0px"}>
        <Button
          onClick={() => {
            alert("Оплата прошла успешно");
            navigate("/");
          }}
          style={{ flex: "1" }}
          variant="contained"
        >
          Далее
        </Button>
      </Box>
    </React.Fragment>
  );
}
