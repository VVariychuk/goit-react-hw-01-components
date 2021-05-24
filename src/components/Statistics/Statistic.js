/* eslint-disable react/no-typos */
import PropTypes from 'prop-types';

export default function StatisticItm({ label, percentage }) {
    return (
        <li className="">
            <span className="">{label}</span>
            <span className="">{percentage}%</span>
        </li>
    );
}

StatisticItm.PropTypes = {    
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};


