import React, { useState } from 'react';
import { Button, Input, message, List } from 'antd';

const Landing = () => {

  const [inputText, setInputText] = useState('');
  const [emojis] = useState(['😊', '🚀', '🎉', '🌟', '❤️', '👍', '😎']);
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const handleInputChange = (e: any) => {
    setInputText(e.target.value);
  };

  const handleProceedClick = () => {
    if (!inputText.trim()) {
      message.error('Please enter some text before proceeding.');
      return;
    }

    // Logic to generate a random emoji
    const emojis = ['😊', '🚀', '🎉', '🌟', '❤️', '👍', '😎'];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const selectedEmoji = emojis[randomIndex];

    setSelectedEmoji(selectedEmoji);
  };

  return <div>
    <Input.TextArea
      rows={4}
      placeholder="Enter some text"
      value={inputText}
      onChange={handleInputChange}
    />
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1' }}></div>
      <Button
        style={{ justifyContent: 'center', backgroundColor: '#1677ff', margin: '10px' }}
        type="primary"
        onClick={handleProceedClick}>
        Proceed
      </Button>
      <div style={{ flex: '1' }}></div>
    </div>
    <List
      itemLayout='horizontal'
      style={{ display: 'flex', justifyContent: 'center' }}
      bordered
      dataSource={emojis}
      renderItem={(item) => (
        <List.Item
          className={item === selectedEmoji ? 'shake' : ''}
          style={{ display: 'inline-block', margin: '0 8px', backgroundColor: item === selectedEmoji ? '#e6f7ff' : 'inherit' }}>
          {item}
        </List.Item>
      )}
    />
  </div>
}

// eslint-disable-next-line import/no-default-export
export default Landing;
