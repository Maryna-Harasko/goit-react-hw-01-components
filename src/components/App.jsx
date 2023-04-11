import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import {FriendList} from "./FriendList/FriendList";
import user from "../data/user";
import data from "../data/data";
import friends from "../data/friends";
import transactions from "../data/transactions";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
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
      <FriendList dataFriends = {friends}/>
      <TransactionHistory dataTransac = {transactions}/>
    </div>
  );
};
