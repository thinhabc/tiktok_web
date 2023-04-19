import classNames from 'classnames/bind';
import styles from './sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <asign className={cx('wrapper')}>
            <h2>sidebar</h2>
        </asign>
    );
}

export default Sidebar;
