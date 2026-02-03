import React from "react";
import HomeSection from '@app/(shop)/shop-collection/HomeSection'
import CatSection from '@app/(shop)/shop-collection/CatSection'
import TopBanner from "@src/components/Headers/TopBanner";
import PopupPage from "@src/components/Popup";
import HeadTitle from "@src/commonsections/HeadTitle";
const ShopCollection = () => {
    return (
        <React.Fragment>
            <HeadTitle title="Home Default" />
            <TopBanner />

            <div>
                <HomeSection />
                <CatSection />
            </div>
            <PopupPage />
        </React.Fragment>
    )
}
export default ShopCollection