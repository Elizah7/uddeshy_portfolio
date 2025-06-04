import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box
      className="section nav-link about"
      width="100%"
      id="about"
      gap="5%"
      paddingTop={["15%", "15%", "12%", "6%"]}
      textAlign="center"
      bgGradient="linear(to-r, gray.100, white)"
    >
      <Heading as="h1" fontSize={["3xl", "3xl", "4xl", "4xl"]}>
        About Me
      </Heading>
      <Box display={{ base: "block", md: "flex" }} alignItems="center" marginTop="4%">
        {/* Image Section */}
        <Box
          className="image-section"
          width={["80%", "75%", "40%", "30%"]}
          margin="auto"
          borderRadius="full"
          boxShadow="lg"
        >
          <Image
            src="https://ca.slack-edge.com/T0569PTR1QV-U056MRYC93L-149b1690a85b-512"
            alt="Uddeshy Jaiswal"
            borderRadius="full"
            boxShadow="lg"
            className="img-fluid home-img"
          />
        </Box>
        
        {/* Text Section */}
        <Box
          className="about-section"
          width={["95%", "98%", "50%", "50%"]}
          margin="auto"
          paddingX={["4", "6", "8"]}
          textAlign={{ base: "center", md: "left" }}
          id="user-detail-intro"
          paddingTop={{ base: "4", md: "0" }}
        >
          <Heading as="h1" fontSize={["2xl", "2xl", "3xl"]} mb={4}>
            A Full Stack MERN Developer
          </Heading>
          <Text fontSize={["md", "lg"]} color="gray.600">
            I am a Full Stack Web Developer with over 1200+ hours of coding experience, creating dynamic and responsive web applications. I have a strong background in front-end and back-end development, working with technologies like HTML, CSS, JavaScript, React, Redux, and APIs. 
            <br /><br />
            I am always keen on learning new technologies and staying updated with the latest trends in web development to deliver better solutions. My goal is to create efficient, user-friendly web applications with clean, scalable code.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export { About };
