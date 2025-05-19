import { useEffect, useState } from 'react';
import Hero from './Hero.jsx';
import ChargesTable from './ChargesTable.jsx';
import ChargesExp from './ChargesExplained.jsx';
import ChargesTableBottom from './ChargesTableBottom.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import Currency from './Currency.jsx';
import Commodities from './Commodities.jsx';
import Equities from './Equities.jsx';

const Pricing = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentTab = () => {
    if (location.hash === '#tab-equities' || location.hash === '#tab-currency' || location.hash === '#tab-commodities') {
      return location.hash.substring(1); // Remove the # symbol
    }
    return 'tab-equities'; // Default tab
  };

  const [activeTab, setActiveTab] = useState(getCurrentTab());

  useEffect(() => {
    navigate(`${location.pathname}#${activeTab}`, { replace: true });
  }, [activeTab, navigate, location.pathname]);

  useEffect(() => {
    setActiveTab(getCurrentTab());
  }, [location.hash]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='container'>
      <Hero />
      <ChargesTable activeTab={activeTab} handleTabChange={handleTabChange} />
      {activeTab === "tab-equities" && <Equities />}
      {activeTab === "tab-currency" && <Currency />}
      {activeTab === "tab-commodities" && <Commodities />}
      <ChargesExp />
      <ChargesTableBottom />
    </div>
  );
};

export default Pricing;