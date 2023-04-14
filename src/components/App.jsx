import { GlobalStyle } from "./GlobalStyle";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import {FriendList} from "./FriendList/FriendList";
import user from "../data/user";
import data from "../data/data";
import friends from "../data/friends";
import transactions from "../data/transactions";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { Layout } from "./Layout";

export const App = () => {
  return (
    <Layout>
      <GlobalStyle/>
      <Profile dataUser={ user }/>
      <Statistics stats={data} title/>
      <FriendList dataFriends={friends}/>
      <TransactionHistory dataTransac={transactions}/>
    </Layout>
  );
};
