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
      title: "Tech Mentor",
      company: "Kalvium",
      date: "October 2023 - Present", // Updated based on your input
      description: [
        "Provide hands-on MERN Stack development expertise and mentor BCA/B.Tech students in Web Development, Object-Oriented Programming (OOP), and Database Management Systems (DBMS).",
        "Deliver engaging live instructional sessions, offer comprehensive project guidance, and conduct thorough code reviews providing personalized, constructive feedback.",
        "Contributed significantly to company products, including the development of the Student Profile UI on the Livebooks platform, ensuring a responsive and user-friendly interface.",
        "Spearheaded the development of multiple real-world projects, including a Durga Puja community website with donation tracking, a Cloudinary-based donation management system, a personal portfolio website, and a MERN-stack live streaming application.",
        "Proficiently utilized a tech stack comprising React.js, Node.js, Express.js, MongoDB, Chakra UI, Redux."
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