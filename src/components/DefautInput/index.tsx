import styles from './styles.module.css';

type DefautInputProps = {
  labelText?: string;
  id: string;
} & React.ComponentProps<'input'>;

export function DefautInput({
  labelText,
  type,
  id,
  ...rest
}: DefautInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.defautInput} type={type} id={id} {...rest} />
    </>
  );
}
