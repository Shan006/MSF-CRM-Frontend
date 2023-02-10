import { createContext, useEffect, useState } from "react";

const LeadContext = createContext();

const LeadProvider = ({ children }) => {
  const [leadData, setLeadData] = useState([]);
  const [object, setObject] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    mobilePhone: "",
    source: "",
  });

  useEffect(() => {
    if (object != null) {
      if (leadData.length === 0) {
        leadData.push(object);
      } else {
        setLeadData([...leadData, object]);
      }
    }
  }, [object]);

  useEffect(() => {
    console.log(leadData);
  }, []);

  return (
    <LeadContext.Provider value={{ object, leadData, setObject, setLeadData }}>
      {children}
    </LeadContext.Provider>
  );
};

export { LeadContext, LeadProvider };
