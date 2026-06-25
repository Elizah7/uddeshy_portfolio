import React from "react";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { FaReact, FaHtml5, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { DiCss3, DiJavascript1 } from "react-icons/di";
import { SiChakraui, SiMongodb, SiRedux, SiExpress, SiJsonwebtokens, SiPostman } from "react-icons/si";
import { MdSettingsSuggest, MdGroups, MdChat, MdLightbulb, MdAccessTime } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import chatgpt from "../Resume/chat-gpt.png"
import claude from "../Resume/claude-ai.png"
import cursor from "../Resume/cursor-ai.png"
const Skills = () => {
  return (
    <>
      <Box
        className="section nav-link skills"
        textAlign="center"
        paddingTop={["15%", "15%", "12%", "3%"]}
      >
        <Heading as="h1" fontSize={["3xl", "3xl", "4xl", "4xl"]} mb={10}>
          Technical Skills
        </Heading>
        <SimpleGrid
          columns={["3", "3", "4", "5"]}
          alignItems="center"
          justifyContent="center"
          gap="4%"
          className="skills_child"
          width={["100%", "90%", "80%", "80%"]}
          margin="auto"
          data-aos="fade-up"
        >
          <Flex className="skills-card">
            <FaHtml5 className="img skills-card-img" color="rgb(44, 42, 42)" />
            <h4 className="skills-card-name">HTML</h4>
          </Flex>
          <Flex className="skills-card">
            <DiCss3 className="img skills-card-img" color="rgb(44, 42, 42)" />
            <h4 className="skills-card-name">CSS</h4>
          </Flex>
          <Flex className="skills-card">
            <DiJavascript1 className="img skills-card-img" color="rgb(44, 42, 42)" />
            <h4 className="skills-card-name">JavaScript</h4>
          </Flex>
          <Flex className="skills-card">
            <FaReact className="img skills-card-img" color="rgb(44, 42, 42)" />
            <h4 className="skills-card-name">React</h4>
          </Flex>
          <Flex className="skills-card">
            <SiRedux className="img skills-card-img" color="rgb(44, 42, 42)" />
            <h4 className="skills-card-name">Redux</h4>
          </Flex>
          <Flex className="skills-card">
            <FaNodeJs className="img skills-card-img" color="rgb(44, 42, 42)" />
            <h4 className="skills-card-name">NodeJs</h4>
          </Flex>
          <Flex className="skills-card">
            <SiExpress className="img skills-card-img" color="rgb(44, 42, 42)" />
            <h4 className="skills-card-name">Express</h4>
          </Flex>
          <Flex className="skills-card">
            <SiMongodb className="img skills-card-img" color="rgb(44, 42, 42)" />
            <h4 className="skills-card-name">MongoDB</h4>
          </Flex>
          <Flex className="skills-card">
            <FaGitAlt className="img skills-card-img" color="rgb(44, 42, 42)" />
            <h4 className="skills-card-name">Git</h4>
          </Flex>
          <Flex className="skills-card">
            <FaGithub className="img skills-card-img" color="rgb(44, 42, 42)" />
            <h4 className="skills-card-name">GitHub</h4>
          </Flex>
          <Flex className="skills-card">
            <SiPostman className="img skills-card-img" color="rgb(44, 42, 42)" />
            <h4 className="skills-card-name">REST API</h4>
          </Flex>
          <Flex className="skills-card">
            <SiJsonwebtokens className="img skills-card-img" color="rgb(44, 42, 42)" />
            <h4 className="skills-card-name">JWT</h4>
          </Flex>
          <Flex className="skills-card">
            <SiChakraui className="img skills-card-img" color="rgb(44, 42, 42)" />
            <h4 className="skills-card-name">Chakra-UI</h4>
          </Flex>
        </SimpleGrid>

        {/* Soft Skills Section */}
        <Box mt={20} textAlign="center" pb={10}>
          <Heading as="h1" fontSize={["3xl", "3xl", "4xl", "4xl"]} mb={10}>
            Soft Skills
          </Heading>
          <SimpleGrid
            columns={["3", "3", "4", "5"]}
            alignItems="center"
            justifyContent="center"
            gap="4%"
            width={["100%", "90%", "80%", "80%"]}
            margin="auto"
            data-aos="fade-up"
            className="skills_child"
          >

                  <Flex className="skills-card">
                <MdSettingsSuggest  className="img skills-card-img" color="rgb(44, 42, 42)"/>
                {/* <skill.icon size="40px" className="img skills-card-img" color="rgb(44, 42, 42)" /> */}
                <h4 className="skills-card-name">Problem Solving</h4>
              </Flex>
                    <Flex  className="skills-card">
                <MdGroups  className="img skills-card-img" color="rgb(44, 42, 42)"/>
                {/* <skill.icon size="40px" className="img skills-card-img" color="rgb(44, 42, 42)" /> */}
                <h4 className="skills-card-name">Collaboration</h4>
              </Flex>
                    <Flex className="skills-card">
                <MdChat  className="img skills-card-img" color="rgb(44, 42, 42)"/>
                {/* <skill.icon size="40px" className="img skills-card-img" color="rgb(44, 42, 42)" /> */}
                <h4 className="skills-card-name">Communication</h4>
              </Flex>
                    <Flex  className="skills-card">
                <MdLightbulb  className="img skills-card-img" color="rgb(44, 42, 42)"/>
                {/* <skill.icon size="40px" className="img skills-card-img" color="rgb(44, 42, 42)" /> */}
                <h4 className="skills-card-name">Critical Thinking</h4>
              </Flex>
                    <Flex className="skills-card">
                <MdAccessTime  className="img skills-card-img" color="rgb(44, 42, 42)"/>
                {/* <skill.icon size="40px" className="img skills-card-img" color="rgb(44, 42, 42)" /> */}
                <h4 className="skills-card-name">Time Management</h4>
              </Flex>
  
          </SimpleGrid>
        </Box>


           {/* Tolls And Platforms*/}
        <Box mt={20} textAlign="center" pb={10}>
          <Heading as="h1" fontSize={["3xl", "3xl", "4xl", "4xl"]} mb={10}>
            Tools And Platforms
          </Heading>
          <SimpleGrid
            columns={["3", "3", "4", "5"]}
            alignItems="center"
            justifyContent="center"
            gap="4%"
            width={["100%", "90%", "80%", "80%"]}
            margin="auto"
            data-aos="fade-up"
            className="skills_child"
          >

                  <Flex className="skills-card">
                    <img  className="img skills-card-img" color="rgb(44, 42, 42)" src={cursor} alt="cursor ai"/>
                {/* <MdSettingsSuggest  className="img skills-card-img" color="rgb(44, 42, 42)"/> */}
                {/* <skill.icon size="40px" className="img skills-card-img" color="rgb(44, 42, 42)" /> */}
                <h4 className="skills-card-name">Cursor AI</h4>
              </Flex>
                    <Flex  className="skills-card">
                 <img  className="img skills-card-img" color="rgb(44, 42, 42)" src={claude} alt="cursor ai"/>
                {/* <skill.icon size="40px" className="img skills-card-img" color="rgb(44, 42, 42)" /> */}
                <h4 className="skills-card-name">Claude AI</h4>
              </Flex>
                    <Flex className="skills-card">
                <img  className="img skills-card-img" color="rgb(44, 42, 42)" src={chatgpt} alt="cursor ai"/>
                {/* <skill.icon size="40px" className="img skills-card-img" color="rgb(44, 42, 42)" /> */}
                <h4 className="skills-card-name">Chat Gpt</h4>
              </Flex>
      
  
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

AOS.init();
export { Skills };
