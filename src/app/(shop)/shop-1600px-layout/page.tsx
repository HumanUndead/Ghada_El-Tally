import React from "react";
import ShopNavbar from "@src/commonsections/ShopNavbar";
import WomenColting from "@src/commonsections/WomenCloting";
import FilterTab from "@app/(shop)/shop-1600px-layout/FilterTab";
import TopBanner from "@src/components/Headers/TopBanner";
import PopupPage from "@src/components/Popup";
import HeadTitle from "@src/commonsections/HeadTitle";

const Index = () => {
    return (
        <React.Fragment>
            <HeadTitle title="Home Default" />
            <TopBanner />

            <ShopNavbar />

            <WomenColting />

            <div className="container shop-container">
                <FilterTab />
            </div>
            <PopupPage />
        </React.Fragment>
    )
}
export default Index