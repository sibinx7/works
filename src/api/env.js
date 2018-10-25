const API_URL= process.env.NODE_ENV==='production'? 'http://7chip.com/api':'http://7chip.local/api';
const settings = {
  API_URL,
  PORTFOLIO_URL: `${API_URL}/world/websites`
};

export default settings;