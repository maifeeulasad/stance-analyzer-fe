import React, { useState } from 'react';
import { Button, Input, message, List } from 'antd';

const Landing = () => {
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState('');
  const [emojis] = useState(['😊', '🚀', '🎉', '🌟', '❤️', '👍', '😎']);
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const handleInputChange = (e: any) => {
    setInputText(e.target.value);
  };

  const handleProceedClick = () => {
    setLoading(true);
    if (!inputText.trim()) {
      message.error('Please enter some text before proceeding.');

      setLoading(false);
      return;
    }

    const emojis = ['😊', '🚀', '🎉', '🌟', '❤️', '👍', '😎'];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const selectedEmoji = emojis[randomIndex];

    setSelectedEmoji(selectedEmoji);
    message.success('Stance classification successful.');

    setLoading(false);
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
        loading={loading}
        style={{ justifyContent: 'center', backgroundColor: '#1677ff', margin: '10px' }}
        type="primary"
        onClick={handleProceedClick}>
        Proceed
      </Button>
      <div style={{ flex: '1' }}></div>
    </div>
    <List
      loading={loading}
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
