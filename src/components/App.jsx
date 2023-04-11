import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import user from "../data/user";
import data from "../data/data";
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile dataUser = { user }/>
      <Statistics stats = {data} title/>
    </div>
  );
};
