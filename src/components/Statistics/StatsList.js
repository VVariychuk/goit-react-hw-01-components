/* eslint-disable react/no-typos */
import PropTypes from 'prop-types';
import StatisticItm from './Statistic';
import styles from './StatsList.module.css'

export default function StatsList({ title, statsData }) {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.statList}>
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
