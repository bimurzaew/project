import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    to,
    children,
    theme = AppLinkTheme.SECONDARY,
    ...otherProps
  } = props

  return (
      <Link
          to={to}
          {...otherProps}
          className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        >
          {children}
      </Link>
  )
}
