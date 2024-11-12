import { appendbaseUrl } from '@/utils'

type LinkProps = {
  label: string
  url: string
}

export const Link = ({ label, url }: LinkProps) => {
  return (
    <li className="flex items-center">
      <a
        aria-label={label}
        className={`flex flex-1 w-full rounded-md p-2  hover:bg-persimmon-500 hover:text-white`}
        href={appendbaseUrl(url)}
      >
        {label}
      </a>
    </li>
  )
}
