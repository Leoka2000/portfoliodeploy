import { Container, Typography, Grid, Divider } from "@mui/material";
import { useEffect, useContext } from "react";
import { ColorModeContext } from "../../../../pages/_app";
import MainTitleAnimation from "../../../gsap/MainTitleAnimation";
import { centeredStyles } from "../Perks/Perks";
import ToolCard from "./ToolCard";
import gsap from "gsap";

// Updated dummyIconsArray with all tools
const dummyIconsArray = [
  {
    title: "Django - Python",
    svg: "/icons/django.svg",
    isBackend: true,
    filter: false,
  },
  {
    title: "Laravel - PHP",
    svg: "/icons/laravel.svg",
    isBackend: true,
    filter: false,
  },
  {
    title: "ASP.NET - C#",
    svg: "/icons/aspnet.svg",
    isBackend: true,
    filter: false,
  },
  {
    title: "Angular",
    svg: "/icons/angular.svg",
    isBackend: false,
    filter: false,
  },
  {
    title: "JavaScript",
    svg: "/icons/js.svg",
    isBackend: false,
    filter: false,
  },
  {
    title: "ReactJS",
    svg: "/icons/reactjs.svg",
    isBackend: false,
    filter: false,
  },
  {
    title: "TypeScript",
    svg: "/icons/typescript.svg",
    isBackend: false,
    filter: false,
  },
  {
    title: "TailwindCSS",
    svg: "/icons/tailwindcss.svg",
    isBackend: true,
    filter: false,
  },
];

const dummyIconsArrayBackend = [
  {
    title: "MySQL",
    svg: "/icons/mysql.svg",
    isBackend: true,
    filter: false,
  },
  {
    title: "PostgreSQL",
    svg: "/icons/postgresql.svg",
    isBackend: true,
    filter: false,
  },
  {
    title: "GraphQL",
    svg: "/icons/graphql.svg",
    isBackend: true,
    filter: false,
  },
  {
    title: "Docker",
    svg: "/icons/docker.svg",
    isBackend: true,
    filter: false,
  },
  {
    title: "AWS",
    svg: "/icons/aws.svg",
    isBackend: true,
    filter: true,
  },
  {
    title: "Redis DB",
    svg: "/icons/redis.svg",
    isBackend: true,
    filter: false,
  },
  {
    title: "Jira",
    svg: "/icons/jira.svg",
    isBackend: true,
    filter: false,
  },
  {
    title: "Jenkins",
    svg: "/icons/jenkins.svg",
    isBackend: true,
    filter: false,
  }
];

const TechTools = () => {
  // Combine FrontendTools and OtherTools into a single Tools array
  const Tools = dummyIconsArray;

  const ToolsBackend = dummyIconsArrayBackend;

  const colorMode = useContext(ColorModeContext);

  const isfilterMode = (item: any) =>
    colorMode?.mode === "light" ? false : item?.filter;

  useEffect(() => {
    MainTitleAnimation(".title1", ".title2");
    gsap.to(".secondTitle", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".secondTitle",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          margin: "0 auto",
          py: {
            xs: "6em",
          },
        }}
      >
        <Grid container>
          <Grid item sx={centeredStyles}>
            <Typography
              className="title1 t25o0"
              variant="h1"
              sx={{
                fontSize: {
                  xs: "2.2em",
                  sm: "2.5em",
                  md: "3em",
                 
                },
                 mb:"3rem"
              }}
              fontWeight="600"
            >
              Tools Of The Present And Future
            </Typography>
            <Typography
              variant="h2"
              className="secondary title2 t25o0"
              sx={{
                pt: "1.5em",
                maxWidth: "570px",
                fontSize: {
                  xs: ".8em",
                  sm: "1em",
                },
              }}
            >
             Technologies I prefer using.
            </Typography>
          </Grid>
          <Grid
            sx={{
              ...centeredStyles,
              flexDirection: "row",
              justifyContent: {
                xs: "center",
              },
              mt: "1em",
              flexWrap: "wrap",
            }}
            xs={12}
            item
          >
            {Tools.map((item) => (
              <ToolCard
                className={item.isBackend ? "toolCard2" : "toolCard1"}
                filter={isfilterMode(item)}
                svg={item.svg}
                title={item.title}
                key={item.title}
              />
            ))}
          </Grid>
          <Grid item sx={centeredStyles}>
            <Typography
              variant="h2"
              className="secondary title2 t25o0"
              sx={{
                pt: "3em",
                maxWidth: "570px",
                fontSize: {
                  xs: ".8em",
                  sm: "1em",
                },
              }}
            >
             My picks for database and DevOps oriented technologies
            </Typography>


          </Grid>
          <Grid
            sx={{
              ...centeredStyles,
              flexDirection: "row",
              justifyContent: {
                xs: "center",
              },
              mt: "1em",
              flexWrap: "wrap",
            }}
            xs={12}
            item
          >
            {ToolsBackend.map((item) => (
              <ToolCard
                className={item.isBackend ? "toolCard2" : "toolCard1"}
                filter={isfilterMode(item)}
                svg={item.svg}
                title={item.title}
                key={item.title}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
      <Divider />
    </>
  );
};

export default TechTools;
