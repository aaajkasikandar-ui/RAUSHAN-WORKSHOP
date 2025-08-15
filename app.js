// Enhanced RAUSHAN WORKSHOP Website JavaScript with Complete Festival Card Generator - FIXED VERSION
// Supports Hindu, Muslim, Christian & National Festivals

// Service data with updated contact information
const servicesData = {
  'suspension': {
    title: 'Suspension & Fitments',
    duration: '4 hours',
    warranty: '1 Month',
    description: 'Complete suspension system inspection and repair services',
    includes: [
      'Front Shocker Check',
      'Rear Shocker Check', 
      'Shocker Mount Check',
      'Link Rod Inspection',
      'Jumping Rod Bush Check'
    ],
    importance: 'Enhanced Comfort: Absorbs shocks and vibrations from the road. Improved Handling and Stability: Better control during turns and sudden maneuvers. Extended Tire Life: Prevents uneven wear and premature replacement.',
    price: 'Starting from ₹2,999'
  },
  'clutch': {
    title: 'Clutch Set Replacement',
    duration: '6 hours',
    warranty: '1 Month', 
    description: 'Complete clutch system replacement service',
    includes: [
      'Clutch Set OES (Clutch Plate + Pressure Plate) Replacement'
    ],
    addOns: [
      'Clutch Cable/Wire',
      'Release Bearing/Clutch Cylinder',
      'Flywheel',
      'Slave Cylinder'
    ],
    additional: [
      'Clutch Oil',
      'Gear Oil Cost Additional'
    ],
    recommended: 'In Case of Hard Clutch & Pickup Issue',
    price: 'Starting from ₹4,999'
  }
};

// Complete Festival data for all categories
const festivalData = {
  // Hindu Festivals
  'diwali': {
    name: 'Happy Diwali!',
    category: 'hindu',
    message: 'May the festival of lights illuminate your path to happiness and prosperity!',
    elements: ['🪔', '✨', '🎆', '🌟'],
    themes: {
      primary: 'linear-gradient(135deg, #FFD700, #FF8C00, #8B0000)',
      secondary: 'linear-gradient(135deg, #FF6347, #FFD700, #8B4513)',
      royal: 'linear-gradient(135deg, #4B0082, #8B0000, #FFD700)',
      nature: 'linear-gradient(135deg, #228B22, #8B4513, #FFD700)'
    }
  },
  'holi': {
    name: 'Happy Holi!',
    category: 'hindu',
    message: 'May your life be filled with colors of joy, happiness, and love!',
    elements: ['🎨', '🌈', '💐', '🎊'],
    themes: {
      primary: 'linear-gradient(135deg, #FF69B4, #FFA500, #00BFFF)',
      secondary: 'linear-gradient(135deg, #FF69B4, #00CED1, #FFD700, #FF4500)',
      royal: 'linear-gradient(135deg, #4B0082, #FF1493, #00BFFF)',
      nature: 'linear-gradient(135deg, #32CD32, #FF69B4, #00CED1)'
    }
  },
  'ganesh': {
    name: 'Ganpati Bappa Morya!',
    category: 'hindu',
    message: 'May Lord Ganesha remove all obstacles and bless you with success!',
    elements: ['🐘', '🕉️', '🪔', '🌺'],
    themes: {
      primary: 'linear-gradient(135deg, #FFD700, #FFA500, #8B4513)',
      secondary: 'linear-gradient(135deg, #FF6347, #FFD700, #8B4513)',
      royal: 'linear-gradient(135deg, #4B0082, #8B0000, #FFD700)',
      nature: 'linear-gradient(135deg, #228B22, #8B4513, #FFD700)'
    }
  },
  'dussehra': {
    name: 'Happy Dussehra!',
    category: 'hindu',
    message: 'May good triumph over evil in your life!',
    elements: ['🏹', '👑', '🎯', '⚔️'],
    themes: {
      primary: 'linear-gradient(135deg, #FFD700, #FF8C00, #8B0000)',
      secondary: 'linear-gradient(135deg, #DC143C, #FFD700, #4B0082)',
      royal: 'linear-gradient(135deg, #4B0082, #8B0000, #FFD700)',
      nature: 'linear-gradient(135deg, #228B22, #8B0000, #FFD700)'
    }
  },
  'krishna': {
    name: 'Happy Krishna Janmashtami!',
    category: 'hindu',
    message: 'May Lord Krishna bless you with love, joy, and prosperity!',
    elements: ['🦚', '🪈', '🧈', '🕉️'],
    themes: {
      primary: 'linear-gradient(135deg, #4169E1, #008B8B, #FFD700)',
      secondary: 'linear-gradient(135deg, #0000FF, #32CD32, #FFD700)',
      royal: 'linear-gradient(135deg, #4B0082, #0000CD, #FFD700)',
      nature: 'linear-gradient(135deg, #228B22, #4169E1, #FFD700)'
    }
  },
  'navratri': {
    name: 'Happy Navratri!',
    category: 'hindu',
    message: 'May Goddess Durga bless you with strength and prosperity!',
    elements: ['💃', '🎵', '🌺', '🗡️'],
    themes: {
      primary: 'linear-gradient(135deg, #FF1493, #FFD700, #8A2BE2)',
      secondary: 'linear-gradient(135deg, #DC143C, #FFA500, #8A2BE2)',
      royal: 'linear-gradient(135deg, #4B0082, #DC143C, #FFD700)',
      nature: 'linear-gradient(135deg, #228B22, #FF1493, #FFD700)'
    }
  },
  'makar': {
    name: 'Happy Makar Sankranti!',
    category: 'hindu',
    message: 'May this harvest festival bring sweetness to your life!',
    elements: ['🪁', '🌾', '🍯', '☀️'],
    themes: {
      primary: 'linear-gradient(135deg, #FF4500, #32CD32, #FFD700)',
      secondary: 'linear-gradient(135deg, #FFA500, #228B22, #FF4500)',
      royal: 'linear-gradient(135deg, #4B0082, #FF4500, #FFD700)',
      nature: 'linear-gradient(135deg, #32CD32, #FF8C00, #FFD700)'
    }
  },
  'ram': {
    name: 'Happy Ram Navami!',
    category: 'hindu',
    message: 'May Lord Rama bless you with righteousness and prosperity!',
    elements: ['🏹', '👑', '🕉️', '🌸'],
    themes: {
      primary: 'linear-gradient(135deg, #FF6347, #4B0082, #FFD700)',
      secondary: 'linear-gradient(135deg, #DC143C, #FFD700, #8B0000)',
      royal: 'linear-gradient(135deg, #4B0082, #8B0000, #FFD700)',
      nature: 'linear-gradient(135deg, #228B22, #FF6347, #FFD700)'
    }
  },
  'hanuman': {
    name: 'Happy Hanuman Jayanti!',
    category: 'hindu',
    message: 'May Hanuman Ji give you strength and courage!',
    elements: ['💪', '🔥', '🏔️', '🕉️'],
    themes: {
      primary: 'linear-gradient(135deg, #FF4500, #8B0000, #FFD700)',
      secondary: 'linear-gradient(135deg, #DC143C, #FF8C00, #8B0000)',
      royal: 'linear-gradient(135deg, #4B0082, #DC143C, #FFD700)',
      nature: 'linear-gradient(135deg, #228B22, #FF4500, #FFD700)'
    }
  },
  'durga': {
    name: 'Happy Durga Puja!',
    category: 'hindu',
    message: 'May Goddess Durga protect and bless you always!',
    elements: ['🗡️', '🦁', '🌺', '🔱'],
    themes: {
      primary: 'linear-gradient(135deg, #DC143C, #FFD700, #8A2BE2)',
      secondary: 'linear-gradient(135deg, #FF1493, #FFA500, #4B0082)',
      royal: 'linear-gradient(135deg, #8B0000, #4B0082, #FFD700)',
      nature: 'linear-gradient(135deg, #228B22, #DC143C, #FFD700)'
    }
  },

  // Muslim Festivals
  'eid-fitr': {
    name: 'Eid Mubarak!',
    category: 'muslim',
    message: 'May this blessed festival bring peace, happiness, and prosperity to your life!',
    elements: ['🌙', '⭐', '🕌', '🤲'],
    themes: {
      primary: 'linear-gradient(135deg, #228B22, #FFD700, #87CEEB)',
      secondary: 'linear-gradient(135deg, #006400, #32CD32, #87CEEB)',
      royal: 'linear-gradient(135deg, #4B0082, #228B22, #FFD700)',
      nature: 'linear-gradient(135deg, #32CD32, #00CED1, #FFD700)'
    }
  },
  'eid-adha': {
    name: 'Eid ul-Adha Mubarak!',
    category: 'muslim',
    message: 'May Allah accept your sacrifices and bless you with happiness!',
    elements: ['🕌', '🌙', '⭐', '🤲'],
    themes: {
      primary: 'linear-gradient(135deg, #006400, #FFD700, #4682B4)',
      secondary: 'linear-gradient(135deg, #228B22, #87CEEB, #FFD700)',
      royal: 'linear-gradient(135deg, #4B0082, #006400, #FFD700)',
      nature: 'linear-gradient(135deg, #2E8B57, #4682B4, #FFD700)'
    }
  },
  'ramadan': {
    name: 'Ramadan Kareem!',
    category: 'muslim',
    message: 'May this holy month bring you peace, reflection, and blessings!',
    elements: ['🌙', '🏮', '📿', '🕌'],
    themes: {
      primary: 'linear-gradient(135deg, #2F4F4F, #20B2AA, #FFD700)',
      secondary: 'linear-gradient(135deg, #008B8B, #87CEEB, #FFD700)',
      royal: 'linear-gradient(135deg, #4B0082, #2F4F4F, #FFD700)',
      nature: 'linear-gradient(135deg, #228B22, #20B2AA, #FFD700)'
    }
  },
  'muharram': {
    name: 'Muharram Mubarak!',
    category: 'muslim',
    message: 'May this sacred month bring peace and reflection to your life!',
    elements: ['🌙', '📿', '🕌', '☪️'],
    themes: {
      primary: 'linear-gradient(135deg, #2F2F2F, #708090, #4682B4)',
      secondary: 'linear-gradient(135deg, #696969, #87CEEB, #4682B4)',
      royal: 'linear-gradient(135deg, #4B0082, #2F2F2F, #87CEEB)',
      nature: 'linear-gradient(135deg, #2E8B57, #708090, #87CEEB)'
    }
  },
  'mawlid': {
    name: 'Mawlid Mubarak!',
    category: 'muslim',
    message: 'May the blessings of Prophet Muhammad be with you always!',
    elements: ['🕌', '🌙', '📿', '☪️'],
    themes: {
      primary: 'linear-gradient(135deg, #228B22, #FFD700, #87CEEB)',
      secondary: 'linear-gradient(135deg, #32CD32, #87CEEB, #FFD700)',
      royal: 'linear-gradient(135deg, #4B0082, #228B22, #FFD700)',
      nature: 'linear-gradient(135deg, #2E8B57, #32CD32, #87CEEB)'
    }
  },

  // Christian Festivals
  'christmas': {
    name: 'Merry Christmas!',
    category: 'christian',
    message: 'May the joy and peace of Christmas be with you and your family!',
    elements: ['🎄', '🎅', '🎁', '⭐'],
    themes: {
      primary: 'linear-gradient(135deg, #DC143C, #228B22, #FFD700)',
      secondary: 'linear-gradient(135deg, #B22222, #32CD32, #FFA500)',
      royal: 'linear-gradient(135deg, #4B0082, #DC143C, #FFD700)',
      nature: 'linear-gradient(135deg, #228B22, #B22222, #FFD700)'
    }
  },
  'easter': {
    name: 'Happy Easter!',
    category: 'christian',
    message: 'May the resurrection of Jesus bring new hope and joy to your life!',
    elements: ['🐰', '🥚', '✝️', '🌸'],
    themes: {
      primary: 'linear-gradient(135deg, #FFB6C1, #98FB98, #FFD700)',
      secondary: 'linear-gradient(135deg, #FF69B4, #90EE90, #FFA500)',
      royal: 'linear-gradient(135deg, #4B0082, #FFB6C1, #98FB98)',
      nature: 'linear-gradient(135deg, #32CD32, #FFB6C1, #87CEEB)'
    }
  },
  'good-friday': {
    name: 'Good Friday Blessings!',
    category: 'christian',
    message: 'May the sacrifice of Jesus bring peace and redemption to your life!',
    elements: ['✝️', '🕊️', '🌹', '📿'],
    themes: {
      primary: 'linear-gradient(135deg, #2F2F2F, #708090, #800080)',
      secondary: 'linear-gradient(135deg, #696969, #9370DB, #4B0082)',
      royal: 'linear-gradient(135deg, #8B0000, #4B0082, #708090)',
      nature: 'linear-gradient(135deg, #2E8B57, #800080, #708090)'
    }
  },
  'new-year': {
    name: 'Happy New Year!',
    category: 'christian',
    message: 'May this new year bring you happiness, success, and endless possibilities!',
    elements: ['🎊', '🎆', '🥂', '🎉'],
    themes: {
      primary: 'linear-gradient(135deg, #FFD700, #FF69B4, #00CED1)',
      secondary: 'linear-gradient(135deg, #FFA500, #FF1493, #00BFFF)',
      royal: 'linear-gradient(135deg, #4B0082, #FFD700, #FF69B4)',
      nature: 'linear-gradient(135deg, #32CD32, #FFD700, #00CED1)'
    }
  },
  'valentine': {
    name: 'Happy Valentine\'s Day!',
    category: 'christian',
    message: 'May your day be filled with love, romance, and sweet moments!',
    elements: ['💕', '🌹', '💐', '💝'],
    themes: {
      primary: 'linear-gradient(135deg, #FF1493, #DC143C, #FFB6C1)',
      secondary: 'linear-gradient(135deg, #FF69B4, #B22222, #FFC0CB)',
      royal: 'linear-gradient(135deg, #4B0082, #FF1493, #FFB6C1)',
      nature: 'linear-gradient(135deg, #228B22, #FF1493, #FFB6C1)'
    }
  },

  // National Festivals
  'independence': {
    name: 'Happy Independence Day!',
    category: 'national',
    message: 'Let\'s celebrate the freedom and unity of our great nation!',
    elements: ['🇮🇳', '🎆', '🕊️', '🎊'],
    themes: {
      primary: 'linear-gradient(135deg, #FF8C00, #228B22, #000080)',
      secondary: 'linear-gradient(135deg, #FFA500, #32CD32, #4169E1)',
      royal: 'linear-gradient(135deg, #4B0082, #FF8C00, #228B22)',
      nature: 'linear-gradient(135deg, #228B22, #FF8C00, #4169E1)'
    }
  },
  'republic': {
    name: 'Happy Republic Day!',
    category: 'national',
    message: 'Proud to be Indian! Let\'s honor our constitution and democracy!',
    elements: ['🇮🇳', '📜', '🎖️', '🎊'],
    themes: {
      primary: 'linear-gradient(135deg, #FF8C00, #228B22, #000080)',
      secondary: 'linear-gradient(135deg, #FFA500, #32CD32, #4169E1)',
      royal: 'linear-gradient(135deg, #4B0082, #FF8C00, #228B22)',
      nature: 'linear-gradient(135deg, #228B22, #FF8C00, #4169E1)'
    }
  },
  'gandhi': {
    name: 'Gandhi Jayanti!',
    category: 'national',
    message: 'Let\'s remember the Father of Nation and his message of peace!',
    elements: ['☮️', '🕊️', '⚙️', '🌸'],
    themes: {
      primary: 'linear-gradient(135deg, #F0F8FF, #D2B48C, #FFD700)',
      secondary: 'linear-gradient(135deg, #F5F5DC, #DEB887, #FFA500)',
      royal: 'linear-gradient(135deg, #4B0082, #F0F8FF, #D2B48C)',
      nature: 'linear-gradient(135deg, #228B22, #F0F8FF, #FFD700)'
    }
  },
  'teachers': {
    name: 'Happy Teacher\'s Day!',
    category: 'national',
    message: 'Thank you for shaping minds and building our future!',
    elements: ['📚', '📝', '🍎', '🎓'],
    themes: {
      primary: 'linear-gradient(135deg, #4169E1, #FFD700, #32CD32)',
      secondary: 'linear-gradient(135deg, #0000CD, #FFA500, #228B22)',
      royal: 'linear-gradient(135deg, #4B0082, #4169E1, #FFD700)',
      nature: 'linear-gradient(135deg, #228B22, #4169E1, #32CD32)'
    }
  },
  'children': {
    name: 'Happy Children\'s Day!',
    category: 'national',
    message: 'Every child is a gift to the world. Let\'s celebrate childhood!',
    elements: ['🎈', '🎨', '🧸', '🎊'],
    themes: {
      primary: 'linear-gradient(135deg, #FF69B4, #00CED1, #FFD700)',
      secondary: 'linear-gradient(135deg, #FF1493, #00BFFF, #FFA500)',
      royal: 'linear-gradient(135deg, #4B0082, #FF69B4, #00CED1)',
      nature: 'linear-gradient(135deg, #32CD32, #FF69B4, #FFD700)'
    }
  },
  'mothers': {
    name: 'Happy Mother\'s Day!',
    category: 'national',
    message: 'Celebrating the unconditional love and sacrifices of mothers!',
    elements: ['🌹', '💐', '💕', '👩‍👧‍👦'],
    themes: {
      primary: 'linear-gradient(135deg, #FF69B4, #FFB6C1, #FFD700)',
      secondary: 'linear-gradient(135deg, #FF1493, #FFC0CB, #FFA500)',
      royal: 'linear-gradient(135deg, #4B0082, #FF69B4, #FFB6C1)',
      nature: 'linear-gradient(135deg, #228B22, #FF69B4, #FFD700)'
    }
  },
  'fathers': {
    name: 'Happy Father\'s Day!',
    category: 'national',
    message: 'Honoring the strength, guidance, and love of fathers everywhere!',
    elements: ['👔', '🔧', '👨‍👧‍👦', '💙'],
    themes: {
      primary: 'linear-gradient(135deg, #4682B4, #2F4F4F, #FFD700)',
      secondary: 'linear-gradient(135deg, #4169E1, #708090, #FFA500)',
      royal: 'linear-gradient(135deg, #4B0082, #4682B4, #2F4F4F)',
      nature: 'linear-gradient(135deg, #228B22, #4682B4, #FFD700)'
    }
  }
};

// Dashboard data
const dashboardData = {
  totalBookings: 12847,
  monthlyRevenue: 2847650,
  customerSatisfaction: 4.8,
  completedServices: 11923,
  activeWorkshops: 8,
  ongoingServices: 24
};

// Global variables
let bookingsChart, servicesChart;
let currentFestival = 'diwali';
let currentTheme = 'primary';
let currentCategory = 'hindu';
let currentFontStyle = 'elegant';
let currentCardSize = 'social';
let recentCards = [];

// Font styles mapping
const fontStyles = {
  elegant: {
    fontFamily: '"Times New Roman", serif',
    titleSize: '28px',
    messageSize: '16px'
  },
  modern: {
    fontFamily: '"Arial", sans-serif',
    titleSize: '32px',
    messageSize: '18px'
  },
  traditional: {
    fontFamily: '"Georgia", serif',
    titleSize: '30px',
    messageSize: '17px'
  },
  playful: {
    fontFamily: '"Comic Sans MS", cursive',
    titleSize: '26px',
    messageSize: '15px'
  }
};

// Card sizes mapping
const cardSizes = {
  social: { width: 320, height: 450 },
  print: { width: 400, height: 600 },
  email: { width: 280, height: 380 }
};

// Global functions for modal and booking
window.bookService = function(serviceKey) {
  const carSelect = document.querySelector('.booking__car-select');
  const selectedCar = carSelect ? carSelect.value : '';
  
  if (!selectedCar) {
    alert('Please select your car first!');
    closeModal();
    if (carSelect) {
      carSelect.focus();
    }
    return;
  }
  
  closeModal();
  setTimeout(() => {
    showBookingConfirmation(serviceKey, selectedCar);
  }, 300);
};

window.initiateBooking = function() {
  closeModal();
  setTimeout(() => {
    showBookingForm();
  }, 300);
};

window.submitBooking = function(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const bookingData = Object.fromEntries(formData.entries());
  
  closeModal();
  
  setTimeout(() => {
    const carSelect = document.querySelector('.booking__car-select');
    showBookingConfirmation('general', carSelect ? carSelect.value : '');
  }, 500);
};

window.closeModal = function() {
  const modal = document.getElementById('serviceModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
};

// Enhanced Festival card functions
window.generateCard = function() {
  const messageInput = document.getElementById('cardMessage');
  const nameInput = document.getElementById('cardName');
  const recipientInput = document.getElementById('recipientName');
  const fontSelect = document.getElementById('fontStyle');
  const selectedThemeBtn = document.querySelector('.color-theme.active');
  const selectedSizeBtn = document.querySelector('.card-size.active');
  
  if (selectedThemeBtn) currentTheme = selectedThemeBtn.dataset.theme;
  if (fontSelect) currentFontStyle = fontSelect.value;
  if (selectedSizeBtn) currentCardSize = selectedSizeBtn.dataset.size;
  
  const festivalInfo = festivalData[currentFestival];
  const card = document.getElementById('festivalCard');
  
  if (festivalInfo && card) {
    // Update card content
    const title = card.querySelector('.festival-title');
    const message = card.querySelector('.festival-message');
    const elements = card.querySelector('.festival-elements');
    const nameDisplay = card.querySelector('#cardNameDisplay');
    const recipientDisplay = card.querySelector('#cardRecipientDisplay');
    
    if (title) {
      title.textContent = festivalInfo.name;
      const fontStyle = fontStyles[currentFontStyle];
      title.style.fontFamily = fontStyle.fontFamily;
      title.style.fontSize = fontStyle.titleSize;
    }
    
    if (message) {
      message.textContent = messageInput && messageInput.value ? messageInput.value : festivalInfo.message;
      const fontStyle = fontStyles[currentFontStyle];
      message.style.fontFamily = fontStyle.fontFamily;
      message.style.fontSize = fontStyle.messageSize;
    }
    
    if (nameDisplay) nameDisplay.textContent = nameInput && nameInput.value ? nameInput.value : 'Your Name';
    if (recipientDisplay) recipientDisplay.textContent = recipientInput && recipientInput.value ? recipientInput.value : 'Someone Special';
    
    // Update elements
    if (elements) {
      elements.innerHTML = festivalInfo.elements.slice(0, 3).map(element => 
        `<span class="element">${element}</span>`
      ).join('');
    }
    
    // Update theme - FIXED: This was the main bug
    if (festivalInfo.themes && festivalInfo.themes[currentTheme]) {
      card.style.background = festivalInfo.themes[currentTheme];
    }
    
    // Update card size
    const cardSize = cardSizes[currentCardSize];
    card.style.width = cardSize.width + 'px';
    card.style.height = cardSize.height + 'px';
    
    card.className = `festival-card ${currentFestival}-theme`;
    
    // Enable download and share buttons
    const downloadBtn = document.getElementById('downloadBtn');
    const shareBtn = document.getElementById('shareBtn');
    if (downloadBtn) downloadBtn.disabled = false;
    if (shareBtn) shareBtn.disabled = false;
    
    // Add to recent cards
    addToRecentCards();
  }
  
  console.log('Festival card generated:', currentFestival, currentTheme, currentFontStyle, currentCardSize);
};

window.downloadCard = function() {
  // Create a canvas element for download
  const card = document.getElementById('festivalCard');
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  const cardSize = cardSizes[currentCardSize];
  canvas.width = cardSize.width * 2; // Double for high resolution
  canvas.height = cardSize.height * 2;
  
  // Scale context for high resolution
  ctx.scale(2, 2);
  
  // Get festival data
  const festivalInfo = festivalData[currentFestival];
  const messageInput = document.getElementById('cardMessage');
  const nameInput = document.getElementById('cardName');
  const recipientInput = document.getElementById('recipientName');
  const message = messageInput && messageInput.value ? messageInput.value : festivalInfo.message;
  const name = nameInput && nameInput.value ? nameInput.value : 'Your Name';
  const recipient = recipientInput && recipientInput.value ? recipientInput.value : 'Someone Special';
  
  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, cardSize.width, cardSize.height);
  
  // Set gradient colors based on theme
  const colors = ['#FFD700', '#FF8C00', '#8B0000']; // Default fallback
  
  colors.forEach((color, index) => {
    gradient.addColorStop(index / (colors.length - 1), color);
  });
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, cardSize.width, cardSize.height);
  
  // Add text content
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.shadowColor = 'rgba(0,0,0,0.5)';
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  
  const fontStyle = fontStyles[currentFontStyle];
  
  // Recipient
  ctx.font = `16px ${fontStyle.fontFamily}`;
  ctx.textAlign = 'left';
  ctx.fillText(`To: ${recipient}`, 20, 40);
  
  // Title
  ctx.font = `bold ${fontStyle.titleSize} ${fontStyle.fontFamily}`;
  ctx.textAlign = 'center';
  ctx.fillText(festivalInfo.name, cardSize.width / 2, 120);
  
  // Message (wrap text)
  ctx.font = `${fontStyle.messageSize} ${fontStyle.fontFamily}`;
  const words = message.split(' ');
  let line = '';
  let y = 180;
  const lineHeight = parseInt(fontStyle.messageSize) + 10;
  const maxWidth = cardSize.width - 40;
  
  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && i > 0) {
      ctx.fillText(line, cardSize.width / 2, y);
      line = words[i] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, cardSize.width / 2, y);
  
  // Elements (emojis as text)
  ctx.font = '40px Arial';
  const elementY = y + 80;
  festivalInfo.elements.slice(0, 3).forEach((element, index) => {
    ctx.fillText(element, (cardSize.width / 2) + (index - 1) * 60, elementY);
  });
  
  // Name
  ctx.font = '20px ' + fontStyle.fontFamily;
  ctx.fillText(`From: ${name}`, cardSize.width / 2, elementY + 60);
  
  // Workshop branding
  ctx.fillStyle = 'rgba(0,0,0,0.7)';
  ctx.fillRect(20, cardSize.height - 120, cardSize.width - 40, 80);
  
  ctx.fillStyle = 'white';
  ctx.font = '14px Arial';
  ctx.fillText('Best wishes from', cardSize.width / 2, cardSize.height - 90);
  ctx.font = 'bold 18px Arial';
  ctx.fillText('RAUSHAN WORKSHOP', cardSize.width / 2, cardSize.height - 65);
  ctx.font = '12px Arial';
  ctx.fillText('ASSAM', cardSize.width / 2, cardSize.height - 45);
  
  // Download the image
  const link = document.createElement('a');
  link.download = `${festivalInfo.name.replace(/[^a-zA-Z0-9]/g, '_')}_${currentCardSize}_card.png`;
  link.href = canvas.toDataURL();
  link.click();
  
  console.log('Festival card downloaded');
};

window.shareToWhatsApp = function() {
  const festivalInfo = festivalData[currentFestival];
  const messageInput = document.getElementById('cardMessage');
  const nameInput = document.getElementById('cardName');
  const recipientInput = document.getElementById('recipientName');
  
  const message = messageInput && messageInput.value ? messageInput.value : festivalInfo.message;
  const name = nameInput && nameInput.value ? nameInput.value : 'Your Name';
  const recipient = recipientInput && recipientInput.value ? recipientInput.value : '';
  
  const shareText = `${festivalInfo.name}

${recipient ? `To: ${recipient}` : ''}

${message}

From: ${name}

Best wishes from RAUSHAN WORKSHOP, ASSAM
📞 7325009623 / 7362848208
📧 nasirali60459@gmail.com`;
  
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  window.open(whatsappUrl, '_blank');
  
  console.log('Card shared to WhatsApp');
};

// Festival search and category functions - FIXED
window.searchFestivals = function(searchTerm) {
  const festivalOptions = document.querySelectorAll('.festival-option');
  
  festivalOptions.forEach(option => {
    const festivalName = option.querySelector('h4').textContent.toLowerCase();
    const festivalDesc = option.querySelector('p').textContent.toLowerCase();
    
    if (festivalName.includes(searchTerm.toLowerCase()) || 
        festivalDesc.includes(searchTerm.toLowerCase())) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
  });
};

// FIXED: Category switching bug
window.switchCategory = function(category) {
  console.log('Switching to category:', category);
  
  // Update active tab
  document.querySelectorAll('.festival-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  const activeTab = document.querySelector(`[data-category="${category}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
  }
  
  // Show/hide festival categories
  document.querySelectorAll('.festival-category').forEach(cat => {
    cat.classList.add('hidden');
  });
  
  const targetCategory = document.getElementById(`${category}-festivals`);
  if (targetCategory) {
    targetCategory.classList.remove('hidden');
  }
  
  currentCategory = category;
  
  // Auto-select first festival in category
  const firstFestival = document.querySelector(`#${category}-festivals .festival-option`);
  if (firstFestival && firstFestival.dataset.festival) {
    selectFestival(firstFestival.dataset.festival);
  } else {
    // Fallback: find first festival of this category
    const categoryFestivals = Object.keys(festivalData).filter(key => 
      festivalData[key].category === category
    );
    if (categoryFestivals.length > 0) {
      selectFestival(categoryFestivals[0]);
    }
  }
  
  console.log('Category switched to:', category, 'Current festival:', currentFestival);
};

window.selectFestival = function(festivalKey) {
  console.log('Selecting festival:', festivalKey);
  
  // Update selected festival
  document.querySelectorAll('.festival-option').forEach(option => {
    option.classList.remove('active');
  });
  
  const festivalOption = document.querySelector(`[data-festival="${festivalKey}"]`);
  if (festivalOption) {
    festivalOption.classList.add('active');
  }
  
  currentFestival = festivalKey;
  
  // Update message placeholder
  const messageInput = document.getElementById('cardMessage');
  const festivalInfo = festivalData[festivalKey];
  if (messageInput && festivalInfo) {
    messageInput.placeholder = festivalInfo.message;
    // Clear existing message when switching festivals
    messageInput.value = '';
  }
  
  // Auto-generate card
  setTimeout(() => {
    generateCard();
  }, 100);
  
  console.log('Festival selected:', festivalKey);
};

// Recent cards management
function addToRecentCards() {
  const cardData = {
    festival: currentFestival,
    theme: currentTheme,
    font: currentFontStyle,
    size: currentCardSize,
    timestamp: Date.now()
  };
  
  recentCards.unshift(cardData);
  
  // Keep only last 10 cards
  if (recentCards.length > 10) {
    recentCards = recentCards.slice(0, 10);
  }
  
  updateRecentCardsDisplay();
}

function updateRecentCardsDisplay() {
  const recentCardsContainer = document.getElementById('recentCards');
  if (!recentCardsContainer) return;
  
  recentCardsContainer.innerHTML = recentCards.map(card => {
    const festivalInfo = festivalData[card.festival];
    if (!festivalInfo) return '';
    return `
      <div class="template-item" onclick="loadRecentCard('${card.festival}', '${card.theme}', '${card.font}', '${card.size}')">
        <div class="template-thumbnail ${card.festival}-theme">
          <div class="festival-elements">${festivalInfo.elements.slice(0, 2).join(' ')}</div>
        </div>
        <p>${festivalInfo.name.replace('Happy ', '').replace('!', '')}</p>
      </div>
    `;
  }).join('');
}

window.loadRecentCard = function(festival, theme, font, size) {
  currentFestival = festival;
  currentTheme = theme;
  currentFontStyle = font;
  currentCardSize = size;
  
  // Update UI elements
  const fontSelect = document.getElementById('fontStyle');
  if (fontSelect) fontSelect.value = font;
  
  // Update theme buttons
  document.querySelectorAll('.color-theme').forEach(btn => {
    btn.classList.remove('active');
  });
  const themeBtn = document.querySelector(`[data-theme="${theme}"]`);
  if (themeBtn) {
    themeBtn.classList.add('active');
  }
  
  // Update size buttons
  document.querySelectorAll('.card-size').forEach(btn => {
    btn.classList.remove('active');
  });
  const sizeBtn = document.querySelector(`[data-size="${size}"]`);
  if (sizeBtn) {
    sizeBtn.classList.add('active');
  }
  
  // Switch to correct category first
  const festivalInfo = festivalData[festival];
  if (festivalInfo && festivalInfo.category !== currentCategory) {
    switchCategory(festivalInfo.category);
  } else {
    selectFestival(festival);
  }
};

// Dashboard functions
window.showDashboardLogin = function() {
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  if (!modal || !modalTitle || !modalBody) return;
  
  modalTitle.textContent = 'Admin Login';
  
  const modalContent = `
    <div class="service-details">
      <div style="text-align: center; margin-bottom: 24px;">
        <div style="font-size: 48px; margin-bottom: 16px;">🔐</div>
        <h4>Dashboard Access</h4>
        <p>Enter your credentials to access the professional dashboard</p>
      </div>
      
      <form class="booking-form" onsubmit="adminLogin(event)">
        <div class="form-group">
          <label class="form-label">Username</label>
          <input type="text" class="form-control" name="username" value="admin" required>
        </div>
        
        <div class="form-group">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" name="password" value="workshop123" required>
        </div>
        
        <div class="service-info">
          <p><strong>Demo Credentials:</strong></p>
          <p>Username: admin</p>
          <p>Password: workshop123</p>
        </div>
        
        <button type="submit" class="btn btn--primary btn--full-width">
          Login to Dashboard
        </button>
      </form>
    </div>
  `;
  
  modalBody.innerHTML = modalContent;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

window.adminLogin = function(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const credentials = Object.fromEntries(formData.entries());
  
  // Simple demo authentication
  if (credentials.username === 'admin' && credentials.password === 'workshop123') {
    closeModal();
    setTimeout(() => {
      showDashboardFeatures();
    }, 300);
  } else {
    alert('Invalid credentials! Please use demo credentials: admin / workshop123');
  }
};

window.showDashboardFeatures = function() {
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  if (!modal || !modalTitle || !modalBody) return;
  
  modalTitle.textContent = 'Dashboard Features';
  
  const modalContent = `
    <div class="service-details">
      <div style="text-align: center; margin-bottom: 24px;">
        <div style="font-size: 48px; margin-bottom: 16px;">📊</div>
        <h4>Welcome to RAUSHAN WORKSHOP Dashboard</h4>
        <p>Professional tools for managing your automotive services</p>
      </div>
      
      <div style="display: grid; gap: 16px;">
        <div class="service-info">
          <h4>📈 Analytics & Reports</h4>
          <p>View booking trends, revenue analytics, and customer satisfaction metrics</p>
        </div>
        
        <div class="service-info">
          <h4>🚗 Service Management</h4>
          <p>Track ongoing services, manage appointments, and monitor workshop capacity</p>
        </div>
        
        <div class="service-info">
          <h4>👥 Customer Management</h4>
          <p>Manage customer profiles, service history, and feedback</p>
        </div>
        
        <div class="service-info">
          <h4>📦 Inventory Tracking</h4>
          <p>Monitor spare parts inventory, supplier management, and stock levels</p>
        </div>
        
        <div class="service-info">
          <h4>🎊 Complete Festival Card Generator</h4>
          <p>Create personalized festival cards for Hindu, Muslim, Christian & National festivals</p>
        </div>
      </div>
      
      <div style="margin-top: 24px; text-align: center;">
        <p><strong>Leadership Team:</strong></p>
        <p>Founder: NASIR ALI | CEO: SABIR KHAN</p>
        <p>Contact: nasirali60459@gmail.com | 7325009623 | 7362848208</p>
      </div>
      
      <button class="btn btn--primary btn--full-width" onclick="closeModal()">
        Continue to Dashboard
      </button>
    </div>
  `;
  
  modalBody.innerHTML = modalContent;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

// Quick dashboard action functions
window.showQuickBooking = function() {
  showBookingForm();
};

window.showInventoryManagement = function() {
  showGenericModal('Inventory Management', 'Manage spare parts inventory, track stock levels, and handle supplier relationships for all workshop locations.');
};

window.showStaffManagement = function() {
  showGenericModal('Staff Management', 'Manage mechanic schedules, track performance metrics, and handle staff training programs across all RAUSHAN WORKSHOP locations.');
};

window.showReports = function() {
  showGenericModal('Generate Reports', 'Create detailed reports on revenue, customer satisfaction, service efficiency, and workshop performance analytics.');
};

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing Complete Festival Card Generator...');
  
  // Add required CSS styles
  addCustomStyles();
  
  // Initialize all functionality
  initializeMobileMenu();
  initializeServiceCards();
  initializeModalHandlers();
  initializeFAQ();
  initializeBookingFlow();
  initializeNavigation();
  initializeAnimations();
  initializeCompleteFestivalCardGenerator();
  initializeDashboardCharts();
  initializeCounterAnimations();
  
  console.log('Complete Festival Card Generator initialized successfully!');
});

function addCustomStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .service-card,
    .testimonial,
    .stat-item,
    .leader-card,
    .dashboard-card {
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.6s ease;
    }
    
    .service-card.animate-in,
    .testimonial.animate-in,
    .stat-item.animate-in,
    .leader-card.animate-in,
    .dashboard-card.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    .service-price-item {
      padding: 12px 0;
      border-bottom: 1px solid var(--color-border);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .service-price-item:last-child {
      border-bottom: none;
    }
    
    .booking-form .form-group {
      margin-bottom: 16px;
    }
    
    @media (max-width: 768px) {
      .header__nav.active {
        display: block !important;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(255, 255, 253, 0.95);
        backdrop-filter: blur(20px);
        border-top: 1px solid rgba(94, 82, 64, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        z-index: 1000;
      }
      
      .header__nav.active .nav__list {
        flex-direction: column !important;
        padding: var(--space-16);
        gap: var(--space-16);
      }
      
      .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      
      .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
      }
      
      .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }
    }
  `;
  document.head.appendChild(style);
}

function initializeMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const headerNav = document.querySelector('.header__nav');
  
  if (mobileMenuBtn && headerNav) {
    mobileMenuBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Mobile menu clicked');
      
      headerNav.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!headerNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        headerNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      }
    });
  }
}

function initializeServiceCards() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach((card, index) => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const serviceName = card.querySelector('h3').textContent.toLowerCase();
      console.log('Service card clicked:', serviceName);
      
      let serviceKey = '';
      
      if (serviceName.includes('suspension')) {
        serviceKey = 'suspension';
        showServiceModal(serviceKey);
      } else if (serviceName.includes('clutch')) {
        serviceKey = 'clutch';
        showServiceModal(serviceKey);
      } else {
        showGenericServiceModal(serviceName);
      }
    });
  });
}

function initializeModalHandlers() {
  const modal = document.getElementById('serviceModal');
  const modalClose = document.querySelector('.modal__close');
  const modalOverlay = document.querySelector('.modal__overlay');
  
  if (modalClose) {
    modalClose.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

function initializeFAQ() {
  const faqItems = document.querySelectorAll('.faq__item');
  
  faqItems.forEach((item, index) => {
    const question = item.querySelector('.faq__question');
    
    if (question) {
      question.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('FAQ clicked:', index);
        
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
          faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

function initializeBookingFlow() {
  const bookingBtn = document.querySelector('.booking__btn');
  const carSelect = document.querySelector('.booking__car-select');
  const bannerBookBtn = document.querySelector('.special-banner .btn');
  
  if (bookingBtn) {
    bookingBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('Booking button clicked');
      
      const selectedCar = carSelect ? carSelect.value : '';
      
      if (!selectedCar) {
        alert('Please select your car to check prices!');
        if (carSelect) {
          carSelect.focus();
        }
        return;
      }
      
      showPriceModal(selectedCar);
    });
  }

  if (bannerBookBtn) {
    bannerBookBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('Banner book button clicked');
      showBookingForm();
    });
  }
}

// FIXED: Navigation function
function initializeNavigation() {
  // Handle smooth scroll navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      
      console.log('Navigation clicked:', targetId);
      
      if (target) {
        // Use scrollIntoView with better options
        const headerHeight = 80; // Account for fixed header
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const headerNav = document.querySelector('.header__nav');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        if (headerNav && headerNav.classList.contains('active')) {
          headerNav.classList.remove('active');
          if (mobileMenuBtn) {
            mobileMenuBtn.classList.remove('active');
          }
        }
      }
    });
  });
}

// FIXED: Complete initialization of festival card generator
function initializeCompleteFestivalCardGenerator() {
  console.log('Initializing Complete Festival Card Generator...');
  
  // Initialize search functionality
  const searchInput = document.getElementById('festivalSearch');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      searchFestivals(e.target.value);
    });
  }
  
  // Initialize category tabs - FIXED
  const festivalTabs = document.querySelectorAll('.festival-tab');
  festivalTabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const category = this.dataset.category;
      console.log('Tab clicked:', category);
      switchCategory(category);
    });
  });
  
  // Initialize festival selection
  const festivalOptions = document.querySelectorAll('.festival-option');
  festivalOptions.forEach(option => {
    option.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const festival = this.dataset.festival;
      console.log('Festival option clicked:', festival);
      selectFestival(festival);
    });
  });
  
  // Initialize customization controls
  const messageInput = document.getElementById('cardMessage');
  const nameInput = document.getElementById('cardName');
  const recipientInput = document.getElementById('recipientName');
  const fontSelect = document.getElementById('fontStyle');
  
  if (messageInput) {
    messageInput.addEventListener('input', generateCard);
  }
  
  if (nameInput) {
    nameInput.addEventListener('input', generateCard);
  }
  
  if (recipientInput) {
    recipientInput.addEventListener('input', generateCard);
  }
  
  if (fontSelect) {
    fontSelect.addEventListener('change', function() {
      currentFontStyle = this.value;
      generateCard();
    });
  }
  
  // Initialize color themes - FIXED
  const colorThemes = document.querySelectorAll('.color-theme');
  colorThemes.forEach(theme => {
    theme.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('Color theme clicked:', this.dataset.theme);
      
      colorThemes.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      currentTheme = this.dataset.theme;
      
      // Immediately update the card
      generateCard();
    });
  });
  
  // Initialize card sizes
  const cardSizes = document.querySelectorAll('.card-size');
  cardSizes.forEach(size => {
    size.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('Card size clicked:', this.dataset.size);
      
      cardSizes.forEach(s => s.classList.remove('active'));
      this.classList.add('active');
      currentCardSize = this.dataset.size;
      generateCard();
    });
  });
  
  // Generate initial card
  setTimeout(() => {
    generateCard();
  }, 500);
  
  console.log('Complete Festival Card Generator initialized successfully!');
}

function initializeDashboardCharts() {
  // Initialize charts after a short delay to ensure elements are ready
  setTimeout(() => {
    createBookingsChart();
    createServicesChart();
  }, 1000);
}

function createBookingsChart() {
  const ctx = document.getElementById('bookingsChart');
  if (!ctx || typeof Chart === 'undefined') {
    console.log('Chart.js not loaded or canvas not found');
    return;
  }
  
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [{
      label: 'Monthly Bookings',
      data: [850, 920, 1100, 980, 1250, 1400, 1180, 1320],
      backgroundColor: '#1FB8CD',
      borderColor: '#1FB8CD',
      borderWidth: 2,
      fill: false,
      tension: 0.4
    }]
  };
  
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0,0,0,0.1)'
          }
        },
        x: {
          grid: {
            color: 'rgba(0,0,0,0.1)'
          }
        }
      }
    }
  };
  
  if (bookingsChart) {
    bookingsChart.destroy();
  }
  
  try {
    bookingsChart = new Chart(ctx, config);
    console.log('Bookings chart created successfully');
  } catch (error) {
    console.error('Error creating bookings chart:', error);
  }
}

function createServicesChart() {
  const ctx = document.getElementById('servicesChart');
  if (!ctx || typeof Chart === 'undefined') {
    console.log('Chart.js not loaded or canvas not found');
    return;
  }
  
  const data = {
    labels: ['Suspension', 'Clutch', 'AC Service', 'Batteries', 'Detailing', 'Others'],
    datasets: [{
      data: [25, 20, 18, 15, 12, 10],
      backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545'],
      borderWidth: 0
    }]
  };
  
  const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 20,
            usePointStyle: true
          }
        }
      }
    }
  };
  
  if (servicesChart) {
    servicesChart.destroy();
  }
  
  try {
    servicesChart = new Chart(ctx, config);
    console.log('Services chart created successfully');
  } catch (error) {
    console.error('Error creating services chart:', error);
  }
}

function initializeCounterAnimations() {
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe counter elements
  document.querySelectorAll('[data-count]').forEach(element => {
    counterObserver.observe(element);
  });
}

function animateCounter(element) {
  const target = parseFloat(element.dataset.count);
  const duration = 2000; // 2 seconds
  const steps = 60;
  const increment = target / steps;
  const stepDuration = duration / steps;
  
  let current = 0;
  
  const timer = setInterval(() => {
    current += increment;
    
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    
    // Format the number appropriately
    if (target >= 1000) {
      element.textContent = Math.floor(current).toLocaleString() + '+';
    } else {
      element.textContent = current.toFixed(1);
    }
    
    element.style.animation = 'countUp 0.1s ease-out';
  }, stepDuration);
}

function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  document.querySelectorAll('.service-card, .testimonial, .stat-item, .leader-card, .dashboard-card').forEach(element => {
    observer.observe(element);
  });
}

// All the other existing functions remain the same...
function showServiceModal(serviceKey) {
  const service = servicesData[serviceKey];
  if (!service) return;
  
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  if (!modal || !modalTitle || !modalBody) {
    console.error('Modal elements not found');
    return;
  }
  
  modalTitle.textContent = service.title;
  
  let modalContent = `
    <div class="service-details">
      <div class="service-info">
        <p><strong>Duration:</strong> ${service.duration}</p>
        <p><strong>Warranty:</strong> ${service.warranty}</p>
        <p><strong>Price:</strong> ${service.price}</p>
      </div>
      
      <h4>Service Description</h4>
      <p>${service.description}</p>
      
      <h4>What's Included:</h4>
      <ul>
        ${service.includes.map(item => `<li>${item}</li>`).join('')}
      </ul>
  `;
  
  if (service.addOns) {
    modalContent += `
      <h4>Available Add-ons:</h4>
      <ul>
        ${service.addOns.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
  }
  
  if (service.additional) {
    modalContent += `
      <h4>Additional Costs:</h4>
      <ul>
        ${service.additional.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
  }
  
  if (service.recommended) {
    modalContent += `
      <div class="service-info">
        <h4>Recommended:</h4>
        <p>${service.recommended}</p>
      </div>
    `;
  }
  
  if (service.importance) {
    modalContent += `
      <h4>Why This Service is Important:</h4>
      <p>${service.importance}</p>
    `;
  }
  
  modalContent += `
      <div style="margin-top: 24px;">
        <button class="btn btn--primary btn--full-width" onclick="bookService('${serviceKey}')">
          Book This Service
        </button>
      </div>
    </div>
  `;
  
  modalBody.innerHTML = modalContent;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  console.log('Service modal opened for:', serviceKey);
}

function showGenericServiceModal(serviceName) {
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  if (!modal || !modalTitle || !modalBody) return;
  
  modalTitle.textContent = serviceName;
  
  const modalContent = `
    <div class="service-details">
      <div class="service-info">
        <p><strong>Service:</strong> ${serviceName}</p>
        <p><strong>Location:</strong> ASSAM</p>
      </div>
      
      <h4>Service Description</h4>
      <p>Professional ${serviceName.toLowerCase()} service provided by RAUSHAN WORKSHOP's expert technicians in ASSAM.</p>
      
      <h4>Why Choose RAUSHAN WORKSHOP?</h4>
      <ul>
        <li>Free doorstep pickup and drop service</li>
        <li>Genuine spare parts and accessories</li>
        <li>Experienced and certified mechanics</li>
        <li>Competitive pricing - lowest in India</li>
        <li>Quality service with warranty</li>
        <li>Founded by NASIR ALI, led by CEO SABIR KHAN</li>
      </ul>
      
      <div class="service-info">
        <h4>Contact for Pricing:</h4>
        <p>📞 7325009623 / 7362848208</p>
        <p>📧 nasirali60459@gmail.com</p>
      </div>
      
      <div style="margin-top: 24px;">
        <button class="btn btn--primary btn--full-width" onclick="bookService('general')">
          Get Quote
        </button>
      </div>
    </div>
  `;
  
  modalBody.innerHTML = modalContent;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  console.log('Generic service modal opened for:', serviceName);
}

function showPriceModal(car) {
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  if (!modal || !modalTitle || !modalBody) return;
  
  modalTitle.textContent = 'Service Prices for ' + car.replace('-', ' ').toUpperCase();
  
  const modalContent = `
    <div class="service-details">
      <div class="service-info">
        <p><strong>Selected Car:</strong> ${car.replace('-', ' ').toUpperCase()}</p>
        <p><strong>Location:</strong> ASSAM</p>
      </div>
      
      <h4>Available Services & Pricing:</h4>
      <div style="display: grid; gap: 16px; margin: 16px 0;">
        <div class="service-price-item">
          <strong>Basic Car Service</strong>
          <span style="float: right; color: var(--color-primary);">₹1,999</span>
        </div>
        <div class="service-price-item">
          <strong>Suspension Service</strong>
          <span style="float: right; color: var(--color-primary);">₹2,999</span>
        </div>
        <div class="service-price-item">
          <strong>Clutch Replacement</strong>
          <span style="float: right; color: var(--color-primary);">₹4,999</span>
        </div>
        <div class="service-price-item">
          <strong>AC Service</strong>
          <span style="float: right; color: var(--color-primary);">₹1,499</span>
        </div>
        <div class="service-price-item">
          <strong>Battery Replacement</strong>
          <span style="float: right; color: var(--color-primary);">₹3,499</span>
        </div>
      </div>
      
      <div class="service-info">
        <h4>🚗 Free Doorstep Pickup & Drop</h4>
        <p>No need to visit our workshop! We'll pick up your car and deliver it back to your doorstep at no extra cost.</p>
      </div>
      
      <div style="margin-top: 24px;">
        <button class="btn btn--primary btn--full-width" onclick="initiateBooking()">
          Book Now
        </button>
      </div>
    </div>
  `;
  
  modalBody.innerHTML = modalContent;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  console.log('Price modal opened for:', car);
}

function showBookingForm() {
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  if (!modal || !modalTitle || !modalBody) return;
  
  modalTitle.textContent = 'Book Your Service';
  
  const modalContent = `
    <form class="booking-form" onsubmit="submitBooking(event)">
      <div class="form-group">
        <label class="form-label">Full Name *</label>
        <input type="text" class="form-control" name="name" required>
      </div>
      
      <div class="form-group">
        <label class="form-label">Phone Number *</label>
        <input type="tel" class="form-control" name="phone" required>
      </div>
      
      <div class="form-group">
        <label class="form-label">Email Address</label>
        <input type="email" class="form-control" name="email">
      </div>
      
      <div class="form-group">
        <label class="form-label">Address in ASSAM *</label>
        <textarea class="form-control" name="address" rows="3" required></textarea>
      </div>
      
      <div class="form-group">
        <label class="form-label">Preferred Date</label>
        <input type="date" class="form-control" name="date" min="${new Date().toISOString().split('T')[0]}">
      </div>
      
      <div class="form-group">
        <label class="form-label">Additional Notes</label>
        <textarea class="form-control" name="notes" rows="2"></textarea>
      </div>
      
      <div class="service-info">
        <p><strong>📞 Need Help?</strong> Call us at 7325009623 or 7362848208</p>
        <p><strong>📧 Email:</strong> nasirali60459@gmail.com</p>
        <p><strong>Leadership:</strong> Founded by NASIR ALI, led by CEO SABIR KHAN</p>
      </div>
      
      <button type="submit" class="btn btn--primary btn--full-width">
        Confirm Booking
      </button>
    </form>
  `;
  
  modalBody.innerHTML = modalContent;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  console.log('Booking form opened');
}

function showBookingConfirmation(serviceKey, car) {
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  if (!modal || !modalTitle || !modalBody) return;
  
  modalTitle.textContent = 'Booking Confirmed! 🎉';
  
  const modalContent = `
    <div class="service-details" style="text-align: center;">
      <div style="font-size: 48px; margin-bottom: 16px;">✅</div>
      
      <h4>Thank you for choosing RAUSHAN WORKSHOP!</h4>
      
      <div class="service-info">
        <p><strong>Service:</strong> ${serviceKey === 'general' ? 'Car Service' : servicesData[serviceKey]?.title || 'Car Service'}</p>
        <p><strong>Car:</strong> ${car ? car.replace('-', ' ').toUpperCase() : 'Not specified'}</p>
        <p><strong>Location:</strong> ASSAM</p>
      </div>
      
      <h4>What happens next?</h4>
      <div style="text-align: left; margin: 16px 0;">
        <p>1. Our team will call you within 30 minutes to confirm details</p>
        <p>2. We'll schedule a convenient pickup time</p>
        <p>3. Free doorstep pickup of your vehicle</p>
        <p>4. Professional service at our workshop</p>
        <p>5. Free delivery back to your doorstep</p>
      </div>
      
      <div class="service-info">
        <p><strong>Contact Us:</strong></p>
        <p>📞 7325009623 / 7362848208</p>
        <p>📧 nasirali60459@gmail.com</p>
        <p><strong>Leadership:</strong> Founder NASIR ALI | CEO SABIR KHAN</p>
      </div>
      
      <button class="btn btn--primary btn--full-width" onclick="closeModal()">
        Done
      </button>
    </div>
  `;
  
  modalBody.innerHTML = modalContent;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  console.log('Booking confirmation shown');
}

function showGenericModal(title, content) {
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  if (!modal || !modalTitle || !modalBody) return;
  
  modalTitle.textContent = title;
  
  const modalContent = `
    <div class="service-details">
      <div style="text-align: center; margin-bottom: 24px;">
        <div style="font-size: 48px; margin-bottom: 16px;">🔧</div>
        <h4>${title}</h4>
        <p>${content}</p>
      </div>
      
      <div class="service-info">
        <p><strong>Available for RAUSHAN WORKSHOP Admin Users</strong></p>
        <p>This feature is part of our comprehensive management system.</p>
      </div>
      
      <div style="margin-top: 24px;">
        <button class="btn btn--primary btn--full-width" onclick="closeModal()">
          Close
        </button>
      </div>
    </div>
  `;
  
  modalBody.innerHTML = modalContent;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}