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
import AOS from "aos";
import "aos/dist/aos.css";

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
      company: "Metaphi Innovation",
      date: "September 2025 - May 2026",
      description: [
        "Developed and maintained multiple custom ERP (Enterprise Resource Planning) web applications using the MERN stack.",
        "Built and enhanced modules for inventory management, sales tracking, purchase management, and product lifecycle management.",
        "Designed and integrated RESTful APIs to streamline business workflows and improve system interoperability.",
        "Optimized backend services and database operations, improving application performance and scalability.",
        "Collaborated with cross-functional teams to deliver maintainable, scalable, and business-centric software solutions.",
        "Worked extensively with React.js, Node.js, Express.js, MongoDB, and modern web development practices.",
      ],
    },
    {
      id: 2,
      title: "MERN Stack Developer",
      company: "Kalvium",
      date: "October 2023 - June 2025",
      description: [
        "Contributed to the development and enhancement of Kalvium's Learning Management System (LMS) and Livebooks platform, serving students and educators across multiple programs.",
        "Developed responsive and reusable frontend components using React.js, improving user experience, accessibility, and platform consistency.",
        "Built and maintained key LMS features including student profiles, learning progress tracking, dashboards, and course management workflows.",
        "Integrated frontend applications with backend services through REST APIs, ensuring seamless data flow and system reliability.",
        "Collaborated closely with product managers, designers, and engineering teams to deliver new features and continuously improve platform functionality.",
        "Optimized application performance, state management, and code maintainability using React, Redux, and modern frontend architecture patterns.",
        "Worked with React.js, Node.js, Express.js, MongoDB, Redux, Chakra UI, Git, and RESTful APIs in an agile development environment.",
      ],
    },
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
      <Heading
        as="h1"
        fontSize={["3xl", "3xl", "4xl", "4xl"]}
        mb={10}
        color={headingColor}
        data-aos="fade-up"
      >
        Professional Experience
      </Heading>
      <VStack
        spacing={8}
        marginTop="4%"
        alignItems="center"
        px={["5%", "5%", "10%"]}
      >
        {experiences.map((exp) => (
          <Box
            key={exp.id}
            className="experience-card"
            p={6}
            bg={cardBg}
            shadow="xl"
            borderWidth="1px"
            borderRadius="lg"
            width={["90%", "85%", "70%", "80%"]}
            textAlign="left"
            data-aos="fade-up"
            data-aos-delay={`${exp.id * 100}`}
          >
            <Heading
              as="h3"
              fontSize={["xl", "2xl"]}
              color={headingColor}
              mb={1}
            >
              {exp.title}
            </Heading>
            <Text
              fontWeight="bold"
              fontSize={["md", "lg"]}
              color="teal.500"
              mb={1}
            >
              {exp.company}
            </Text>
            <Text
              fontStyle="italic"
              fontSize={["sm", "md"]}
              color={textColor}
              mb={4}
            >
              {exp.date}
            </Text>
            <List spacing={2}>
              {exp.description.map((point, index) => (
                <ListItem key={index} display="flex" alignItems="start">
                  <ListIcon as={MdCheckCircle} color="teal.500" mt={1} />
                  <Text color={textColor} fontSize={["sm", "md"]}>
                    {point}
                  </Text>
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
