import classNames from 'classnames/bind';
import styles from './accountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/98ebabd8d0f4526988ecdfe908b3daa5~c5_100x100.jpeg?x-expires=1682049600&x-signature=2mpAdfvYRX8zmBWqfPDQNl4lDXo%3D"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van B</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvanb</span>
            </div>
        </div>
    );
}

export default AccountItem;
