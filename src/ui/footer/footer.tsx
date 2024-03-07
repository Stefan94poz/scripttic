"use client";
import * as React from "react";
import Box from "@mui/material/Box";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "next/link";
import { pages } from "@/libs/constants";

function Footer() {
  return (
    <Box width={"100%"} sx={{ backgroundColor: "#430e60" }}>
      <Container maxWidth="xl" className="footer">
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex", justifyContent: "center" },
          }}
        >
          {pages.map(({ href, label }) => (
            <Link href={href} key={label} style={{ padding: "15px" }}>
              {label}
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
export default Footer;
