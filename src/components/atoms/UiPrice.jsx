import styles from '@scss_comp/atoms/UiPrice.module.scss';

const UiPrice = num => {
  console.log(num);
  return (
    <>
      <span className={styles.price}>
        ₩{num.num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </span>
    </>
  );
};

export default UiPrice;
