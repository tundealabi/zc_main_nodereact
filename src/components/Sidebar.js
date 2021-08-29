import React from 'react';
import { URLContext } from '../App';
import ArrowDown from '../assets/shapekeyboardarrowdown2.svg'
import NewMessage from '../assets/newmessage.svg'
import AddIcon from '../assets/addicon.svg'
import avatar1 from '../assets/avatar2.svg'
import avatar2 from '../assets/avatar1.svg'

import styles from '../styles/Sidebar.module.css';
// import channels from '../lib/channels';

const fetcher = url => fetch(url).then(res => res.json());

export const Sidebar = () => {
 
  const channels = [
    {
      id: 1,
      name: 'announcements',
      description: ''
    },
    {
      id: 2,
      name: 'games',
      description: ''
    },
    {
      id: 3,
      name: 'designers',
      description: ''
    },
    {
      id: 4,
      name: 'developers',
      description: ''
    }
  ];
  
  const messages = [
    {
      id: 1,
      name: 'John Doe',
      display_name: 'johndoe',
      avatar: avatar1,
      description: ''
    },
    {
      id: 2,
      name: 'Ige Damilola',
      display_name: 'idmcalculus',
      avatar: avatar2,
      description: ''
    },
    {
      id: 3,
      name: 'Mark Essien',
      display_name: 'markessien',
      avatar: avatar1,
      description: ''
    },
    {
      id: 4,
      name: 'Seyi Onifade',
      display_name: 'xyluz',
      avatar: avatar2,
      description: ''
    }
  ];

  console.log(channels);
  console.log(messages)


  const value = React.useContext(URLContext);

  return (
    <div className={styles.container}>
      <div className={styles.zuriLogo}>
        <img src="/zurichatlogo.svg" alt="Zuri Chat logo" />
        <p>ZURI</p>
      </div>
      <div className={styles.orgInfo}>
        <div className={styles.orgName}>
          <p>HNGi8</p>
          <img
            src={ArrowDown}
            alt="Organisation settings button"
          />
        </div>
        <div className={styles.newMessage}>
          <img src={NewMessage} alt="New message icon" />
        </div>
      </div>
      <div className={styles.channelsContainer}>
        <div className={styles.channelHeader}>
          <img
            className={styles.channelDropdownIcon}
            src={ArrowDown}
            alt="Channels dropdown button"
          />
          <p>Channels</p>
          <img
            className={styles.channelAddBtn}
            src={AddIcon}
            alt="Add Channels button"
          />
        </div>
        <div className={styles.channelNames}>
          {channels &&
            channels.map(channel => (
              <div key={channel.id}>
                <p
                  className={styles.channelItem}
                  onClick={() => value.setUrl(`/apps/${channel.name}`)}
                >
                  <span>#</span>
                  {channel.name}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className={styles.messagesContainer}>
        <div className={styles.messageHeader}>
          <img
            className={styles.messageDropdownIcon}
            src={ArrowDown}
            alt="messages dropdown button"
          />
          <p>messages</p>
          <img
            className={styles.messageAddBtn}
            src={AddIcon}
            alt="Add messages button"
          />
        </div>
        <div className={styles.messageNames}>
          {messages &&
            messages.map(message => (
              <div className={styles.messageTitle} key={message.id}>
                <p>
                  <span>
                    <img src={message.avatar} alt="avatar" />
                  </span>
                  {message.name}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
    // </URLContext.Consumer>
  );
};

export const getStaticProps = async () => {
  const channelsRes = await fetcher('http://0.0.0.0:3000/api/plugins/channels');
  const { channels } = await channelsRes.json();
  const messagesRes = await fetcher('http://0.0.0.0:3000/api/plugins/messages');
  const { messages } = await messagesRes.json();

  return {
    props: {
      channels,
      messages
    }
  };
};
