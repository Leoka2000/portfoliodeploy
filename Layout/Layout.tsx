import { Box,  } from "@mui/material";
import  Head  from "next/head";
import { useState } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import { ILayout } from "../src/Types/Types";
import CustomDrawer from "../src/components/Drawer/Drawer";
import Footer from "../src/components/Footer/Footer";


// @ts-nocheck

const Layout = ({navbarSx, title ,children ,desc } : ILayout) => {
  const [isOpen,setOpen] = useState(false)
    const toggleDrawer = (state?:boolean) => {
      setOpen(state !== undefined ? state : !isOpen)
    }

  return (

    <>
    <Head >
        <title>{title || "Leo Reus Personal Portfolio| Web Developer"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="https://res.cloudinary.com/dwcu3wcol/image/upload/v1657099811/log_nkmcys.jpg" />
  
   
    
<meta name="description" content={`${desc || 'Leo Reus'}`} />


<meta property="og:title" content="Leo Reus Personal Portfolio | Web Developerr" />


<meta property="og:url" content="https://leoreusportfolio.netlify.app/" />


<meta property="og:description" content="Leo  | Web Developer based in Hungary. And this is my Portfolio and my blog "/>


<meta property="og:image" content="https://res.cloudinary.com/dwcu3wcol/image/upload/v1658929513/log-removebg-preview_fygpsd.png"/>

{/* <!-- Og Type -->
<meta property="og:type" content="article" /> */}
   
   
   <meta httpEquiv="content-language" content="en"/>
    <meta charSet="UTF-8"/>
    <meta name="robots" content="index, follow"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    {/* <meta name="description" content="Site Meta Description" /> */}
    <meta name="keywords" content="Personal Portfolio" />
    <meta name="author" content="Leo Reus" />
    <meta name="publisher" content="publisher"/>
    <meta name="copyright" content="copyright"/>
    <meta name="page-topic" content="Web Development"/>
    <meta name="page-type" content="Blogging"/>
    <meta name="audience" content="Everyone"/>
    </Head> 
    <Navbar toggleDrawer={toggleDrawer} navbarSx={navbarSx}/>
    <CustomDrawer isOpen={isOpen} toggleDrawer={toggleDrawer}/>
    <Box 
     className="site-content">
      {children}
    </Box>
    <Footer />
  </>
  )


}
 
 
  



export default Layout; 