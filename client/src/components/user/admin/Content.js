import Index from "./index";
import Settings from "./Settings";

export default function Content({ tab }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    if (tab === "tab1") return <Index />;
    else if (tab === "tab2") return <Settings />;
    else if (tab === "tab3") return <Settings />;
}
