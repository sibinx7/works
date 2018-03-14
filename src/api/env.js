const PROD_URL = 'http://7chip.com';
const DEV_URL = 'http://7chip.local';
const PROD_API= 'http://7chip.com/api';
const DEV_API =  'http://7chip.local/api';
const API_URL= process.env.NODE_ENV==='production'? PROD_API : DEV_API ;
const WEB_URL = process.env.NODE_ENV === 'production' ? PROD_URL : DEV_URL;
const settings = {
  API_URL,
  PORTFOLIO_URL: `${API_URL}/world/websites`,
  RESUME_URL: `${WEB_URL}/publicly/resume.pdf`
};

export default settings;