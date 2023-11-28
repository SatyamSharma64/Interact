import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Interact
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "0.75rem" }}>
          Welcome to Interact, Have a Look into the working: 
        </Typography>
        <Typography fontWeight="300" variant="h5" sx={{ mb: "0.75rem" }}>
          Email: arthur@gmail.com
        </Typography>
        <Typography fontWeight="300" variant="h5" sx={{ mb: "1rem" }}>
          Password: arthurlewin
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
