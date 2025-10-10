import styles from './styles.module.css';

type DefaultInputProps = {
  labelText?: string;
  id: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  labelText,
  type,
  id,
  ...props
}: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.defaultInput} type={type} id={id} {...props} />
    </>
  );
}
