/* eslint-disable react/no-typos */
import PropTypes from 'prop-types';
import StatisticItm from './Statistic';

export default function StatsList({ title, statsData }) {
    return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}
            <ul className="stat-list">
                {statsData.map(({ id, label, percentage }) => (
                    <StatisticItm
                        key={id}
                        label={label}
                        percentage={percentage}
                    />
                ))}
            </ul>
        </section>  
    )
    
 };    

StatsList.PropTypes = {
    title: PropTypes.string,
    statsData: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),),
}
