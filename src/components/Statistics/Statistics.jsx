import { StatisticItem } from "components/StatisticItem/StatisticItem";
import PropTypes from 'prop-types';
import { Statistic, Title, List } from "./Statistics.styled";



export const Statistics = ({title, stats}) => {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}
      <List>{stats.map(({id, label, percentage}) => (
        <StatisticItem key={id} label = {label} percentage = {percentage}/>
      ))}
      </List>
    </Statistic>
  )
};

Statistics.prototype ={
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape([
      {
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      },
    ]) 
  ),
}