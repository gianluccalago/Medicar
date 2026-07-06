import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'

// Code-splitting por rota — apenas a Home entra no bundle inicial
const About = lazy(() => import('./pages/About'))
const SolutionsBusiness = lazy(() => import('./pages/SolutionsBusiness'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const SolutionsPersonal = lazy(() => import('./pages/SolutionsPersonal'))
const LarProtegido = lazy(() => import('./pages/LarProtegido'))
const Clinic = lazy(() => import('./pages/Clinic'))
const Pet = lazy(() => import('./pages/Pet'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Contact = lazy(() => import('./pages/Contact'))
const ClientArea = lazy(() => import('./pages/ClientArea'))
const Legal = lazy(() => import('./pages/Legal'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="quem-somos" element={<About />} />
        <Route path="solucoes/empresa" element={<SolutionsBusiness />} />
        <Route path="solucoes/empresa/:slug" element={<ServicePage />} />
        <Route path="solucoes/para-voce" element={<SolutionsPersonal />} />
        <Route path="solucoes/lar-protegido" element={<LarProtegido />} />
        <Route path="clinica-medicar" element={<Clinic />} />
        <Route path="medicar-pet" element={<Pet />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="contato" element={<Contact />} />
        <Route path="area-do-cliente" element={<ClientArea />} />
        <Route path="politica-de-privacidade" element={<Legal doc="privacidade" />} />
        <Route path="termos-de-uso" element={<Legal doc="termos" />} />
        <Route path="politica-de-cookies" element={<Legal doc="cookies" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
