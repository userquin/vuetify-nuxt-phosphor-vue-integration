import type { IconAliases, IconSet } from 'vuetify'
import { h, resolveComponent } from 'vue'

function toKebabCase(str = '') {
  if (toKebabCase.cache.has(str))
    return toKebabCase.cache.get(str)!

  const kebab = str
    .replace(/[^a-z]/gi, '-')
    .replace(/\B([A-Z])/g, '-$1')
    .toLowerCase()

  toKebabCase.cache.set(str, kebab)

  return kebab
}

toKebabCase.cache = new Map<string, string>()

const aliases = <IconAliases>{
  /* custom ones */
  heart: 'PhHeart',
  horse: 'PhHorse',
  /* vuetify aliases */
  calendar: 'PhCalendar',
  cancel: 'PhCircle',
  checkboxIndeterminate: 'PhCheckSquareOffset',
  checkboxOn: 'PhCheckSquare',
  checkboxOff: 'PhSquare',
  clear: 'PhCircle',
  /* more vuetify aliases here: SHOULD BE CHANGED */
  close: 'PhCircle',
  complete: 'PhCircle',
  delete: 'PhCircle',
  delimiter: 'PhCircle',
  dropdown: 'PhCircle',
  edit: 'PhCircle',
  error: 'PhCircle',
  expand: 'PhCircle',
  file: 'PhCircle',
  first: 'PhCircle',
  info: 'PhCircle',
  last: 'PhCircle',
  loading: 'PhCircle',
  menu: 'PhCircle',
  minus: 'PhCircle',
  next: 'PhCircle',
  plus: 'PhCircle',
  prev: 'PhCircle',
  radioOff: 'PhCircle',
  radioOn: 'PhCircle',
  ratingEmpty: 'PhCircle',
  ratingFull: 'PhCircle',
  ratingHalf: 'PhCircle',
  sortAsc: 'PhCircle',
  sortDesc: 'PhCircle',
  subgroup: 'PhCircle',
  success: 'PhCircle',
  unfold: 'PhCircle',
  warning: 'PhCircle',
}

const phosphor = <IconSet>{
  // @ts-expect-error Parameter props implicitly has an any type.
  component: (props) => {
    // eslint-disable-next-line no-console
    console.log(props)
    const { icon, ...rest } = props
    const stringIcon = icon as string
    return h(props.tag, rest, [
      h(resolveComponent(toKebabCase(aliases[icon as string])), {
        key: stringIcon,
      }),
    ])
  },
}

export { aliases, phosphor }
