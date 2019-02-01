import { withProps } from 'https://unpkg.com/domdope'

import ListItem from './ListItem.js'

const List = (dope, props) => {
  if (!props.data) {
    return dope.make(null)
  }

  const ListItems = props.data
    .filter(({ categories }) => {
      if (!props.category) {
        return true
      }
      return categories.includes(props.category)
    })
    .map(lampData => withProps(ListItem, lampData))

  return dope.make('div', {
    children: ListItems,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  })
}

export default List
