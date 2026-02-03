import React from "react";
import ShopNavbar from "@src/commonsections/ShopNavbar";
import WomenColting from "@src/commonsections/WomenCloting";
import FilterTab from "@src/commonsections/FilterTab";
import TopBanner from "@src/components/Headers/TopBanner";
import PopupPage from "@src/components/Popup";
import HeadTitle from "@src/commonsections/HeadTitle";

const LodeMore = () => {
    return (
        <React.Fragment>
             <HeadTitle title="Home Default" />
            <TopBanner />

            <ShopNavbar />

            <WomenColting />

            <FilterTab />

            <div className="d-flex justify-content-center mb-5">
                <button type="submit" className="btn-load btn btn-custom-dark fw-semibold min-w-150 rounded-pill">
                    Lorn more
                </button>
            </div>
            <PopupPage />
        </React.Fragment>
    )
}
export default LodeMore