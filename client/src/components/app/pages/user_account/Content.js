import PaymentMethod from "./PaymentMethod";
import PersonalInformationForm from "./PersonalInformationForm";
import SecurityInformation from "./SecurityInformation";
import Settings from "./Settings";
import TripHistory from "./TripHistory";

export default function Content({ tab }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    let user = {
        name: "John Doe",
        email: "JohnDoe0@gmail.com",
        phone: "+10123456789",
        address: "21 XYZ St, Calgary, AB.",
    };

    if (tab === "tab1") {
        return (
            <PersonalInformationForm
                name={user.name}
                email={user.email}
                phone={user.phone}
                address={user.address}
                onFormSubmit={handleSubmit}
            />
        );
    } else if (tab === "tab2") {
        return <PaymentMethod/>;
    } else if (tab === "tab3") {
        return <SecurityInformation/>;
    } else if (tab === "tab4") {
        return <TripHistory/>;
    } else if (tab === "tab5") {
        return <Settings/>;
    }
}
