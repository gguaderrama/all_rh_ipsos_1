import * as React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Code from '@material-ui/icons/Code'
import Collapse from '@material-ui/core/Collapse'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'

const { useState, useCallback } = React

const styles = {
  title: {
    // marginTop: 40,
    // marginBottom: 0,
  },
  root: {
    margin: '20px auto',
  },
  toolbar: {
    // display: 'flex',
    // alignItems: 'center',
  },
  toolbarSpacer: {
    // flex: '1 1 auto',
  },
  code: {
    margin: 0,
    // padding: 20,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  example: {
    backgroundColor: '#eee',
    borderRadius: 4,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 40,
  },
  titleAnchor: {
    color: '#aaa',
    marginLeft: 10,
    textDecoration: 'none',
    visibility: 'hidden',
    '$title:hover > &': {
      visibility: 'visible',
    },
  },
}

const Demo = ({
  headerId,
  classes,
  title,
  code,
  example,
  hooksCode,
  hooksExample,
}) => {
  const [showSource, setShowSource] = useState(false)
  const [api, setApi] = useState('hooks')
  const setRenderProps = useCallback(() => setApi('render-props'), [])
  const setHooks = useCallback(() => setApi('hooks'), [])
  return (
    <div>
      {api === 'hooks' ? hooksExample || example : example || hooksExample}
    </div>
  )
}

export default withStyles(styles)(Demo)
