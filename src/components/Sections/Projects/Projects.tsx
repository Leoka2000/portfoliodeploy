import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { centeredStyles } from "../Perks/Perks";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import MainTitleAnimation from "../../../gsap/MainTitleAnimation";
import gsap from "gsap";

// Dummy data to replace server actions
const dummyProjectsArray = [
  {
    siteUrl: "https://fundhance.co.uk/",
    repoUrl: "",
    title: "FundHance",
    img: "/mockups/fundhancemockerup.png",
    description:
      "The Fundhance white-label software is a powerful tool for prop firms seeking to optimize their operations and drive growth. By automating tasks, enhancing risk management, and increasing profitability, the software offers a comprehensive solution. With the potential to reduce manual work by up to 30% and boost profits by 25%, Fundhance's software provides a competitive edge in the prop firm industry.",
  },
  {
    siteUrl: "https://megyamelo.fly.dev/",
    repoUrl: "https://github.com/Leoka2000/megyamelo.git",
    title: "Megy a Meló",
    img: "/mockups/megymockup.png",
    description:
      "Application developed to help students of Hungarian universities to get jobs. It is currently being used by a variaety of students of different institutions in the country.",
  },
  {
    siteUrl: "https://setimaideaink.netlify.app/",
    repoUrl: "https://github.com/Leoka2000/LuckyzLinez",
    title: "Sétima idea ink",
    img: "/mockups/cauanmockup.png",
    description: "Custom portfolio website I made for a freelance client. ",
  },
  {
    siteUrl: "https://futche.fly.dev/",
    repoUrl: "https://github.com/Leoka2000/e-commerce-website",
    title: "Futche",
    img: "/mockups/leocafemockup.png",
    description:
      'My first "complex" web app. It is always good to look back and see how much we can improve over the years.',
  },
];

const Projects = () => {
  useEffect(() => {
    MainTitleAnimation(".title3", ".title4");

    setTimeout(() => {
      for (let i = 0; i < dummyProjectsArray.length; i++) {
        gsap.to(`.p${i}`, {
          duration: 0.8,
          transform: "translateX(0%)",
          ease: "easeIn",
          scrollTrigger: {
            trigger: `.p${i}`,
            start: "top 60%",
          },
        });
      }
    }, 100);
  }, []);

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Container
        id="ProjectSection"
        maxWidth="lg"
        sx={{
          margin: "0 auto",
          py: "6em",
        }}
      >
        <Grid container>
          <Grid item sx={centeredStyles}>
            <Typography
              className="title3 t25o0"
              variant="h1"
              sx={{
                fontSize: {
                  xs: "2.2em",
                  sm: "2.5em",
                  md: "3em",
                },
              }}
              fontWeight="600"
            >
              Successful Projects I&apos;m Proud Of
            </Typography>
            <Typography
              className="title4 t25o0"
              variant="h2"
              sx={{
                pt: "1.5em",
                maxWidth: "570px",
                fontSize: {
                  xs: ".8em",
                  sm: "1em",
                },
              }}
            >
              No better way to get experience than real-life projects
            </Typography>
          </Grid>
          <Box sx={{ ...centeredStyles, mt: "3em" }}>
            {dummyProjectsArray.map((project: any, index: number) => (
              <ProjectCard
                className={`p${index}`}
                isReversed={index % 2 === 0}
                siteUrl={project.siteUrl}
                repoUrl={project.repoUrl}
                title={project.title}
                img={project.img}
                description={project.description}
                key={project.title}
              />
            ))}
          </Box>
          <Box sx={{ margin: "0 auto", mt: "3em" }}>
            <Tooltip title="More Projects Soon">
              <Button
                className="loadMore"
                variant="contained"
                sx={{
                  opacity: 0,
                  padding: ".5em 3.5em",
                  background: "transparent",
                  border: "1px solid",
                  color: "#0092ff",
                  ":hover": {
                    border: "1px solid transparent",
                  },
                }}
              >
                Load More
              </Button>
            </Tooltip>
          </Box>
        </Grid>
      </Container>
      <Divider className="divider" />
    </Box>
  );
};

export default Projects;
