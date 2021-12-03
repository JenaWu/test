import logo from './logo.svg';
import './App.css';
import  {Amplify, API, Auth} from "aws-amplify";
// import awsExports from "./aws-exports";

const apiName = "apiUrl";

async function getHeaders() {
  return {
    headers: {
      Authorization: `Bearer ${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },
  };
}

async function load() {
  //get all devices;
  let res = [];
  const headers = await getHeaders();
  try {
    res = await API.get(apiName, `/groups/devices`, headers);
  } catch (err) {
    console.info("Read devices error:", err);
  }

  return res;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload454564564564564564545465464545.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
