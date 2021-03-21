import React from 'react'

import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import FolderIcon from '@material-ui/icons/Folder'

interface WorkProps {
  href: string;
  primary: string;
  secondary: string;
}

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

const WorkItems: React.FC<WorkProps> = (props: WorkProps) => {

  return (
    <ListItem>
      <ListItemLink href={props.href}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.primary} secondary={props.secondary} />
      </ListItemLink>
    </ListItem>
  );
}

export default WorkItems;
