import * as React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function PaymentForm() {
  const navigate = useNavigate();
  const [name, setName] = React.useState();
  const [surname, setSurname] = React.useState();
  const [address, setAddress] = React.useState();
  const [city, setCity] = React.useState();
  const [country, setCountry] = React.useState();

  function handleValues() {
    let newClient = {
      name,
      surname,
      address,
      city,
      country
    };
    if (
      !name ||
      !surname ||
      !address ||
      !city ||
      !country
    ) {
      alert("Заполните все поля!");
      return;
    }
    // createOrder(newClient); // надо отправить данные на сервер с формой
    navigate("/paymentcard");
  }
  return (
    <Container style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Typography style={{ textAlign: "center", marginTop: "15px", fontSize: "25px" }} variant="h6" gutterBottom>
        Форма заказа
      </Typography>
      <TextField style={{ marginBottom: "10px", marginLeft: "20px", width: "50vw" }}
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="Имя"
        label="Имя"
        autoComplete="given-name"
        variant="standard"
      />
      <TextField style={{ marginBottom: "10px", marginLeft: "20px", width: "50vw" }}
        required
        name="Фамилия"
        label="Фамилия"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        autoComplete="family-name"
        variant="standard"
      />
      <TextField style={{ marginBottom: "10px", marginLeft: "20px", width: "50vw" }}
        required
        name="Адрес"
        label="Адрес проживания"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        autoComplete="shipping address-line1"
        variant="standard"
      />

      <TextField style={{ marginBottom: "10px", marginLeft: "20px", width: "50vw" }}
        required
        id="city"
        name="Город"
        label="Город"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        autoComplete="shipping address-level2"
        variant="standard"
      />


      <TextField style={{ marginBottom: "10px", marginLeft: "20px", width: "50vw" }}
        required
        id="country"
        name="Страна"
        label="Страна"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        autoComplete="shipping country"
        variant="standard"
      />
      <Box display={"flex"} margin={"15px 0px"}>
        <Button
          onClick={handleValues}
          style={{ width: "50vw", marginLeft: "15px" }}
          variant="outlined"
        >
          Далее
        </Button>
      </Box>
    </Container>
  );
}
