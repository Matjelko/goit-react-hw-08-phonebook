import { AppContainer } from "components/AppContainer/AppContainer"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"

export const Layout = ({ children }) => {
    return (
        <div>
            <AppContainer />
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
        </div>
    )
}