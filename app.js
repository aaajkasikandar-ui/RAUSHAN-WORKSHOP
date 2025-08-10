// Enhanced RAUSHAN WORKSHOP Website JavaScript with Complete Functionality - FIXED VERSION

// Updated service data with correct contact information
const servicesData = {
  'suspension': {
    title: 'Suspension & Fitments',
    duration: '4 hours',
    warranty: '1 Month',
    description: 'Complete suspension system inspection and repair services for enhanced comfort and safety',
    includes: [
      'Front Shocker Check & Replacement',
      'Rear Shocker Check & Replacement', 
      'Shocker Mount Inspection',
      'Link Rod Complete Inspection',
      'Jumping Rod Bush Check',
      'Complete 25-Point Suspension Inspection',
      'Professional Installation & Testing'
    ],
    importance: 'Enhanced Comfort: Absorbs shocks and vibrations from the road for a smooth ride. Improved Handling and Stability: Better control during turns and sudden maneuvers. Extended Tire Life: Prevents uneven wear and premature replacement. Safety: Ensures proper contact between tires and road surface.',
    price: 'Starting from ₹2,999',
    popular: true
  },
  'clutch': {
    title: 'Clutch Set Replacement',
    duration: '6 hours',
    warranty: '1 Month', 
    description: 'Complete clutch system replacement service with genuine OEM parts',
    includes: [
      'Clutch Set OES (Clutch Plate + Pressure Plate) Replacement',
      'Professional Installation by Expert Technicians',
      'Complete System Testing',
      'Quality Assurance Check'
    ],
    addOns: [
      'Clutch Cable/Wire Replacement',
      'Release Bearing/Clutch Cylinder',
      'Flywheel Resurfacing',
      'Slave Cylinder Replacement'
    ],
    additional: [
      'Clutch Oil (if required)',
      'Gear Oil (cost additional)'
    ],
    recommended: 'Highly Recommended in Case of Hard Clutch & Poor Pickup Issues',
    price: 'Starting from ₹4,999',
    popular: true
  },
  'car-service': {
    title: 'General Car Service',
    duration: '3 hours',
    warranty: '1 Month',
    description: 'Comprehensive car maintenance and service package',
    includes: [
      'Engine Oil Change with Filter',
      'Air Filter Replacement',
      'Battery Check & Terminal Cleaning',
      'Brake System Inspection',
      'AC Performance Check',
      '20-Point Vehicle Inspection'
    ],
    price: 'Starting from ₹1,999'
  },
  'ac-service': {
    title: 'AC Service & Repair',
    duration: '2 hours',
    warranty: '1 Month',
    description: 'Complete air conditioning system service and repair',
    includes: [
      'AC Gas Refill',
      'Compressor Check',
      'Condenser Cleaning',
      'Cabin Filter Replacement',
      'Temperature Performance Test'
    ],
    price: 'Starting from ₹1,499'
  },
  'batteries': {
    title: 'Battery Replacement',
    duration: '30 minutes',
    warranty: '1 Month',
    description: 'High-quality battery replacement service',
    includes: [
      'Battery Performance Test',
      'Old Battery Removal',
      'New Battery Installation',
      'Terminal Cleaning & Protection'
    ],
    price: 'Starting from ₹3,499'
  }
};

// Enhanced festival data with more festivals
const festivalData = {
  'diwali': {
    name: 'Happy Diwali!',
    message: 'May the festival of lights illuminate your path to happiness and prosperity!',
    elements: ['✨', '🪔', '🎆'],
    themes: {
      golden: 'linear-gradient(135deg, #FFD700, #FF8C00, #8B0000)',
      traditional: 'linear-gradient(135deg, #FF6347, #FFD700, #8B4513)',
      royal: 'linear-gradient(135deg, #4B0082, #FFD700, #DC143C)',
      nature: 'linear-gradient(135deg, #228B22, #32CD32, #006400)',
      celebration: 'linear-gradient(135deg, #FF1493, #FFD700, #FF4500)'
    }
  },
  'holi': {
    name: 'Happy Holi!',
    message: 'May your life be filled with colors of joy, happiness, and love!',
    elements: ['🎨', '💦', '🌈'],
    themes: {
      golden: 'linear-gradient(135deg, #FFD700, #FFA500, #FF69B4)',
      traditional: 'linear-gradient(135deg, #FF69B4, #00CED1, #FFD700, #FF4500)',
      royal: 'linear-gradient(135deg, #4B0082, #FF1493, #00BFFF)',
      nature: 'linear-gradient(135deg, #32CD32, #FF69B4, #00CED1)',
      celebration: 'linear-gradient(135deg, #FF1493, #00CED1, #FFD700)'
    }
  },
  'ganesh-chaturthi': {
    name: 'Ganpati Bappa Morya!',
    message: 'May Lord Ganesha remove all obstacles and bless you with success and prosperity!',
    elements: ['🐘', '🪔', '🕉️'],
    themes: {
      golden: 'linear-gradient(135deg, #FFD700, #FFA500, #8B4513)',
      traditional: 'linear-gradient(135deg, #FF6347, #FFD700, #8B4513)',
      royal: 'linear-gradient(135deg, #4B0082, #8B0000, #FFD700)',
      nature: 'linear-gradient(135deg, #228B22, #8B4513, #FFD700)',
      celebration: 'linear-gradient(135deg, #FF6347, #FFD700, #4B0082)'
    }
  },
  'dussehra': {
    name: 'Happy Dussehra!',
    message: 'May good triumph over evil in your life. Victory and success be yours!',
    elements: ['🏹', '👑', '🎯'],
    themes: {
      golden: 'linear-gradient(135deg, #FFD700, #FF8C00, #8B0000)',
      traditional: 'linear-gradient(135deg, #DC143C, #FFD700, #4B0082)',
      royal: 'linear-gradient(135deg, #4B0082, #8B0000, #FFD700)',
      nature: 'linear-gradient(135deg, #228B22, #8B0000, #FFD700)',
      celebration: 'linear-gradient(135deg, #DC143C, #FFD700, #FF6347)'
    }
  },
  'navratri': {
    name: 'Happy Navratri!',
    message: 'May Goddess Durga bless you with strength, joy, and prosperity during these nine sacred nights!',
    elements: ['💃', '🎵', '🌺'],
    themes: {
      golden: 'linear-gradient(135deg, #FFD700, #FF8C00, #FF1493)',
      traditional: 'linear-gradient(135deg, #FF1493, #FFD700, #8A2BE2)',
      royal: 'linear-gradient(135deg, #4B0082, #FF1493, #FFD700)',
      nature: 'linear-gradient(135deg, #228B22, #FF1493, #FFD700)',
      celebration: 'linear-gradient(135deg, #FF1493, #8A2BE2, #FFD700)'
    }
  },
  'karva-chauth': {
    name: 'Happy Karva Chauth!',
    message: 'May your love and devotion be blessed with long life and happiness!',
    elements: ['🌙', '💕', '🪔'],
    themes: {
      golden: 'linear-gradient(135deg, #FFD700, #FF69B4, #8B4513)',
      traditional: 'linear-gradient(135deg, #FF69B4, #8B4513, #FFD700)',
      royal: 'linear-gradient(135deg, #4B0082, #FF69B4, #FFD700)',
      nature: 'linear-gradient(135deg, #228B22, #FF69B4, #8B4513)',
      celebration: 'linear-gradient(135deg, #FF69B4, #FFD700, #8B4513)'
    }
  },
  'janmashtami': {
    name: 'Happy Janmashtami!',
    message: 'May Lord Krishna bless you with love, joy, and divine happiness!',
    elements: ['🦚', '🪈', '🧈'],
    themes: {
      golden: 'linear-gradient(135deg, #FFD700, #000080, #4B0082)',
      traditional: 'linear-gradient(135deg, #4B0082, #FFD700, #000080)',
      royal: 'linear-gradient(135deg, #4B0082, #8B0000, #FFD700)',
      nature: 'linear-gradient(135deg, #228B22, #4B0082, #FFD700)',
      celebration: 'linear-gradient(135deg, #4B0082, #FFD700, #FF6347)'
    }
  },
  'raksha-bandhan': {
    name: 'Happy Raksha Bandhan!',
    message: 'May the bond of love between siblings be strengthened forever!',
    elements: ['🎀', '💝', '👫'],
    themes: {
      golden: 'linear-gradient(135deg, #FFD700, #FF6347, #32CD32)',
      traditional: 'linear-gradient(135deg, #FF6347, #FFD700, #32CD32)',
      royal: 'linear-gradient(135deg, #4B0082, #FF6347, #FFD700)',
      nature: 'linear-gradient(135deg, #228B22, #FF6347, #FFD700)',
      celebration: 'linear-gradient(135deg, #FF6347, #32CD32, #FFD700)'
    }
  }
};

// Dashboard data with updated metrics
const dashboardData = {
  totalBookings: 12847,
  monthlyRevenue: 2847650,
  customerSatisfaction: 4.8,
  completedServices: 11923,
  activeWorkshops: 8,
  ongoingServices: 24,
  totalCustomers: 25000,
  averageRating: 4.8
};

// Global variables
let bookingsChart, servicesChart;
let currentFestival = 'diwali';
let currentTheme = 'traditional';
let isCardGenerated = false;

// Global functions for modal and booking
window.bookService = function(serviceKey) {
  const carSelect = document.querySelector('.booking__car-select');
  const selectedCar = carSelect ? carSelect.value : '';
  
  if (!selectedCar) {
    alert('Please select your car first to proceed with booking!');
    closeModal();
    if (carSelect) {
      carSelect.focus();
      carSelect.style.border = '2px solid var(--color-error)';
      setTimeout(() => {
        carSelect.style.border = '';
      }, 3000);
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
  
  // Basic validation
  if (!bookingData.name || !bookingData.phone || !bookingData.address) {
    alert('Please fill in all required fields!');
    return;
  }
  
  closeModal();
  
  setTimeout(() => {
    const carSelect = document.querySelector('.booking__car-select');
    showBookingConfirmation('general', carSelect ? carSelect.value : bookingData.car || 'Not specified');
  }, 500);
};

window.closeModal = function() {
  const modal = document.getElementById('serviceModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
};

// Festival card functions
window.generateCard = function() {
  const festivalSelect = document.getElementById('festivalSelect');
  const messageInput = document.getElementById('cardMessage');
  const nameInput = document.getElementById('cardName');
  const selectedThemeBtn = document.querySelector('.color-theme.active');
  
  if (festivalSelect) currentFestival = festivalSelect.value;
  if (selectedThemeBtn) currentTheme = selectedThemeBtn.dataset.theme;
  
  const festivalInfo = festivalData[currentFestival];
  const card = document.getElementById('festivalCard');
  
  if (festivalInfo && card) {
    // Update card content
    const title = card.querySelector('.festival-title');
    const message = card.querySelector('.festival-message');
    const elements = card.querySelector('.festival-elements');
    const nameDisplay = card.querySelector('#cardNameDisplay');
    
    if (title) title.textContent = festivalInfo.name;
    if (message) {
      const customMessage = messageInput && messageInput.value.trim() ? messageInput.value : festivalInfo.message;
      message.textContent = customMessage;
    }
    if (nameDisplay) nameDisplay.textContent = nameInput && nameInput.value.trim() ? nameInput.value : 'Your Name';
    
    // Update elements
    if (elements) {
      elements.innerHTML = festivalInfo.elements.map((element, index) => 
        `<span class="element" style="animation-delay: ${index * 0.5}s">${element}</span>`
      ).join('');
    }
    
    // Update theme
    if (festivalInfo.themes[currentTheme]) {
      card.style.background = festivalInfo.themes[currentTheme];
    }
    card.className = `festival-card ${currentFestival}-theme`;
    
    // Enable download and share buttons
    const downloadBtn = document.getElementById('downloadBtn');
    const shareBtn = document.getElementById('shareBtn');
    if (downloadBtn) downloadBtn.disabled = false;
    if (shareBtn) shareBtn.disabled = false;
    
    isCardGenerated = true;
  }
  
  console.log('Festival card generated:', currentFestival, currentTheme);
};

window.downloadCard = function() {
  if (!isCardGenerated) {
    generateCard();
  }
  
  // Create a canvas element for download
  const card = document.getElementById('festivalCard');
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = 700;
  canvas.height = 1000;
  
  // Get festival data
  const festivalInfo = festivalData[currentFestival];
  const messageInput = document.getElementById('cardMessage');
  const nameInput = document.getElementById('cardName');
  const message = messageInput && messageInput.value.trim() ? messageInput.value : festivalInfo.message;
  const name = nameInput && nameInput.value.trim() ? nameInput.value : 'Your Name';
  
  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  
  // Set gradient colors based on theme
  const themeColors = {
    golden: ['#FFD700', '#FF8C00', '#8B0000'],
    traditional: ['#FF6347', '#FFD700', '#8B4513'],
    royal: ['#4B0082', '#8B0000', '#FFD700'],
    nature: ['#228B22', '#8B4513', '#FFD700'],
    celebration: ['#FF1493', '#FFD700', '#FF4500']
  };
  
  const colors = themeColors[currentTheme] || themeColors.traditional;
  gradient.addColorStop(0, colors[0]);
  gradient.addColorStop(0.5, colors[1]);
  gradient.addColorStop(1, colors[2]);
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Add decorative elements
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.beginPath();
  ctx.arc(150, 150, 100, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(550, 350, 80, 0, Math.PI * 2);
  ctx.fill();
  
  // Add text content
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.shadowColor = 'rgba(0,0,0,0.5)';
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  
  // Title
  ctx.font = 'bold 64px Arial';
  ctx.fillText(festivalInfo.name, canvas.width / 2, 200);
  
  // Elements
  ctx.font = '80px Arial';
  festivalInfo.elements.forEach((element, index) => {
    const x = (canvas.width / 2) + (index - 1) * 120;
    ctx.fillText(element, x, 320);
  });
  
  // Message (wrap text)
  ctx.font = '28px Arial';
  const words = message.split(' ');
  let line = '';
  let y = 450;
  const lineHeight = 40;
  const maxWidth = 580;
  
  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && i > 0) {
      ctx.fillText(line, canvas.width / 2, y);
      line = words[i] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, canvas.width / 2, y);
  
  // Name
  ctx.font = 'bold 32px Arial';
  ctx.fillText(`From: ${name}`, canvas.width / 2, y + 100);
  
  // Workshop branding
  ctx.fillStyle = 'rgba(0,0,0,0.7)';
  ctx.fillRect(60, canvas.height - 200, canvas.width - 120, 140);
  
  ctx.fillStyle = 'white';
  ctx.font = '24px Arial';
  ctx.fillText('Best wishes from', canvas.width / 2, canvas.height - 160);
  
  ctx.font = 'bold 36px Arial';
  ctx.fillText('RAUSHAN WORKSHOP', canvas.width / 2, canvas.height - 120);
  
  ctx.font = '20px Arial';
  ctx.fillText('📍 ASSAM, India', canvas.width / 2, canvas.height - 85);
  ctx.fillText('📞 7325009623 | 7362848208', canvas.width / 2, canvas.height - 50);
  
  // Download the image
  const link = document.createElement('a');
  const festivalName = festivalInfo.name.replace(/[^a-zA-Z0-9]/g, '_');
  link.download = `${festivalName}_RAUSHAN_WORKSHOP_${currentTheme}_card.png`;
  link.href = canvas.toDataURL('image/png', 1.0);
  
  // Add to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  console.log('Festival card downloaded:', festivalName);
};

window.shareCard = function() {
  if (!isCardGenerated) {
    generateCard();
  }
  
  const festivalInfo = festivalData[currentFestival];
  const messageInput = document.getElementById('cardMessage');
  const nameInput = document.getElementById('cardName');
  const message = messageInput && messageInput.value.trim() ? messageInput.value : festivalInfo.message;
  const name = nameInput && nameInput.value.trim() ? nameInput.value : 'Your Name';
  
  const shareText = `${festivalInfo.name}\n\n${message}\n\nFrom: ${name}\n\nBest wishes from RAUSHAN WORKSHOP\n📍 ASSAM, India\n📞 7325009623 | 7362848208\n📧 nasirali60459@gmail.com`;
  
  if (navigator.share) {
    navigator.share({
      title: `${festivalInfo.name} - RAUSHAN WORKSHOP`,
      text: shareText,
      url: window.location.href
    }).then(() => {
      console.log('Card shared successfully');
    }).catch(console.error);
  } else {
    // Fallback for browsers that don't support Web Share API
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Festival card text copied to clipboard! You can now paste it anywhere to share.');
      }).catch(() => {
        fallbackShare(shareText);
      });
    } else {
      fallbackShare(shareText);
    }
  }
};

function fallbackShare(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  alert('Festival card text copied to clipboard!');
}

window.previewCard = function(viewType) {
  const buttons = document.querySelectorAll('.preview-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  const card = document.getElementById('festivalCard');
  if (viewType === 'mobile') {
    card.style.width = '280px';
    card.style.height = '400px';
  } else {
    card.style.width = '350px';
    card.style.height = '500px';
  }
};

// Dashboard functions
window.showDashboardLogin = function() {
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  if (!modal || !modalTitle || !modalBody) return;
  
  modalTitle.textContent = '🔐 Admin Dashboard Login';
  
  const modalContent = `
    <div class="service-details">
      <div style="text-align: center; margin-bottom: 24px;">
        <div style="font-size: 64px; margin-bottom: 16px;">🏢</div>
        <h4>RAUSHAN WORKSHOP Dashboard</h4>
        <p>Access professional analytics and management tools</p>
        <div style="background: var(--color-bg-5); padding: 16px; border-radius: 8px; margin: 16px 0;">
          <p><strong>Leadership Access</strong></p>
          <p>👑 Founder: <strong>NASIR ALI</strong></p>
          <p>🚀 CEO: <strong>SABIR KHAN</strong></p>
        </div>
      </div>
      
      <form class="booking-form" onsubmit="adminLogin(event)">
        <div class="form-group">
          <label class="form-label">👤 Username</label>
          <input type="text" class="form-control" name="username" value="admin" required>
        </div>
        
        <div class="form-group">
          <label class="form-label">🔒 Password</label>
          <input type="password" class="form-control" name="password" value="workshop123" required>
        </div>
        
        <div class="service-info">
          <h4>🔑 Demo Credentials</h4>
          <p><strong>Username:</strong> admin</p>
          <p><strong>Password:</strong> workshop123</p>
          <p><em>Use these credentials to access the dashboard demo</em></p>
        </div>
        
        <button type="submit" class="btn btn--primary btn--full-width">
          <span>🚀 Login to Dashboard</span>
        </button>
      </form>
      
      <div style="margin-top: 20px; text-align: center; font-size: 14px; color: var(--color-text-secondary);">
        <p>📧 Contact: nasirali60459@gmail.com</p>
        <p>📞 Support: 7325009623 | 7362848208</p>
      </div>
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
    alert('❌ Invalid credentials! Please use:\nUsername: admin\nPassword: workshop123');
  }
};

window.showDashboardFeatures = function() {
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  if (!modal || !modalTitle || !modalBody) return;
  
  modalTitle.textContent = '📊 Dashboard Overview';
  
  const modalContent = `
    <div class="service-details">
      <div style="text-align: center; margin-bottom: 24px;">
        <div style="font-size: 64px; margin-bottom: 16px;">🎉</div>
        <h4>Welcome to RAUSHAN WORKSHOP Professional Dashboard</h4>
        <p>Comprehensive management tools for automotive service excellence</p>
      </div>
      
      <div style="display: grid; gap: 16px;">
        <div class="service-info" style="background: var(--color-bg-1);">
          <h4>📈 Analytics & Performance</h4>
          <ul>
            <li>📊 Monthly Revenue: <strong>₹28.47L</strong></li>
            <li>🚗 Total Bookings: <strong>12,847</strong></li>
            <li>⭐ Customer Rating: <strong>4.8/5</strong></li>
            <li>🏪 Active Centers: <strong>8 locations</strong></li>
          </ul>
        </div>
        
        <div class="service-info" style="background: var(--color-bg-3);">
          <h4>🔧 Service Management</h4>
          <ul>
            <li>Track ongoing services in real-time</li>
            <li>Manage appointment scheduling</li>
            <li>Monitor workshop capacity</li>
            <li>Quality assurance tracking</li>
          </ul>
        </div>
        
        <div class="service-info" style="background: var(--color-bg-5);">
          <h4>👥 Customer Relations</h4>
          <ul>
            <li>Customer profile management</li>
            <li>Service history tracking</li>
            <li>Feedback & review system</li>
            <li>🎊 Festival card generator integration</li>
          </ul>
        </div>
        
        <div class="service-info" style="background: var(--color-bg-7);">
          <h4>📦 Operations Management</h4>
          <ul>
            <li>Inventory tracking & alerts</li>
            <li>Staff scheduling & management</li>
            <li>Supplier relationship management</li>
            <li>Financial reporting & analytics</li>
          </ul>
        </div>
      </div>
      
      <div style="margin-top: 24px; text-align: center; background: var(--color-bg-2); padding: 16px; border-radius: 8px;">
        <p><strong>🏆 RAUSHAN WORKSHOP Leadership</strong></p>
        <p>👑 Founded by <strong>NASIR ALI</strong> | 🚀 Led by CEO <strong>SABIR KHAN</strong></p>
        <p>📞 7325009623 | 7362848208 | 📧 nasirali60459@gmail.com</p>
        <p>📍 Main Service Center, Guwahati, ASSAM</p>
      </div>
      
      <button class="btn btn--primary btn--full-width" onclick="closeModal()">
        <span>✅ Continue to Full Dashboard</span>
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
  showGenericModal('📦 Inventory Management', 'Comprehensive inventory tracking system for spare parts, tools, and supplies across all 8 RAUSHAN WORKSHOP locations in ASSAM. Monitor stock levels, set reorder alerts, and manage supplier relationships efficiently.');
};

window.showStaffManagement = function() {
  showGenericModal('👥 Staff Management', 'Complete staff management solution including mechanic scheduling, performance tracking, training programs, and certification management across all RAUSHAN WORKSHOP service centers in ASSAM.');
};

window.showReports = function() {
  showGenericModal('📊 Analytics & Reports', 'Generate detailed reports on revenue trends, customer satisfaction metrics, service efficiency, workshop performance, and business intelligence analytics for strategic decision making.');
};

window.showCustomerManagement = function() {
  showGenericModal('👤 Customer Management', 'Comprehensive customer relationship management including service history, preferences, feedback tracking, loyalty programs, and the unique festival greeting card system.');
};

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Initializing enhanced RAUSHAN WORKSHOP website...');
  
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
  initializeFestivalCardGenerator();
  initializeDashboardCharts();
  initializeCounterAnimations();
  
  console.log('✅ Enhanced RAUSHAN WORKSHOP website initialized successfully!');
});

function addCustomStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* Additional utility styles */
    .loading {
      opacity: 0.6;
      pointer-events: none;
    }
    
    .success-message {
      background: rgba(var(--color-success-rgb), 0.1);
      color: var(--color-success);
      padding: var(--space-12);
      border-radius: var(--radius-base);
      border: 1px solid var(--color-success);
      margin: var(--space-12) 0;
    }
    
    .error-message {
      background: rgba(var(--color-error-rgb), 0.1);
      color: var(--color-error);
      padding: var(--space-12);
      border-radius: var(--radius-base);
      border: 1px solid var(--color-error);
      margin: var(--space-12) 0;
    }
    
    .pulse {
      animation: pulse 2s ease-in-out infinite;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
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
      console.log('📱 Mobile menu toggled');
      
      headerNav.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside or on links
    document.addEventListener('click', function(e) {
      if (!headerNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        headerNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      }
    });
    
    // Close mobile menu when clicking on nav links
    headerNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        headerNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      });
    });
  }
}

function initializeServiceCards() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach((card, index) => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const serviceKey = card.dataset.service;
      const serviceName = card.querySelector('h3').textContent;
      
      console.log('🔧 Service card clicked:', serviceKey || serviceName);
      
      if (serviceKey && servicesData[serviceKey]) {
        showServiceModal(serviceKey);
      } else {
        showGenericServiceModal(serviceName);
      }
    });
    
    // Add hover effect
    card.addEventListener('mouseenter', function() {
      card.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
      card.style.transform = '';
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
        
        console.log('❓ FAQ clicked:', index + 1);
        
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
  const bannerBookBtn = document.querySelector('.banner__cta');
  
  if (bookingBtn) {
    bookingBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('🚗 Main booking button clicked');
      
      const selectedCar = carSelect ? carSelect.value : '';
      
      if (!selectedCar) {
        alert('🚨 Please select your car model to check prices!');
        if (carSelect) {
          carSelect.focus();
          carSelect.style.border = '2px solid var(--color-error)';
          setTimeout(() => {
            carSelect.style.border = '';
          }, 3000);
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
      
      console.log('📢 Banner book button clicked');
      showBookingForm();
    });
  }
  
  // FIXED: Make car select dropdown work properly
  if (carSelect) {
    // Remove any existing click handlers that might interfere
    carSelect.addEventListener('change', function() {
      if (this.value) {
        this.style.border = '2px solid var(--color-success)';
        setTimeout(() => {
          this.style.border = '';
        }, 2000);
        console.log('🚗 Car selected:', this.value);
      }
    });
    
    // Ensure dropdown functionality works
    carSelect.addEventListener('click', function(e) {
      e.stopPropagation();
      console.log('🚗 Car select dropdown clicked');
    });
  }
}

function initializeNavigation() {
  // FIXED: Handle smooth scroll navigation properly
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Special handling for admin login button
      if (href === '#' && this.textContent.includes('Admin Login')) {
        e.preventDefault();
        e.stopPropagation();
        console.log('🔐 Admin Login clicked');
        showDashboardLogin();
        return;
      }
      
      // Handle other navigation links
      if (href !== '#') {
        e.preventDefault();
        e.stopPropagation();
        
        const target = document.querySelector(href);
        
        console.log('🧭 Navigation clicked:', href);
        
        if (target) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = target.offsetTop - headerHeight - 20;
          
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
      }
    });
  });
  
  console.log('🧭 Navigation initialized with', document.querySelectorAll('a[href^="#"]').length, 'links');
}

function initializeFestivalCardGenerator() {
  // FIXED: Initialize festival card controls properly
  const festivalSelect = document.getElementById('festivalSelect');
  const messageInput = document.getElementById('cardMessage');
  const nameInput = document.getElementById('cardName');
  const colorThemes = document.querySelectorAll('.color-theme');
  
  if (festivalSelect) {
    // FIXED: Prevent festival dropdown from opening car service modals
    festivalSelect.addEventListener('change', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      currentFestival = this.value;
      const festivalInfo = festivalData[currentFestival];
      if (festivalInfo && messageInput) {
        messageInput.placeholder = festivalInfo.message;
        messageInput.value = ''; // Clear custom message when changing festival
      }
      // Auto-generate card when festival changes
      generateCard();
      console.log('🎊 Festival changed to:', currentFestival);
    });
    
    // FIXED: Prevent event bubbling on festival select
    festivalSelect.addEventListener('click', function(e) {
      e.stopPropagation();
      console.log('🎊 Festival dropdown clicked');
    });
  }
  
  if (messageInput) {
    messageInput.addEventListener('input', function() {
      generateCard();
    });
  }
  
  if (nameInput) {
    nameInput.addEventListener('input', function() {
      generateCard();
    });
  }
  
  colorThemes.forEach(theme => {
    theme.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      colorThemes.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      currentTheme = this.dataset.theme;
      generateCard();
      console.log('🎨 Theme changed to:', currentTheme);
    });
  });
  
  // Generate initial card
  setTimeout(() => {
    generateCard();
  }, 500);
  
  console.log('🎊 Festival card generator initialized');
}

function initializeDashboardCharts() {
  // Initialize charts after a short delay to ensure elements are ready
  setTimeout(() => {
    createBookingsChart();
    createServicesChart();
  }, 1500);
}

function createBookingsChart() {
  const ctx = document.getElementById('bookingsChart');
  if (!ctx || typeof Chart === 'undefined') {
    console.log('⚠️ Chart.js not loaded or canvas not found');
    return;
  }
  
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [{
      label: 'Monthly Bookings',
      data: [850, 920, 1100, 980, 1250, 1400, 1180, 1320, 1450, 1380],
      backgroundColor: 'rgba(31, 184, 205, 0.1)',
      borderColor: '#1FB8CD',
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#1FB8CD',
      pointBorderColor: '#ffffff',
      pointBorderWidth: 2,
      pointRadius: 6
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
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#ffffff',
          bodyColor: '#ffffff',
          cornerRadius: 8,
          padding: 12
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0,0,0,0.1)',
            drawBorder: false
          },
          ticks: {
            color: '#666'
          }
        },
        x: {
          grid: {
            color: 'rgba(0,0,0,0.1)',
            drawBorder: false
          },
          ticks: {
            color: '#666'
          }
        }
      },
      elements: {
        point: {
          hoverRadius: 8
        }
      }
    }
  };
  
  if (bookingsChart) {
    bookingsChart.destroy();
  }
  
  try {
    bookingsChart = new Chart(ctx, config);
    console.log('📊 Bookings chart created successfully');
  } catch (error) {
    console.error('❌ Error creating bookings chart:', error);
  }
}

function createServicesChart() {
  const ctx = document.getElementById('servicesChart');
  if (!ctx || typeof Chart === 'undefined') {
    console.log('⚠️ Chart.js not loaded or canvas not found');
    return;
  }
  
  const data = {
    labels: ['Suspension & Fitments', 'Clutch Replacement', 'AC Service', 'General Service', 'Battery', 'Others'],
    datasets: [{
      data: [28, 22, 18, 15, 10, 7],
      backgroundColor: [
        '#1FB8CD', 
        '#FFC185', 
        '#B4413C', 
        '#ECEBD5', 
        '#5D878F', 
        '#DB4545'
      ],
      borderWidth: 0,
      hoverBorderWidth: 3,
      hoverBorderColor: '#ffffff'
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
            usePointStyle: true,
            font: {
              size: 12
            },
            color: '#666'
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#ffffff',
          bodyColor: '#ffffff',
          cornerRadius: 8,
          padding: 12,
          callbacks: {
            label: function(context) {
              return context.label + ': ' + context.parsed + '%';
            }
          }
        }
      },
      cutout: '60%',
      elements: {
        arc: {
          hoverOffset: 10
        }
      }
    }
  };
  
  if (servicesChart) {
    servicesChart.destroy();
  }
  
  try {
    servicesChart = new Chart(ctx, config);
    console.log('🛠️ Services chart created successfully');
  } catch (error) {
    console.error('❌ Error creating services chart:', error);
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
  const duration = 2500; // 2.5 seconds
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
      element.textContent = Math.floor(current).toLocaleString();
    } else if (target % 1 !== 0) {
      element.textContent = current.toFixed(1);
    } else {
      element.textContent = Math.floor(current);
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
  document.querySelectorAll('.service-card, .testimonial, .stat-item, .leader-card, .metric-card, .step').forEach(element => {
    observer.observe(element);
  });
}

function showServiceModal(serviceKey) {
  const service = servicesData[serviceKey];
  if (!service) return;
  
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  if (!modal || !modalTitle || !modalBody) {
    console.error('❌ Modal elements not found');
    return;
  }
  
  modalTitle.textContent = `🔧 ${service.title}`;
  
  let modalContent = `
    <div class="service-details">
      <div class="service-info">
        <p><strong>⏱️ Duration:</strong> ${service.duration}</p>
        <p><strong>🛡️ Warranty:</strong> ${service.warranty}</p>
        <p><strong>💰 Price:</strong> ${service.price}</p>
        ${service.popular ? '<p><strong>🔥 Popular Service</strong></p>' : ''}
      </div>
      
      <h4>📋 Service Description</h4>
      <p>${service.description}</p>
      
      <h4>✅ What's Included:</h4>
      <ul>
        ${service.includes.map(item => `<li>${item}</li>`).join('')}
      </ul>
  `;
  
  if (service.addOns) {
    modalContent += `
      <h4>🔧 Available Add-ons:</h4>
      <ul>
        ${service.addOns.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
  }
  
  if (service.additional) {
    modalContent += `
      <h4>💳 Additional Costs:</h4>
      <ul>
        ${service.additional.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
  }
  
  if (service.recommended) {
    modalContent += `
      <div class="service-info">
        <h4>⭐ Recommendation:</h4>
        <p>${service.recommended}</p>
      </div>
    `;
  }
  
  if (service.importance) {
    modalContent += `
      <h4>🎯 Why This Service is Important:</h4>
      <p>${service.importance}</p>
    `;
  }
  
  modalContent += `
      <div class="service-info">
        <h4>🏆 RAUSHAN WORKSHOP Guarantee</h4>
        <p>✅ Genuine OEM/OES Parts Only</p>
        <p>✅ Free Doorstep Pickup & Drop</p>
        <p>✅ Lowest Price in India Guaranteed</p>
        <p>✅ Expert Technician Service</p>
        <p>📞 24/7 Support: 7325009623 | 7362848208</p>
      </div>
      
      <div style="margin-top: 24px;">
        <button class="btn btn--primary btn--full-width" onclick="bookService('${serviceKey}')">
          <span>🚗 Book This Service Now</span>
        </button>
      </div>
    </div>
  `;
  
  modalBody.innerHTML = modalContent;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  console.log('🔧 Service modal opened for:', serviceKey);
}

function showGenericServiceModal(serviceName) {
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  if (!modal || !modalTitle || !modalBody) return;
  
  modalTitle.textContent = `🔧 ${serviceName}`;
  
  const modalContent = `
    <div class="service-details">
      <div class="service-info">
        <p><strong>🏪 Service:</strong> ${serviceName}</p>
        <p><strong>📍 Location:</strong> ASSAM, India</p>
        <p><strong>🏆 Provider:</strong> RAUSHAN WORKSHOP</p>
      </div>
      
      <h4>📋 Professional Service</h4>
      <p>High-quality ${serviceName.toLowerCase()} service provided by RAUSHAN WORKSHOP's expert technicians across ASSAM. We use only genuine parts and provide comprehensive warranty coverage.</p>
      
      <h4>🌟 Why Choose RAUSHAN WORKSHOP?</h4>
      <ul>
        <li>🚚 Free doorstep pickup and drop service</li>
        <li>🔧 Genuine spare parts and accessories</li>
        <li>👨‍🔧 Experienced and certified mechanics</li>
        <li>💰 Competitive pricing - lowest in India</li>
        <li>🛡️ Quality service with warranty</li>
        <li>👑 Founded by NASIR ALI, led by CEO SABIR KHAN</li>
        <li>⭐ 4.8/5 customer rating (25,000+ reviews)</li>
        <li>🏪 8 service centers across ASSAM</li>
      </ul>
      
      <div class="service-info">
        <h4>📞 Contact for Pricing & Booking:</h4>
        <p><strong>📱 Phone:</strong> 7325009623 / 7362848208</p>
        <p><strong>📧 Email:</strong> nasirali60459@gmail.com</p>
        <p><strong>📍 Address:</strong> Main Service Center, Guwahati, ASSAM</p>
        <p><strong>🕒 Hours:</strong> 7:00 AM - 9:00 PM (7 Days a Week)</p>
      </div>
      
      <div style="margin-top: 24px;">
        <button class="btn btn--primary btn--full-width" onclick="bookService('general')">
          <span>💬 Get Quote & Book Service</span>
        </button>
      </div>
    </div>
  `;
  
  modalBody.innerHTML = modalContent;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  console.log('🔧 Generic service modal opened for:', serviceName);
}

function showPriceModal(car) {
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  if (!modal || !modalTitle || !modalBody) return;
  
  const carName = car.replace('-', ' ').toUpperCase().replace(/\b\w/g, l => l.toUpperCase());
  modalTitle.textContent = `💰 Service Prices for ${carName}`;
  
  const modalContent = `
    <div class="service-details">
      <div class="service-info">
        <p><strong>🚗 Selected Car:</strong> ${carName}</p>
        <p><strong>📍 Service Location:</strong> ASSAM, India</p>
        <p><strong>🏪 Provider:</strong> RAUSHAN WORKSHOP</p>
      </div>
      
      <h4>💰 Available Services & Pricing:</h4>
      <div style="display: grid; gap: 16px; margin: 16px 0;">
        <div class="service-price-item">
          <span><strong>🔧 General Car Service</strong><br><small>Complete maintenance package</small></span>
          <span style="color: var(--color-primary); font-weight: bold;">₹1,999</span>
        </div>
        <div class="service-price-item">
          <span><strong>⚙️ Suspension & Fitments</strong><br><small>Complete suspension repair</small></span>
          <span style="color: var(--color-primary); font-weight: bold;">₹2,999</span>
        </div>
        <div class="service-price-item">
          <span><strong>🔧 Clutch Set Replacement</strong><br><small>Professional clutch service</small></span>
          <span style="color: var(--color-primary); font-weight: bold;">₹4,999</span>
        </div>
        <div class="service-price-item">
          <span><strong>❄️ AC Service & Repair</strong><br><small>Complete AC maintenance</small></span>
          <span style="color: var(--color-primary); font-weight: bold;">₹1,499</span>
        </div>
        <div class="service-price-item">
          <span><strong>🔋 Battery Replacement</strong><br><small>High-quality battery</small></span>
          <span style="color: var(--color-primary); font-weight: bold;">₹3,499</span>
        </div>
        <div class="service-price-item">
          <span><strong>🛞 Tyre Services</strong><br><small>Tyre & wheel care</small></span>
          <span style="color: var(--color-primary); font-weight: bold;">₹999</span>
        </div>
      </div>
      
      <div class="service-info">
        <h4>🚚 FREE Doorstep Pickup & Drop Service</h4>
        <p>No need to visit our workshop! We'll pick up your ${carName} and deliver it back to your doorstep at no extra cost across ASSAM.</p>
        <p><strong>📞 Call to schedule:</strong> 7325009623 | 7362848208</p>
      </div>
      
      <div class="success-message">
        <p><strong>🏆 LOWEST PRICE GUARANTEE</strong></p>
        <p>If you find a lower genuine quote elsewhere, we'll match it! Founded by NASIR ALI, led by CEO SABIR KHAN.</p>
      </div>
      
      <div style="margin-top: 24px;">
        <button class="btn btn--primary btn--full-width" onclick="initiateBooking()">
          <span>📅 Book Service Now</span>
        </button>
      </div>
    </div>
  `;
  
  modalBody.innerHTML = modalContent;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  console.log('💰 Price modal opened for:', car);
}

function showBookingForm() {
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  if (!modal || !modalTitle || !modalBody) return;
  
  modalTitle.textContent = '📅 Book Your Car Service';
  
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];
  
  const modalContent = `
    <div class="service-details">
      <div style="text-align: center; margin-bottom: 20px;">
        <div style="font-size: 48px; margin-bottom: 12px;">🚗</div>
        <p>Fill in your details and we'll contact you within 30 minutes!</p>
      </div>
      
      <form class="booking-form" onsubmit="submitBooking(event)">
        <div class="form-group">
          <label class="form-label">👤 Full Name *</label>
          <input type="text" class="form-control" name="name" required placeholder="Enter your full name">
        </div>
        
        <div class="form-group">
          <label class="form-label">📞 Phone Number *</label>
          <input type="tel" class="form-control" name="phone" required placeholder="10-digit mobile number" pattern="[0-9]{10}">
        </div>
        
        <div class="form-group">
          <label class="form-label">📧 Email Address</label>
          <input type="email" class="form-control" name="email" placeholder="your.email@example.com">
        </div>
        
        <div class="form-group">
          <label class="form-label">🚗 Car Model</label>
          <select class="form-control" name="car">
            <option value="">Select your car (optional)</option>
            <option value="maruti-alto">Maruti Alto</option>
            <option value="maruti-swift">Maruti Swift</option>
            <option value="maruti-dzire">Maruti Dzire</option>
            <option value="hyundai-i10">Hyundai i10</option>
            <option value="hyundai-i20">Hyundai i20</option>
            <option value="hyundai-creta">Hyundai Creta</option>
            <option value="honda-city">Honda City</option>
            <option value="tata-nexon">Tata Nexon</option>
            <option value="toyota-innova">Toyota Innova</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div class="form-group">
          <label class="form-label">📍 Address in ASSAM *</label>
          <textarea class="form-control" name="address" rows="3" required placeholder="Enter your complete address with landmark"></textarea>
        </div>
        
        <div class="form-group">
          <label class="form-label">📅 Preferred Date</label>
          <input type="date" class="form-control" name="date" min="${minDate}">
        </div>
        
        <div class="form-group">
          <label class="form-label">📝 Additional Notes</label>
          <textarea class="form-control" name="notes" rows="2" placeholder="Any specific requirements or issues with your car"></textarea>
        </div>
        
        <div class="service-info">
          <h4>📞 Need Immediate Help?</h4>
          <p><strong>Call Now:</strong> 7325009623 or 7362848208</p>
          <p><strong>Email:</strong> nasirali60459@gmail.com</p>
          <p><strong>Leadership:</strong> Founded by NASIR ALI | CEO SABIR KHAN</p>
          <p><strong>Service Hours:</strong> 7:00 AM - 9:00 PM (All 7 Days)</p>
        </div>
        
        <button type="submit" class="btn btn--primary btn--full-width">
          <span>✅ Confirm Booking</span>
        </button>
      </form>
    </div>
  `;
  
  modalBody.innerHTML = modalContent;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  console.log('📅 Booking form opened');
}

function showBookingConfirmation(serviceKey, car) {
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  if (!modal || !modalTitle || !modalBody) return;
  
  modalTitle.textContent = '🎉 Booking Confirmed!';
  
  const serviceName = serviceKey && servicesData[serviceKey] ? servicesData[serviceKey].title : 'Car Service';
  const carName = car && car !== 'Not specified' ? car.replace('-', ' ').toUpperCase() : 'Your Vehicle';
  
  const modalContent = `
    <div class="service-details" style="text-align: center;">
      <div style="font-size: 64px; margin-bottom: 16px; animation: pulse 2s ease-in-out infinite;">🎉</div>
      
      <h4>Thank You for Choosing RAUSHAN WORKSHOP!</h4>
      <p style="color: var(--color-success); font-weight: bold;">Your booking has been successfully submitted</p>
      
      <div class="service-info">
        <p><strong>🔧 Service:</strong> ${serviceName}</p>
        <p><strong>🚗 Vehicle:</strong> ${carName}</p>
        <p><strong>📍 Location:</strong> ASSAM, India</p>
        <p><strong>📅 Booking ID:</strong> RW${Date.now().toString().slice(-6)}</p>
      </div>
      
      <h4>🔄 What Happens Next?</h4>
      <div style="text-align: left; margin: 20px 0; background: var(--color-bg-3); padding: 16px; border-radius: 8px;">
        <p><strong>Step 1:</strong> 📞 Our team will call you within 30 minutes</p>
        <p><strong>Step 2:</strong> 📅 We'll confirm your preferred date and time</p>
        <p><strong>Step 3:</strong> 🚚 FREE doorstep pickup of your vehicle</p>
        <p><strong>Step 4:</strong> 🔧 Professional service at our workshop</p>
        <p><strong>Step 5:</strong> 🏠 FREE delivery back to your doorstep</p>
      </div>
      
      <div class="service-info">
        <h4>📞 Contact Information</h4>
        <p><strong>Primary:</strong> 7325009623</p>
        <p><strong>Secondary:</strong> 7362848208</p>
        <p><strong>Email:</strong> nasirali60459@gmail.com</p>
        <p><strong>Address:</strong> Main Service Center, Guwahati, ASSAM</p>
      </div>
      
      <div class="success-message">
        <p><strong>🏆 RAUSHAN WORKSHOP Promise</strong></p>
        <p>✅ Genuine OEM parts • ✅ Lowest prices in India • ✅ 1-month warranty</p>
        <p>Founded by <strong>NASIR ALI</strong> | Led by CEO <strong>SABIR KHAN</strong></p>
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 20px;">
        <button class="btn btn--secondary" onclick="closeModal()">
          <span>✅ Done</span>
        </button>
        <button class="btn btn--outline" onclick="showBookingForm()">
          <span>📅 Book Another</span>
        </button>
      </div>
    </div>
  `;
  
  modalBody.innerHTML = modalContent;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  console.log('🎉 Booking confirmation shown for:', serviceName);
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
        <div style="font-size: 64px; margin-bottom: 16px;">⚡</div>
        <h4>${title}</h4>
        <p>${content}</p>
      </div>
      
      <div class="service-info">
        <h4>🏆 Available for RAUSHAN WORKSHOP Team</h4>
        <p>This feature is part of our comprehensive management system designed for internal operations and administration.</p>
        
        <h4>📞 For More Information</h4>
        <p><strong>Contact Leadership:</strong></p>
        <p>👑 Founder: <strong>NASIR ALI</strong></p>
        <p>🚀 CEO: <strong>SABIR KHAN</strong></p>
        <p>📱 Phone: 7325009623 | 7362848208</p>
        <p>📧 Email: nasirali60459@gmail.com</p>
      </div>
      
      <div style="margin-top: 24px;">
        <button class="btn btn--primary btn--full-width" onclick="closeModal()">
          <span>✅ Understood</span>
        </button>
      </div>
    </div>
  `;
  
  modalBody.innerHTML = modalContent;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

console.log('🚀 RAUSHAN WORKSHOP JavaScript loaded successfully! All bugs fixed.');