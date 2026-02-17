import React from "react";
import ShopNavbar from "@src/commonsections/ShopNavbar";
import WomenColting from "@src/commonsections/WomenCloting";
import FilterSection from "@app/(shop)/shop-packery-layout/FilterSection";
import FilterLine from "@app/(shop)/shop-packery-layout/FilterLine";
import CatSection from "@app/(shop)/shop-packery-layout/CatSection";
import TopBanner from "@src/components/Headers/TopBanner";
import PopupPage from "@src/components/Popup";
import HeadTitle from "@src/commonsections/HeadTitle";

const ShopPackeryLayout = () => {
    return (
        <React.Fragment>
            <HeadTitle title="Home Default" />
            <TopBanner />

            <ShopNavbar />

            <WomenColting />
            <div className="container">
                <FilterSection />
                <FilterLine />
                <CatSection />
            </div>
            <PopupPage />
        </React.Fragment>
    )
}
export default ShopPackeryLayout