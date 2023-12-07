/* --- resources --- */
import { Layout } from "Utils/Layout";

/* --- resources --- */
import MainLayout from "Layouts/MainLayout";

function Publication() {
    return <div>Publication</div>;
}

export default Layout(Publication, MainLayout, {
    title: "Publications",
});
