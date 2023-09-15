import { BrowserRouter, Route, Routes } from "react-router-dom"

import Footer from "./components/Footer"

import React, { Suspense } from "react"
import Navbar from "./components/NavBar"
import LoadingScreen from "./components/Loader"

const TermsOfUse = React.lazy(() => import('./pages/TermsOfUse'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const BlogPageDescription = React.lazy(() => import('./pages/BlogPageDescription'));

const Home = React.lazy(() => import("./pages/Home"))
const WhoWeAre = React.lazy(() => import("./pages/WhoWeAre"))
const WhatWeDo = React.lazy(() => import("./pages/WhatWeDo"))
const GetAFreeQuote = React.lazy(() => import("./pages/GetAFreeQuote"))
const CaseStudies = React.lazy(() => import("./pages/CaseStudies"))
const CaseStudyDescription = React.lazy(() => import("./pages/CaseStudyDescription"))
const BlogsPage = React.lazy(() => import("./pages/BlogsPage"))



function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WhoWeAre" element={<WhoWeAre />} />
          <Route path="/WhatWeDo" element={<WhatWeDo />} />
          <Route path="/GetAFreeQuote" element={<GetAFreeQuote />} />
          <Route path="/CaseStudies" element={<CaseStudies />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/CaseStudies/:id" element={<CaseStudyDescription />} />
          <Route path="/Blogs" element={<BlogsPage />} />
          <Route path="/Blogs/:id" element={<BlogPageDescription />} />
          <Route path="/TermsOfUse" element={<TermsOfUse />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App
