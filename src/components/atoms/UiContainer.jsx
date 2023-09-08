import useMediaQuery from 'assets/js/useMediaQuery';
import cx from 'classnames';

const UiContainer = ({ tablet, pc, children, className }) => {
  const res = useMediaQuery(900);

  return (
    <>
      {res ? (
        <div className={cx(res && tablet, className)}>{children}</div>
      ) : (
        <div className={cx(!res && pc, className)}>{children}</div>
      )}
    </>
  );
};

export default UiContainer;
