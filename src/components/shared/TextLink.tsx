interface Props {
  to: string
  label?: string
}
export const TextLink = (props: Props) => {
  const to = props.to
  const label = props.label ? props.label : to
  return (
    <>
      <a className="text-blue-700 underline hover:no-underline" href={to}>{label}</a>
    </>
  )
}
