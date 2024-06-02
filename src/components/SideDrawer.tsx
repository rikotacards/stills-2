import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
export const drawerWidth = 240;
const menuItems = [
  {label:'Home', path: '/' },
{  label: 'Create', path: '/create'},
 {label: 'Drafts', path: '/drafts'}
]
export const SideDrawer: React.FC = () => {
  const nav = useNavigate();
 
    return (
        <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        > <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton onClick={() => nav(item.path)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

        </Drawer>
    )
}