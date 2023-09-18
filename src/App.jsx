import { BrowserRouter, Route, Routes } from "react-router-dom"
import React, { Suspense } from "react"
import LoadingScreen from "./components/Loader"
import ConstantSection from "./pages/ConstantSection"



const TermsOfUse = React.lazy(() => import('./pages/TermsOfUse'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const BlogPageDescription = React.lazy(() => import('./pages/BlogPageDescription'));







const Home = React.lazy(()=> import("./pages/Home")) 
const WhoWeAre = React.lazy(()=> import("./pages/WhoWeAre")) 
const WhatWeDo = React.lazy(()=> import("./pages/WhatWeDo")) 
const GetAFreeQuote = React.lazy(()=> import("./pages/GetAFreeQuote")) 
const CaseStudies = React.lazy(()=> import("./pages/CaseStudies")) 
const CaseStudyDescription = React.lazy(()=> import("./pages/CaseStudyDescription")) 
const BlogsPage = React.lazy(()=> import("./pages/BlogsPage")) 



function App() {
  
// this changes entirely
  return (<BrowserRouter>
  
  <Suspense fallback={<LoadingScreen />}>
<Routes>

        
<Route path="/" element={<ConstantSection />} >


<Route index element={<Home />} />
  <Route path="WhatWeDo"  element={<WhatWeDo />} />
  <Route path="WhoWeAre" element={<WhoWeAre />} />
  <Route path="CaseStudies" element={<CaseStudies  />} />
  <Route path="Pricing" element={<Pricing  />} />
  <Route path="GetAFreeQuote" element={<GetAFreeQuote />} />
  <Route path="Blogs" element={<BlogsPage />} />
  <Route path="Blogs/:id" element={<BlogPageDescription /> } />
  <Route path="CaseStudies/:id" element={<CaseStudyDescription  />} />
  <Route path="TermsOfUse" element={<TermsOfUse />} />
  <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
</Route>
 
 
     
</Routes>
</Suspense>

  
  </BrowserRouter>
    
  )
}

export default App
