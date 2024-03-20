import React from "react";
import Banner from '../../components/Banner/index';
import Item from '../../components/Item/index';

// 引入 data
import FeaturesItemData from "../../data/FeaturesItemData.json";
// 引入图标图片
import iconChat from "../../assets/icons/icon-chat.webp";
import iconMoney from "../../assets/icons/icon-money.webp";
import iconSecurity from "../../assets/icons/icon-security.webp";

import "./index.css";

function Home() {
    const imageData = {
        "icon-chat.webp": iconChat,
        "icon-money.webp": iconMoney,
        "icon-security.webp": iconSecurity
    }

    return (
        <div className='homepage'>
            <main>
                <Banner />
                <section className="features">
                    <h2 className='sr-only'>Features</h2>
                    {FeaturesItemData.map((data) => (
                        <Item
                            key={data.id}
                            image={imageData[data.iamge]}
                            descriptionImage={data.descriptionImage}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </section>
            </main>
        </div>
    )
}

export default Home;