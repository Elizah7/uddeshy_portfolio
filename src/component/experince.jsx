import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md"; // Using react-icons as in your Home component
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.700", "white");

  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const experiences = [
    {
      id: 1,
      title: "Software Developer",
      company: "Metaphi",
      date: "September 2025 - Present", // Updated based on your input
      description: [
        "Developed and maintainedcustom ERP (Enterprise Resource Planning) web application using the MERN stack to manage business operations such as inventory, sales, purchases, and product management"
   ] },
    {
      id: 2,
      title: "MERN Developer",
      company: "Kalvium",
      date: "October 2023 - June 2025", // Updated based on your input
      description: [
        "Developed and maintained full-stack web applications utilizing MERN stack technologies.",
        "Designed responsive, user-friendly interfaces, including a comprehensive redesign of Student Profile UI.",
        "Collaborated in code reviews to ensure maintainable and scalable code quality.",
        "Debugged application performance issues across frontend and backend component spearheaded the development of multiple real-world projects.",
        "Integrated RESTful APIs to enhance full-stack features for internal platforms."
      ],
    }
  ];

  return (
    <Box
      className="section nav-link experience"
      id="experience"
      width="100%"
      paddingTop={["15%", "15%", "12%", "6%"]}
      paddingBottom="50px"
      textAlign="center"
      bgGradient="linear(to-r, gray.100, whiteAlpha.700)"
      minHeight="70vh"
    >
      <Heading as="h1" fontSize={["3xl", "3xl", "4xl", "4xl"]} mb={10} color={headingColor} data-aos="fade-up">
        Professional Experience
      </Heading>
      <VStack spacing={8} marginTop="4%" alignItems="center" px={["5%", "5%", "10%"]}>
        {experiences.map((exp) => (
          <Box
            key={exp.id}
            className="experience-card"
            p={6}
            bg={cardBg}
            shadow="xl"
            borderWidth="1px"
            borderRadius="lg"
            width={["90%", "85%", "70%", "60%"]}
            textAlign="left"
            data-aos="fade-up"
            data-aos-delay={`${exp.id * 100}`}
          >
            <Heading as="h3" fontSize={["xl", "2xl"]} color={headingColor} mb={1}>
              {exp.title}
            </Heading>
            <Text fontWeight="bold" fontSize={["md", "lg"]} color="teal.500" mb={1}>
              {exp.company}
            </Text>
            <Text fontStyle="italic" fontSize={["sm", "md"]} color={textColor} mb={4}>
              {exp.date}
            </Text>
            <List spacing={2}>
              {exp.description.map((point, index) => (
                <ListItem key={index} display="flex" alignItems="start">
                  <ListIcon as={MdCheckCircle} color="teal.500" mt={1} />
                  <Text color={textColor} fontSize={["sm", "md"]}>{point}</Text>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export { Experience };