const ChargesTable = ({ activeTab, handleTabChange }) => {
    return (
        <div className='row'>
            <div className="col-1"></div>
            <div className="col-10 border-bottom">
                <ul className="nav nav-underline">
                    <h4 className="nav-item">
                        {/* <Link className="nav-link p-3" to="/pricing/#tab-equities" >Equity</Link> */}
                        <button className="nav-link p-3" style={{ color: `${activeTab === "tab-equities" ? "GrayText" : ""}` }} onClick={() => handleTabChange("tab-equities")}>Equity</button>
                    </h4>
                    <h4 className="nav-item">
                        {/* <Link className="nav-link p-3" to="/pricing/tab-currency">Currency</Link> */}
                        <button className="nav-link p-3" style={{ color: `${activeTab === "tab-currency" ? "GrayText" : ""}` }} onClick={() => handleTabChange("tab-currency")}>Currency</button>
                    </h4>
                    <h4 className="nav-item">
                        {/* <Link className="nav-link p-3" to="/pricing/tab-commodities">Commodity</Link> */}
                        <button className="nav-link p-3" style={{ color: `${activeTab === "tab-commodities" ? "GrayText" : ""}` }} onClick={() => handleTabChange("tab-commodities")}>Commodity</button>
                    </h4>
                </ul>
            </div>
            <div className="col-1"></div>
        </div>
    );
};

export default ChargesTable;