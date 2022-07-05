import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function PaymentForm() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Форма заказа
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="Имя"
            label="Имя"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="Фамилия"
            label="Фамилия"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="Адрес"
            label="Адрес проживания"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="Город"
            label="Город"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="Регион"
            label="Регион проживания"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="Страна"
            label="Страна"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
      </Grid>
      <Box display={"flex"} justifyContent={"flex-end"} margin={"15px 0px"}>
        <Button
          onClick={() => navigate("/paymentcard")}
          style={{ flex: "1" }}
          variant="outlined"
        >
          Далее
        </Button>
      </Box>
    </React.Fragment>
  );
}
