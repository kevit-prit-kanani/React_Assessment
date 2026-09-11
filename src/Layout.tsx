import { Link, Outlet } from "react-router-dom";

export function Layout() {
    return (
        <>
            <div className="flex w-full flex-col items-center justify-center pb-5">
                <nav className="flex flex-wrap items-center justify-center gap-4">
                    <Link to="/simpleCounter" className="text-blue-500 hover:underline">Counter</Link>|
                    <Link to="/reduxCounter" className="text-blue-500 hover:underline">Redux Counter</Link>|
                    <Link to="/home" className="text-blue-500 hover:underline">Home</Link>|
                    <Link to="/about" className="text-blue-500 hover:underline">About</Link> |
                </nav>
            </div>
            <Outlet />
        </>
    )
}