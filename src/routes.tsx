import React, { Suspense, lazy, ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import {PAGE_URL, SPINNER_DEFAULT} from './helpers/helpers'
import Layout from './components/layout/layout'
import SuspenseLoader from './components/suspense-loader/suspense-loader'

const Homepage = lazy(() => Promise.all([
    import('./components/homepage/homepage'),
    new Promise(resolve => setTimeout(resolve, SPINNER_DEFAULT))
]).then(([moduleExports]) => moduleExports))

const Contact = lazy(() => Promise.all([
    import('./components/contact/contact'),
    new Promise(resolve => setTimeout(resolve, SPINNER_DEFAULT))
]).then(([moduleExports]) => moduleExports))

const Resume = lazy(() => Promise.all([
    import('./components/resume/resume'),
    new Promise(resolve => setTimeout(resolve, SPINNER_DEFAULT))
]).then(([moduleExports]) => moduleExports))

const Projects = lazy(() => Promise.all([
    import('./components/projects/projects'),
    new Promise(resolve => setTimeout(resolve, SPINNER_DEFAULT))
]).then(([moduleExports]) => moduleExports))

interface RoutesInterface {
    element: ReactElement
    path: string
}

const RoutesController = () => {
    const ROUTES = [
        { element: <Homepage />, path: PAGE_URL.HOMEPAGE },
        { element: <Contact />, path: PAGE_URL.CONTACT },
        { element: <Resume />, path: PAGE_URL.RESUME },
        { element: <Projects />, path: PAGE_URL.PROJECTS },
        { element: <Homepage />, path: '*' }
    ]

    const renderRoutes = () => {
        return ROUTES.map((data: RoutesInterface) => (
            <Route { ...data } key={ data.path }/>
        ))
    }

    return (
        <Layout>
            <Suspense fallback={ <SuspenseLoader /> }>
                <Routes>
                    { renderRoutes() }
                </Routes>
            </Suspense>
        </Layout>
    )
}

export default RoutesController
