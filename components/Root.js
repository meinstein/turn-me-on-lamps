import List from './List.js'

const Root = dope => {
  return dope.make('div', {
    style: { width: '100%' },
    children: [List]
  })
}

export default Root
