/* eslint-disable react/no-typos */
import PropTypes from 'prop-types';
import styles from './Statistic.module.css'
import { randomColor } from '../../data/random-color';
export default function StatisticItm({ label, percentage }) {
    return (
        <li className={styles.statListItm}
        style={{backgroundColor: randomColor()}}>
            <span className="">{label}</span>
            <span className="">{percentage}%</span>
        </li>
    );
}

StatisticItm.PropTypes = {    
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};


