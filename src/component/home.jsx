import { Box, Button, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import resume from "../Resume/Uddeshy_2025.pdf"
import { FiDownload } from "react-icons/fi";

const Home = () => {
  const handleClick2 = () => {
    window.open(resume);
  };

  return (
    <Box
      className="section nav-link home"
      width="100%"
      display={{ base: "block", md: "flex" }}
      gap="5%"
      pt={["15%", "15%", "12%", "6%"]}
      bgGradient="linear(to-r, gray.200, white)"
      minHeight="100vh"
      alignItems="center"
    >
      <Box
        className="about-section"
        width={["80%", "98%", "45%", "50%"]}
        margin="auto"
        paddingTop="1%"
        textAlign={{ base: "center", md: "left" }}
      >
        <Heading as="h1" fontSize={["2xl", "3xl", "4xl"]} fontWeight="bold">
          Hi,
        </Heading>
        <Heading
          as="h1"
          id="user-detail-name"
          fontSize={["2xl", "3xl", "4xl"]}
          color="black.500"
          mb={2}
        >
          I am Uddeshy Jaiswal
        </Heading>
        <Heading as="h1" fontSize={["xl", "2xl", "3xl"]} color="gray.600">
          A Full Stack MERN Developer
        </Heading>
        <Text mt={4} fontSize={["md", "lg"]} color="gray.700">
          Passionate about building and deploying scalable applications with MERN stack.
        </Text>
        <Box paddingTop="70px">
          <Link href={resume} id="resume-button" download>
            <Button
              id="resume-button-2"
              onClick={handleClick2}
              leftIcon={<FiDownload />}
              colorScheme="teal"
              size="lg"
              variant="solid"
              _hover={{ bg: "teal.400" }}
            >
              Download Resume
            </Button>
          </Link>
        </Box>
      </Box>

      <Box
        width={["80%", "75%", "45%", "35%"]}
        margin="auto"
        paddingTop={["8%", "8%", "0", "0"]}
        className="image-section2"
        display="flex"
        justifyContent="center"
        alignItems="center"

      >
        <Image
          src="https://tse4.mm.bing.net/th?id=OIP.hQR3_tCL_phZgIK80wnOcAHaFj&pid=Api&P=0&h=180"
          alt="Coding Animation"
          boxShadow="lg"
          borderRadius="lg"
          width="100%"
        />
      </Box>
    </Box>
  );
};

export { Home };
