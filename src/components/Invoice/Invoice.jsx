import { Box, Button, Container, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

const Invoice = () => {
  const [showInvoice, setShowInvoice] = useState(true);
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <Container style={{ padding: "5px", backgroundColor: "#f1f1f1" }}>
        {showInvoice ? (
          <>
            <Box
              display="flex"
              flexDirection={{
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
              }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="5px"
            >
              <div>
                <h1
                  style={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "5px",
                  }}
                >
                  Invoicer
                </h1>
              </div>

              <div>
                <ul
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <li>
                    <Button onClick={handlePrint} variant="outlined">
                      Print
                    </Button>
                  </li>
                  <li>
                    <Button variant="contained">Download</Button>
                  </li>
                  <li>
                    <Button variant="contained">Send</Button>
                  </li>
                </ul>
              </div>
            </Box>
            {/* Your details */}
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <h2 style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                Jazgul Kanybekova
              </h2>
              <p>Your address</p>
            </section>
            {/* End of your details */}

            {/* Client's details */}
            <section style={{ marginTop: "5px" }}>
              <h2 style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                Client's name{" "}
              </h2>
              <p>Client's address</p>
            </section>
            {/* End of client's details */}

            {/* Dates */}
            <article
              style={{
                margin: "5px 0px",
                display: "flex",
                alignItems: "end",
                justifyContent: "flex-end",
              }}
            >
              <ul>
                <li>
                  <span style={{ fontWeight: "bold" }}>Invoicer number:</span>
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Invoice date:</span>
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Due date</span>
                </li>
              </ul>
            </article>
            {/* End of dates */}

            {/* Table */}
            <div style={{ margin: "5px 0px" }}>This is the table</div>
            {/* End of table */}

            {/* Notes*/}
            <section style={{ marginBottom: "5px" }}>
              <p>Notes to the client...</p>
            </section>
            {/* End of notes */}

            {/* Footer */}
            <Box>
              <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <li>
                  <span style={{ fontWeight: "bold" }}>Your name:</span> Jazgul
                  Kanybekova
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Your email:</span>{" "}
                  peri_04.03.02@mail.ru
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}> Phone number: </span>
                  +996550629228
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Bank:</span> Bank
                  Kyrgyzstan
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Account holder:</span>{" "}
                  Jazgul Kanybekova
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Account number: </span>
                  123 456 789
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Website:</span>{" "}
                  https://books.kg
                </li>
              </ul>
              {/* End of Footer */}
              <Button variant="outlined"> Edit information</Button>
            </Box>
          </>
        ) : (
          <>
            <TextField
              type="text"
              placeholder="Enter your name"
              autoComplete="off"
            />
            <Button>Preview information</Button>
          </>
        )}
      </Container>
    </>
  );
};

export default Invoice;
