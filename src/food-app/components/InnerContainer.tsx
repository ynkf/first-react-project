import styles from './innercontainer.module.css';

export default function InnerContainer({
  children,
}: {
  children: JSX.Element;
}) {
  return <div className={styles.innerContainer}>{children}</div>;
}
