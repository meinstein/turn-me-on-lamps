const ListItem = (dope, props) => {
  const Img = dope.make('img', {
    src: `https://storage.googleapis.com/turn-me-on-lamps/thumbnails/${props.thumbnail}`,
    style: {
      padding: '1.3rem',
      borderRight: '1px solid black',
      borderLeft: '1px solid black',
      width: '100%'
    }
  })

  const Title = dope.make('span', {
    text: props.title,
    style: {
      fontWeight: 600,
      borderTopLeftRadius: '8px',
      textTransform: 'capitalize',
      padding: '1.3rem',
      border: '1px solid black',
      width: '100%'
    }
  })

  const ImageLinks = dope.make('div', {
    style: {
      display: 'flex',
      fontSize: '0.8rem',
      padding: '1.3rem',
      border: '1px solid black',
      width: '100%'
    },
    children: props.images.map((image, idx) =>
      dope.make('a', {
        style: {
          textDecoration: 'none',
          marginRight: '0.3em'
        },
        target: '_blank',
        text: `IMG00${idx + 1}`,
        href: `https://storage.googleapis.com/turn-me-on-lamps/images/${image}`
      })
    )
  })

  const Categories = dope.make('div', {
    style: {
      display: 'flex',
      fontSize: '0.8rem',
      padding: '1.3rem',
      borderLeft: '1px solid black',
      borderRight: '1px solid black',
      borderBottom: '1px solid black',
      width: '100%',
      borderBottomRightRadius: '8px'
    },
    children: props.categories.map(category =>
      dope.make('a', {
        style: {
          textDecoration: 'none',
          marginRight: '0.3em'
        },
        text: `#${category}`,
        href: `#${category}`
      })
    )
  })

  return dope.make('div', {
    children: [Title, Img, ImageLinks, Categories],
    style: {
      padding: '1rem',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      minWidth: '300px',
      maxWidth: '300px'
    }
  })
}

export default ListItem
