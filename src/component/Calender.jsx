import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip'

const Calender = () => {
  return (
    <Box className='calender-dark' width={["100%","100%","100%","100%"]} >
      <Box paddingBottom="0px" pt='20px' >
        <Heading as="h1" fontSize={["3xl", "3xl", "4xl", "4xl"]}>Calendar & Stats</Heading>
        <Text className='statHeading' pb="25px" marginTop="20px">Check out my Github Calendar & Streak Stats</Text>
      </Box>
      <Box style={{ textAlign: 'center' }} className='calanderBox react-activity-calendar' data-aos="fade-up" >
        <GitHubCalendar username="Elizah7" >
          <ReactTooltip className="react-tool" delayShow={20} html />
        </GitHubCalendar>
      </Box>
      <Box className="statBox-dark" data-aos="fade-up" width={["100%", "100%", "100%", "100%"]} display={["block", "block", "flex", "flex"]} flexWrap="wrap" justifyContent="space-around" alignItems="center" rowGap="10px">

        <Box  width={["100%","100%","45%","45%"]} height={["200px","200px","280px","300px"]}>
          <Image id="github-streak-stats"  src="https://github-readme-streak-stats.herokuapp.com?user=elizah7" width='100%' alt="" height="100%"  />
        </Box>
        <Box  width={["100%","100%","45%","45%"]} height={["200px","200px","280px","300px"]}>
          <Image id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=elizah7" width='100%' alt="" height="100%"  />
        </Box>
        <Box  width={["100%","100%","45%","45%"]} height={["200px","200px","280px","300px"]}>
          <Image id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=elizah7" width='100%' alt="" height="100%" />
        </Box>

      </Box>

    </Box>
  )
}

export default Calender