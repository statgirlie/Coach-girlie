const { useState, useEffect } = React;

function CoachGirlieApp() {
  const [activeTab, setActiveTab] = useState('log');
  const [logs, setLogs] = useState([]);
  const [dayType, setDayType] = useState('');
  const [selectedMood, setSelectedMood] = useState('');
  const [fasted, setFasted] = useState(false);
  const [carbload, setCarbload] = useState(false);
  const [freshActivity, setFreshActivity] = useState('');
  const [brickActivities, setBrickActivities] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [apiKey, setApiKey] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [spinData, setSpinData] = useState({
    time: '', ftpAvg: '', ftpMax: '', wattAvg: '', wattMax: '',
    bpmAvg: '', bpmMax: '', rpmAvg: '', rpmMax: '', kmhAvg: '', kmhMax: '',
    distance: '', calories: '', tss: '',
    intense: false, aerobic: false, dynamic: false, vo2: false
  });
  const [bbData, setBbData] = useState({​​​​​​​​​​​​​​​​
