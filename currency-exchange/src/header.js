import React from "react";
import "./styles.css";

const Header = () => {
    return (
        <div>
            <div className="block_exchange_name">
                <h1 className="exchange_name">Курс Валют до гривні</h1>
            </div>
            <input id="btnGet" type='button' value='Оновити курс'/>
        </div>
    )
}

export default Header