import { Suspense } from "react"
import { Outlet } from "react-router-dom"

import { AppContainer } from "components/AppContainer/AppContainer"

export const Layout = () => {
    return (
        <div>
            <AppContainer />
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
        </div>
    )
}