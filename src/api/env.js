let hostname = window.location.hostname
let API_URL = "http://7chip.local";

if(hostname === "works.7chip.com"){
  API_URL = "http://7chip.com";
}

const settings = {
  API_URL,
  PORTFOLIO_URL: `${API_URL}/api/world/websites`
};

export default settings;