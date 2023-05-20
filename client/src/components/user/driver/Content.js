import Index from "./index";
import Settings from "./Settings";
import TripHistory from "./TripHistory";

export default function Content({ tab }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    if (tab === "tab1") return <Index />;
    else if (tab === "tab2") return <TripHistory />;
    else if (tab === "tab3") return <Settings />;
    else if (tab === "tab4") return <Settings />;
}
