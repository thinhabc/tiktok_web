import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    small = false,
    large = false,
    rounded = false,
    leftIcon,
    rightIcon,
    className,
    onClick,
    ...passProp
}) {
    let Comp = 'button';
    const classes = cx('wrapper', { [className]: className, primary, outline, text, disabled, small, large, rounded });
    const props = {
        onClick,
        ...passProp,
    };

    // remove event listener when buuton is disable
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
